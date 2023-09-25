var vg_1 = "js/heatmap_vg.json";
vegaEmbed("#heat_map", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "globalmap_vg.json";
vegaEmbed("#global_map", vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);
