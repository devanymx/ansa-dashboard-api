import { Body, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    const { storeId, name, description, active, price, photo_url, categories } =
      createProductDto;

    const categoriesArray = [];

    categories.forEach((element) => {
      const cat = {
        assignedBy: 'Edrei',
        assignedAt: new Date(),
        category: {
          connect: {
            id: element,
          },
        },
      };
      categoriesArray.push(cat);
    });

    return this.prisma.product.create({
      data: {
        name,
        description,
        active,
        price,
        photo_url,
        storeId,
        categories: {
          create: categoriesArray,
        },
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany({
      where: { active: true },
      include: {
        categories: { select: { category: { select: { name: true } } } },
        store: true,
      },
    });
  }

  findHidden() {
    return this.prisma.product.findMany({
      where: { active: false },
      include: {
        categories: { select: { category: { select: { name: true } } } },
        store: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findFirst({
      where: { id },
      include: {
        categories: { select: { category: { select: { name: true } } } },
        store: true,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const { storeId, name, description, active, price, photo_url, categories } =
      updateProductDto;

    const categoriesArray = [];

    categories.forEach((element) => {
      const cat = {
        assignedBy: 'Edrei',
        assignedAt: new Date(),
        category: {
          connect: {
            id: element,
          },
        },
      };
      categoriesArray.push(cat);
    });

    return this.prisma.product.create({
      data: {
        name,
        description,
        active,
        price,
        photo_url,
        storeId,
        categories: {
          connectOrCreate: categoriesArray,
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
