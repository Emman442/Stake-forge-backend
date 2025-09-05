# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the code
COPY . .

# Expose the port (match your app’s port, often 3000)
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
