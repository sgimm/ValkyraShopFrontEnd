class CustomerViewComponent extends TComponent {
    constructor(owner, parent, valkyra) {
        super(owner, parent, valkyra);
        this.CustomerDataProvider = new CustomerDataProviderComponent(this, null, valkyra);
        this.CustomerView = new CustomerViewControl(this, this.Parent);
        this.CustomerView.OnSaveClicked = this.SaveCustomer.bind(this);
    }

    Initialize() {
    }

    SendMessage(msg) {
        switch (msg.MessageType) {
            case "CustomerDataLoaded":
                this.CustomerView.SetCustomerData(msg.MsgContent);
                break;
            case "CustomerView":
                this.ClearView();
                this.CustomerView.AddToView();
                var msgLoadCustomer = new TMessageObject();
                msgLoadCustomer.MessageType = 'CustomerDataLoad';
                msgLoadCustomer.CallBack = 'CustomerDataLoaded';
                msgLoadCustomer.MsgContent = msg.MsgContent;
                this.CustomerDataProvider.SendMessage(msgLoadCustomer);
                break;
        }
        super.SendMessage(msg);
    }

    ClearView() {
        while (this.Parent.firstChild) {
            this.Parent.removeChild(this.Parent.firstChild);
        }
    }

    SaveCustomer(data) {
        var msgUpdateCustomer = new TMessageObject();
        msgUpdateCustomer.MessageType = 'CustomerUpdate';
        msgUpdateCustomer.CallBack = 'CustomerDataLoaded';
        msgUpdateCustomer.MsgContent = data;
        this.CustomerDataProvider.SendMessage(msgUpdateCustomer);
    }
}