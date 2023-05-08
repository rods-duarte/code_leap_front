# Code Leap Front-End Challenge

This project is a social web app where users can create posts. You can access <a href="http://167.99.234.217/">here</a>.

<br>


# Features
<ul>
  <li> Signup </li>
  <li> Login permanence with local storage</li>
  <li> Create, edit and delete posts </li>
  <li> Endless scroll </li>
  <li> CSS animations </li>
</ul>

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white'>
</p>

## How to run for development
1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Populate `.env` file based on `.env.example`. `REACT_APP_API_BASE_URL` should point to your API (`https://dev.codeleap.co.uk/careers/`)

4. Run the front-end in a development environment:

```bash
npm run start
```

5. Access on port 3000 

## How to run with Docker
1. Clone this repository
2. Install Docker (https://docs.docker.com/engine/install/ubuntu/)
3. If you can't run ```docker run``` without ```sudo```, run:

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```
4. Install ```docker-compose```

```bash
sudo apt install docker-compose
```

5. Populate `.env` file based on `.env.example`. `REACT_APP_API_BASE_URL` should point to your API (`https://dev.codeleap.co.uk/careers/`)

6. On the project path, run:

```bash
npm run start:docker
```

7. Access on port 80
