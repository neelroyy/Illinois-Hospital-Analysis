let data = [{
    values: [67, 44, 7, 1],
    labels: ["2 stars", "3 stars", "4 stars", "5 stars"],
    type: 'pie'
}];

var layout = {
    height: 400,
    width: 500
  };

Plotly.newPlot("plot", data, layout);