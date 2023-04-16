export interface Header {
    orderId: number;
    date: string;
    totalValue: string;
    status: string;
}

export interface Content {
    orderId: number;
    controlPoints: ControlPoint[];
}

export class ControlPoint {
    name: string = "none";
    date: string = "----";
    checkOut: boolean = false;
}