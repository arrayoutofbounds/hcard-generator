# First section for build
FROM node:alpine as builder

# Installs latest Chromium (63) package.
RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
      chromium@edge \
      nss@edge

WORKDIR '/app'

COPY package.json .

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Puppeteer v0.11.0 works with Chromium 63.
RUN yarn add puppeteer@0.11.0

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

# Run everything after as non-privileged user.
USER pptruser

RUN yarn install

COPY . .

RUN yarn run build

# Second section is to serve build assets using nginx
FROM nginx

# just tells the developer that this container needs to be port 
# mapped to port 80. However, beanstalk looks at it and knows that 
# it has to map all requests to this port automatically.
EXPOSE 80 

# copy from builder phase
COPY --from=builder /app/build /usr/share/nginx/html