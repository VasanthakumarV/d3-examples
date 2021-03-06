export function chap8_demo1() {
  var container = d3.select("#chap8-demo1");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var scX = d3.scaleLinear()
    .domain([0, 10])
    .range([0, 300]);

  var sc1 = d3.scaleLinear()
    .domain([0, 3, 10])
    .range(["blue", "white", "red"]);

  var sc2 = d3.scaleLinear()
    .domain([0, 5, 5, 10])
    .range(["white", "blue", "red", "white"]);

  var sc3 = d3.scaleSequential(t => "" + d3.hsl(360 * t, 1, 0.5))
    .domain([0, 10]);

  var sc4 = d3.scaleSequential(t => d3.interpolateSinebow(2 / 3 - 3 * t / 4))
    .domain([0, 10]);

  var sc5 = d3.scaleDiverging(t => d3.interpolateRdYlGn(1 - t))
    .domain([0, 2, 10]);

  var sc6 = d3.scaleSequential(d3.interpolateRgbBasis(["#b2d899", "#ffffbf", "#bf9966", "#ffffff"]))
    .domain([0, 10]);

  svg.append("g")
    .call(colorbox, [300, 30], sc1)
    .attr("transform", "translate(50, 25)");

  svg.append("g")
    .call(colorbox, [300, 30], sc2)
    .attr("transform", "translate(50, 75)");

  svg.append("g")
    .call(colorbox, [300, 30], sc3)
    .attr("transform", "translate(50, 125)");

  svg.append("g")
    .call(colorbox, [300, 30], sc4)
    .attr("transform", "translate(50, 175)");

  svg.append("g")
    .call(colorbox, [300, 30], sc5)
    .attr("transform", "translate(50, 225)");

  svg.append("g")
    .call(colorbox, [300, 30], sc6, scX)
    .attr("transform", "translate(50, 275)");
}

function colorbox(sel, size, colors, ticks) {
  var [x0, x1] = d3.extent(colors.domain());
  var bars = d3.range(x0, x1, (x1 - x0) / size[0]);

  var sc = d3.scaleLinear()
    .domain([x0, x1])
    .range([0, size[0]]);
  sel.selectAll("line")
    .data(bars)
    .enter()
    .append("line")
    .attr("x1", sc)
    .attr("x2", sc)
    .attr("y1", 0)
    .attr("y2", size[1])
    .attr("stroke", colors);

  sel.append("rect")
    .attr("width", size[0])
    .attr("height", size[1])
    .attr("fill", "none")
    .attr("stroke", "black");

  if (ticks) {
    sel.append("g")
      .call(d3.axisBottom(ticks))
      .attr("transform", `translate(0, ${size[1]})`);
  }
}
