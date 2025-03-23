import React, { useEffect, useRef, useState } from 'react';
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState(null);

    useEffect(() => {
        const observerTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(entry => {
                setDimensions(entry.contentRect);
            })
        })
        resizeObserver.observe(observerTarget);
        return () => {
            resizeObserver.unobserve(observerTarget);
        };
    }, [ref]);

    return dimensions;
}

function ResponsiveChart({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    console.log(dimensions);

    if(!dimensions) return;

    // scales
    const xScale = scaleBand()
        .domain(data.map((value, index) => index))
        .range([0, dimensions.width])    //change
        .padding(0.5);

    const yScale = scaleLinear()
        .domain([0, 150])   //todo
        .range([dimensions.height, 0]);   //change

    const colorScale = scaleLinear()
        .domain([75, 100, 150])
        .range(["green", "orange", "red"])
        .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale)
        .ticks(data.length);
    svg.select(".x-axis").style("transform", `translateY(${dimensions.height}px)`).call(xAxis);

    // create y-axis
    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", `translateX(${dimensions.width}px)`).call(yAxis);

    //draw the bars
    svg
        .selectAll('.bar')
        .data(data)
        .join('rect') //rect element를 만들어줌
        .attr('class', 'bar')
        .style('transform', 'scale(1, -1') //upside down
        .attr('x', (value, index) => xScale(index))
        .attr('y', -dimensions.height)
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
        .attr('height', (value) => dimensions.height - yScale(value));

  },[data, dimensions]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
        <svg ref={svgRef}>
            <g className='x-axis' />
            <g className='y-axis' />
        </svg>
    </div>
  );
}

export default ResponsiveChart;
