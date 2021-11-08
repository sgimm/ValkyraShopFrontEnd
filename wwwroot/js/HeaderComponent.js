class HeaderComponent extends TComponent {
    constructor(owner, parent, valkyra) {
        super(owner, parent, valkyra);
        this.HeaderLayer = document.createElement("div");
        this.HeaderLayer.setAttribute("id", "HeaderLayer")
    }
    Initialize() {
        this.Parent.appendChild(this.HeaderLayer);
        this.HeaderControl = new HeaderControl(this, this.HeaderLayer);
        this.HeaderControl.AddToView();
    }

    SendMessage(msg) {
        switch (msg.MessageType) {
            case "OnLoginSuccess":
                this.Valkyra.SaveCustomer(msg.MsgContent);
                this.HeaderControl.setState("Login", msg.MsgContent);
                break;
        }
    }

    Update() {

    }
}