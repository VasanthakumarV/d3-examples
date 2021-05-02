export function demo4() {
  var vs = ["from east", "to west", "at home", "is best"];

  d3.select("#demo4")
    .append("ul")
    .selectAll("li")
    .data(vs)
    .enter()
    .append("li")
    .text(d => d)
    .on("click", function() {
      this.toggleState = !this.toggleState;
      d3.select(this)
        .transition()
        .duration(1000)
        .style("color", this.toggleState ? "red" : "black");
    })
}
