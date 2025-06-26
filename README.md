# My Portfolio

This project contains a React front end (inside `my-portfolio`) and a small
Express server (inside `server`) used to load portfolio data from MongoDB.

## MongoDB Setup

The server expects a MongoDB connection string in `server/.env`:

```
MONGODB_URI=mongodb://<user>:<password>@<host>:<port>/<database>
PORT=3001
```

## Data Schemas

The backend uses the following Mongoose schemas:

### Post
```js
{
  title: String,
  body: String
}
```

### Project
```js
{
  title: String,
  image: String,
  description: String
}
```

### Experience
```js
{
  role: String,
  company: String,
  dates: String,
  description: String
}
```

### Education
```js
{
  degree: String,
  school: String,
  dates: String
}
```

### Skill
```js
{
  name: String
}
```

## Running the App

1. Install dependencies in both `my-portfolio` and `server`.
2. Create a `.env` file in `server` with your MongoDB connection string.
3. Start the backend with `npm start` inside `server`.
4. Run the front end with `npm run dev` inside `my-portfolio`.
