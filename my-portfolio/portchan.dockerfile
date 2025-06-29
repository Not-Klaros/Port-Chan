# my-portfolio/Dockerfile

FROM node:20-alpine

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy everything
COPY . .

# Expose the port your Express server uses (e.g., 3000 or 5173)
EXPOSE 3000

# Set environment variable (optional)
ENV NODE_ENV production

# Run your app
CMD ["npm", "start"]
