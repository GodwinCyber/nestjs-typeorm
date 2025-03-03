import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";


@Module({
    // connect to mysql with typeorm
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: "mysql",
                host: configService.getOrThrow("MYSQL_HOST"),
                port: configService.getOrThrow("MYSQL_PORT"),
                database: configService.getOrThrow("MYSQL_DATABASE"),
                username: configService.getOrThrow("MYSQL_USERNAME"),
                password: configService.getOrThrow("MYSQL_PASSWORD"),
                autoLoadEntities: true, // Automatically load entities from the controllers directory
                synchronize: JSON.parse(configService.getOrThrow("MYSQL_SYNCHRONISE")), // Automatically synchronize the database schema with the entities
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
