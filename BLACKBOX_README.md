 # User Management API 

This is a user management API built with Node.js, Express, and MongoDB. The API allows users to perform various operations on user data, such as creating, retrieving, updating, and deleting users. The API also includes authentication and authorization features.

## Getting Started

To get started, clone the repository and install the dependencies.

```
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
npm install
```

Once the dependencies are installed, start the server.

```
npm start
```
## OR
```
npm run dev
```

The server will run on port 4000.

## API Endpoints

The API provides the following endpoints:

* `/users`: Get all users.
* `/users/search`: Search for users by first name, last name, email, or password.
* `/users/add`: Add a new user.
* `/users/:id`: Update a user.
* `/users/:id`: Delete a user.

## Authentication and Authorization

The API uses JSON Web Tokens (JWTs) for authentication and authorization. To authenticate, a user must provide their email and password. If the credentials are valid, the API will return a JWT. The JWT can then be used to authorize subsequent requests.

## Usage

To use the API, you can make requests to the endpoints using your favorite HTTP client. For example, you can use cURL to get all users:

```
curl -X GET http://localhost:4000/users
```

You can also use Postman to test the API.

## Code Explanation

The code for the API is organized into the following files:

* `controllers/ShowData.js`: This file contains the code for getting all users.
* `controllers/add.js`: This file contains the code for adding a new user.
* `controllers/auth.js`: This file contains the code for authenticating users.
* `controllers/delete.js`: This file contains the code for deleting a user.
* `controllers/search.js`: This file contains the code for searching for users.
* `controllers/update.js`: This file contains the code for updating a user.
* `index.js`: This file contains the code for starting the server.
* `models/User.js`: This file contains the code for the user model.
* `models

