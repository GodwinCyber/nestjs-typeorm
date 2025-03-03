// decorator for TypeORM entities
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()  // marks the class as a TypeORM entity
export class Item {
    @PrimaryGeneratedColumn() // generates a primary key for the entity
    id: number;

    @Column() // marks the property as a column in the database
    name: string;

    @Column({ default: true }) // set a default value for the property to true
    public: boolean;

    constructor(item: Partial<Item>) { //take partail information from the entity
        Object.assign(this, item);
    }
} // the class that will be used as a TypeORM entity
