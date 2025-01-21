import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Photo } from '../photos/photo.entity';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(partial?: Partial<UserEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
