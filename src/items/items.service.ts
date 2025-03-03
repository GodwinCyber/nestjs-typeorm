import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  // injecting entityManager for managing items using TypeORM
  // TypeOrm allows to use repositories to interact with the database
  // this is the way we interact with the database from our service layer (controller)
  // we are using it to create a new item in our database using the create method from the Item entity class

  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>, // injecting repository for managing items
    private readonly entityManager: EntityManager
  ) {} // constructor from entity manager to manage items
  async create(createItemDto: CreateItemDto) {
    const item = new Item(createItemDto);
    await this.entityManager.save(item);
  }

  // using respository to find item table
  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
