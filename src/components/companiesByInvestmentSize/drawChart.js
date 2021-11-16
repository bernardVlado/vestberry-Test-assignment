import * as d3 from "d3";

const drawChart = (element, data) => {
  const boxSize = 600;

  d3.select(element).select("svg").remove(); // Remove the old svg
  
  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "300px")
    .attr("width", "100%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

  const arcGenerator = d3.arc().innerRadius(180).outerRadius(250);

  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();

  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => data[i].color);

  // append number of companies
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .text((d) => data.length)
    .style("fill", "#000000")
    .style("font-size", "70px")
    .attr("transform", `translate(0, -20)`);

  // append text Companies
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .text("COMPANIES")
    .style("fill", "#000000")
    .style("font-size", "40px")
    .attr("transform", "translate(0, 30)");
};

export default drawChart;
