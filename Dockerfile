# Use official Node.js image
FROM node:latest

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React/Vite app
RUN npm run build

# Expose the production port
EXPOSE 5173

# Serve the built app using 'serve'
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "5173"]
