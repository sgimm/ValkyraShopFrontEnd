class OrderViewComponen extends TComponent {
    constructor(owner, parent) {
        super(owner, parent, valkyra);
        this.OrderDataProvider = new OrderDataProviderComponent(this, null, valkyra);
        this.OrderView = new OrderView(this, this.Parent)
    }

    Initialize() {
    }

    SendMessage(msg) {
        switch (msg.MessageType) {

        }
    }
}