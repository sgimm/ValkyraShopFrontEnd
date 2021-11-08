class CustomerDataReadView extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.CustomerDataReadViewContainer = document.createElement("div");
        this.CustomerDataReadViewContainer.setAttribute("name", "CustomerDataReadViewContainer");
        this.GetMainLayer().appendChild(this.CustomerDataReadViewContainer);
        this.Controls = [];
    }

    AddToView(parent) {
        super.AddToView(parent);
        this.Parent.appendChild(this.GetMainLayer());
    }

    SetData(customerData) {
        this.ClearView();
        for (let i = 0; i < Object.keys(customerData).length; i++) {
            var c = new LabeledTextBox(this, this.CustomerDataReadViewContainer);
            c.SetLabelText(Object.keys(customerData)[i] + ":&nbsp;");
            c.SetLabelSize("150px", "30px");
            c.SetTextBoxText(customerData[Object.keys(customerData)[i]]);
            c.AddToView();
        }
    }

    ClearView() {
        while (this.CustomerDataReadViewContainer.firstChild) {
            this.CustomerDataReadViewContainer.removeChild(this.CustomerDataReadViewContainer.firstChild);
        }
    }
}