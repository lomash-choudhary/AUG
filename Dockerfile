FROM oven/bun:latest

WORKDIR /app

COPY ./package.json ./package.json
COPY ./bun.lockb ./bun.lockb

RUN bun install

COPY . .

EXPOSE 3000

CMD [ "bun" , "bin.ts" ]