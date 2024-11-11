import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Marketer {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    name: string

  @CreateDateColumn({ type: 'timestamp' }) // @CreateDAtaColumn se utiliza para crear una columna que establece automáticamente la fecha y hora de creación de una entidad.
    created_at: Date

  @UpdateDateColumn({ type: 'timestamp' }) // @UpdateDateColumn los mismo que @CreateDAtaColumn pero al actualizar la columna. 
    updated_at: Date
}
