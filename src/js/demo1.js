export function demo1() {
  var data = d3.csvParse(`x,y
100,50
200,100
300,150
400,200
500,250`);

  d3.select("#demo1")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", "red")
    .attr("cx", d => d["x"])
    .attr("cy", d => d["y"]);
}

