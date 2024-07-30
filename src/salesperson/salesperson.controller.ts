import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { SalespersonService } from './salesperson.service';
import { CreateSalespersonDto } from './dto/create-salesperson.dto';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/auth.guard';
@Controller('salesperson')
export class SalespersonController {
  constructor(private readonly salespersonService: SalespersonService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req() req: Request,
    @Body() createSalespersonDto: CreateSalespersonDto,
  ) {
    const userId = req.user.id;
    console.log(userId);
    return this.salespersonService.create(userId, createSalespersonDto);
  }

  
}
