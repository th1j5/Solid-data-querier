import React from 'react';
import SolidAuth from 'solid-auth-client';
import { successToaster, errorToaster } from '@utils';
import ldflex from '@solid/query-ldflex';
import {Namespace} from 'rdflib';
import { AccessControlList } from '@inrupt/solid-react-components';
import {retrieveStore, getDevices, getObjects, getResources, getData} from './utils';
import {Graph, Textinput, Selectinput} from './components';
import{
    IoTGraphWrapper,
    IoTGraphContainer,
    Header,
    WebId
} from './iot-graph.style';

// Introducing our namespaces
var LWM2M = Namespace("https://florsanders.inrupt.net/public/ontologies/omalwm2m.ttl#");    // Self-published omalwm2m ontology
var RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#");                         // Used mainly for RDF('type')
var XSD = Namespace("http://www.w3.org/2001/XMLSchema#");                                   // Used for its units

export class IoTGraph extends React.Component {
    // Program state
    state = {
        url:'',
        store: undefined,
        fetcher: undefined,
        devices: [],
        device: 'Null',
        objects: [],
        object: 'Null',
        sensordata: [],
        otherdata: []
    }

    // Sanity check for when the component gets loaded into the UI
    componentDidMount(){
        console.log(this.props.webId);
    }

    // Callback function after the database URL is commited
    onReceiveURL = (url) => {
        // Save URL to the program state
        this.setState({url, devices: [], objects: []}, () => {
            // Fetch the database into a store
            retrieveStore(url).then(({store, fetcher}) => {
                // Save the store and fetcher into the program state
                this.setState({store, fetcher}, () => {
                    // Obtaining the devices from the database
                    var devices = getDevices(store);
                    // Adding the devices to the program state
                    this.setState({devices});
                })
            }).catch(err => errorToaster(err));
        });
    }

    // Callback function for when the device is picked from the dropdown
    onReceiveDevice = (device) => {
        // Check if the selected item isn't the default "Select an option"
        this.setState({device}, () => {
            if(this.state.device != 'Null'){
                // Getting the objects contained by the device
                var objects = getObjects(this.state.store, device);
                this.setState({objects});
            }
        });

    }

    // Callback function for when the object is pickecd from the dropdown
    onReceiveObject = (object) => {
        this.setState({object}, () => {
            // Obtaining the resources from the object
            var resources = getResources(this.state.store, this.state.object);
            // Getting the data out of the object
            var data = getData(this.state.store, resources);
            // Pushing the data to the local state
            var sensordata = data.filter(data => data.type === 'SensorValues')[0];
            var otherdata = data.filter(data => data.type !== 'SensorValues');
            this.setState({sensordata, otherdata}, () =>{
                console.log(this.state.sensordata);
            });
        })
    }

    render(){
        return(
            <IoTGraphWrapper>
                <IoTGraphContainer>
                    <Header>
                        <h3>Historical data visualization</h3>
                        <p>This page allows you to visualize the historical sensor data saved in your solid pod.</p>
                        <p>Start by entering the URL of the location where the database you wish to visualize is stored.</p>
                        <p>From there, you can pick from the available devices and its objects which resource needs to be visualized.</p>
                    </Header>
                    
                    <Textinput onSubmit = {this.onReceiveURL}></Textinput>
                    <Selectinput onSubmit = {this.onReceiveDevice} options={this.state.devices} label="Pick a device"></Selectinput>
                    <Selectinput onSubmit = {this.onReceiveObject} options={this.state.objects} label="Pick an object"></Selectinput>
                    <Graph></Graph>
                </IoTGraphContainer>
            </IoTGraphWrapper>
        )
    }
}

export default IoTGraph;