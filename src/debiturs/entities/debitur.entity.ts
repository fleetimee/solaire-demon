import { AnalisaJenisUsaha } from './../../analisa_jenis_usaha/entities/analisa_jenis_usaha.entity';
import { AnalisaKarakter } from './../../analisa_karakter/entities/analisa_karakter.entity';
import { AnalisaBisni } from './../../analisa_bisnis/entities/analisa_bisni.entity';
import { AnalisaKeuangan } from './../../analisa_keuangan/entities/analisa_keuangan.entity';
import { InputKeuangan } from './../../input_keuangan/entities/input_keuangan.entity';
import { InputRugiLaba } from './../../input_rugi_laba/entities/input_rugi_laba.entity';
import { InputNeraca } from './../../input_neraca/entities/input_neraca.entity';
import { Fixed } from './../../fixeds/entities/fixed.entity';
import { NonFixed } from './../../non-fixeds/entities/non-fixed.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

/* It's a decorator that tells TypeORM that this class is an entity. */
@Entity()
/* It's a class that represents a Debitur entity. */
export class Debitur {
  /* It's a decorator that tells TypeORM that this column is a primary column and it uses uuid for its
value generation strategy. */
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  @Column({ unique: true })
  no_debitur: string;

  @Column()
  peminjam1: string;

  @Column()
  ktp1: string;

  @Column({ nullable: true })
  peminjam2: string;

  @Column({ nullable: true })
  ktp2: string;

  @Column({ nullable: true })
  pemilik_agunan_1: string;

  @Column('bigint', { nullable: true })
  no_ktp1: number;

  @Column({ nullable: true })
  pemilik_agunan_2: string;

  @Column('bigint', { nullable: true })
  no_ktp2: number;

  @Column()
  alamat_1: string;

  @Column({ nullable: true })
  alamat_2: string;

  @Column()
  tempat_lahir: string;

  @Column('date')
  tanggal_lahir: Date;

  @Column()
  umur: number;

  @Column()
  status_keluarga: string;

  @Column('int', { nullable: true })
  jumlah_tanggungan: number;

  @Column()
  lamanya_berusaha: number;

  @Column()
  lokasi_usaha: string;

  @Column()
  jenis_usaha: string;

  @Column()
  bidang_usaha: string;

  @Column()
  pendidikan: string;

  @Column()
  pekerjaan1: string;

  @Column()
  pekerjaan2: string;

  @Column('bigint', { nullable: true })
  no_skpk: number;

  @Column('date')
  tgl_sekarang: Date;

  @Column('text')
  deskripsi_debitur: string;

  /* End of data lokasi debitur */

  // Relation
  @OneToMany(() => NonFixed, (nonfixed) => nonfixed.debitur, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  nonfixed: NonFixed[];

  @OneToMany(() => Fixed, (fixed) => fixed.debitur, {
    onDelete: 'CASCADE',
  })
  fixed: Fixed[];

  @ManyToOne(() => User, (user) => user, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  createdBy: User;

  @OneToOne(() => User, (user) => user, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  @OneToOne(() => InputNeraca, (inputNeraca) => inputNeraca.debitur, {
    onDelete: 'CASCADE',
  })
  inputNeraca: InputNeraca;

  @OneToOne(() => InputRugiLaba, (inputRugiLaba) => inputRugiLaba.debitur, {
    onDelete: 'CASCADE',
  })
  inputRugiLaba: InputRugiLaba;

  @OneToOne(() => InputKeuangan, (inputKeuangan) => inputKeuangan.debitur, {
    onDelete: 'CASCADE',
  })
  inputKeuangan: InputKeuangan;

  @OneToOne(
    () => AnalisaKeuangan,
    (analisaKeuangan) => analisaKeuangan.debitur,
    {
      onDelete: 'CASCADE',
    },
  )
  analisaKeuangan: AnalisaKeuangan;

  @OneToOne(() => AnalisaBisni, (analisaBisnis) => analisaBisnis.debitur, {
    onDelete: 'CASCADE',
  })
  analisaBisnis: AnalisaBisni;

  @OneToOne(
    () => AnalisaKarakter,
    (analisaKarakter) => analisaKarakter.debitur,
    {
      onDelete: 'CASCADE',
    },
  )
  analisaKarakter: AnalisaKarakter;

  @OneToOne(
    () => AnalisaJenisUsaha,
    (analisaJenisUsaha) => analisaJenisUsaha.debitur,
    {
      onDelete: 'CASCADE',
    },
  )
  analisaJenisUsaha: AnalisaJenisUsaha;
}
