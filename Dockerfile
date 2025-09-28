# Steg 1: Bygg React-appen
FROM node:18-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Steg 2: Servera med Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Exponera porten
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
