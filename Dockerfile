# Use an official Node.js 18 image as the base image
FROM node:20.18.0

# Set the working directory inside the container
WORKDIR /usr/src/glow

# Copy package.json and yarn.lock to the container
COPY package.json package-lock.json /usr/src/glow/

# Install app dependencies using Yarn (Yarn is pre-installed in the image)
RUN yarn install

# Copy the rest of the application code to the container
COPY . /usr/src/glow

# Build the Next.js app
RUN yarn build

# Expose the port that the app will run on
EXPOSE 3000
