class SessionComponent extends TComponent {
    constructor(owner, parent) {
        super(owner, parent);
        this.Token = "";
        this.Expire = null;
    }

    SendMessage(msg) {
        switch (msg.MessageType) {
            case "OnLoginSuccess":
                this.Token = msg.MsgContent.token;
                this.Expire = msg.MsgContent.expire;
                document.cookie = "Token=" + this.Token + ";" + "Expires=" + this.Expire +";"
                break;
            case "GetSession":
                break;
            case "SetSession":
                break;
        }
    }
}