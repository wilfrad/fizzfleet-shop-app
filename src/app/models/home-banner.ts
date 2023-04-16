export interface Banner {
    publishId: number;
    title: string;
    slogan: string;
    message: string;
    presentation: Image;
}

export class Image {
    mainImageUrl!: string;
    backgroundImageUrl!: string;
}