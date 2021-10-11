<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/calvinrahmat/blanja.git">
    <img src="https://res.cloudinary.com/calvin-cloud/image/upload/v1627004541/Front%20End/logo_blanja_jtyc2a.svg"  alt="Logo">
  </a>

  <p align="center">
    <br />
    <a href="https://github.com/calvinrahmat/blanja.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.blanja.site/">View Demo</a>
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
    <li><a href="#enviromental-variables">Environmental Variables</a></li>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#contact">Contact</a></>
  </ol>
</details>
  
<!-- ABOUT THE PROJECT -->

## About The Project

Blanja.site is the E-Commerce prototype that sells fashion products. Build with ReactJS, Redux, ExpressJS, NodeJS and PostgreSQL. You can check the back-end in this repo: https://github.com/calvinrahmat/blanja-backend.git
  
### Screenshots
|  |  |  |
| :---: | :---: | :---: |
| ![screenshot_1](https://res.cloudinary.com/calvin-cloud/image/upload/v1633265455/Blanja%20SS/Screenshot_from_2021-10-03_19-48-21_i6c4bk.png) Home  | ![screenshot_2](https://res.cloudinary.com/calvin-cloud/image/upload/v1631234088/Blanja%20SS/ezgif-2-06ed2e840349_uzzk2o.gif) Searching Product  | ![screenshot_3](https://res.cloudinary.com/calvin-cloud/image/upload/v1633922951/Blanja%20SS/Screenshot_from_2021-10-11_10-28-54_f6nanl.png) Register Customer |
| ![screenshot_4](https://res.cloudinary.com/calvin-cloud/image/upload/v1633275168/Blanja%20SS/Screenshot_from_2021-10-03_22-32-32_yfsoww.png) Register Seller| ![screenshot_5](https://res.cloudinary.com/calvin-cloud/image/upload/v1632178344/Blanja%20SS%202/Screenshot_from_2021-09-21_05-50-59_zonzeg.png) Login  |  ![screenshot_6](https://res.cloudinary.com/calvin-cloud/image/upload/v1633265455/Blanja%20SS/Screenshot_from_2021-10-03_19-48-21_i6c4bk.png) Home After Login  | 
|![screenshot_7](https://res.cloudinary.com/calvin-cloud/image/upload/v1633265772/Blanja%20SS/Screenshot_from_2021-10-03_19-51-58_ms3u9a.png) Preview Product | ![screenshot_8](https://res.cloudinary.com/calvin-cloud/image/upload/v1633265772/Blanja%20SS/Screenshot_from_2021-10-03_19-51-33_maumpq.png) Bag  | ![screenshot_9](https://res.cloudinary.com/calvin-cloud/image/upload/v1633306621/Blanja%20SS/Screenshot_from_2021-10-04_07-16-41_ajhcic.png) Profile Customer | 
| ![screenshot_10](https://res.cloudinary.com/calvin-cloud/image/upload/v1633265772/Blanja%20SS/Screenshot_from_2021-10-03_19-53-39_twpuds.png) Profile Seller | ![screenshot_11](https://res.cloudinary.com/calvin-cloud/image/upload/v1633265772/Blanja%20SS/Screenshot_from_2021-10-03_19-53-58_eewh0t.png) Inventory Seller | ![screenshot_12](https://res.cloudinary.com/calvin-cloud/image/upload/v1633265772/Blanja%20SS/Screenshot_from_2021-10-03_19-54-35_oaiqjh.png) Add or Edit Product |

<p align="right">(<a href="#top">back to top</a>)</p>
  

### Deployment

You can see this repo to learn about the deployment in Kubernetes:   <a href="https://github.com/calvinrahmat/k8s-install.git">Kubernetes Installation</a>


  <img src="https://res.cloudinary.com/calvin-cloud/image/upload/v1633333761/Blanja%20SS/CI_CD_Flow_page-0001_zykte4.jpg" width="400">
  
  

## Built With

- [ReactJS](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Query](https://react-query.tanstack.com/)
- [Framer Motion](https://www.framer.com/motion/)


<p align="right">(<a href="#top">back to top</a>)</p>


### Installation

1. Clone the repo for the front-end
   ```sh
   git clone https://github.com/calvinrahmat/blanja.git
   ```
2. Clone the repo for the back-end
   ```sh
   git clone https://github.com/calvinrahmat/blanja-backend.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your env for making request to the backend API

<p align="right">(<a href="#top">back to top</a>)</p>


### Environmental Variables

You must provide the env value to use the api from the backend.

REACT_APP_API = http://localhost:7123/api/

<p align="right">(<a href="#top">back to top</a>)</p>

### Functionality Overview

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
  
  ### Backend
  You can check the back-end in this repo: https://github.com/calvinrahmat/blanja-backend.git

  <p align="right">(<a href="#top">back to top</a>)</p>

<br />

### Contact

LinkedIn - [https://www.linkedin.com/in/calvin-rahmat](https://www.linkedin.com/in/calvin-rahmat)
