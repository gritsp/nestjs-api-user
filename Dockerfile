FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000

ENV MONGODB_URI=
ENV PORT=3000

CMD ["npm", "run", "start:prod"]
