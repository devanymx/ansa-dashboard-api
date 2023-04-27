import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const category1 = await prisma.category.create({
    data: {
      name: 'Café',
    },
  });
  const category2 = await prisma.category.create({
    data: {
      name: 'Bebidas',
    },
  });
  const category3 = await prisma.category.create({
    data: {
      name: 'Mexican Food',
    },
  });

  const store1 = await prisma.store.create({
    data: {
      name: 'Cafetería 1',
      slug: 'cafeteria-uno',
      location: 'Apaxco de Ocampo',
      description: 'Esta es una cafetería uwu',
      active: true,
    },
  });

  const product1 = await prisma.product.create({
    data: {
      name: 'Café moka',
      description: 'Café con chocolate',
      photo_url: 'https://cdn7.kiwilimon.com/recetaimagen/36987/46351.jpg',
      price: 34.5,
      active: true,
      store: {
        connect: {
          id: 1,
        },
      },
      categories: {
        create: [
          {
            assignedBy: 'Edrei',
            assignedAt: new Date(),
            category: {
              connect: {
                id: 1,
              },
            },
          },
          {
            assignedBy: 'Edrei',
            assignedAt: new Date(),
            category: {
              connect: {
                id: 2,
              },
            },
          },
        ],
      },
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Soda italiana',
      description: 'Agua mineral con jarabe',
      photo_url:
        'https://www.monin.com/media/catalog/product/cache/086f110b92ec89cebc323a4780ab42bd/a/b/abb82788-0765-46df-8482-0c0209ab6800-2_1.png',
      price: 67,
      active: true,
      store: {
        connect: {
          id: 1,
        },
      },
      categories: {
        create: [
          {
            assignedBy: 'Edrei',
            assignedAt: new Date(),
            category: {
              connect: {
                id: 2,
              },
            },
          },
        ],
      },
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: 'Chilaquiles',
      description: 'Chilaquiles, just chilaquiles con pollo',
      photo_url:
        'https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg',
      price: 120,
      active: true,
      store: {
        connect: {
          id: 1,
        },
      },
      categories: {
        create: [
          {
            assignedBy: 'Edrei',
            assignedAt: new Date(),
            category: {
              connect: {
                id: 3,
              },
            },
          },
        ],
      },
    },
  });

  console.log({
    category1,
    category2,
    category3,
    store1,
    product1,
    product2,
    product3,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
