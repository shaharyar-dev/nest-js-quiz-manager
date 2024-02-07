import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { QuizController } from './modules/quiz/quiz.controller';
import { UserModule } from './modules/user/user.module';

@Module({
  // controllers: [AppController, QuizController],
  // imports: [QuizModule,TypeOrmModule.forRoot(typeOrmConfig)],
  // imports: [QuizModule,TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  imports: [ConfigModule.forRoot({isGlobal: true}),TypeOrmModule.forRootAsync(typeOrmConfigAsync),QuizModule, UserModule,],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
