# Linkodod

Application to stay in touch with kodkod share and enjoy

## Server Side

## Technologies Used

- **JavaScript**
- **Express**
- **Bcrypt**
- **Jsonwebtoken**
- **Multer**
- **Cors**

## Project Structure

```
server/
└────
     │  ├── app.js                               # launch the server
     ├── controller/
     │   ├── AuthController.js                   # authentification controller
     │   └── PostController.js                   # posts controller
     ├── middleware/
     │   ├── imageMiddleware.js                  # middleware to upload image
     │   └── application_layout/                 # verify if token exist
     ├── routes/
     │   ├── AuthRoute.js                        # authentification routes
     │   └── PostRoute.js                        # posts routes
     ├── service/
     │       ├── authService.js                  # authentification service
     │       └── postService.js                  # posts service
     ├── tests/
     │       ├── controller/
     │       │        └── authContoller.test.js  # authentification controller test
     │       ├── service/
     │       │        └── authService.test.js    # authentification service test
     └──── utils/
         ├── file.js                             # manage files
         └── generateToken.js                    # create token
```

## To run

-clone it
-npm i
-create folder public
-create file posts.json
-create file users.json
-create subfile images
-create .env with PORT and JWT_SECRET or use with the one in the code
-node .\app.js
