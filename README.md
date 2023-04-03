# :closed_lock_with_key: Sys Compass Login

**Challenge 01 – System Compass**

Week 4 • FullStack Journey • Compass UOL • 2023

## :bookmark_tabs: Table of Contents
### [Deploy](#globe_with_meridians-vercel-deploy) • [About](#information_source-about-the-app) • [Validations](#heavy_check_mark-validations) • [Technologies](#gear-technologies) • [Setup](#rocket-setup) • [Screenshots](#camera_flash-screenshots)

## :globe_with_meridians: Vercel Deploy

Access the website at [sys-compass-login.vercel.app](https://sys-compass-login.vercel.app/)

## :information_source: About The App
Login and registration screen of a Compass.UOL application following a Figma project with input validations

## :heavy_check_mark: Validations
### Login
- Must validate 'admin' credentials
- Username must be an user or an email
- Username and password must follow a valid pattern as assigned by RegEx

### Sign Up
- All inputs, except for birth date, must follow a valid pattern as assigned by RegEx
- Password and password confirmation must match with real-time validation

## :gear: Technologies
![TypeScript logo](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ReactJS logo](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![ReactRouter logo](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS logo](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel logo](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## :rocket: Setup
- Download or clone the repository
- In the project directory, run `npm install` to download all dependencies
- Run `npm start` to run the application locally at [localhost:3000](http://localhost:3000)

## :camera_flash: Screenshots
### Login
![LoginPage](/src/assets/screenshots/LoginPage.png)

### Login with username error
![LoginUsernameError](/src/assets/screenshots/LoginUsernameError.png)

### Login with 'admin' credentials error
![LoginAdminError](/src/assets/screenshots/LoginAdminError.png)

### Login (mobile)
![LoginMobile](/src/assets/screenshots/LoginMobile.png)

### Sign Up
![SignupPage](/src/assets/screenshots/SignupPage.png)

### Sign Up with input errors
![SignupErrors](/src/assets/screenshots/SignupErrors.png)

### Sign Up (mobile)
![SignupMobile](/src/assets/screenshots/SignupMobile.png)