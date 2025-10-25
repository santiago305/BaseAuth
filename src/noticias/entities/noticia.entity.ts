import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('noticias')
export class Noticia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  subtitulo: string;

  @Column({ type: 'text', nullable: true })
  imagen_url: string | null;

  @Column({ type: 'date', nullable: true })
  fecha: Date | null;

  @Column({ type: 'text', nullable: true })
  contenido: string | null;

  @Column({ type: 'numeric', precision: 3, scale: 1, default: 0 })
  rating: number;

  @Column({ default: true })
  estado: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
