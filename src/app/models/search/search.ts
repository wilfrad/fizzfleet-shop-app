export class Search {
    foundItems: FoundItem[] = [];
}

export class FoundItem {
    publishId!: number;
    coverUrl?: string;
    title!: string;
}