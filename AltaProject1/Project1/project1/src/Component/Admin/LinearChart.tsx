import React, { useState } from "react";
import "./LinearChart.css"
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement

} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement

)

function Linear() {
    const chartRef = React.createRef();
    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
            {
                label: "Number of people",
                data: [28000, 37000, 42000, 35000, 32000, 36000, 33000, 40000, 37000, 41000, 42200, 36000],
                fill: true,
                borderColor: "#5185F7",


                //   pointBorderColor: "transparent",
                //   pointBorderWidth: 4,
                tension: 0.4,


            },
        ],
    }
    const options: any = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },

            y: {
                min: 0,
                max: 60000,
                ticks: {
                    stepSize: 10000,
                }
            }

        },
    };
    return (
        
        <div className="LineChartProp">
            <span className="LineChartName">
            Bảng thống kê theo tháng
            </span>
            <div className="LineChart">
                <Line data={data} options={options} ></Line>
            </div>
        </div>
    )
}


export default Linear;

// style={{width:'791px', height:'484px', borderRadius:'12'}}