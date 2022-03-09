import React, { useEffect, useRef } from 'react';
import { select, geoPath } from 'd3';
import useResizeObserver from './useResizeObserver';

function GeoChart() {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    useEffect(()=> {
        const svg = select(svgRef.current);

        const { width, height } = 
            dimensions || wrapperRef.current.getBoundingClientRect();

    }, [data, dimensions, property]);


  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }} >
        <svg ref={svgRef}></svg>
    </div>
  )
}

export default GeoChart;