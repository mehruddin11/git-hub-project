import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie3d from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Pie3d, FusionTheme);
const  Bar3D = ({data}) =>{
const chartConfigs = {
    type: "Bar3D",  
    width: "100%",  
    height: "400",  
    dataFormat: "json",  
    dataSource: {
    
    chart: {
    	caption:"most popular",
    	xAxisName:"Repos",
    	yAxisName:'Forks',
    	xAxisNameFontSize:"16px",
    	yAxisNameFontSize:"16px"
    },
     
   data,
  }
};
  return <ReactFC {...chartConfigs} />;
}
 

export default Bar3D;