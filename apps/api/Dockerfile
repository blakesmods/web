FROM node:22

# PNPM setup
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory
WORKDIR /srv/app

# Copy dependencies and lock files
COPY apps/api/package.json ./apps/api/
COPY packages/db/package.json ./packages/db/
COPY package.json ./
COPY pnpm-*.yaml ./

# Install dependencies
RUN pnpm install

# Copy all files into container
COPY . .

# Set the working directory to the API app
WORKDIR ./apps/api

# Build application
RUN pnpm build

# Start application
CMD pnpm start
