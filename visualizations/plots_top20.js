let hospitalNames = ['Ascension Alexian Brothers in Elk Grove Village',
    'Ascension Resurrection in Chicago',
    'Loretto Hospital',
    'Touchette Regional Hospital',
    "Edward Hospital - Main Campus",
    "HSHS Saint Joseph's Hospital Breese",
    "St. Margaret's Hospital",
    "Crossroads Community Hospital",
    "Blessing Hospital",
    'Cancer Treatment Centers of America Chicago',
    'Iroquois Memorial Hospital',
    "HSHS Saint John's Hospital",
    'Northwestern Memorial Hospital',
    'Rush University Medical Center',
    'Jersey Community Hospital',
    'Advocate Christ Medical Center',
    'Heartland Regional Medical Center',
    'OSF Saint Francis Medical Center',
    'Herrin Hospital',
    'Northwest Community Hospital']

let googleStars = [5, 4.7, 4.4, 4.3, 4.3, 4.2, 4, 4, 3.9, 3.9, 3.8, 3.7, 3.7, 3.6, 3.5, 3.4, 3.4, 3.4, 3.4, 3.4]

let trace1 = {
    x: hospitalNames,
    y: googleStars,
    type: 'bar'
};

let data = [trace1];

let layout = {
    title: "Top 20 Hospitals - Google Stars"
};

Plotly.newPlot("plot", data, layout);