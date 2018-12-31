import { CreateItemDto } from './create-item.dto';
import { ValidationPipe } from './../common/validation.pipe';
import { Item } from './item.interface';
import { ItemsService } from './items.service';
import {
    Body,
    Get,
    Post,
    Controller,
    UsePipes,
} from '@nestjs/common';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createItemDto: CreateItemDto) {
        return this.itemsService.create(createItemDto);
    }
}
