class ContentManagerComponent extends TComponent {
    constructor(owner, parent, valkyra) {
        super(owner, parent, valkyra);
        this.CtrlRegisterControl = new RegisterControl(this, this.Parent);
        this.CustomerViewComponent = new CustomerViewComponent(this, this.Parent, valkyra)
        this.ProductViewComponent = new ProductViewComponent(this, this.Parent, valkyra);
        this.LoginCtrl = new LoginControl(this, this.Parent);
    }

    SendMessage(msg) {
        switch (msg.MessageType) {
            case "RegisterAccountView":
                this.ClearView();
                this.CtrlRegisterControl.AddToView();
                break;
            case "ShowValidationResult":
                this.ClearView();
                alert(msg.MsgContent);
                break;
            case "LoginAccountView":
                this.ClearView();
                this.LoginCtrl.AddToView();
                break;
            case "OnLoginError":
                this.LoginCtrl.OnLoginError(msg);
                break;
            case "OnLoginSuccess":
                var msg2 = new TMessageObject();
                msg2.MessageType = "ProductViewShow";
                this.SendMessage(msg2);
                break;
            case "HandleRegisterResult":
                this.CtrlRegisterControl.HandleRegisterResult(msg);
                break;
            case "ShowProductView":
                var msg1 = new TMessageObject();
                msg1.MessageType = "ProductViewShow";
                this.SendMessage(msg1);
                break;                 
        }
        super.SendMessage(msg);
    }

    ClearView() {
        while (this.Parent.firstChild) {
            this.Parent.removeChild(this.Parent.firstChild);
        }
    }
}