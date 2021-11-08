class LoginControl extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.LoginControlLayer = document.createElement("div");
        this.LoginControlLayer.setAttribute("id", "LoginControlLayer");
        this.LoginErrorResult = document.createElement("div");
        this.InputUserName = new LabledInput(this, this.LoginControlLayer);
        this.InputPasswort = new LabledInput(this, this.LoginControlLayer);
        this.BtnSend = document.createElement("input");
        this.BtnSend.setAttribute("id", "login");
        this.BtnSend.setAttribute("type", "submit");
        this.BtnSend.setAttribute("value", "login");
        this.BtnSend.onclick = (function (sender) {
            this.Login(this);
        }).bind(this);
    }

    AddToView() {
        this.Parent.appendChild(this.LoginControlLayer);
        this.LoginControlLayer.appendChild(this.LoginErrorResult);
        this.InputUserName.Settext("Email");
        this.InputUserName.AddToView();
        this.InputPasswort.Settext("Password");
        this.InputPasswort.SetType("password")
        this.InputPasswort.AddToView();
        this.LoginControlLayer.appendChild(this.BtnSend);
        this.ErrorMessageNoPass = "Enter Password";
        this.ErrorMessageNoUser = "Enter Email";
    }

    Login(sender) {
        this.Validate();
        var _messageObject = new TMessageObject();
        var weblogin = new WebLogin(this.InputUserName.GetValue(), this.InputPasswort.GetValue());
        _messageObject.MessageType = "Login";
        _messageObject.MsgContent = weblogin;
        _messageObject.CallBack = this.OnLoginError;
        sender.Owner.Root.SendMessage(_messageObject);
    }
    Validate() {
        if (this.InputUserName.GetValue().length < 1)
            alert(this.ErrorMessageNoUser);
            return false;
        if (this.InputPasswort.GetValue().length < 1)
            alert(this.ErrorMessageNoPass);
            return false;
        return true;
    }
    OnLoginError(msg) {
        this.LoginErrorResult.innerHTML = msg.MsgContent.validationResultMessage;
    }
}