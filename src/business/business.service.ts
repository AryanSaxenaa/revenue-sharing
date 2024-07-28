import { Injectable } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { DatabaseService } from 'src/database/database.module';

@Injectable()
export class BusinessService {
  constructor(private readonly prisma: DatabaseService) {}

  async hasBusiness(userId: number): Promise<boolean> {
    const business = await this.prisma.business.findUnique({
      where: { ownerId: userId },
    });
    return !!business;
  }
  async create(userId: number, createBusinessDto: CreateBusinessDto) {
    console.log(userId);
    console.log(createBusinessDto);
    const finduser = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (finduser.role !== 'BUSINESS_OWNER') {
      await this.prisma.user.update({
        where: { id: userId },
        data: { role: 'BUSINESS_OWNER' },
      });
    }
    const createdBusiness = await this.prisma.business.create({
      data: {
        name: createBusinessDto.name,
        contactDetails: createBusinessDto.contactDetails,
        ownerId: userId,
      },
    });
    await this.prisma.user.update({
      where:{
        id: userId,
      },
      data:{
        businessId: createdBusiness.id,
      }
    });
    return createdBusiness;
  }
}
