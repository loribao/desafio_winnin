FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-16-buster

WORKDIR /app

COPY . .

RUN ls -a

RUN npm install 

CMD ["npm", "start"]