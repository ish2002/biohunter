FROM node:latest
COPY frontend/ frontend/
RUN cd frontend && yarn install && yarn run build && yarn global add serve
CMD serve -s frontend/build 
COPY backend/src src/
COPY backend/package.json package.json
COPY backend/yarn.lock yarn.lock
COPY backend/sql sql/
RUN yarn install
CMD yarn run start
