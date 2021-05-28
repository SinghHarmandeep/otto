[Access the live app here](http://mysterious-peak-27311.herokuapp.com/)
# DeliverApp #
This is the server code. in this app will be the server to the deliver anything anywhere app

I will clean this app up to have a basic frontend, but won't give it the ability to access the backend. 

## I will create mobile app to digest the api's from this server ##


***

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* ReactJS, Redux, NodeJS, ExpressJS, MongoDB hosted on heroku project

* System dependencies, check file [package.json](package.json)

* Configuration:
   - Get an API key from GCP, enable google embed api.
   - Create to your MongoDB cluster with the uri
   - Enter your secret key and expration time using .env file, or hardcode the values

[comment]: <> (This is a comment, it will not be)
[comment]: <> (* Database creation * Database initialization * How to run the test suite * Services job queues, cache servers, search engines, etc. Deployment instructions)

## File structure
#### `public` - Holds the index.html styles.css file
## `src` - Holds the entire application
- ### `client` - Holds the client application
  - #### `component` - This folder holds assets such as images, docs, and fonts
  - #### `redux` - This folder holds all of the different components that will make up our views
  - #### `scss` - This holds css styling/overwiting bootstrap styles
  - #### `App.js` - This is what renders all of our browser routes and different views
  - #### `routers.js` - Holds the various routs of the application
  - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- ### `server` - Holds the server application
  - #### `config` - This holds our configuration files, like mongoDB uri
  - #### `models` - This holds all of our data models
  - #### `models` - This holds all of our middlewares
  - #### `validations` - This holds all of our validations
  - #### `routes` - This holds all of our HTTP to URL path associations for each unique url
  - #### `server.js` - Defines npm behaviors and packages for the client
- ### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
- ### `.gitignore` - Tells git which files to ignore
- ### `README` - This file!
- ### `Procfile` - This hold heroku command
- ### `tsconfig.client.json, tsconfig.server.json` - Configuration for client and admin portal
- ### `webpack.config.js` - Bundling configurations for the whole application


