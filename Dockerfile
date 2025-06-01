
# Use Node.js official image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Expose port and start the app
EXPOSE 3000
CMD ["yarn", "start"]
