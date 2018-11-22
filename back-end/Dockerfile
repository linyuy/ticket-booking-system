FROM alpine/git as clone
WORKDIR /app
RUN git clone --depth=1 https://github.com/system-analysis-and-design/ticket-booking-system.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/ticket-booking-system/back-end /app

EXPOSE 8082
CMD ["mvn", "clean", "spring-boot:run"]
