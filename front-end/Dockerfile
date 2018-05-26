FROM alpine/git as clone
WORKDIR /app
RUN git clone https://github.com/system-analysis-and-design/ticket-booking-system.git

FROM node:8.11 as build
WORKDIR /app
COPY --from=clone /app/ticket-booking-system/front-end /app
# RUN npm config set registry https://registry.npm.taobao.org && npm config get registry
RUN npm install && npm run build
# RUN mkdir -p dist
WORKDIR /www
COPY --from=build /app/dist /www
CMD ["tail", "-f", "/var/log/faillog"]
