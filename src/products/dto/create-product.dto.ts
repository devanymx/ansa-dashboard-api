import { ApiProperty } from '@nestjs/swagger';
import { Store } from 'src/stores/entities/store.entity';

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

  @ApiProperty({ type: Store })
  store: Store;
}
