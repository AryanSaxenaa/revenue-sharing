import { Injectable } from '@nestjs/common';
import { CreatePlaceOrderDto } from './dto/create-place-order.dto';
import { PaymentsService } from 'src/payments/payments.service';
@Injectable()
export class PlaceOrderService {
  constructor(private readonly paymentsService: PaymentsService) {}
  async create(createPlaceOrderDto: CreatePlaceOrderDto) {

    const paymentSuccess =
      await this.paymentsService.processPayment(createPlaceOrderDto);




    if (paymentSuccess) {
      
    } else {
      // Payment failed, handle accordingly
      // Logic to cancel the order or notify the user
      return false;
    }
  }

}
