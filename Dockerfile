FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN yarn
COPY webpack.config.js index.tsx index.html tsconfig.json .env .
COPY  ./src ./src
EXPOSE 3000
CMD yarn start
