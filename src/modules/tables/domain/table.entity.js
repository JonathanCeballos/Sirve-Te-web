// Definimos cómo es una mesa en nuestro sistema
export class Table {
    constructor(id, number, isOccupied = false, customerName = "") {
        this.id = id;
        this.number = number;
        this.isOccupied = isOccupied;
        this.customerName = customerName;
    }
}