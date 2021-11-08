class HeaderControl extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.WebUser = null;
        this.HeaderControlLayer = document.createElement("div");
        this.HeaderControlContainer = document.createElement("div");
        this.HeaderControlContainer.setAttribute("id", "HeaderControlContainer");
        this.HeaderControlContainer.setAttribute("class", "HeaderControlContainer");
        this.HeaderControlLayer.setAttribute("id", "HeaderControlLayer");
        this.HeaderControlLayer.setAttribute("class", "HeaderControlLayer");
        this.Logo = new ImageButton(this.Owner, this.HeaderControlContainer, "Logo", '/images/Download.png');
        this.Logo.OnClick = this.Home.bind(this);
        this.SearchControl = new SearchControl(this.Owner, this.HeaderControlContainer);
        this.AccountControl = new HeaderAccountControl(this.Owner, this.HeaderControlContainer);
        this.AccountControl.OnItemSelected = this.ItemSelected.bind(this);
        this.HeaderControlLayer.appendChild(this.HeaderControlContainer);
        this.GetMainLayer().appendChild(this.HeaderControlLayer);
        this.setGuestButtons();
    }

    setState(state, user) {
        this.WebUser = user;
        switch (state) {
            case "Login":
                this.setLoggedInButtons();
                break;
        }
    }

    SetBackgroundColor() {

    }

    AddToView(parent) {
        super.AddToView(parent);
        this.Logo.AddToView();
        this.SearchControl.AddToView();
        this.AccountControl.AddToView();
    }

    setGuestButtons() {
        var controls = [];
        var btnLogin = new Button(this, null);
        btnLogin.setText("Login");
        btnLogin.setName("Login")
        btnLogin.SetSize(150, 30);
        var btnRegister = new Button(this, null);
        btnRegister.setText("Register");
        btnRegister.setName("Register")
        btnRegister.SetSize(150, 30);
        controls.push(btnLogin);
        controls.push(btnRegister);
        this.AccountControl.SetConent(controls)
    }

    setLoggedInButtons() {
        var controls = [];
        var btnProfile = new Button(this, null);
        btnProfile.setText("Profile");
        btnProfile.setName("Profile")
        btnProfile.SetSize(150, 30);
        var btnWishlist = new Button(this, null);
        btnWishlist.setText("Wishlist");
        btnWishlist.setName("Wishlist")
        btnWishlist.SetSize(150, 30);
        var btnOrders = new Button(this, null);
        btnOrders.setText("Orders");
        btnOrders.setName("Orders")
        btnOrders.SetSize(150, 30);
        controls.push(btnProfile);
        controls.push(btnWishlist);
        controls.push(btnOrders);
        this.AccountControl.SetConent(controls)

    }

    ItemSelected(sender) {
        switch (sender.getName()) {
            case "Login":
                this.Login(sender);
                break;
            case "Register":
                this.Register(sender);
                break;
            case "Profile":
                this.Customer(sender);
                break;
        }
    }

    Login(sender) {
        var _messageObject = new TMessageObject();
        _messageObject.MessageType = "LoginAccountView";
        this.Owner.Root.SendMessage(_messageObject);
    }

    Register(sender) {
        var _messageObject = new TMessageObject();
        _messageObject.MessageType = "RegisterAccountView";
        this.Owner.Root.SendMessage(_messageObject);
    }

    Customer(sender) {
        var _messageObject = new TMessageObject();
        _messageObject.MessageType = "CustomerView";
        _messageObject.MsgContent = this.WebUser;
        this.Owner.Root.SendMessage(_messageObject);
    }

    Home()
    {        
        var _msg = new TMessageObject();
        _msg.MessageType = "ShowProductView";
        this.Owner.Root.SendMessage(_msg);
    }
}