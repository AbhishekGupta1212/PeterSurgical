import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

export default function Graph(props) {
    const {emmissions,revenue}=useSelector((state)=>state.data);

    const [graphHeight, setGraphHeight] = useState(400);
  const [options, setOptions] = useState({
    chart: {
      height: graphHeight,
      type: "line",
    },
    stroke: {
      width:[3,2]
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
    
    yaxis: [

      {
        opposite: true,
      },
    ],
    
  });

  const [series, setSeries] = useState([
    {
      name: "Emissions",
      type: "column",
      data: revenue
    },
    {
      name: "E/R",
      type: "line",
      data: [40, 50, 41, 67, 22,20,10,45,7,8,9,10]
    },
    {
      name:'E/R-2022',
      type:'line',
      data:[40, 50, 41, 67, 22,20,10,45,67,28,19,18]
},
    {
        name:'Emissions',
        type:'column',
    data: emmissions
    }
  ]);
  useEffect(()=>{
    setSeries([
        {
          name: "Emissions-2023",
          type: "column",
          data: revenue
        },
        {
          name: "E/R-2023",
          type: "line",
          data: [10, 16, 20, 22, 25,22,45,40,42,39,26,43]
        },
        {
              name:'E/R-2022',
              type:'line',
              data:[12, 18, 22, 25, 29,26,40,45,37,28,39]
        },
        {
            name:'Emissions-2022',
            type:'column',
        data: emmissions
        }
      ])
  },[emmissions,revenue])

  useEffect(() => {
    
    const handleResize = () => {
      setGraphHeight(window.innerWidth > 600 ? 400 : 250); 
    };
    handleResize();


    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="barLine">
    <div>
      <p>Emission/Revenue</p>
    </div>
    <div>
    <ReactApexChart
        options={options}
        series={series}
        type='line'
        height={graphHeight}
      />
    </div>
      
    </div>
  );
}