import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Beneficiary } from '@prisma/client';
import { BeneficiariesService } from './beneficiaries.service';

@Controller('api/beneficiaries')
export class BeneficiariesController {
  constructor(private readonly beneficiariesService: BeneficiariesService) {}

  @Post()
  create(@Body() beneficiary: Beneficiary) {
    return this.beneficiariesService.beneficiary(beneficiary);
  }

  @Get()
  findAll() {
    return this.beneficiariesService.beneficiaries({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beneficiariesService.beneficiary({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() beneficiary: Beneficiary) {
    return this.beneficiariesService.updateBeneficiary(
      {
        where: { id: Number(id) },
        data: beneficiary,
      }
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beneficiariesService.deleteBeneficiary({ id: Number(id) });
  }
}
