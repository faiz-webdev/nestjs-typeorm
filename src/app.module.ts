import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { DataSource } from 'typeorm';
import { DBModule } from './db.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   database: 'nestjs_typeorm',
    //   password: 'root',
    //   entities: [User],
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
    DBModule,
    UsersModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
