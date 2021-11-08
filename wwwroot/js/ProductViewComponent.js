class ProductViewComponent extends TComponent {
    constructor(owner, parent, valkyra) {
        super(owner, parent, valkyra)
        this.ViewContainer = document.createElement("div");
        this.ProductViewLayer = document.createElement("div");
        this.ProductView = new ProductView(this, this.ProductViewLayer);
    }

    Initialize() {
        super.Initialize();
    }

    Update() {
        this.ProductView.Update();
    }

    SendMessage(msg) {
        switch (msg.MessageType) {

            case "ProductViewShow":
                while (this.Parent.firstChild) {
                    this.Parent.removeChild(this.Parent.firstChild);
                    break;
                }
                this.Parent.appendChild(this.ViewContainer);
                this.ViewContainer.appendChild(this.ProductView.GetMainLayer());
                var getControlSliderData = new TMessageObject();
                getControlSliderData.MessageType = "ProductViewControlSliderDataLoad";
                getControlSliderData.CallBack = "ProductViewControlSliderDataLoaded";
                this.Root.SendMessage(getControlSliderData);
                break;
            case "ProductViewControlSliderDataLoaded":
                this.ProductView.SetSliderSource(msg.MessageContent);
                break;
        }
    }
}