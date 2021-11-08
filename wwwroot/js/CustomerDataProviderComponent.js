class CustomerDataProviderComponent extends TComponent {
    constructor(owner, parent, valkyra) {
        super(owner, parent, valkyra);
        this.RestProvider;
        this.LastMessage;
    }

    SendMessage(msg) {
        switch (msg.MessageType) {
            case "CustomerDataLoad":
                this.RestProvider = new RestHelper("https://localhost:49159/public/api/customers", "GET");
                this.LastMessage = msg;
                this.RestProvider.Request(null, this.CustomerDataLoaded.bind(this), localStorage.getItem('Authorization'));                
                break;
            case "CustomerUpdate":
				msg.MsgContent.language = null;
				msg.MsgContent.id = parseInt(msg.MsgContent.id);
                this.RestProvider = new RestHelper("https://localhost:49159/public/api/customers", "PUT");
                this.RestProvider.Request(JSON.stringify(msg.MsgContent), this.CustomerDataSaved.bind(this), localStorage.getItem('Authorization'));                
                break;
        }
    }

    CustomerDataLoaded(result) {
        this.LastMessage.MsgContent = result;
        this.LastMessage.MessageType = this.LastMessage.CallBack;
        this.Owner.SendMessage(this.LastMessage);
    }

    CustomerDataSaved(result) { 
        let messageObject = new TMessageObject();
        messageObject.msg = this.Valkyra.Customer;
        messageObject.MessageType = "CustomerDataLoad";
        messageObject.CallBack = "CustomerDataLoaded";
        this.Owner.SendMessage(messageObject);
    }
}