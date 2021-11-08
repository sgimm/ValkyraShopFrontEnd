class DataProviderComponent extends TComponent {
    constructor(owner, parent, valkyra) {
        super(owner, parent, valkyra);
        this.RestProvider;
        this.LastMessage;
    }
    Initialize() {

    }
    SendMessage(msg) {
        switch (msg.MessageType) {
            case "RegisterAccount":
                this.RestProvider = new RestHelper("https://localhost:49159/public/api/customers/registration", "Post", null);
                this.LastMessage = msg;                 
                this.RestProvider.Request(JSON.stringify(msg.MsgContent), this.RequestCompleted.bind(this));
                alert("Try to Register");
                break;
            case "Login":
                this.RestProvider = new RestHelper("https://localhost:49159/public/api/customers/login", "POST", null);
                this.RestProvider.Request(JSON.stringify(msg.MsgContent), this.LoginComplete.bind(this));
                break;
            case "ProductViewControlSliderDataLoad":
                var items = [];
                items.push('/images/nhh1.png');
                items.push('/images/nhh2.png');
                items.push('/images/nhh3.png');
                items.push('/images/nhh4.png');
                msg.MessageType = msg.CallBack;
                msg.MessageContent = items;
                this.Owner.SendMessage(msg);
                break;
        }
    }

    RequestCompleted(result) {
        if (this.LastMessage.CallBack) {
            var msg = new TMessageObject();
            msg.MessageType = this.LastMessage.CallBack;
            msg.MsgContent = result;
            this.Owner.SendMessage(msg);            
        }
    }

    RegisterComplete(result) {

    }
    
    LoginComplete(result) {
        console.log(result);
        var msg = new TMessageObject();
        if (!result) {
            msg.MessageType = "OnLoginError";
        }
        else {
			localStorage.setItem('Authorization', result.Authorization);
            msg.MessageType = "OnLoginSuccess";
        }
        msg.MsgContent = result;
        this.Owner.SendMessage(msg);
    }
}