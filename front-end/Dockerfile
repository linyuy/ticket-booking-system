FROM alpine/git as clone
WORKDIR /app
RUN git clone --depth=1 https://github.com/system-analysis-and-design/ticket-booking-system.git

FROM node:8.10 as build
WORKDIR /app
COPY --from=clone /app/ticket-booking-system/front-end /app
# RUN npm config set registry https://registry.npm.taobao.org && npm config get registry
RUN echo "echo 2.1.1" >> phantomjs.sh
RUN chmod +x ./phantomjs.sh
RUN ln -s ./phantomjs.sh /usr/bin/phantomjs
RUN npm install && npm run build
# RUN mkdir -p dist
RUN ls ./
COPY ./dist/ /www
WORKDIR /www
CMD ["tail", "-f", "/var/log/faillog"]
