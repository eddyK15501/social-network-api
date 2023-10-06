# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Backend API for a social networking web application. Enable users to create a list of friends, as well as share and react to thoughts. No seed data is provided. MongoDB utilized as a database, Mongoose.js as the Object Document Model (ODM) library, and Express.js for server-side routing. API testing done with Postman.

## Video Demonstration of Application
* [Click Here](https://github.com/eddyK15501/social-network-api/issues/2#issue-1929377450)

## Installation
* Required: LTS or latest version of Node.js
* Required: MongoDB version 6.0 or higher
* Required: API testing tool (i.e. Postman, Insomnia, etc.)

## Usage
* #### Clone the repository:

<img width="450px" src="https://user-images.githubusercontent.com/88423414/272737165-f3566b5e-be58-4383-bc99-a6440bbd55f3.png">

* #### Open up a terminal window and navigate to the path of the repository directory. Install the Node.js dependencies listed in the package.json, and start the server with:

```
npm install
npm run devStart
```

* #### Localhost server will be running on port 3001 to test the APIs. Look for comments added to `userRoutes.js` and `thoughtsRoutes.js`, within the `/routes` folder, to provide guidance on the specific paths and their corresponding HTTP methods:

<img width="550px" src="https://user-images.githubusercontent.com/88423414/272745065-d5ac62fe-574a-48fe-94d8-c8d59ca4eeb0.png">

## Credits
* To my persistent classmates at the UNC coding bootcamp.
* Written by Edward Kim.

## License
This application is licensed under the [MIT License](./LICENSE).
