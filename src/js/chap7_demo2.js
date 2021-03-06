export function chap7_demo2() {
  var data = getData();

  var container = d3.select("#chap7-demo2");

  var width = container._groups[0][0].clientWidth;
  var height = container._groups[0][0].clientHeight

  container.selectAll("*").remove();
  var svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  function draw(sel, scX, scY, width, height) {
    scX = scX.domain(d3.extent(data, d => d[0]))
      .nice()
      .range([0, width]);
    scY = scY.domain(d3.extent(data, d => d[1]))
      .nice()
      .range([height, 0]);

    var ds = data.map(d => [scX(d[0]), scY(d[1])]);

    sel.append("path")
      .classed("curve", true)
      .attr("d", d3.line()(ds))
      .attr("fill", "none");

    sel.append("g")
      .call(d3.axisBottom(scX).ticks(10, "d"))
      .attr("transform", `translate(0, ${height})`);

    sel.append("g")
      .call(d3.axisLeft(scY));
  }

  svg.append("g")
    .attr("transform", "translate(50, 50)")
    .call(draw, d3.scaleLinear(), d3.scaleLinear(), 500, 200)
    .select(".curve")
    .attr("stroke", "red");

  svg.append("g")
    .attr("transform", "translate(200, 50)")
    .call(draw, d3.scaleLinear(), d3.scaleLog(), 350, 100)
    .select(".curve")
    .attr("stroke", "blue");
}

function getData() {
  return d3.csvParseRows(`1915,314.56
1916,292.41
1917,230.23
1918,188.52
1919,145.81
1920,125.66
1921,141.32
1922,151.33
1923,148.85
1924,148.77
1925,145.24
1926,132.55
1927,98.43
1928,80.70
1929,80.87
1930,83.17
1931,91.47
1932,102.24
1933,107.97
1934,104.57
1935,102.13
1936,95.60
1937,70.55
1938,71.99
1939,73.13
1940,53.90
1941,42.55
1942,38.53
1943,36.37
1944,35.81
1945,28.55
1946,20.37
1947,17.89
1948,16.67
1949,16.87
1950,16.74
1951,15.58
1952,15.28
1953,15.19
1954,15.13
1955,15.21
1956,15.00
1957,14.51
1958,14.15
1959,13.59
1960,12.50
1961,12.39
1962,12.25
1963,12.10
1964,11.95
1965,11.63
1966,10.21
1967,9.83
1968,8.31
1969,7.78
1970,6.06
1971,5.69
1972,5.51
1973,5.56
1974,5.03
1975,4.35
1976,3.95
1977,3.72
1978,3.44
1979,3.12
1980,2.90
1981,3.00
1982,2.89
1983,2.85
1984,2.79
1985,1.95
1986,1.81
1987,1.55
1988,1.49
1989,1.42
1990,1.37
1991,1.35
1992,1.34
1993,1.36
1994,1.45
1995,1.42
1996,0.94
1997,0.88
1998,0.85
1999,0.82
2000,0.70
2001,0.62
2002,0.53
2003,0.47
2004,0.44
2005,0.45
`, d => [+d[0], +d[1]]);
}
