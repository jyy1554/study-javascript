import React, { useEffect, useRef, useState } from 'react';
import { select, geoPath, geoMercator, min, max, scaleLinear } from 'd3';
import useResizeObserver from './useResizeObserver';

function GeoChart({ data, property }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedCountry, setSelectedCountry] = useState(null); //나라를 선택하면 zoom됨

  useEffect(()=> {
    const svg = select(svgRef.current);

    const minProp = min(data.features, feature => feature.properties[property]);
    const maxProp = max(data.features, feature => feature.properties[property]);
    const colorScale = scaleLinear()
      .domain([minProp, maxProp])
      .range(["#ccc", "red"]);

    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } = 
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinate on a 2D plane
    const projection = geoMercator().fitSize(
      [width, height], 
    
      selectedCountry || data
    ).precision(100);   // zoom할 때 깨지는 경우가 있어 precision을 이용

    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", (e, feature) => {
        setSelectedCountry(selectedCountry === feature ? null : feature); //toggle 구현
      })
      .attr("class", "country")
      .transition()
      .duration(1000) //zoom할 때 효과
      .attr("fill", feature => colorScale(feature.properties[property]))
      .attr("d", feature => pathGenerator(feature));

    // render text
    svg
      .selectAll(".label")
      .data([selectedCountry])
      .join("text")
      .attr("class", "label")
      .text(
        feature =>
          feature &&
          feature.properties.name +
            ": " +
            feature.properties[property].toLocaleString()
      )
      .attr("x", 10)
      .attr("y", 25);
    
  }, [data, dimensions, property, selectedCountry]);


  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }} >
        <svg ref={svgRef}></svg>
    </div>
  )
}

export default GeoChart;