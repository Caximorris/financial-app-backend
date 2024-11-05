import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100, nullable: true })
  middleName?: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 100, nullable: true })
  secondLastName?: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Transaction, (transaction) => transaction.user, {
    cascade: true,
  })
  transactions: Transaction[];

  @Column()
  salary: number;

  @CreateDateColumn()
  created_at: Date;
}
