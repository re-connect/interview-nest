import { Injectable } from '@nestjs/common';
import { Beneficiary, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BeneficiariesService {
  constructor(private prisma: PrismaService) {}

  async beneficiary(
    beneficiaryWhereUniqueInput: Prisma.BeneficiaryWhereUniqueInput,
  ): Promise<Beneficiary | null> {
    return this.prisma.beneficiary.findUnique({
      where: beneficiaryWhereUniqueInput,
    });
  }

  async beneficiaries(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BeneficiaryWhereUniqueInput;
    where?: Prisma.BeneficiaryWhereInput;
    orderBy?: Prisma.BeneficiaryOrderByWithRelationInput;
  }): Promise<Beneficiary[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.beneficiary.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createBeneficiary(data: Prisma.BeneficiaryCreateInput): Promise<Beneficiary> {
    return this.prisma.beneficiary.create({
      data,
    });
  }

  async updateBeneficiary(params: {
    where: Prisma.BeneficiaryWhereUniqueInput;
    data: Prisma.BeneficiaryUpdateInput;
  }): Promise<Beneficiary> {
    const { data, where } = params;
    return this.prisma.beneficiary.update({
      data,
      where,
    });
  }

  async deleteBeneficiary(where: Prisma.BeneficiaryWhereUniqueInput): Promise<Beneficiary> {
    return this.prisma.beneficiary.delete({
      where,
    });
  }
}
