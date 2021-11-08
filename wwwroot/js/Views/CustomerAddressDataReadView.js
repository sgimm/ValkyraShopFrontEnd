class CustomerAddressDataReadView extends ControlBase {
    constructor(owner, parent)
    {
        super(owner, parent);
        this.CustomerAddressDataReadViewContainer = document.createElement("div");
        this.CustomerAddressDataReadViewContainer.setAttribute("name", "CustomerAddressDataReadViewContainer");
        this.GetMainLayer().appendChild(this.CustomerDataReadViewContainer);
    }

    AddToView(parent) {
        super.AddToView(parent);
        this.Parent.appendChild(this.GetMainLayer());
    }
}