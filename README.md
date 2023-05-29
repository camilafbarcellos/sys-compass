# :compass: Sys Compass

**Challenge 03 – System Compass**

Week 12 • FullStack Journey • Compass UOL • 2023

## :bookmark_tabs: Table of Contents
### [About](#information_source-about-the-app) • [Features](#heavy_check_mark-features) • [Technologies](#gear-technologies) • [Setup](#rocket-setup) • [Issues](#exclamation-know-issues) • [Screenshots](#camera_flash-screenshots)

## :information_source: About The App
Complete Compass.UOL social application including functional register and login pages and a homepage for creating and viewing posts. The project follows a Figma project, and all the data resides in a local Mongo database witch a NestJS backend API that retrieves the data to the frontend by Axios

## :heavy_check_mark: Features
- Sign up page capable of register users to the database
    - Includes both front and backend validation of the inputs
- Login page capable of authenticate registered users and send them to the homepage
    - Uses JSON Web Token (JWT) to authenticate and authorize tokens that lasts 12h
- Individual homepage for each user capable of rendering all posts in the timeline and all other users in the friends list
    - Completely interactive, the logged user can add new posts and like or comment other posts
- NestJS API with complete CRUD routes to [Users](#users-endpoints), [Posts](#posts-endpoints) and [Comments](#comments-endpoints)
- Local Mongo database with [Users](#users-table) and [Posts](#posts-table) collections
- Uses the [Lorem Picsum](https://picsum.photos/) API to generate random pictures used in users profile photo and posts images
- Complete Postman collection containing all the REST API tests and a full API description

## :gear: Technologies
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## :rocket: Setup
- Download or clone the repository
- In the project directory, run `npm install` to download all dependencies
### Backend
- Run `npm start /backend` to run the API locally at [localhost:9000](http://localhost:9000)
- To run at development context, run `npm run dev /backend`
    - Automatically synchronize any changes in the source-code
### Fronted
- Run `npm start /frontend` to run the application locally at [localhost:3000](http://localhost:3000)
    - Automatically synchronize any changes in the source-code
### MongoDB
- Make sure you have a local database named `sys-compass` or add the name of your choice at the variable `DB_DATABASE` on the `.env` document
- You can change the default database variables, like `DB_HOST` and `PORT`, on the `.env` document
    - Default values: `DB_HOST=localhost`, `PORT=27017`, `DB_DATABASE=sys-compass`

## :door: Endpoints

### User Endpoints
|       Route         |    Method    |                   Description                    |                                                                         
|   ---------------   | :----------: |  ----------------------------------------------  |                                                                           
|  `/users`           |    POST      |  Creates a new user                              | 
|  `/users`           |    GET       |  Gets all users                                  |   
|  `/users/:id`       |    GET       |  Gets a specific user by its ID                  |   
|  `/users/:id`       |    PUT       |  Updates a specific user by its ID               |                                                        
|  `/users/:id`       |    DELETE    |  Deletes a specific user by its ID               |                 

### Post Endpoints
|       Route         |    Method    |                   Description                     |                                                                         
|   ---------------   | :----------: |  ----------------------------------------------   |                                                                           
|  `/posts`           |    POST      |  Creates a new post                               | 
|  `/posts`           |    GET       |  Gets all posts                                   |   
|  `/posts/:id`       |    GET       |  Gets a specific post by its ID                   |   
|  `/posts/:id`       |    PUT       |  Updates a specific post by its ID                |                                                        
|  `/posts/:id`       |    DELETE    |  Deletes a specific post by its ID                |

### Comment Endpoints
|            Route            |    Method    |                   Description                     |                                                                         
|       ---------------       | :----------: |  ----------------------------------------------   |                                                                           
|  `/posts/:id/comments`      |    POST      |  Creates a new comment on a specific post         | 
|  `/posts/:id/comments`      |    GET       |  Gets all comments on a specific post             |   
|  `/posts/:id/comments/:id`  |    GET       |  Gets a specific comment on a specific post       |   
|  `/posts/:id/comments/:id`  |    PUT       |  Updates a specific comment by its ID             |                                                        
|  `/posts/:id/comments/:id`  |    DELETE    |  Deletes a specific comment by its ID             |     

## :bricks: Entities

### Users Table
|    FieldName   |    Type   | Required |
|----------------|:---------:|:--------:|
| `id`           | ObjectId  |   true   |
| `name`         | String    |   true   |
| `user`         | String    |   true   |
| `birthday`     | String    |   true   |
| `email`        | String    |   true   |
| `password`     | String    |   true   |
| `profile_photo`| String    |   false  |

### Posts Table
|     FieldName    |    Type   | Required |
|------------------|:---------:|:--------:|
| `id`             | ObjectId  | true     |
| `user`           | String    | true     |
| `description`    | String    | true     |
| `likes`          | Number    | true     |
| `url_image`      | String    | false    |
| `comments`       | Array     | false    |

### Comments Table
|     FieldName    |    Type   | Required |
|------------------|:---------:|:--------:|
| `id`             | ObjectId  | true     |
| `user`           | String    | true     |
| `comment`        | String    | true     |

## :exclamation: Know Issues
- Home page without mobile responsiveness, the layout only fits sceens with resolution greater than or equal to 1024
- Mostly home page buttons are purely visual, the only functional ones are related to adding a new post, adding a new comment, liking/desliking a post and the toggle to show/hide the friends lists

## :camera_flash: Screenshots
![Homepage initial](/src/assets/screenshots/Homepage.png)
![Homepage scrolled](/src/assets/screenshots/Homepage-scrolled.png)
