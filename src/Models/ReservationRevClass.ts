export class ReservationRevDetails {
    name: string;
    email: string;
    contactNumber: number;
    cardNumber: number;
    cvc: number;
    cardHolderName: string;
    date: Date;
    time: Date;
    numberOfSeats: number;
    location: string;
    createdAt:Date
    updatedAt:Date


    constructor(
        name: string,
        email: string,
        contactNumber: number,
        cardNumber: number,
        cvc: number,
        cardHolderName: string,
        date: Date,
        time: Date,
        numberOfSeats: number,
        location: string,
        createdAt?:Date,
        updatedAt?:Date,
    ) {
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;
        this.cardNumber = cardNumber;
        this.cvc = cvc;
        this.cardHolderName = cardHolderName;
        this.date = date;
        this.time = time;
        this.numberOfSeats = numberOfSeats;
        this.location = location;
    }
}
 