import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'companies' })
export class Company {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  companyName: string;

  @Column({ default: true })
  isActive: boolean;
}
