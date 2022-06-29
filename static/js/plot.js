
d3.json("/api/v1.0/staffed_beds").then(function(d){
    
     var hospitalNames=[]
     var staffedBeds =[];
//     d.forEach(x => {
//         if (sexes.includes(x.sex)){
//             count[sexes.indexOf(x.sex)]+= 1;
//         }
//         else {
//             sexes.push(x.sex);
//             count.push(1);
//         }
//     })
    
    console.log(hospitalNames);
    console.log(staffedBeds);

     var data = [{
         x: hospitalNames,
         y: staffedBeds,
         type: 'bar'

     }];

     let data = [trace1];

     let layout = {
         title: "Staffed Beds by Hospital"
     };
     
     Plotly.newPlot("plot", data, layout);
 