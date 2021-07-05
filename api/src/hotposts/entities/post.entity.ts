import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'HotPost' })
export class Post {
  constructor(data = null) {
    if (data !== null) {
      this.autor = data?.autor;
      this.data_obtido = data.data_obtido;
      this.dominio = data?.dominio;
      this.id = data?.id;
      this.num_comentarios = data?.num_comentarios;
      this.timestamp = data?.timestamp;
      this.titulo = data?.titulo;
      this.ups = data?.ups;
      this.uuid_insercao = data.uuid_insercao;
    }
  }
  public getDateStm() {
    return new Date(this?.timestamp * 1000);
  }
  @PrimaryColumn()
  id: number;

  @Field(() => String, { description: 'Titulo da postagem' })
  @Column('varchar', { length: 250 })
  titulo?: string;

  @Field(() => Int, { description: 'Data da publicação em segundos' })
  @Column('integer')
  timestamp?: number;

  @Field(() => String, { description: 'Autor da postagem' })
  @Column('varchar', { length: 140 })
  autor?: string;

  @Field(() => String, { description: 'Dominio' })
  @Column('varchar', { length: 100 })
  dominio?: string;

  @Field(() => Int, { description: 'Quantidade de up da postagem' })
  @Column('integer')
  ups?: number;

  @Field(() => Int, { description: 'Quantidade de comentarios' })
  @Column('integer')
  num_comentarios?: number;

  @Field(() => Date, { description: 'Data de obtenção da informação' })
  @Column('datetime')
  data_obtido: Date;

  @Field(() => String, {
    description:
      'codigo do lote de dados, referente a data de obtenção no site oficial',
  })
  @Column('varchar', { length: 50 })
  uuid_insercao: string;
}
