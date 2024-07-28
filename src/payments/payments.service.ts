import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  processPayment(createPaymentDto: CreatePaymentDto) {


    const isPaymentSuccessful = Math.random() > 0.25; // Simulate success or failure
    return isPaymentSuccessful;
  }

  
}
