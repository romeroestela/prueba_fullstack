import "reflect-metadata";
import { DataSource } from "typeorm";
import { Marketer } from "./entity/Marketer";
import { Operation } from "./entity/Operation";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",      // Dirección del host de tu base de datos
  port: 5432,             // Puerto estándar de PostgreSQL
  username: "postgres",   // Tu usuario de PostgreSQL
  password: "",  // Contraseña de tu usuario de PostgreSQL
  database: "pruebaTecnica",   // El nombre de tu base de datos
  entities: [
    Marketer, // Entidades del proyecto
    Operation            
  ],
  synchronize: true,      // Crea las tablas automáticamente
  logging: true,          // Activar logging para ver las consultas SQL
});
