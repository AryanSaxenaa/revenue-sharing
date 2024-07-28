import { Controller, Post, Body, Req } from '@nestjs/common';
import { PlaceOrderService } from './place-order.service';
import { CreatePlaceOrderDto } from './dto/create-place-order.dto';

@Controller('place-order')
export class PlaceOrderController {
  constructor(private readonly placeOrderService: PlaceOrderService) {}

  @Post()
  async create(
    @Req() req: Request,
    @Body() createPlaceOrderDto: CreatePlaceOrderDto,
  ) {
      
   
    this.placeOrderService.create(createPlaceOrderDto);
  }

  
}
