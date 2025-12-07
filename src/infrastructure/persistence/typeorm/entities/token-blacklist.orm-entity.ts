import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'token_blacklist' })
export class TokenBlacklistOrmEntity {
  @PrimaryColumn({ name: 'token', type: 'varchar', length: 500 })
  token!: string;

  @Column({ name: 'expiration_time', type: 'timestamp with time zone' })
  expirationTime!: Date;

  @Column({
    name: 'created_at',
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;
}
