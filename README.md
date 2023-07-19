# :compass: Sys Compass

**Challenge 03 – System Compass**

Week 12 • FullStack Journey • Compass UOL • 2023

## :bookmark_tabs: Table of Contents
### [About](#information_source-about-the-app) • [Features](#heavy_check_mark-features) • [Technologies](#gear-technologies) • [Setup](#rocket-setup) • [Endpoints](#door-endpoints) • [Schemas](#bricks-schemas) • [Issues](#exclamation-know-issues) • [Screenshots](#camera_flash-screenshots)

## :information_source: About The App
<p align="center">
  <img src="/frontend/src/assets/images/compass-uol-logo.png" />
</p>

Complete [Compass.UOL](https://compass.uol/en/home/) social application including functional register and login pages and a homepage for creating and viewing posts. The project follows a Figma layout, and all the data resides in a local Mongo database with a NestJS backend API that serves the data to the frontend by [Axios](https://axios-http.com/)

## :heavy_check_mark: Features
- Sign up page capable of register users to the database
    - Includes both front and backend input validation
- Login page capable of authenticate users and send them to the homepage
    - Uses [JSON Web Token (JWT)](https://jwt.io/) to authenticate and authorize tokens that lasts 12h
- Individual homepage for each user capable of rendering all posts in the timeline and all other users in the friends list
    - Completely interactive, the logged user can add new posts and like or comment other posts
- [NestJS](https://nestjs.com/) API with complete CRUD routes to [Users](#users-endpoints), [Posts](#posts-endpoints) and [Comments](#comments-endpoints)
- Local [Mongo](https://www.mongodb.com/) database with [Users](#user-entity) and [Posts](#post-entity) collections
- Uses the [Lorem Picsum](https://picsum.photos/) API to generate random pictures used in users profile photo and posts images
- Complete [Postman](https://www.postman.com/) collection containing all the REST API tests and a full detailed description

## :gear: Technologies
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)

## :rocket: Setup
- Download or clone the repository
- In the project directory, open two terminals and follow the instructions below to setup both back and frontend
    - Both terminals must be active to correctly run the application

### Backend
- In the first terminal, access the backend directory
```
cd backend/
```
- Download all required dependencies
```
npm i
```
- Run the API locally at [localhost:9000](http://localhost:9000)
```
npm start
```
- Or run at development context to automatically synchronize any changes in the source-code
```
npm run dev
```

### Frontend
- In the second terminal, access the frontend directory
```
cd frontend/
```
- Download all required dependencies
```
npm i
```
- Run the application locally at [localhost:3000](http://localhost:3000)
```
npm start
```

### MongoDB and Postman
- Make sure you have a local Mongo database named **`sys-compass`** running locally at the port **27017**
- You can also change the default database variables on the `.env` file at the root of the ``backend`` directory to fit your needs
    - **Default values:** `DB_HOST=localhost`, `PORT=27017`, `DB_DATABASE=sys-compass`
- If wanted to, you can import both [Users](#user-entity) and [Posts](#post-entity) full and ready collections directly to your MongoDB from the JSON files at the root of this project
    - [Users collection](/github/users.json)
    - [Posts collection](/github/posts.json)
- At the root of this project, there's also a JSON file of a [Postman collection](/github/sys-compass_API.postman_collection.json) that can be directly imported to your Postman to check the full API description and request examples
    - At Postman, follow ``Import > Select file`` to correctly import the collection and use it

[↑ Back to top](#compass-sys-compass)

## :door: Endpoints

### Users Endpoints
|       Route         |    Method    |                   Description                    |                                                                         
|   ---------------   | :----------: |  ----------------------------------------------  |                                                                           
|  `/users`           |    POST      |  Creates a new user                              | 
|  `/users`           |    GET       |  Gets all users                                  |   
|  `/users/:id`       |    GET       |  Gets a specific user by its ID                  |   
|  `/users/:id`       |    PUT       |  Updates a specific user by its ID               |                                                        
|  `/users/:id`       |    DELETE    |  Deletes a specific user by its ID               |                 

### Posts Endpoints
|       Route         |    Method    |                   Description                     |                                                                         
|   ---------------   | :----------: |  ----------------------------------------------   |                                                                           
|  `/posts`           |    POST      |  Creates a new post                               | 
|  `/posts`           |    GET       |  Gets all posts                                   |   
|  `/posts/:id`       |    GET       |  Gets a specific post by its ID                   |   
|  `/posts/:id`       |    PUT       |  Updates a specific post by its ID                |                                                        
|  `/posts/:id`       |    DELETE    |  Deletes a specific post by its ID                |

### Comments Endpoints
|            Route            |    Method    |                   Description                     |                                                                         
|       ---------------       | :----------: |  ----------------------------------------------   |                                                                           
|  `/posts/:id/comments`      |    POST      |  Creates a new comment on a specific post         | 
|  `/posts/:id/comments`      |    GET       |  Gets all comments on a specific post             |   
|  `/posts/:id/comments/:id`  |    GET       |  Gets a specific comment by its ID                |   
|  `/posts/:id/comments/:id`  |    PUT       |  Updates a specific comment by its ID             |                                                        
|  `/posts/:id/comments/:id`  |    DELETE    |  Deletes a specific comment by its ID             |     

### Login Authentication Endpoints
|       Route         |    Method    |                   Description                    |                                                                         
|   ---------------   | :----------: |  ----------------------------------------------  |                                                                           
|  `/users/login`     |    POST      |  Login a user and generates it's JWT token       | 
|  `/users/me`        |    GET       |  Validates a user's JWT token and returns the ID | 

[↑ Back to top](#compass-sys-compass)

## :bricks: Schemas

### User Entity
|    FieldName   |    Type   | Required |
|----------------|:---------:|:--------:|
| `id`           | ObjectId  |   true   |
| `name`         | String    |   true   |
| `user`         | String    |   true   |
| `birthdate`    | Date      |   true   |
| `email`        | String    |   true   |
| `password`     | String    |   true   |
| `profile_photo`| String    |   false  |

### Post Entity
|     FieldName    |    Type   | Required |
|------------------|:---------:|:--------:|
| `id`             | ObjectId  | true     |
| `user`           | String    | true     |
| `post_date`      | Date      | true     |
| `description`    | String    | true     |
| `likes`          | Number    | true     |
| `comments`       | Array     | false    |
| `url_image`      | String    | false    |

### Comment Entity
|     FieldName    |    Type   | Required |
|------------------|:---------:|:--------:|
| `id`             | ObjectId  | true     |
| `user`           | String    | true     |
| `comment`        | String    | true     |

[↑ Back to top](#compass-sys-compass)

## :exclamation: Know Issues
- The MongoDB collections and entities [Users](#user-entity), [Posts](#post-entity) and [Comments](#comment-entity) are totally individual and don't share any relationship with eachother (OneToMany and ManyToOne)
- Homepage without mobile responsiveness, the layout only fits sceens with resolution greater than or equal to 1024
- Mostly homepage buttons are purely visual, the only functional ones are related to adding a new post, adding a new comment, liking/disliking a post and the toggle to show/hide the friends lists

## :camera_flash: Screenshots
### Register page
![Signup](/github/screenshots/Signup.jpeg)

### Login page
![Login](/github/screenshots/Login.jpeg)

### Homepage
![Homepage](/github/screenshots/Homepage.jpeg)

[↑ Back to top](#compass-sys-compass)
