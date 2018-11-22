FROM alpine/git as clone
WORKDIR /app
RUN git clone --depth=1 https://github.com/system-analysis-and-design/ticket-booking-system.git

FROM mysql:5.7
WORKDIR /app
COPY --from=clone /app/ticket-booking-system/persistence-layer /app
EXPOSE 3306
CMD ["sh", "/app/sql/init_data.sh", "/app/sql/init_data.sql"]
