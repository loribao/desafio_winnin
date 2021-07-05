FROM "mcr.microsoft.com/mssql/server"
ENV  SA_PASSWORD Your_password123
ENV  ACCEPT_EULA Y

WORKDIR /app

COPY . .

RUN /opt/mssql/bin/sqlservr --accept-eula & sleep 10 \
    && /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Your_password123' -i ./sql.sql \
    && pkill sqlservr 

EXPOSE 1433