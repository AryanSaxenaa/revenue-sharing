import { Module } from '@nestjs/common';
import { PlaceOrderService } from './place-order.service';
import { PlaceOrderController } from './place-order.controller';
import { PaymentsService } from 'src/payments/payments.service';

@Module({
  controllers: [PlaceOrderController],
  providers: [PlaceOrderService, PaymentsService],
})
export class PlaceOrderModule {}
