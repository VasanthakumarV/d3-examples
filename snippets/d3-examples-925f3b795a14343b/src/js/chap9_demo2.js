export function chap9_demo2() {
  var container = d3.select("#chap9-demo2");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var data = `
  {
    "name": "root", "size": 0, "kids": [
      { "name": "bin", "size": 3, "kids": [] },
      { "name": "boot", "size": 1, "kids": [] },
      { "name": "dev", "size": 1, "kids": [] },
      {
        "name": "home", "size": 0, "kids": [
          {
            "name": "alice", "size": 5, "kids": [
              { "name": "mail", "size": 3, "kids": [] },
              {
                "name": "img", "size": 1, "kids": [
                  { "name": "color", "size": 8, "kids": [] },
                  { "name": "bw", "size": 3, "kids": [] }
                ]
              },
              { "name": "files", "size": 4, "kids": [] }
            ]
          },
          {
            "name": "eve", "size": 1, "kids": [
              { "name": "spy", "size": 2, "kids": [] }
            ]
          },
          {
            "name": "bob", "size": 3, "kids": [
              { "name": "mail", "size": 4, "kids": [] },
              { "name": "docs", "size": 7, "kids": [] },
              { "name": "src", "size": 5, "kids": [] }
            ]
          }
        ]
      },
      { "name": "lib", "size": 9, "kids": [] },
      {
        "name": "usr", "size": 0, "kids": [
          { "name": "bin", "size": 3, "kids": [] },
          { "name": "include", "size": 6, "kids": [] },
          { "name": "lib", "size": 9, "kids": [] },
          {
            "name": "local", "size": 7, "kids": [
              { "name": "bin", "size": 2, "kids": [] },
              { "name": "lib", "size": 3, "kids": [] },
              { "name": "share", "size": 3, "kids": [] }
            ]
          },
          { "name": "share", "size": 4, "kids": [] }
        ]
      }
    ]
  } `;
  var json = JSON.parse(data);

  var sc = d3.scaleOrdinal(d3.schemeReds[8]);

  var nodes = d3.hierarchy(json, d => d.kids)
    .sum(d => d.size)
    .sort((a, b) => b.height - a.height || b.value - a.value);
  d3.treemap()
    .size([300, 300])
    .padding(5)(nodes);

  var g = svg.append("g")

  g.selectAll("rect")
    .data(nodes.descendants())
    .enter()
    .append("rect")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => sc(d.depth))
    .attr("stroke", "red");

  g.selectAll("text")
    .data(nodes.leaves())
    .enter()
    .append("text")
    .attr("text-anchor", "middle")
    .attr("font-size", 10)
    .attr("x", d => (d.x0 + d.x1) / 2)
    .attr("y", d => (d.y0 + d.y1) / 2)
    .text(d => d.data.name);
}
