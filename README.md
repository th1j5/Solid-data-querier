# Solid IoT (LwM2M) Data visualizer

## Description

Local Webapp based on React app generator (Inrupt, Facebook) which interfaces with turtle files on a datapod, loads in the data and visualizes it.
It was developed in the context of the VOP of Thijs Paelman, Kobe Hens, Axl Bomhals and Flor Sanders taking a first step to combine the worlds of Solid (Linked data distributed storage) and IoT (in the form of a LwM2M network).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

!Important: Don't forget to run npm install after cloning to get the dependencies in order.

- `npm start`: Starts local webserver on port 3000 through which the webapp can be tested during development.
- `npm test`: runs available tests (would be nice if we'd used test-driven development).
- `npm run build`: Builds the app for production in the build folder, minifies everything and makes it ready for deployment.
- `npm run eject`: This will give you access to all the fine configuration of the tools behind the app builder, ejects the app builder and replaces it by its transitive dependencies. (**one way operation! Not recommended.**)

## Related repositories
- [Solid data Saver](https://github.ugent.be/fpsander/soliddatasaver): This is the repository containing the code for interfacing with the LeShan LwM2M server, converting incoming data to RDF using RDF-mapper and saving them to the solid datapod.