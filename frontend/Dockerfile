# pull official base image
FROM node:18-alpine

# set working directory
WORKDIR /usr/src/admin

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/admin/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN npm install react-scripts@5.0.1 -g --silent
RUN npm install react-router-dom
<<<<<<< HEAD
RUN npm install bootstrap
=======
>>>>>>> c6a8bf513be531512db48d068479350ebe7464f9

# start app
CMD ["npm", "start"]