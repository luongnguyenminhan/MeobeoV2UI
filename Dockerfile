
# --- Builder ---

# --- Builder ---
FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable
COPY package.json yarn.lock ./
COPY . .
RUN yarn install --frozen-lockfile && yarn build

# --- Production ---

# --- Production ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy standalone output
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["node", "server.js"]
