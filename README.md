# BOLO Flier Creator Version 7

## Version 7 Developers
- Rachel Hill (rhill016@fiu.edu)
- Victor Estopinan Rodriguez (vesto001@fiu.edu)
- Mario Siu (msiu001@fiu.edu)

This project is the seventh iteration of the BOLO Flier Creator
application conceptualized by the Pinecrest Police Department in Miami,
Florida. The seventh version aims to fix most of bugs found in the sixth
version, as well as to make it more user friendly. 

The current application stack consists of:

- [Pug](https://pugjs.org/)
- [Node.js](http://nodejs.org)
- [Express](http://expressjs.com)
- [SendGrid](https://sendgrid.com)
- [MongoDB](https://www.mongodb.com)

## How to use

This app is designed to be used in a Node.js environment. Version 7 of
the BOLO Flier Creator is designed to be used with a MongoDB server.

## Running the application

### Running MongoDB

A MongoDB server is needed for the application to connect to. A server
can be started locally by running the command "mongod" for testing 
and for the final product.

MongoDB can be downloaded from https://www.mongodb.com/. The Application
was ran and tested under MongoDB v3.2.0, but should be runnable on the
latest version of MongoDB

### Running Node.js

Node/js can be downloaded from https://nodejs.org/en/. The Application
was ran and tested under Node v4.4.7

The application is ran from Code/scr/app.js using node.js. The exact
commands to run in the src directory could be found below for each 
operating system:

	Linux Operating System:
	=======================================
	"APP_URL=http://localhost:3000 PORT=3000 node app.js" 

	Windows Operating System:
	======================================
	"set PORT=3000" (optional)
	"set APP_URL=http://localhost:3000" (optional)
	"node app.js"

## Development Notes

### Secrets
In order for the application to run on a local machine your development
environment needs to have specific Sendgrid credentials set. All you
need to do is save a file named .env in your project root with the
needed API key set.
Example: "SENDGRID_API_KEY = SG.uSrswVRAQ9im..."
*Do not edit the .env.example file and/or commit it.*

## Documentation

The project requires all source code to be documented using
[JSDoc](http://usejsdoc.org) in order to generate documentation.

### Generating Documentation
Generating the documentation is easy! Make sure that JSDoc is installed by
using the `npm install` command. Then type `npm run docs` and that's it.
Open jsdoc/index.html file in your browser to read. Enjoy.