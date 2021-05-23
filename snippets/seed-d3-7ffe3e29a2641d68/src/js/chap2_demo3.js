export function chap2_demo3() {
  var container = d3.select("#chap2-demo3");

  var pxX = container._groups[0][0].clientWidth;
  var pxY = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container.append("svg")
    .attr("width", pxX)
    .attr("height", pxY);

  var data = d3.csvParse(`x,y1,y2
1.0,0.001,0.63
3.0,0.003,0.84
4.0,0.024,0.56
4.5,0.054,0.22
4.6,0.062,0.15
5.0,0.100,0.08
6.0,0.176,0.20
8.0,0.198,0.71
9.0,0.199,0.65`);

  // --- Scales x, y1 and y2 ---

  var makeScale = function(accessor, range) {
    return d3.scaleLinear()
      .domain(d3.extent(data, accessor))
      .range(range)
      .nice();
  }
  var scX = makeScale(d => d["x"], [0, pxX]);
  var scY1 = makeScale(d => d["y1"], [pxY, 0]);
  var scY2 = makeScale(d => d["y2"], [pxY, 0]);

  // --- Shapes and curves geometry ---

  var drawData = function(g, accessor, curve) {
    g.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("cx", d => scX(d["x"]))
      .attr("cy", accessor);

    var lnMkr = d3.line()
      .curve(curve)
      .x(d => scX(d["x"]))
      .y(accessor);

    g.append("path")
      .attr("fill", "none")
      .attr("d", lnMkr(data));
  }

  var g1 = svg.append("g");
  var g2 = svg.append("g");

  g1.call(drawData, d => scY1(d["y1"]), d3.curveStep);
  g2.call(drawData, d => scY2(d["y2"]), d3.curveNatural);

  // --- Shapes and curves appearance ---

  g1.selectAll("circle").attr("fill", "green");
  g1.selectAll("path").attr("stroke", "cyan");

  g2.selectAll("circle").attr("fill", "blue");
  g2.selectAll("path").attr("stroke", "red");

  // --- Axes x, y1 and y2 ---

  svg.append("g")
    .call(d3.axisRight(scY1));
  svg.append("g")
    .call(d3.axisLeft(scY2))
    .attr("transform", `translate(${pxX}, 0)`);
  svg.append("g")
    .call(d3.axisTop(scX))
    .attr("transform", `translate(0, ${pxY})`);
}
