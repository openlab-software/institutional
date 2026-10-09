# Build from the repository root:
#   docker build -f .devops/docker/Dockerfile -t ghcr.io/openlab-software/institutional:dev .
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# SPA estático: só os arquivos do dist servidos pelo nginx (sem root, porta 8080)
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY .devops/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
