"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./entities/item.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ItemsService = class ItemsService {
    itemRepository;
    entityManager;
    constructor(itemRepository, entityManager) {
        this.itemRepository = itemRepository;
        this.entityManager = entityManager;
    }
    async create(createItemDto) {
        const item = new item_entity_1.Item(createItemDto);
        await this.entityManager.save(item);
    }
    findAll() {
        return `This action returns all items`;
    }
    findOne(id) {
        return `This action returns a #${id} item`;
    }
    update(id, updateItemDto) {
        return `This action updates a #${id} item`;
    }
    remove(id) {
        return `This action removes a #${id} item`;
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(item_entity_1.Item)),
    __metadata("design:paramtypes", [typeof (_a = typeof Repository !== "undefined" && Repository) === "function" ? _a : Object, typeorm_1.EntityManager])
], ItemsService);
//# sourceMappingURL=items.service.js.map