FROM alpine/git as clone
WORKDIR /app
RUN git clone https://github.com/system-analysis-and-design/ticket-booking-system.git

FROM maven:3.5-jdk-8-alpine as build
WORKDIR /app
COPY --from=clone /app/ticket-booking-system/back-end /app
RUN mvn package

FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=build /app/target/movie-booking.war /app
EXPOSE 8082
CMD ["java -jar /app/movie-booking.war"]
