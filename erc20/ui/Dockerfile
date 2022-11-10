FROM node:12
WORKDIR /usr/src/app

COPY . ./

# building the app
RUN npm i
RUN npm run build

# running the tests
CMD ["npm", "run", "test"]

# Running the app
CMD [ "npm", "start" ]