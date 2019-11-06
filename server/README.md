///////////////////////////////////////////////////////////////////////////////////////////////
before running this project folder, please install npm package using code below

//npm install --save//

then the version of tools which i have used so far like bcrypt, express,mongoose so on and so forth,
will be same.(for the version controll)

(package.json file keeps recode of version for the tools i have used,so sometime
different version of tools will bring some error
so that needs to install npm package to equalize dependancy in package.json)

In your commond protocol or terminal, type "cd server"...now you can access to "server folder(back-end)"
then type "npm start", it will be run.

Intentionally, i set a nodemon as error handling for back-end which can keep the inspection of error,
when typeing the comand...npm start , the web application will be run as well as nodemon will start.

Folder structure!
this folder structurer is based on MVC(models,views,controllers)

controllers(to control functionality)
No View folder,instead router folder(for route controll,
each route has endpoint and function from external files)
Models (Schema)
lastly, server files (midlleware between route and server conection).

what is more !!!
//please download "POST MAN" for testing tool to intaract with server and check documentation in the website beforehand//
i will explain how to use it and work next week.

https://www.getpostman.com/

Not but at least !!!
///use of back end tools(references) ///
For login user function, i used the bcrypt to hash the password ...reference is here below,
//bcrypt//
https://www.npmjs.com/package/bcrypt
https://medium.com/@xoor/building-a-node-js-rest-api-3-the-database-972962ae61d3
//jwt webToken//
https://www.npmjs.com/package/jsonwebtoken
https://medium.com/@siddharthac6/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e
//mongoose//
https://mongoosejs.com/docs/guide.html
//authentication mongoose//webtoken.bcrypt
http://blog.alphaplus.vn/2017/09/build-simple-blog-with-nodejs-express-mongodb-part-6.html
please check it!!
///////////////////////////////////////////////////////////////////////////////////////////////
