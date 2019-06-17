# React, Node, Express, API based WestElm Challenge

## Getting Started:
1. clone this repo
2. type `cd React-WestElmAPI` in the terminal in the folder that contains the repo.
3. type `npm install` in the terminal in this same folder. 
4. The above command will install the dependencies and  create the node modules directory in the repo
5. type `npm run start` in the terminal in this same folder.
6. The above command will start the front end on port 3000 and also the server on port 3001.

## A few useful Details:
* If you have something already running on port 3000, then you will get a message asking if you would like to use another port. Type `y` for yes. 
* The front end port will automatically open up in your browser at either port 3000 or a port that is free.
* You can also manually type `localhost:<port>` in a tab in your browser to go to the front end port.
* If you have something running on the server port 3001, then this application will automatically close everything that was previously running and will run the server for this app on port 3001.
* (IF INTERESTED) If you would like to see the JSON data being fetched by the server from the WestElm API and being used by the React Frontend, then you can go to the port 3001 by typing `localhost:3001` in a tab in your browser.

## Info about project:
* This project uses React, React Hooks, Node, Express, Cors, Axios, Javascript, HTML, CSS, lodash, node-fetch
* The highlight of this project is that it places the server in a file within the front end itself. The start scripts have been edited such that a single command starts the React Hooks Front End as well as the server on different ports. This makes the application very simple to use.

## Highlights of the project:
* App uses data from the WestElm server using API calls.
* Ease of use with a single `npm run start` command to start both the server and the front-end.
* Clickable thumbnails to render bigger image.
* Overlay Carousal when the hero image is clicked.
* When a different hero image is clicked the previos Carousal disappears.
* Responsive experience with 1 column on mobile to 3 columns on desktop.

## Project Development details:
* I started by developing the project with a simple javascript file and an HTML file using vanilla javascript.
* First issue I ran into was the CORS(Cross-Origin Resource Sharing) issue. However no solution from the client side could bypass this issue, since the problem is in the configurations of the WestElm website which is missing the required headers. The JSON from the API loads properly when the API link is accessed directly by typing the url in a tab in the browser. This is because in that case the API call is originating from the server side itself and not from the client side. I made the GET call using postman which showed the results properly so I could see that the headers are missing. Any combination of headers on the client side did not work. Even though I was getting a 200 status, no data was being received due to the CORS issue.
* To solve the CORS issue one way would be to request the server handlers to include the CORS preflight fixes to the server code to enable a client to access the data.
* The other way would be to BUILD MY OWN SERVER, use it to fetch the data fromn the WestElm server and then send it to the client from my own server. This is the route I decided to take to bypass the CORS Issue.
* But first I proceeded to build the front end. I copy pasted the data from the API into a javascript file so I could have the hard coded data to build the front-end.
* I needed to handle state of components so I decided to add in React as a cdn.
* After adding the Carousel the javascript file had become super long so I decided to add in Node to make the code modular and for easy access of code separated into different files. 
* Once the front end was complete, I added Express to build a server. Now I could delete the hard coded data file. The express server helped retrieve the data directly from the WestElm server by making api calls and deliver it to the client. Including the server in the React application and running the entire app by a single `npm run start` command made the app easy to use.

## TODO with more time:
* add tests
* implement JSDOC for type checking and documentation
* add images to the Read Me
* add more styling