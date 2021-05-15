function sticker(sel, label) {
  sel.append("rect")
    .attr("width", 70)
    .attr("height", 30)
    .attr("x", -35)
    .attr("y", -15)
    .attr("fill", "none")
    .attr("stroke", "blue")
    .classed("frame", true);

  sel.append("text")
    .attr("x", 0)
    .attr("y", 5)
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", 14)
    .classed("label", true)
    .text(label ? label : d => d);
}

export function chap5_demo4() {
  var container = d3.select("#chap5-demo4");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var labels = ["hello", "world", "how", "are", "you"];

  var scX = d3.scaleLinear()
    .domain([0, labels.length - 1])
    .range([100, width - 100]);
  var scY = d3.scaleLinear()
    .domain([0, labels.length - 1])
    .range([50, height - 50]);

  svg.selectAll("g")
    .data(labels)
    .enter()
    .append("g")
    .attr("transform", (_, i) => `translate(${scX(i)}, ${scY(i)})`)
    .call(sticker);

  svg.append("g")
    .attr("transform", `translate(75, ${height - 75})`)
    .call(sticker, "i am fine")
    .selectAll(".label")
    .attr("fill", "red");
}
