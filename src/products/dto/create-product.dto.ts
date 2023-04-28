import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  photo_url?: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ required: false, default: true })
  active = true;

  @ApiProperty()
  storeId: number;

  @ApiProperty()
  categories: [];
}
