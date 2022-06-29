let hospitalNames = ['Carle Richland Memorial Hospital',
'Northwestern Medicine Kishwaukee Hospital',
'AdventHealth Bolingbrook',
'AdventHealth GlenOaks',
'AdventHealth Hinsdale',
'AdventHealth La Grange',
'Advocate Christ Medical Center',
'Advocate Condell Medical Center',
'Advocate Good Samaritan Hospital',
'Advocate Good Shepherd Hospital',
'Advocate Illinois Masonic Medical Center',
'Advocate Lutheran General Hospital',
'Advocate Sherman Hospital',
'Advocate South Suburban Hospital',
'Advocate Trinity Hospital',
'Alton Memorial Hospital',
'Anderson Hospital',
'Ascension Alexian Brothers in Elk Grove Village',
'Ascension Mercy in Aurora',
'Ascension Resurrection in Chicago',
'Ascension Saint Elizabeth in Chicago',
'Ascension Saint Francis in Evanston',
"Ascension Saint Joseph - Elgin",
"Ascension Saint Joseph -Chicago",
"Ascension Saint Joseph-Joliet",
"Ascension Saint Mary -Chicago",
"Ascension St. Alexius in Hoffman Estates",
"Ascension St. Mary- Kankakee",
'Blessing Hospital',
'Cancer Treatment Centers of America Chicago',
'Carle BroMenn Medical Center',
'Carle Foundation Hospital',
'CGH Medical Center',
'Community First Medical Center',
'Crossroads Community Hospital',
'Decatur Memorial Hospital',
"Edward Hospital - Main Campus",
'Elmhurst Hospital',
'Evanston Hospital',
'FHN Memorial Hospital',
'Franciscan Health Olympia Fields Campus',
'Gateway Regional Medical Center',
'Genesis Medical Center Silvis',
'Graham Hospital',
'Harrisburg Medical Center',
'Heartland Regional Medical Center',
'Herrin Hospital',
'Holy Cross Hospital',
'HSHS Good Shepherd Hospital',
'HSHS Holy Family Hospital',
"HSHS Saint Anthony's Memorial Hospital",
"HSHS Saint Elizabeth's Hospital",
"HSHS Saint John's Hospital",
"HSHS Saint Joseph's Hospital Breese",
"SHS Saint Mary's Hospital",
'Humbolt Park Health',
'INSIGHT Hospital and Medical Center Chicago',
'Iroquois Memorial Hospital',
'Jackson Park Hospital',
'Jacksonville Memorial Hospital',
"Javon Bea Hospital - Rockton",
'Jersey Community Hospital',
"John H. Stroger, Jr. Hospital of Cook County",
'Katherine Shaw Bethea Hospital',
'Lake Behavioral Hospital ',
'Loretto Hospital',
'Loyola Gottlieb Memorial Hospital',
'Loyola University Medical Center',
'MacNeal Hospital',
'McDonough District Hospital',
'Memorial Hospital Belleville',
'Memorial Hospital East',
'Memorial Hospital of Carbondale',
'Morris Hospital',
'Mount Sinai Hospital',
'Northwest Community Hospital',
'Northwestern Medicine Central DuPage Hospital',
'Northwestern Medicine Delnor Hospital',
'Northwestern Medicine Lake Forest Hospital',
'Northwestern Medicine McHenry Hospital',
'Northwestern Medicine Palos Hospital',
'Northwestern Medicine Woodstock Hospital',
'Northwestern Memorial Hospital',
'OSF Heart of Mary Medical Center',
'OSF Little Company of Mary Medical Center',
'OSF Sacred Heart Medical Center',
'OSF Saint Anthony Medical Center',
"OSF Saint Anthony's Health Center",
'OSF Saint Elizabeth Medical Center',
'OSF Saint Francis Medical Center',
"OSF Saint James-John W. Albrecht Medical Center",
'OSF Saint Joseph Medical Center',
'OSF Saint Mary Medical Center',
'Provident Hospital of Cook County',
'Riverside Medical Center ',
'Rush Oak Park Hospital',
'Rush University Medical Center',
"Rush-Copley Medical Center",
'Saint Anthony Hospital',
'Saint Bernard Hospital and Health Care Center',
"Saint Margaret's Health-Spring Valley",
'Sarah Bush Lincoln Health Center',
'Silver Cross Hospital',
'Skokie Hospital',
'South Shore Hospital',
'Springfield Memorial Hospital',
"SSM Health Good Samaritan Hospital - Mount Vernon",
"SSM Health Saint Mary's Hospital-Centralia",
"St. Margaret's Hospital",
'Swedish Hospital',
'SwedishAmerican Hospital',
'The New Roseland Community Hospital',
'Thorek Memorial Hospital',
'Thorek Memorial Hospital Andersonville',
'Touchette Regional Hospital',
'Trinity Rock Island',
'UChicago Medicine',
'UChicago Medicine Ingalls Memorial',
'UnityPoint Health - Methodist ',
'UnityPoint Health - Pekin',
'UnityPoint Health - Proctor',
'University of Illinois Medical Center',
'Vista Medical Center East',
'Weiss Memorial Hospital',
'West Suburban Medical Center']

let staffedBeds = [81,
    98,
    134,
    138,
    261,
    177,
    782,
    273,
    288,
    176,
    292,
    643,
    255,
    233,
    225,
    129,
    154,
    354,
    258,
    254,
    219,
    146,
    184,
    251,
    466,
    323,
    318,
    169,
    327,
    73,
    221,
    447,
    98,
    279,
    47,
    178,
    294,
    258,
    719,
    100,
    206,
    305,
    145,
    81,
    68,
    94,
    114,
    155,
    30,
    28,
    133,
    144,
    422,
    46,
    207,
    185,
    216,
    60,
    183,
    121,
    311,
    46,
    451,
    80,
    146,
    122,
    201,
    516,
    328,
    45,
    294,
    94,
    175,
    89,
    264,
    509,
    395,
    144,
    122,
    282,
    413,
    32,
    903,
    204,
    220,
    174,
    241,
    49,
    97,
    669,
    42,
    149,
    81,
    38,
    300,
    185,
    644,
    210,
    151,
    174,
    44,
    99,
    300,
    156,
    137,
    459,
    125,
    116,
    49,
    242,
    307,
    134,
    156,
    145,
    123,
    318,
    678,
    301,
    277,
    95,
    170,
    484,
    190,
    144,
    174]

let trace1 = {
    x: hospitalNames,
    y: staffedBeds,
    type: 'bar'
};

let data = [trace1];

let layout = {
    title: "Staffed Beds by Hospital"
};

Plotly.newPlot("plot", data, layout);