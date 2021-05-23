export function chap9_demo1() {
  var container = d3.select("#chap9-demo1");

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

  var nodes = d3.hierarchy(json, d => d.kids);
  d3.tree().size([250, 225])(nodes);

  var g = svg.append("g")
    .attr("transform", "translate(25, 25)");

  var lnMkr = d3.linkVertical()
    .x(d => d.x)
    .y(d => d.y);
  g.selectAll("path")
    .data(nodes.links())
    .enter()
    .append("path")
    .attr("d", d => lnMkr(d))
    .attr("stroke", "red")
    .attr("fill", "none");

  g.selectAll("circle")
    .data(nodes.descendants())
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);
}
