import { Category as CategoryEntity } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class Category implements CategoryEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;
}
