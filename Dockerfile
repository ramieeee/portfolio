FROM node:18-alpine3.16

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]