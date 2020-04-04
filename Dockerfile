# First section for build
FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .

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