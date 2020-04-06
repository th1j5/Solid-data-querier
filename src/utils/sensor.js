// Probably won't even use this in the final script, but it's better than having a bunch of static data in the actual script
export class SensorZone {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.sensors = [];
    }
    addSensor(sensor){
        this.sensors.push(sensor);
    }

    getSensorNames(){
        return this.sensors.map(sensor => sensor.name);
    }

    getSensor(name){
        return this.sensors.filter(sensor => sensor.name === name)[0];
    }

    getSensors(){
        return this.sensors;
    }
    getName(){
        return this.name;
    }
}

export class Sensor {
    constructor(name, type, unit){
        this.name = name;
        this.type = type;
        this.unit = unit;
        this.data = [];
    }

    getXtitle(){
        return `time [--timeformat--]`;
    }
    getYtitle(){
        return `${this.type} [${this.unit}]`;
    }
    getName(){
        return this.name;
    }
    getData(){
        return this.data;
    }
    getXLabels(){
        return this.data.map(item => item.x);
    }
    addMeasurement(x,y){
        console.log(`${x}, ${y}`);
        this.data.push({x: x, y: y});
    }
    generateRandomData(N, seed){
        console.log("Generating data");
        for(var i = 0; i < N; i++){
            this.addMeasurement(i, 15+(i**3-i**2+i+seed)%N);
        }
    }
}