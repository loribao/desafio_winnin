﻿# desafio_winnin
veeja a mini explicação:


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
