import React from 'react'
import { Bar } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

function BarChart({chartData, options, style}) {


  return (
    <div>
        <Bar data={chartData} options={options} style={style}/>
    </div>
  )
}

export default BarChart