export function chap8_demo3() {
  var container = d3.select("#chap8-demo3");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var pxX = 525;
  var pxY = 300;

  var scX = d3.scaleLinear()
    .domain([-3, 1])
    .range([0, pxX]);
  var scY = d3.scaleLinear()
    .domain([-1.5, 1.5])
    .range([pxY, 0]);
  var scC = d3.scaleSequential(d3.interpolateRgbBasis([
    "#0a0085",
    "#2b00a5",
    "#1000bf",
    "#000adc",
    "#001ae9",
    "#002bf6",
    "#045dff",
    "#007dff",
    "#00a6ff",
    "#1db7ff",
    "#30c4ff",
    "#57ecff",
    "#64fff2",
    "#79ffd4",
    "#8affb4",
    "#abffa5",
    "#c7ff98",
    "#e5ff86",
    "#fff972",
    "#ffda5b",
    "#ffb645",
    "#ff9632",
    "#ff6c3b",
    "#ff4441",
    "#ff4848",
    "#ff6d6d",
    "#ff9393",
    "#ffb2ac",
    "#ffbebe",
    "#ffd2d2",
    "#ffe9e9",
    "#ffffff",
    "#ffffff"]))
    .domain([-1, 1]);
  var scZ = d3.scaleLinear()
    .domain([-1, -0.25, 0.25, 1])
    .range(["white", "grey", "grey", "black"]);

  var data = [];
  var f = (x, y, b) => (y ** 4 + x * y ** 2 + b * y) * Math.exp(-(y ** 2));
  for (var j = 0; j < pxY; j++) {
    for (var i = 0; i < pxX; i++) {
      data.push(f(scX.invert(i), scY.invert(j), 0.3));
    }
  }

  var g = svg.append("g");
  var pathMkr = d3.geoPath();

  var conMkr = d3.contours()
    .size([pxX, pxY])
    .thresholds(100);
  g.append("g")
    .selectAll("path")
    .data(conMkr(data))
    .enter()
    .append("path")
    .attr("d", pathMkr)
    .attr("fill", d => scC(d.value))
    .attr("stroke", "none");

  conMkr = d3.contours()
    .size([pxX, pxY])
    .thresholds(10);
  g.append("g")
    .selectAll("path")
    .data(conMkr(data))
    .enter()
    .append("path")
    .attr("d", pathMkr)
    .attr("fill", "none")
    .attr("stroke", d => scZ(d.value))

  g.select("g")
    .append("path")
    .attr("d", pathMkr(conMkr.contour(data, 0.025)))
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 2);

  svg.append("g")
    .call(d3.axisTop(scX).ticks(10))
    .attr("transform", `translate(0, ${pxY})`);
  svg.append("g")
    .call(d3.axisRight(scY).ticks(5));
}
