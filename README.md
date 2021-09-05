### <b>BLOGS</b> 
- This repository contains backend code developed for an application capable of rendering blogs .

### <b>Functionalities<b>
- Display/GET All Blogs
- Search/GET Blog(based on id)
- Create Blog
- Update Existing Blog (by id)
- Delete Existing Blog (by id)
<br>

### <b>Additional Feature:<b>
- Two storage operations available:
<ol>
  <li>Local storage</li>
  <li>Cloud storage</li>
</ol>

<details open="open">
  <summary><b>Table of Contents</b></summary>
  <ol>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
      <li> <a href="#built-with">Built With</a> </li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#storage">Storage options</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#directory-tree">Directory-tree</a></li>
  </ol>
</details>
<br>
<br>
<br>


### <b>Prerequisites</b>
-  Javascript(ES5,ES6)
-  Cloudinary,Multer (Basics)
<br>


### <b>Folder Structure</b>
- Model-View-Controller (MVC) folder structure
<br>


### <b>Built With</b>
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [REST API](https://restfulapi.net/)
<br>
<br>



### <b>Installation</b>
- Open terminal,redirect to the folder where you want this repository.
- Type the following commands in order to ensure,the project is now available on your machine with all the necessary packages installed

1. Clone the repo
   ```sh
   git clone https://github.com/s3kamble/Blog-rendering
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start with the following command
   ```sh
   npm run start
<br>
<br>

## <u><b>Storage</b></u>
<br>
<ul>
  <li>Local storage:</li>
    <ol>
      <li>The "IMAGE" will be stored in a file locally</li>
      <li>To use this storage option:change <b>STORAGE=file</b> in config.env</li>
    </ol>
  <li>
  <li>Cloud storage:</li>
    <ol>
      <li>The "IMAGE" will be stored on cloudinary</li>
      <li>To use this storage option:change <b>STORAGE=database</b> in config.env</li>
    </ol>
  </li>
</ul>


## <u><b>Usage</b></u>
<br>
<ul>
    <li>To integrate  front-end applications use the below mentioned endpoints,as and when required </li>   
</ul>

*  To test the given endpoints,use "Postman" app :
<br>
  
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17003746-28d2f269-c173-4f75-b5e1-768e54cc3b7c?action=collection%2Ffork&collection-url=entityId%3D17003746-28d2f269-c173-4f75-b5e1-768e54cc3b7c%26entityType%3Dcollection%26workspaceId%3D29424687-6818-4cf4-8fe6-db66728f90f7)

<br>

<h1>Get all blogs</h1>
<h2>GET request </h2>
 
 ```sh
    localhost:4000/blogs/
   ```
<p>Expected Output: </p>
<img src="https://s3kamble.github.io/to-do-images/assets/GET-Blog.png"></img>
<br>
<br>

<h1>Get a particular Blog by id</h1>
<h2>GET request </h2>

 ```sh
    localhost:4000/blogs/:blogId
   ```
<p>:blogId -->unique id to be searched for </p>
<p>Expected Output: </p>
<img src="https://s3kamble.github.io/to-do-images/assets/GET%20-id.png"></img>
<br>
<br>

<h1>Create a Blog</h1>
<h2>POST request </h2>

```sh
    localhost:4000/blogs/:blogId
   ```
<p> Requires form-data body with following  arguements: </p>
<p>Postman --> body --> form-data -->Enter key value pairs</p>
   <ul>
    <li>blogImage:file</li>
    <li>author:string </li>
    <li>title:string </li>
    <li>content:string</li>
    <li>tags:array of objects</li>
    <li>relatedLinks:array of objects</li>
    <li>
         <p>Expected Output: </p>        
         <img src="https://s3kamble.github.io/to-do-images/assets/POST-blog.png"></img>
   </li>
</ul>
<br>
<br>

<h1>Update an existing Blog</h1>
<h2>PUT request </h2>

```sh
    localhost:4000/blogs/:blogId
   ```
<p>Postman --> body --> form-data -->Enter key value pairs</p>
<p>Optional arguements mentioned below</p>
   <ul>
    <li>blogImage:file</li>
    <li>author:string </li>
    <li>title:string </li>
    <li>content:string</li>
    <li>tags:array of objects</li>
    <li>relatedLinks:array of objects</li>
    <li>
    <p>Expected Output: </p>
    <img src="https://s3kamble.github.io/to-do-images/assets/PUT.png">
</li>
</ul>
<br>
<br>

<h1>DELETE a particular Blog by id</h1>
<h2>DELETE request </h2>

```sh
    localhost:4000/blogs/:blogId
   ```

<p>Expected Output: </p>
<img src="https://s3kamble.github.io/to-do-images/assets/delete%20blog.png"></img>

<br>
<b>ERRORS<b>
<p>If you miss out on some key,or something goes wrong ,an error message will be shown ,which will guide you for the error</p>
<p>Example: </p>
<img src="https://s3kamble.github.io/to-do-images/assets/Create-error.png"></img>

<i>The examples shown above are from the POSTMAN app </i>
<br>
<br>


### <b>Directory-tree</b>
```
├── app.js
├── assets
│   ├── Create-error.png
│   ├── delete blog.png
│   ├── Delete- blog.png
│   ├── GET-Blog.png
│   ├── GET -id.png
│   ├── POST-blog.png
│   ├── POST-error.png
│   └── PUT.png
├── config
│   └── cloudinaryConfig.js
├── config.env
├── controllers
│   ├── blogController.js
│   └── multerImageController.js
├── dummyConfig.env
├── models
│   └── blogModel.js
├── package.json
├── package-lock.json
├── README.md
├── routes
│   └── blogRouter.js
├── server.js
├── uploads
└── utils
    ├── errorResponse.js
    └── sendResponse.js

```

