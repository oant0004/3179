var vg_1 = "js/globalmap_vg.json";
vegaEmbed("#global_map", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "js/heatmap_vg.json";
vegaEmbed("#heat_map", vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_3 = "js/linechart_vg.json";
vegaEmbed("#line_chart", vg_3).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_4 = "js/scatterplot_vg.json"; 
vegaEmbed("#scatter_plot", vg_4).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_5 = "js/parallelplot_vg.json"; 
vegaEmbed("#parallel_plot", vg_5).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);
