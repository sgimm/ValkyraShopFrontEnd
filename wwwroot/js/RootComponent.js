class RootComponent extends TComponent {
    constructor(owner, parent, valkyra) {
        super(owner, parent, valkyra);
        this.HeaderComponentLayout = document.createElement("div");
        this.HeaderComponent = new HeaderComponent(this, this.HeaderComponentLayout, valkyra);
        this.SessionComponent = new SessionComponent(this, null, valkyra);
        this.ContentLayer = document.createElement("div");
        this.ContentLayer.setAttribute("id", "ContentLayer")

        this.FooterLayer = document.createElement("div");
        this.FooterLayer.setAttribute("id", "FooterLayer");

        this.ContentManagerComponent = new ContentManagerComponent(this, this.ContentLayer, valkyra);
        this.DataProviderComponent = new DataProviderComponent(this, null, valkyra);
    }
    Initialize() {
        this.HeaderComponentLayout.setAttribute("id", "HeaderComponentLayout");
        this.Parent.appendChild(this.HeaderComponentLayout);
        this.Parent.appendChild(this.ContentLayer);
        this.Parent.appendChild(this.FooterLayer);
        super.Initialize();
        var msg = new TMessageObject();
        msg.MessageType = 'ShowProductView';
        this.SendMessage(msg);
    }
    Update() {
        super.Update();
    }
}