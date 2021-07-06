# desafio_winnin
veja a mini explicação:


https://youtu.be/MOVTDwJrzd0


execute todos os projetos com docker compose:


cd <$PATH>/desafio_winnin


docker-compose -f "docker-compose.yml" up -d --build 

query graphql:


query{
  Usuarios(ordenar:"total_coments_posts"){
    total_coments_posts,
    ups,
    nome
  }

Posts(datainicio:"2021-06-30",datafim:"2021-07-03",ordenar:"ups"){
		    num_comentarios,
    titulo,
    autor,
    ups
  }
}

Trabalhando com 'Cron' no service(robô):

na hora de gerar o docker use a variavel CRONJOB com os argurmentos separados por '_'

você pode gerar string 'cron' nesse site: https://crontab.guru/

depois de só adicione um '_' entre cada argumento exemplo:

essa string '5 4 * * *' diz que será executado todos os dias ás 4 horas e 5 minutos.

com a string valida altere no docker-compose.yml a variavel 'CRONJOB', lembre de colocar um '_' no lugar dos espaços, entre no link e verifique a linha 42 https://github.com/loribao/desafio_winnin/blob/main/docker-compose.yml#L42 
