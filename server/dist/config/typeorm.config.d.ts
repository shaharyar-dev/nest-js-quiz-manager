import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions;
}
export declare const typeOrmConfigAsync: TypeOrmModuleAsyncOptions;
