"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = void 0;
const config_1 = require("@nestjs/config");
require("dotenv/config");
class TypeOrmConfig {
    static getOrmConfig(configService) {
        return {
            type: 'mysql',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            synchronize: true,
        };
    }
}
exports.default = TypeOrmConfig;
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => await TypeOrmConfig.getOrmConfig(configService),
    inject: [config_1.ConfigService]
};
//# sourceMappingURL=typeorm.config.js.map