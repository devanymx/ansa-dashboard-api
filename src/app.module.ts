import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { StoresModule } from './stores/stores.module';
import { TicketsModule } from './tickets/tickets.module';
import { FirebaseAuthStrategy } from './auth/firebase-auth.strategy';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot(),
    ProductsModule,
    CategoriesModule,
    StoresModule,
    TicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseAuthStrategy],
})
export class AppModule {}
