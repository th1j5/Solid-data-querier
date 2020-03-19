import React from 'react';
import Chart from 'chart.js';
import {GraphWrapper} from './graph.style';


// Just some static data to mess around whith, this should be replaced with some actual data as soon as humanly possible!
const data = [{x: 1, y: 20},{x: 2,y: 19},{x: 3,y: 17},{x: 4,y: 16},{x: 5,y: 21},{x: 6,y: 19},{x: 7,y: 20},{x: 8,y: 21},{x: 9,y: 20},{x: 10,y: 19}];
var xlabels = data.map(item => item.x);
var name = "Sensor name";
var sensorType = "Meas type";
var xUnit = "s";
var yUnit = "Unit";
var room = "Sensor room";

export class Graph extends React.Component {
    // Creating reference to insert in the page
    chartRef = React.createRef();
    
    // Function to be called immediately after mounting the object 
    componentDidMount(){
        const ctx = this.chartRef.current.getContext('2d');

        new Chart(ctx, {
            // Chart type
            type: "line",
            // Data to be plotted
            data: {
                labels : xlabels,
                datasets: [
                    {
                        label: name,
                        data: data,
                        lineTension: 0,
                        borderColor: 'rgb(8,53,117)',
                        fill: false
                    }
                ]
            },
            // Chart options
            options: {
                title: {
                    display: true,
                    text: room,
                    fontSize: 30
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: `${sensorType} [${yUnit}]`,
                            fontSize: 20
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: `Time [${xUnit}]`,
                            fontSize: 20                        
                        }
                    }]
                }
            }
        });
    };

    render(){
        return(
            <GraphWrapper>
                <canvas id = "graph" ref={this.chartRef}/>
            </GraphWrapper>
        )
    }
}