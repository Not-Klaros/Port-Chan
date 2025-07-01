# Use official Node.js 18 image
FROM node:latest

# Set working directory
WORKDIR /app

# Install dependencies first to leverage Docker caching
RUN npm install

# Copy remaining application code
COPY . .

# Build the React application
RUN npm run build

# Expose the default port
EXPOSE 5173

# Serve the built app using serve
CMD ["npx", "serve", "-s", "dist", "-l", "5173"]
