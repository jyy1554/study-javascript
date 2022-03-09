import React, { useEffect, useRef, useState } from 'react';
import { select } from 'd3';


function Circle() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    svg
      .selectAll("circle")
      .data(data)     //circle 요소와 data 싱크를 맞춤
      .join("circle")
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red"); 

  },[data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
      </svg>
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value <= 35))}>
        Filter data
      </button>
    </React.Fragment>
  );
}

export default Circle;
