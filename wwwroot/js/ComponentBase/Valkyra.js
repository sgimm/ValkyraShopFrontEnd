class Valkyra {
    constructor() {
        this.Customer;
    }

    SaveCustomer(customer) {
        //replace with BrowserStorage
        this.Customer = customer;
    }

    LoadCustomer() {
        //replace with BrowserStorage
        return this.Customer;
    }
}