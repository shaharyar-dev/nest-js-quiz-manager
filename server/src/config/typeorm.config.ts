import {TypeOrmModuleOptions} from '@nestjs/typeorm'
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Cubix@123',
      database: 'nestjs_quiz',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,

}