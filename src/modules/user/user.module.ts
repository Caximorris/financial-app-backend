import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Connects the User entity with TypeORM
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Exports UserService for use in other modules if needed
})
export class UserModule {}
