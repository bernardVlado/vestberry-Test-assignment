import React, { useEffect, useRef } from "react";
import drawChart from "./drawChart";

const DonutChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      drawChart(ref.current, data);
    }
  });

  return (
    <div className="container" style={{width: "50%"}}>
      <div className="graph" ref={ref} />
    </div>
  );
};

export default React.memo(DonutChart);
