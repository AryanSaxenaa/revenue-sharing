import { Controller, Post, Body, Req } from '@nestjs/common';
import { PlaceOrderService } from './place-order.service';
import { CreatePlaceOrderDto } from './dto/create-place-order.dto';
import { Request } from 'express';
@Controller('place-order')
export class PlaceOrderController {
  constructor(private readonly placeOrderService: PlaceOrderService) {}

  @Post()
  async create(
    @Req() req: Request,
    @Body() createPlaceOrderDto: CreatePlaceOrderDto,
  ) {
    const userid = await req.user.id;
   
    this.placeOrderService.create(userid, createPlaceOrderDto);
  }

  
}
