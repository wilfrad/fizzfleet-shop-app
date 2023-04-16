export class PersonalData {
    firstName!: string;
    middleName?: string;
    lastName!: string;
    secondName?: string;
    documentNumber!: string;
    documentType!: DocumentType;
    location!: Location;
    address!: Address;
}

export class Location {
    country!: string;
    department!: string;
    city!: string;
}

export class Address {
    address!: string;
    postalCode!: string;
}

export enum DocumentType {
    tarjetaIdentidad = 1,
    cedulaCiudadania = 2,
    cedulaExtranjeria = 3,
    pasaporte = 4
}