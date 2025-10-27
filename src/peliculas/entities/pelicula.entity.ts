import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
} from 'typeorm';
import { Client } from 'src/clients/entities/client.entity';

@Entity('peliculas')
export class Pelicula {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string | null;

  @Column({ type: 'date', nullable: true })
  fecha_estreno: Date | null;

  @Column({ type: 'int', default: 0 })
  duracion_minutos: number;

  @Column({ type: 'numeric', precision: 3, scale: 1, default: 0 })
  rating: number;

  @Column({ nullable: true })
  idioma: string | null;

  @Column({ nullable: true })
  poster_url: string | null;

  @Column({ nullable: true })
  trailer_url: string | null;

  @Column({ type: 'text', nullable: true })
  url_pelicula: string | null;

  @Column({ type: 'text', array: true, nullable: true })
  generos: string[] | null;

  @Column({ default: false })
  deleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToMany(() => Client, (client) => client.peliculas)
  clientes: Client[];
}
