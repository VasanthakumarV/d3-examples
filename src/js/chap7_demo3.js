export function chap7_demo3() {
  var data = getData();

  var container = d3.select("#chap7-demo3");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("cursor", "crosshair");

  var format = d3.utcFormat("%H:%M");

  var scT = d3.scaleUtc()
    .domain(d3.extent(data, d => d.ts))
    .nice()
    .range([50, 550]);
  var scY = d3.scaleLinear()
    .domain([0, 100])
    .range([250, 50]);
  var scC = d3.scaleThreshold()
    .domain([35, 75])
    .range(["green", "orange", "red"]);

  data = d3.pairs(data, (a, b) => { return { src: a, dst: b } });

  svg.selectAll("line")
    .data(data)
    .enter()
    .append("line")
    .attr("x1", d => scT(d.src.ts))
    .attr("x2", d => scT(d.dst.ts))
    .attr("y1", d => scY(d.src.val))
    .attr("y2", d => scY(d.dst.val))
    .attr("stroke", d => scC((d.src.val + d.dst.val) / 2));

  svg.append("g")
    .attr("transform", "translate(50, 0)")
    .call(d3.axisLeft(scY));
  svg.append("g")
    .attr("transform", "translate(0, 250)")
    .call(d3.axisBottom(scT).tickFormat(format).ticks(d3.utcMinute.every(10)));

  var txt = svg.append("text")
    .attr("x", 100)
    .attr("y", 50)
    .attr("font-family", "sans-serif")
    .attr("font-size", 14);
  svg.on("mousemove", function(event) {
    var pt = d3.pointer(event);
    txt.text(`${format(scT.invert(pt[0]))} | ${d3.format(">2d")(scY.invert(pt[1]))}`);
  });
}

function getData() {
  var parse = d3.utcParse("%H:%M:%S");
  return d3.csvParse(`timestamp,load
08:01:00,29
08:02:00,29
08:03:00,30
08:04:00,22
08:05:00,20
08:06:00,21
08:07:00,23
08:08:00,24
08:09:00,22
08:10:00,22
08:11:00,21
08:12:00,21
08:13:00,26
08:14:00,23
08:15:00,25
08:16:00,29
08:17:00,26
08:18:00,27
08:19:00,28
08:20:00,28
08:21:00,28
08:22:00,28
08:23:00,30
08:24:00,26
08:25:00,18
08:26:00,18
08:27:00,24
08:28:00,27
08:29:00,26
08:30:00,16
08:31:00,17
08:32:00,12
08:33:00,12
08:34:00,11
08:35:00,11
08:36:00,7
08:37:00,7
08:38:00,22
08:39:00,22
08:40:00,24
08:41:00,23
08:42:00,18
08:43:00,20
08:44:00,22
08:45:00,29
08:46:00,29
08:47:00,34
08:48:00,43
08:49:00,46
08:50:00,50
08:51:00,51
08:52:00,50
08:53:00,45
08:54:00,43
08:55:00,42
08:56:00,48
08:57:00,52
08:58:00,56
08:59:00,56
09:00:00,57
09:01:00,62
09:02:00,64
09:03:00,64
09:04:00,65
09:05:00,68
09:06:00,70
09:07:00,76
09:08:00,86
09:09:00,90
09:10:00,91
09:11:00,87
09:12:00,84
09:13:00,84
09:14:00,79
09:15:00,75
09:16:00,74
09:17:00,72
09:18:00,71
09:19:00,70
09:20:00,66
09:21:00,71
09:22:00,72
09:23:00,71
09:24:00,69
09:25:00,68
09:26:00,65
09:27:00,55
09:28:00,51
09:29:00,49
09:30:00,49
09:31:00,44
09:32:00,46
09:33:00,42
09:34:00,56
09:35:00,54
09:36:00,51
09:37:00,50
09:38:00,54
09:39:00,54
09:40:00,54
09:41:00,54
09:42:00,56
09:43:00,55
09:44:00,52
09:45:00,51
09:46:00,48
09:47:00,43
09:48:00,42
09:49:00,38
09:50:00,34
09:51:00,32
09:52:00,27
09:53:00,29
09:54:00,29
09:55:00,22
09:56:00,20
09:57:00,21
09:58:00,23
09:59:00,24
10:00:00,22
10:01:00,22
10:02:00,21
10:03:00,21
10:04:00,25
10:05:00,26
10:06:00,28
10:07:00,31
10:08:00,35
10:09:00,40
10:10:00,42
10:11:00,45
10:12:00,52
10:13:00,55
10:14:00,56
10:15:00,54
10:16:00,54
10:17:00,54
10:18:00,54
10:19:00,52
10:20:00,53
10:21:00,54
`, function(d) {
    return { ts: parse(d.timestamp), val: +d.load };
  });
}
