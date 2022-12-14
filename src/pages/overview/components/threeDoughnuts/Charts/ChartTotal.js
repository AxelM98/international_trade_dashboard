import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import "./chartTotal.css"

function ChartTotal() {

    const data = {
        labels: [],
        datasets: [{
          label: 'My First Dataset',
          data: [50, 50],
          backgroundColor: [
            '#44e6de',
            "#161616",
          ],
          hoverOffset: 0,
          borderWidth: 0,
          borderRadius: 5,
       
        }],
        
      };

      var options = {        
        cutout: 30,
        maintainAspectRatio: false
    };

    
    return (
        <div className='chartTotal'>
            <div className="chartTotal_chartStyle">
                <Doughnut data={data} style={{width:"100%",height:"100%"}} options={options} />
                <div className="chartTotal_textContainer">50%</div>
            </div>
        </div>
      )
    }

export default ChartTotal