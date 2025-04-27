# Use a small Node.js runtime as the base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies (package.json + package-lock.json)
COPY package*.json ./
RUN npm ci --production

# Copy app source
COPY . .

# Expose the port your app listens on
EXPOSE 5000

# Start the service
# Assumes your package.json has a "start" script, e.g. "node src/index.js"
CMD ["npm", "start"]
