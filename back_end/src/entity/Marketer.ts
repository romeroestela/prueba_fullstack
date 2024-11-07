import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Marketer {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    name: string

  @CreateDateColumn({ type: 'timestamp' })
    created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date
}
