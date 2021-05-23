export function chap5_demo1() {
	var container = d3.select("#chap5-demo1");

	var width = container._groups[0][0].clientWidth;
	var height = container._groups[0][0].clientHeight;

	container.selectAll("*").remove();

	var svg = container.append("svg")
		.attr("width", width)
		.attr("height", height);

	var data = [
		{ "x": 40, "y": 0, "val": "A" },
		{ "x": 80, "y": 30, "val": "A" },
		{ "x": 120, "y": -10, "val": "B" },
		{ "x": 160, "y": 15, "val": "A" },
		{ "x": 200, "y": 0, "val": "C" },
		{ "x": 240, "y": 10, "val": "B" },
	];

	var symMkr = d3.symbol()
		.size(81)
		.type(d3.symbolStar);

	var scY = d3.scaleLinear()
		.domain([-10, 30])
		.range([80, 40]);

	svg.append("g")
		.selectAll("path")
		.data(data)
		.enter()
		.append("path")
		.attr("d", symMkr)
		.attr("fill", "red")
		.attr("transform", d => `translate(${d["x"]}, ${scY(d["y"])})`);

	var scT = d3.scaleOrdinal(d3.symbols)
		.domain(["A", "B", "C"]);

	svg.append("g")
		.attr("transform", "translate(300, 0)")
		.selectAll("path")
		.data(data)
		.enter()
		.append("path")
		.attr("d", d => symMkr.type(scT(d["val"]))())
		.attr("fill", "none")
		.attr("stroke", "blue")
		.attr("stroke-width", 2)
		.attr("transform", d => `translate(${d["x"]}, ${scY(d["y"])})`);
}
