import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  amount: number;

  @Column()
  category: string;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  type: 'income' | 'expense';

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;
}
