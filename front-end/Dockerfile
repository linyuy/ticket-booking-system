FROM alpine/git as clone
WORKDIR /app
RUN git clone --depth=1 https://github.com/system-analysis-and-design/ticket-booking-system.git

FROM node:8.12 as build
WORKDIR /app
COPY --from=clone /app/ticket-booking-system/front-end /app
# RUN npm config set registry https://registry.npm.taobao.org && npm config get registry
RUN echo "echo 2.1.1" > phantomjs
RUN chmod +x ./phantomjs
RUN mv ./phantomjs /usr/bin/
RUN npm install && npm run build
RUN mkdir -p /www
RUN ls -R ./dist
RUN cp -rf ./dist/* /www
RUN ls -R /www
WORKDIR /www
# CMD ["tail", "-f", "/var/log/faillog"]
CMD cp -rf /app/dist/* /www && ls -R /www
