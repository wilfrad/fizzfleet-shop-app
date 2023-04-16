export interface Header {
    claimId: number;
    date: string;
    claimType: string;
    orderId: number;
}

export class FormClaimOrder {
    orderId!: number;
    orderStatus!: string;
    claimType!: ClaimType;
    message!: string;
}

export enum ClaimType {
    returnOrder = 1,
    incompleteOrder = 2,
    deliveryNotRequest = 3
}