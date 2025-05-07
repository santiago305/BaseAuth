import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Client } from 'src/clients/entities/client.entity';

/**
 * Entidad que representa a un usuario del sistema.
 * Se mapea a la tabla 'users' en la base de datos.
 */
@Entity('users')
export class User {
  /**
   * Identificador único del usuario.
   */
  @PrimaryGeneratedColumn('uuid')
  id: string

  /**
   * Nombre del usuario.
   */
  @Column()
  name: string;

  /**
   * Correo electrónico del usuario (único).
   */
  @Column({ unique: true })
  email: string;

  /**
   * Contraseña hasheada del usuario.
   */
  @Column()
  password: string;

  /**
   * Indica si el usuario ha sido eliminado lógicamente.
   */
  @Column({ default: false })
  deleted: boolean;

  /**
   * Rol asignado al usuario.
   */
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @OneToOne(() => Client, (client) => client.user)
  client: Client;

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
