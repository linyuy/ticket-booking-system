FROM alpine/git as clone
WORKDIR /app
RUN git clone https://github.com/system-analysis-and-design/ticket-booking-system.git

FROM mysql:5.7
WORKDIR /db-server
COPY --from=clone /app/ticket-booking-system/persistence-layer /app

CMD ["sh", "sql/init_data.sh"]
