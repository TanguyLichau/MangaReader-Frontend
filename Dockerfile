FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose port and start the app
EXPOSE 8080

CMD ["npm", "start"]