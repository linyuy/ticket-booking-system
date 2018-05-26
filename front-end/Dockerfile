FROM alpine/git as clone
WORKDIR /app
RUN git clone https://github.com/system-analysis-and-design/ticket-booking-system.git

FROM node:8.11
WORKDIR /app
COPY --from=clone /app/ticket-booking-system/front-end /app
RUN npm config set registry https://registry.npm.taobao.org && npm config get registry
RUN npm install && npm run build
WORKDIR /www
COPY ./dist /www
CMD ["tail", "-f", "/var/log/faillog"]
