import { ApiProperty } from '@nestjs/swagger';
import { Store as StoreEntity } from '@prisma/client';

export class Store implements StoreEntity {
  constructor(partial: Partial<StoreEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  description: string | null;

  @ApiProperty()
  id: number;

  @ApiProperty()
  location: string | null;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;
}
