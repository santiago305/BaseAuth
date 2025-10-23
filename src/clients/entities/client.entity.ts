import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Pelicula } from 'src/peliculas/entities/pelicula.entity';

/**
 * Entidad Client: Información específica del cliente.
 */
@Entity('clients')
export class Client {
  /**
   * Identificador único del cliente (UUID).
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Relación con la entidad `User`.
   */
  @OneToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  /**
   * Teléfono del cliente.
   */
  @Column()
  phone: string;

  /**
   * Fecha de nacimiento.
   */
  @Column()
  birth_date: Date;

  /**
   * Género del cliente.
   */
  @Column()
  gender: string;

  /**
   * Estado de eliminación del cliente.
   */
  @Column({ default: false })
  deleted: boolean;

  /**
   * Fecha de creación automática del registro.
   */
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToMany(() => Pelicula, (pelicula) => pelicula.clientes, { cascade: false })
  @JoinTable({ name: 'clientes_peliculas' })
  peliculas: Pelicula[];
}
