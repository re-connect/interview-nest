import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';

@Module({
  imports: [UsersModule, BeneficiariesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
