import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {GraphWrapper} from './graph.style';

export class Graph extends React.Component {
    // Creating reference to insert in the page
    getOptions = () => {
        if(this.props.sensordata !== undefined){
            var timestamps = this.props.sensordata.value.map(data => data.timestamp);
            var measurements = this.props.sensordata.value.map(data => parseFloat(data.value));
            var unit = this.props.otherdata.filter(data => data.type === 'SensorUnits')[0].value;
            return {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: this.props.object.value,
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none',
                            title: {zoom: 'Zoom', back: 'Revert'}
                        },
                        mark: { show: true },
                        restore: { show: true, title: "Reset" },
                        saveAsImage: { show: true, title: "Save as Image" }
                    }
                },
                xAxis: {
                  type: 'category',
                  data: timestamps,
                  boundaryGap: false,
                  name: 'DateTime',
                  axisLabel:{
                      textStyle: {fontsize: 10}
                  }
                },
                yAxis: {
                  type: 'value',
                  boundaryGap: [0, '100%'],
                  name: `${this.props.sensordata.type} [${unit}]`,
                  axisLabel:{
                      textStyle: {fontsize: 10}
                  }
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 100
                }, {
                    start: 0,
                    end: 100,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [{ 
                  name: this.props.sensordata.type,
                  data: measurements,
                  type: 'line',
                  itemStyle: {
                      color: '#7C4DFF'
                  }
                }]
              }
        } else {
            return({});
        }
        

    }

    render(){
        if(this.props.sensordata !== undefined && this.props.sensordata.length !== 0){
            return(
                <GraphWrapper>
                    <h4>Graph</h4>
                    <ReactEcharts
                        option={this.getOptions()}
                        style= {{flex:1}}
                    />
                </GraphWrapper>
            )
        } else {
            return(<p></p>)
        }
    }
}