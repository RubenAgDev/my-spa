This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available POCs to Run the App

### Run the app in development mode

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### Run the app in a Docker container

`npm run docker-build`

Builds the Docker image using multi-stage builds:
1) build-stage: From Node.js to build the app using react-scripts package
2) From nginx to serve the single page application

`npm run docker-run`
Runs the Docker container in the port 8080
