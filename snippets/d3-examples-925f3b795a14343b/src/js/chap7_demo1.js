export function chap7_demo1() {
  var container = d3.select("#chap7-demo1");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var sc = d3.scaleLinear()
    .domain([0, 10])
    .range([0, 200]);

  svg.append("g")
    .attr("transform", "translate(50, 50)")
    .call(d3.axisBottom(sc));

  svg.append("g")
    .attr("transform", "translate(50, 125)")
    .call(d3.axisBottom(sc).tickFormat(d3.format(".1f")))
    .selectAll("text")
    .filter((_, i) => i % 2 != 0)
    .attr("visibility", "hidden");

  svg.append("g")
    .attr("transform", "translate(350, 50)")
    .call(d3.axisBottom(sc).tickSize(3).tickFormat(() => ""));
  svg.append("g")
    .attr("transform", "translate(350, 50)")
    .call(d3.axisBottom(sc).ticks(3))
    .append("text")
    .text("Metric")
    .attr("x", sc(5))
    .attr("y", 35)
    .attr("font-size", 12)
    .attr("fill", "black");

  var g = svg.append("g")
    .attr("transform", "translate(350, 125)")
    .call(d3.axisBottom(sc).tickPadding(5));
  g.select(".domain")
    .attr("visibility", "hidden");
  g.selectAll(".tick")
    .select("line")
    .attr("stroke", "red")
    .attr("stroke-width", 2);
  g.selectAll("text")
    .attr("font-size", 14);
}
