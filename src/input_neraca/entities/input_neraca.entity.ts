import { Debitur } from 'src/debiturs/entities/debitur.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InputNeraca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  tanggal_input: Date;

  @Column('bigint')
  kas_on_hand: number;

  @Column('bigint')
  tabungan: number;

  @Column('bigint')
  jumlah_kas_dan_tabungan: number;

  @Column('bigint')
  jumlah_piutang: number;

  @Column('bigint')
  jumlah_persediaan: number;

  @Column('bigint')
  hutang_usaha: number;

  @Column('bigint')
  hutang_bank: number;

  @Column('bigint')
  aktiva_tetap: number;

  // Relationship
  @ManyToOne(() => Debitur, (debitur) => debitur.inputNeraca, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  debitur: Debitur;
}
