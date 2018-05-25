FROM alpine/git as clone
WORKDIR /app
RUN git clone https://github.com/system-analysis-and-design/ticket-booking-system.git

FROM node:6.10.3
WORKDIR /web-server
COPY COPY --from=clone /app/ticket-booking-system/client /app
RUN npm config set registry https://registry.npm.taobao.org && npm config get registry
RUN npm install && npm run build
CMD ["tail", "-f", "/var/log/faillog"]
