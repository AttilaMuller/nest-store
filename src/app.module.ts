import { ItemsService } from './items/items.service';
import { ItemsController } from './items/items.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule { }
