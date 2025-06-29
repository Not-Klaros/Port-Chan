# Use official Node.js 18 image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Expose Vite default dev server port (change if needed)
EXPOSE 5173

# Start Vite development server (or change to 'build' and serve for production)
RUN npm run build
CMD ["npx", "serve", "dist"]

