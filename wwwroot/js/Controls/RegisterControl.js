class RegisterControl extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.RegisterControlLayoutRoot = document.createElement("div");
        this.RegisterControlLayoutRoot.setAttribute("id", "RegisterControlLayoutRoot");
        this.WebAccount = new CustomerWebAccount();
        this.inputEMail = new LabledInput(this, this.RegisterControlLayoutRoot, true);
        this.inputPassword = new LabledInput(this, this.RegisterControlLayoutRoot, true);
        this.inputPassword2 = new LabledInput(this, this.RegisterControlLayoutRoot, true);
        this.Submit = document.createElement("input");
        this.Submit.setAttribute("type", "button");
        this.Submit.setAttribute("value", "submit");
        this.Submit.onclick = (function (sender) {
            this.RegisterAccount(this);
        }).bind(this);
        this.ResponseMessageLayout = document.createElement('div');
        this.ResponseMessageLayout.setAttribute('id', 'ResponseMessageLayout');
        this.inputEMail.AddToView();
        this.inputPassword.AddToView();
        this.inputPassword2.AddToView();
        this.RegisterControlLayoutRoot.appendChild(this.Submit);
        this.RegisterControlLayoutRoot.appendChild(this.ResponseMessageLayout);
    }
    AddToView() {
        this.Parent.appendChild(this.RegisterControlLayoutRoot)
        this.inputEMail.Settext("Email :");        
        this.inputPassword.Settext("Password");
        this.inputPassword.SetType("password");
        this.inputPassword2.Settext("Password");
        this.inputPassword2.SetType("password")
    }
    RegisterAccount(e) {
        e.WebAccount.Email = e.inputEMail.GetValue();
        e.WebAccount.Password = e.inputPassword.GetValue();
        if (this.Validate()) {
            var _messageObject = new TMessageObject();
            _messageObject.MessageType = "RegisterAccount";
            _messageObject.MsgContent = e.WebAccount;
            _messageObject.CallBack = "HandleRegisterResult";
            e.Owner.Root.SendMessage(_messageObject);
        }
    }
    
    Validate() {
        if (!this.WebAccount.Password || this.WebAccount.Password == "")
        {
            this.ResponseMessageLayout.innerHTML = "password not valid";
            return false;
        }
        if (this.inputPassword.GetValue() != this.inputPassword2.GetValue()) {
            this.ResponseMessageLayout.innerHTML = "passwords are not equal";
            return false;
        }
        if (!this.inputEMail.GetValue().includes("@")) {
            this.ResponseMessageLayout.innerHTML = "email not valid";
            return false;
        }
        return true;
    }

    HandleRegisterResult(msg) {
        this.ResponseMessageLayout.innerHTML = msg.MsgContent.resultMessage;
    }
}