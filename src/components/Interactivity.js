import React, { useEffect, useRef, useState } from 'react';
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';


function Interactivity() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    // scales
    const xScale = scaleBand()
        .domain(data.map((value, index) => index))
        .range([0, 300])
        .padding(0.5);

    const yScale = scaleLinear()
        .domain([0, 150])
        .range([150, 0]);   //75면 0지점(우측 상단)에 있도록

    const colorScale = scaleLinear()
        .domain([75, 100, 150])
        .range(["green", "orange", "red"])
        .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale)
        .ticks(data.length);
    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    // create y-axis
    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    //draw the bars
    svg
        .selectAll('.bar')
        .data(data)
        .join('rect') //rect element를 만들어줌
        .attr('class', 'bar')
        .style('transform', 'scale(1, -1') //upside down
        .attr('x', (value, index) => xScale(index))
        .attr('y', -150)
        .attr('width', xScale.bandwidth())
        .on("mouseenter", (event, value) => {
            const index = svg.selectAll(".bar").nodes().indexOf(event.target);
            svg
                .selectAll(".tooltip")
                .data([value])
                .join((enter) => enter.append("text").attr("y", yScale(value) - 4)) //막대 위에 바로 생기게 하기 위해
                .attr("class", "tooltip")
                .text(value)
                .attr("x", xScale(index) + xScale.bandwidth() / 2)
                .attr("text-anchor", "middle")  // 텍스트 막대 위 중앙정렬
                .transition()
                .attr("y", yScale(value) - 8)
                .attr("opacity", 1);
        })
        .on("mouseleave", () => svg.select(".tooltip").remove())
        .transition()
        .attr('fill', colorScale)
        .attr('height', (value) => 150 - yScale(value));

  },[data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
          <g className='x-axis' />
          <g className='y-axis' />
      </svg>
      <br />
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value <= 35))}>
        Filter data
      </button>
      <button onClick={() => setData([...data, Math.round(Math.random() * 100)])}>
        Add data
      </button>
    </React.Fragment>
  );
}

export default Interactivity;
