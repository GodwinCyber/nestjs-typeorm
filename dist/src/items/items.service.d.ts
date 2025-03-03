import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager } from 'typeorm';
import { Item } from './entities/item.entity';
export declare class ItemsService {
    private itemRepository;
    private readonly entityManager;
    constructor(itemRepository: Repository<Item>, entityManager: EntityManager);
    create(createItemDto: CreateItemDto): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateItemDto: UpdateItemDto): string;
    remove(id: number): string;
}
