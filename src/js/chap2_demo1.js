export function chap2_demo1() {
  d3.selectAll("#chap2-demo1 > *").remove();

  var data = d3.csvParse(`x,y
100,50
200,100
300,150
400,200
500,250`);

  d3.select("#chap2-demo1")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", "red")
    .attr("cx", d => d["x"])
    .attr("cy", d => d["y"]);
}

