FROM node:16

# Set working directory
WORKDIR /srv/app

# Copy dependencies and lock files
COPY apps/api/package.json ./apps/api/
COPY packages/db/package.json ./packages/db/
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn

# Copy all files into container
COPY . .

# Build application
RUN yarn build --filter api

# Start application
CMD yarn workspace @blakesmods/api start
