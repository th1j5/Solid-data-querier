import React from 'react';
import SolidAuth from 'solid-auth-client';
import { useTranslation } from 'react-i18next';
import { successToaster, errorToaster } from '@utils';
import ldflex from '@solid/query-ldflex';
import { AccessControlList } from '@inrupt/solid-react-components';
import {Graph, Textinput} from './components';
import{
    IoTGraphWrapper,
    IoTGraphContainer,
    Header,
    WebId
} from './iot-graph.style';

type Props = {webId: String};
export class IoTGraph extends React.Component{Props} {
    componentDidMount(){
        console.log(webId);
    }
    render(){
        return(
            <IoTGraphWrapper>
                <IoTGraphContainer>
                    <Header>
                        <h3>Historical data visualization</h3>
                        <p>This page allows you to visualize the historical sensor data saved in your solid pod. -- Work in progres</p>
                    </Header>
                    <Textinput></Textinput>
                    <Graph></Graph>
                </IoTGraphContainer>
            </IoTGraphWrapper>
        )
    }
}

export default IoTGraph;