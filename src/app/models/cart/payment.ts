import { CartItem } from "./cart";

export class Payment {
    listCartItem!: CartItem[];
    couponId?: number;
    paymentMethod!: PaymentMethod;
    paymentVerify!: boolean;
}

export interface PaymentMethod {
    accountId: number;
    transactionId: number;
}