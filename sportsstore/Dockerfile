# The contents of the Dockerfile use a base image that has been configured 
# with Node.js and that copies the files required to run the application

# sudo docker build . -t sportsstore -f Dockerfile
# docker run -p 8080:8080 sportsstore

# An image is a template for containers. As Docker processes the instructions
# in the Docker file, the NPM packages will be downloaded and installed, and 
# the configuration and code files will be copied into the image

FROM node:8.11.2

RUN mkdir -p /usr/src/sportsstore

COPY dist /usr/src/sportsstore/dist

COPY authMiddleware.js /usr/src/sportsstore/
COPY data.json /usr/src/sportsstore/
COPY server.js /usr/src/sportsstore/server.js
COPY deploy-package.json /usr/src/sportsstore/package.json

WORKDIR /usr/src/sportsstore

RUN npm install

EXPOSE 8080

CMD ["node", "server.js"]


# see all containers:
# docker container ls
# or:
# docker ps -a

# stopping a container:
# docker stop {CONTAINER ID}

# see all images
# docker image ls

# remove containers:
# docker container prune

# remove images:
# docker image prune

# remove volumes:
# docker volume prune

# find out what is using port 80
# sudo netstat -tulpn | grep :80
# or:
# sudo fuser 80/tcp