# Generating the container from the image

FROM node:16-alpine

WORKDIR /app

COPY . . 
# Remember not to include node_modules, dist etc.

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000

# All the previous commands run when you create the 
# image but the following command runs when you start
# the image. CMD is used when you actually start the 
# application and RUN is used when you bootstrap the 
# application.

CMD ["node", "dist/index.js"]
