FROM postgres:latest

ENV POSTGRES_USER=canodev
ENV POSTGRES_PASSWORD=canodev
ENV POSTGRES_DB=tickets

# Copia cualquier archivo SQL de inicialización (opcional)
# COPY ./init.sql /docker-entrypoint-initdb.d/
