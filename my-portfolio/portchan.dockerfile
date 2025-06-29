# my-portfolio/Dockerfile

FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy the source code
COPY . .

# Build the production files
RUN npm run build

FROM node:20-alpine

WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app .

# Environment setup
ENV NODE_ENV=production

# The preview server listens on this port
EXPOSE 3000

# Start the Vite preview server
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
