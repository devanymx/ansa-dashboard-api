import { Product as ProductEntity } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Store } from '../../stores/entities/store.entity';
export class Product implements ProductEntity {
  @ApiProperty()
  active: boolean;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  photo_url: string | null;

  @ApiProperty()
  price: number;

  @ApiProperty()
  storeId: number;

  @ApiProperty({ type: Store })
  store: Store;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;

  constructor({ store, ...data }: Partial<Product>) {
    Object.assign(this, data);

    if (store) {
      this.store = new Store(store);
    }
  }
}
