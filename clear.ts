import { DataSource } from 'typeorm';
import { envs } from './src/config/envs';
import { Role } from './src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { Client } from 'src/clients/entities/client.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: envs.db.host,
  port: envs.db.port,
  username: envs.db.username,
  password: envs.db.password,
  database: envs.db.name,
  synchronize: false,
  logging: false,
  entities: [Role, User, Client],
});

dataSource
  .initialize()
  .then(async () => {
    console.log('[Clear] Limpiando la base de datos...');

    const entities = [Client, User, Role]; // Orden: primero las tablas hijas, luego las padres

    for (const entity of entities) {
      const repo = dataSource.getRepository(entity);
      const tableName = repo.metadata.tableName;
      try {
        await repo.query(`TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE;`);
        console.log(`[Clear] Tabla "${tableName}" limpiada.`);
      } catch (error) {
        console.error(`[Clear] Error al limpiar la tabla "${tableName}":`, error);
      }
    }

    await dataSource.destroy();
    console.log('[Clear] Base de datos limpiada con éxito.');
  })
  .catch((err) => {
    console.error('[Clear] Error al inicializar la conexión:', err);
  });
