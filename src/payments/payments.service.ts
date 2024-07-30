import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { NeucronSDK } from 'neucron-sdk';

const neucron = new NeucronSDK();
@Injectable()
export class PaymentsService {
  async processPaymentToBusiness( 
    businessPaymailId: string,
    buyerPaymailId: string,
    buyerPaymailPassword: string,
    price: number,
    revenueSplit: number,
  ) {
    

    const authModule = neucron.authentication;

    const loginResponse = await authModule.login({
      buyerPaymailId,
      buyerPaymailPassword,
    });
    console.log(loginResponse);

    const options = {
      outputs: [
        {
          address: businessPaymailId,
          note: 'buying product',
          amount: Number(price - revenueSplit),
        },
      ],
    };
    console.log(options);
    try {
      const payResponse = await neucron.pay.txSpend(options);
      console.log(payResponse);
      return { payed: true, payment: payResponse.data.txid };
    } catch (error) {
      console.error('Pay request failed:', error);
      return { payed: false, error: error.message };
    }
  }



  async processPaymentToSalesPerson(
    sellerPaymailId: string,
    buyerPaymailId: string,
    buyerPaymailPassword: string,
    revenueSplit: number,
  ) {
    

    const authModule = neucron.authentication;

    const loginResponse = await authModule.login({
      buyerPaymailId,
      buyerPaymailPassword,
    });
    console.log(loginResponse);

    const options = {
      outputs: [
        {
          address: sellerPaymailId,
          note: ' paying commiscation',
          amount: Number(revenueSplit),
        },
      ],
    };
    console.log(options);
    try {
      const payResponse = await neucron.pay.txSpend(options);
      console.log(payResponse);
      return { payed: true, payment: payResponse.data.txid };
    } catch (error) {
      console.error('Pay request failed:', error);
      return { payed: false, error: error.message };
    }
}

}
