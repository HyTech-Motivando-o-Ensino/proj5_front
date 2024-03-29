# Estágio de compilação
FROM node:18 as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .
RUN npm run build


FROM nginx:1.21-alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]