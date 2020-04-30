import React from 'react';
import Graph from './Graph';
import SecondaryData from './SecondaryData';



export class Visualize extends React.Component {
    // Creating reference to insert in the page
    render(){
        if(this.props.data.length !== 0){
            // There is actual data to be visualized
            if(this.props.data[0].timestamp !== undefined){
                // The data has timestamps and can thus be graphed
                return <Graph data = {this.props.data} object={this.props.object} type = {this.props.type}></Graph>
            } else {
                // The data has no timestamps and will thus be printed
                return <SecondaryData data = {this.props.data} type = {this.props.type}></SecondaryData>
            }
        } else {
            return <p></p>
        }
    }
}