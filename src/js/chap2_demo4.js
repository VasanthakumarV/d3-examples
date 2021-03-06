export function chap2_demo4() {
  d3.selectAll("#chap2-demo4 > *").remove();

  var ul = d3.select("#chap2-demo4");

  var vs = ["from east", "to west", "at home", "is best"];

  ul.selectAll("li")
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
