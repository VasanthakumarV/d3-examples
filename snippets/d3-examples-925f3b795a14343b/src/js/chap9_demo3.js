export function chap9_demo3() {
  var container = d3.select("#chap9-demo3");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var res = getData();

  var scC = d3.scaleOrdinal(d3.schemePastel1);

  d3.shuffle(res.ps);
  d3.shuffle(res.ln);

  d3.forceSimulation(res.ps)
    .force("ct", d3.forceCenter(150, 150))
    .force("ln", d3.forceLink(res.ln).distance(20).id(d => d.id))
    .force("hc", d3.forceCollide(5))
    .force("many", d3.forceManyBody())
    .on("end", function() {
      svg.selectAll("line")
        .data(res.ln)
        .enter()
        .append("line")
        .attr("stroke", "black")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      svg.selectAll("circle")
        .data(res.ps)
        .enter()
        .append("circle")
        .attr("r", 10)
        .attr("fill", (_, i) => scC(i))
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      svg.selectAll("text")
        .data(res.ps)
        .enter()
        .append("text")
        .attr("x", d => d.x)
        .attr("y", d => d.y + 4)
        .attr("text-anchor", "middle")
        .attr("font-size", 10)
        .text(d => d.id);
    });
}

function getData() {
  var json = `
  { "ps": [ { "id": "A" },
          { "id": "B" },
          { "id": "C" },
          { "id": "D" },
          { "id": "E" },
          { "id": "F" },
          { "id": "G" },
          { "id": "H" },
          { "id": "I" },
          { "id": "J" },
          { "id": "K" },
          { "id": "L" },
          { "id": "M" },
          { "id": "N" },
          { "id": "O" },
          { "id": "P" },
          { "id": "Q" },
          { "id": "R" },
          { "id": "S" },
          { "id": "T" },
          { "id": "U" },
          { "id": "V" },
          { "id": "W" },
          { "id": "X" },
          { "id": "Y" },
          { "id": "Z" } ],
  "ln": [ { "source": "A", "target": "B" },
          { "source": "A", "target": "C" },
          { "source": "A", "target": "D" },
          { "source": "B", "target": "E" },
          { "source": "D", "target": "F" },
          { "source": "C", "target": "D" },
          { "source": "C", "target": "G" },
          { "source": "G", "target": "H" },
          { "source": "H", "target": "I" }, 
          { "source": "H", "target": "J" }, 
          { "source": "H", "target": "K" }, 
          { "source": "C", "target": "M" },
          { "source": "L", "target": "G" },
          { "source": "M", "target": "N" }, 
          { "source": "N", "target": "O" }, 
          { "source": "N", "target": "P" }, 
          { "source": "N", "target": "Q" }, 
          { "source": "N", "target": "R" }, 
          { "source": "N", "target": "S" }, 
          { "source": "N", "target": "U" }, 
          { "source": "R", "target": "V" }, 
          { "source": "R", "target": "W" }, 
          { "source": "U", "target": "X" }, 
          { "source": "S", "target": "Y" },
          { "source": "T", "target": "K" },
          { "source": "A", "target": "Z" } ]
}

  `;
  var data = JSON.parse(json);
  return data;
}
