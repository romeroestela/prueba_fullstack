import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Marketer } from './Marketer';

@Entity() // Marca una clase como una entidad de base de datos.
export class Operation { 
    @PrimaryGeneratedColumn() // Define una columna como la clave primaria que se genera automáticamente.
    id: number;

    // @ManyToOne(): Establece una relación "muchos a uno". Muchas operaciones están relacionadas con una Marketer(comercializadora)
    @ManyToOne(() => Marketer, (marketer) => marketer.id, { onDelete: 'SET NULL', nullable: true })
    marketer_id: Marketer;
    
    @ManyToOne(() => Marketer, (marketer) => marketer.id, { onDelete: 'SET NULL', nullable: true })
    client_id: Marketer;

    @Column()
    type: 'buy' | 'sell';

    @Column('float')
    amount: number;

    @Column('float')
    price: number;
}
