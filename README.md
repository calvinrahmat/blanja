<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Blanja</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/calvinrahmat/blanja.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://blanja.site/">View Demo</a>
    ·
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#environment">Environmental Variables</a></li>
    <li><a href="#function">Functionality Overview</a></li>
    <li><a href="#contact">Contact</a></>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Blanja.site is the E-Commerce prototype that sells fashion products. Build with ReactJS and Redux. Alternatively, you can add `.env` file in the root folder of project to set environment variables (use PORT to change webserver's port). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. Refer to [dotenv](https://github.com/motdotla/dotenv) and [React](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) documentation for more details.

## Built With

- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)

## Installation

1. Clone the repo for the front-end
   ```sh
   git clone https://github.com/calvinrahmat/blanja.git
   ```
1. Clone the repo for the front-end
   ```sh
   git clone https://github.com/calvinrahmat/blanja.git
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Enter your env for making request to the backend API

## Environmental Variables

You must provide the env value to use the api from the backend.

REACT_APP_API = http://localhost:7123/api/

## Functionality Overview

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on profile page and navbar)
- CRU\* users (sign up & edit profile - no deleting required)
- CRUD products

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
  - List of products
- Sign in/Sign up pages (URL: /#/login, /#/register )
  - Use JWT (store the token in localStorage)
- Search page (URL: /#/search )
- Cunsomer page to view and update the bag/cart (URL: /#/bag)
- Seller page to create/edit products (URL: /#/seller/add-product, /#/seller/edit-product/id )
- Seller page to check inventory (URL: /#/seller/inventory )

<br />
<!-- CONTACT -->

## Contact

LinkedIn - [https://www.linkedin.com/in/calvin-rahmat](https://www.linkedin.com/in/calvin-rahmat)
