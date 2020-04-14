import React from 'react';
import {SecondaryDataWrapper} from './data.style';

export class SecondaryData extends React.Component{
    render(){
        if(this.props.otherdata != undefined && this.props.otherdata.length != 0){
            return(
                <SecondaryDataWrapper>
                    <h4>Additional Data</h4>
                    <ul>
                        {this.props.otherdata.map(data => {
                            return <li key={data.type}>{`${data.type}: ${data.value}`}</li>
                        })}
                    </ul>
                </SecondaryDataWrapper>
            )
        } else {
            return(<p></p>)
        }
    }
}