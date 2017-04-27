# BOLO-7.0

## Version 7 Developers
- Mario Siu (msiu001@fiu.edu)
- Rachel Hill (rhill016@fiu.edu)
- Victor Estopinan (vesto001@fiu.edu)

This project is the sixth iteration of the BOLO Flier Creator
application conceptualized by the Pinecrest Police Department in Miami,
Florida. The sixth version aims to convert the application to mongoDB,
add more features and test the application.

The current application stack consists of:

- [Pug](https://pugjs.org/)
- [Node.js](http://nodejs.org)
- [Express](http://expressjs.com)
- [SendGrid](https://sendgrid.com)
- [MongoDB](https://www.mongodb.com)

## How to use

This app is designed to be used in a Node.js environment. Version 6 of
the BOLO Flier Creator is designed to be used with a MongoDB server.

## Running the application

### Running MongoDB

A mongoDB server is need form the application to connect to. A server
can be started locally for testing and for the final product.

MongoDB can be downloaded from https://www.mongodb.com/. The Application
was ran and tested under MongoDB v3.4.2, but should be runnable on the
latest version of MongoDB

### Running Node.js

Node/js can be downloaded from https://nodejs.org/en/. The Application
was ran and tested under Node v6.10.0

The application is ran from Code/scr/app.js using node.js. The exact
command is:
"node app.js APP_URL=http://localhost:3000 "
while in the src directory

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