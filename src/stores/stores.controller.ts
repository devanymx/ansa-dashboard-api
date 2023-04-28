import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Store } from './entities/store.entity';

@Controller('stores')
@ApiTags('Tiendas')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  @ApiCreatedResponse({ type: Store })
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storesService.create(createStoreDto);
  }

  @Get()
  @ApiOkResponse({ type: Store, isArray: true })
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Store })
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: Store })
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Store })
  remove(@Param('id') id: string) {
    return this.storesService.remove(+id);
  }
}
