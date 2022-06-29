let hospitalNames = ['The New Roseland Community Hospital',
    'Decatur Memorial Hospital',
    'Community First Medical Center',
    'Holy Cross Hospital',
    "UnityPoint Health - Pekin",
    'FHN Memorial Hospital',
    'Saint Bernard Hospital and Health Care Center',
    'Franciscan Health Olympia Fields Campus',
    'Thorek Memorial Hospital Andersonville',
    'Thorek Memorial Hospital',
    'Gateway Regional Medical Center',
    'Jackson Park Hospital',
    'Mount Sinai Hospital',
    "Ascension Saint Joseph-Joliet",
    'Northwestern Medicine Woodstock Hospital',
    'Advocate Trinity Hospital',
    'Anderson Hospital',
    'AdventHealth Bolingbrook',
    'Swedish Hospital',
    'Advocate South Suburban Hospital']

let googleStars = [2, 2, 2, 2.1, 2.1, 2.1, 2.1, 2.2, 2.2, 2.2, 2.3, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.5, 2.5, 2.5]

let trace1 = {
    x: hospitalNames,
    y: googleStars,
    type: 'bar'
};

let data = [trace1];

let layout = {
    title: "Google Stars - Bottom 20 Hospitals"
};

Plotly.newPlot("plot", data, layout);