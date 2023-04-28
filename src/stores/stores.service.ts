import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}
  create(createStoreDto: CreateStoreDto) {
    return this.prisma.store.create({ data: createStoreDto });
  }

  findAll() {
    return this.prisma.store.findMany({ where: { active: true } });
  }

  findOne(id: number) {
    return this.prisma.store.findFirst({ where: { id } });
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return this.prisma.store.update({ where: { id }, data: updateStoreDto });
  }

  remove(id: number) {
    return this.prisma.store.delete({ where: { id } });
  }

  findAllProductsOfStore(id: number) {
    return this.prisma.store.findFirst({
      where: { id },
      include: {
        products: {
          include: {
            categories: {
              select: {
                category: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
