# My Portfolio

This project contains a React front end (inside `my-portfolio`) and a small
Express server (inside `server`) used to load portfolio data from MongoDB.

## MongoDB Setup

The server expects a MongoDB connection string in `server/.env`.
For security, create a **read-only** user in your database and use it in the
connection string. The API exposes only GET endpoints and never writes to the
database. If `MONGODB_URI` is not provided the server will fall back to
`mongodb://localhost:27017/portfolio`.

Add the following to `server/.env`:

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
  name: String,
  type: 'technical' | 'soft'
}
```

## API Endpoints

- `GET /api/posts` – list posts
- `GET /api/projects` – list projects
- `GET /api/skills/technical` – list technical skills
- `GET /api/skills/soft` – list soft skills
- `GET /api/resume` – list experiences and education

## Running the App

1. Install dependencies in both `my-portfolio` and `server`.
2. Create a `.env` file in `server` with your MongoDB connection string if
   you don't want to use the local default.
3. Start the backend with `npm start` inside `server`. The server will log
   `MongoDB connected` once the database connection succeeds.
4. Run the front end with `npm run dev` inside `my-portfolio`.
   The dev server proxies `/api` requests to `http://localhost:3001` so the
   React app can talk to the backend without CORS issues.
