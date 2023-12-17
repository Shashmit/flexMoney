FROM node:21.2.0
WORKDIR /server
COPY package.json /server
RUN npm install
COPY . /server
CMD ["npm", "run", "dev"]

