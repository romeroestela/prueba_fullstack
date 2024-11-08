import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Marketer } from './Marketer'

@Entity() // Marca una clase como una entidad de base de datos.
export class Operations {
  @PrimaryGeneratedColumn() // Define una columna como la clave primaria que se genera automáticamente.
    id: number

  // @ManyToOne(): Establece una relación "muchos a uno". Muchas operaciones están relacionadas con una Marketer(comercializadora)
  @ManyToOne(() => Marketer, (marketer) => marketer.id, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'marketer_id' })
    marketer: Marketer

  @ManyToOne(() => Marketer, (marketer) => marketer.id, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'client_id' })
    client: Marketer

  @Column()
    type: 'buy' | 'sell'

  @Column('float')
    amount: number

  @Column('float')
    price: number
}
