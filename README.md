# :busts_in_silhouette: Sys Compass Social

**Challenge 02 – System Compass**

Week 8 • FullStack Journey • Compass UOL • 2023

## :bookmark_tabs: Table of Contents
### [About](#information_source-about-the-app) • [Features](#heavy_check_mark-features) • [Technologies](#gear-technologies) • [Setup](#rocket-setup) • [Issues](#exclamation-know-issues) • [Screenshots](#camera_flash-screenshots)

## :information_source: About The App
Homepage of a Compass.UOL social application focused on creating and viewing posts. The project follows a Figma project with JSON data fetched and consumed by a simple API

## :heavy_check_mark: Features
- Login page capable of authorizing registered users to the homepage by browser session storage
- Unique homepage for each user capable of rendering all posts in the timeline and the friends list
    - Unique stands for showing the proper data of the logged user (name and friends list that doesn't include himself)
- API with 2 GET routes, `/users` and `/posts`, that returns the list of users and the posts of each user
    - No database has been used yet, so all the data is provided by the API and resides in a JSON file
    - JSON data retrieved by fetch API
- Uses the [Lorem Picsum](https://picsum.photos/) API to generate random pictures used in homepage
- Home page allows adding new posts via "add post" input (only visually, doesn't persist to the JSON of posts)
- Home page allows dinamically liking and disliking posts, with visual (color/text) impact and dinamic number of likes

## :gear: Technologies
![TypeScript logo](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ReactJS logo](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![ReactRouter logo](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS logo](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS logo](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## :rocket: Setup
- Download or clone the repository
- In the project directory, run `npm install` to download all dependencies
- Run `npm start` to run the application locally at [localhost:3000](http://localhost:3000) and the API at [localhost:9000](http://localhost:9000)

### Development context
- Instead of `npm start`, run `npm run dev` to run the application locally at [localhost:3000](http://localhost:3000) and the API at [localhost:9000](http://localhost:9000)
- Both frontend application and backend API will automatically synchronize any changes in the source-code due to [nodemon](https://www.npmjs.com/package/nodemon)

## :exclamation: Know Issues
- Signup page is not functional and doesn't actually persists data to the JSON of users
- Home page without CSS layout responsiveness
- Mostly home page buttons are purely visual and not functional

## :camera_flash: Screenshots
![Homepage initial](/src/assets/screenshots/Homepage.png)
![Homepage scrolled](/src/assets/screenshots/Homepage-scrolled.png)