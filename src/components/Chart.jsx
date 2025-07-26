import { useState } from "react";
import ReactApexChart from "react-apexcharts";


const ApexChart = () => {
    const [state, setState
    ] = useState({
      
        series: [50, 10, 15, 20, 5],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 500,
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
    });

    

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }


  export default ApexChart






