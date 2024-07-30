/* import { Controller, Post, Body, Req } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Request } from 'express';
import { DatabaseService } from 'src/database/database.service';
@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly databaseService: DatabaseService,
  ) {}

   @Post()
  async create(
    @Req() req: Request,
    @Body() createPaymentDto: CreatePaymentDto,
  ) {
    const sellerPaymailId = (
      await this.databaseService.seller.findUnique({
        where: {
          id: createPaymentDto.sellerId,
        },
      })
    ).paymailId;
    return this.paymentsService.processPayment(
      sellerPaymailId,
      createPaymentDto,
    );
  } 
}
 */