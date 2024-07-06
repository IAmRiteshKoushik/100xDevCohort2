# -- Base Image
FROM node:22-alpine         

# -- Working directory = where should all the code get stored
WORKDIR /app

# -- Copy over the files (not the most optimal way to do this)
# Copy everything from the current directory to working directory
COPY . .

# -- Run commands to build the code/project
RUN npm install
RUN npm run build
RUN npx prisma generate

# -- Expose a PORT
EXPOSE 3000

# -- Environment variables (should not do it this way unless you are generating
# the docker file in some CI/CD way and is not visible to the public)
# ENV DATABASE_URL="database-url-here"

# -- All things written after CMD run only when you start the image.
# -- The previous commands are meant to run during image creation
# Final command to run
CMD ["node", "dist/index.js"]

# -- NOTE
# 1. Create .dockerignore file
# 2. Add node_modules/ and dist/ to it
