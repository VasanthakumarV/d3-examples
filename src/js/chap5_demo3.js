export function chap5_demo3() {
  var container = d3.select("#chap5-demo3");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight;

  container.selectAll("*").remove();

  var svg = container.append("svg")
    .attr("width", width)
    .attr("height", height);

  var data = [
    { name: "Jim", votes: 12 },
    { name: "Sue", votes: 5 },
    { name: "Bob", votes: 21 },
    { name: "Ann", votes: 17 },
    { name: "Dan", votes: 3 },
  ];

  var pie = d3.pie()
    .value(d => d.votes)
    .padAngle(0.025)(data);

  var arcMkr = d3.arc()
    .innerRadius(50)
    .outerRadius(150)
    .cornerRadius(10);

  var scC = d3.scaleOrdinal(d3.schemePastel2)
    .domain(pie.map(d => d.index));

  var g = svg.append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  g.selectAll("path")
    .data(pie)
    .enter()
    .append("path")
    .attr("d", arcMkr)
    .attr("fill", d => scC(d.index))
    .attr("stroke", "grey");

  g.selectAll("text")
    .data(pie)
    .enter()
    .append("text")
    .text(d => d.data.name)
    .attr("x", d => arcMkr.innerRadius(85).centroid(d)[0])
    .attr("y", d => arcMkr.innerRadius(85).centroid(d)[1])
    .attr("font-family", "sans-serif")
    .attr("font-size", 14)
    .attr("text-anchor", "middle");
}
