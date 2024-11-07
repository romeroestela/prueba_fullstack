import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Marketer } from './entity/Marketer'
import { Operations } from './entity/Operations'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // Dirección del host de tu base de datos
  port: 5432, // Puerto estándar de PostgreSQL
  username: 'postgres', // Tu usuario de PostgreSQL
  password: '', // Contraseña de tu usuario de PostgreSQL
  database: 'pruebaTecnica', // El nombre de tu base de datos
  entities: [
    Marketer, // Entidades del proyecto
    Operations
  ],
  synchronize: true, // Crea las tablas automáticamente
  logging: true // Activar logging para ver las consultas SQL
})
