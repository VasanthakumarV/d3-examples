export function chap3_demo3() {
  d3.selectAll("#chap3-demo3 > *").remove();

  var data = ["Jane", "Anne", "Mary"];

  var ul = d3.select("#chap3-demo3");
  ul.selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .text(d => d);

  var once;
  ul.on("mouseenter", function() {
    if (once) {
      return;
    }
    once = 1;

    ul.insert("li", ":nth-child(2)")
      .datum("Lucy")
      .text("Lucy");
    ul.insert("li", ":first-child")
      .datum("Lisa")
      .text("Lisa");
  });

  ul.on("click", function() {
    ul.selectAll("li")
      .sort((a, b) => a < b ? 1 : b < a ? -1 : 0);
  });
}
