FROM node:latest
COPY frontend/ frontend/
RUN cd frontend && yarn install && yarn run build && yarn global add serve && serve -s build && cd ..
COPY backend/src src/
COPY backend/package.json package.json
RUN yarn install
CMD yarn run start
