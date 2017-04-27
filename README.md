# BOLOv7.0

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

This app is designed to be used in a Node.js environment. Version 7 of
the BOLO Flier Creator is designed to be used with a MongoDB server.

For a manual on how to use BOLOv7.0, please read our user guide section on appendix D of the documentation

## Installation guide

Click [here](https://www.youtube.com/watch?v=4NEW57gPmDA&index=6&list=PLG3lylzOg8Fhu89wnivlmNR74tt7AGC_f) for a step-by-step video to set up BOLOv7.0
 
1. You are going to need a GitHub account, NodeJS, MongoDB, Git tools, a Sendgrid API key and an IDE. 
2. Install NodeJs, MongoDB, your IDE and Git tools.
3. Go to GitHub and go to the project repository and get the clone link
4. Open up a bash shell, and type in “git clone” followed by the link from the repository.
5. While the project is downloading, set up MongoDB so that it points to the local host.
6. Once the repository is cloned, use a CLI, either a command prompt or a bash shell, to navigate to the project folder. Once there navigate to the “Code” folder, and type in “npm install”. This will install all the dependencies onto your machine.
7. While that is installing you need to create your Sendgrid API key. Go to the Sendgrid website and make an account, it is free.
8. Once your account is setup, go to settings and find the option that says “Generate API Key”.
9. Follow the steps and generate the API Key. DO NOT NAVIGATE AWAY FROM THE WEBPAGE, unless you have copied the API key to a text document or your clipboard. It will disappear and you won’t be able to view it again.
10. Open up your IDE and then open up the project folder. Once it is loaded up, you are going to look for a file named .env.example. Make a copy of this file and name it .env. This file has a line that dedicated to the Sendgrid API Key, locate that line and past your Sendgrid API key into it.
11. Your dependencies should be finished installing by now, but if they haven’t just wait. Use either a bash shell or a command prompt and navigate to the MongoDB folder.
12. Ensure that you have root privileges or administrative rights, then navigate to the bin folder. Here type the command “mongod”, depending on your operating system you might need to use the command “./mongod” instead. This will start the database.
13. Open a new bash shell or command prompt and navigate to the project folder. Once there navigate to the “Code/src” folder and start the web application by running “node app.js”. Your application should start with no issues and now you are ready to begin using and or coding for the BOLO Flier Creator web application.
14. If you get an error please ensure that MongoDB is running, that no other service is using port 3000, and also that all your dependencies are installed correctly.

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