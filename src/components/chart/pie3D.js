import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie3d from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Pie3d, FusionTheme);
const  Pie3D = ({data}) =>{
const chartConfigs = {
    type: "pie3d",  
    width: "100%",  
    height: "400",  
    dataFormat: "json",  
    dataSource: {
    
    chart: {
    	caption:"languages",
    	theme:'fusion',
    	decimals:0,
    	pieRadius:'45%',
    },
     
   data,
  }
};
  return <ReactFC {...chartConfigs} />;
}
 

export default Pie3D;