import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BeneficiariesController } from './beneficiaries.controller';
import { BeneficiariesService } from './beneficiaries.service';

@Module({
  controllers: [BeneficiariesController],
  providers: [PrismaService, BeneficiariesService]
})
export class BeneficiariesModule {}
