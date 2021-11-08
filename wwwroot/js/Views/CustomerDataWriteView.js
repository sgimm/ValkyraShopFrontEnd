class CustomerDataWriteView extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.CustomerDataWriteViewContainer = document.createElement("div");
        this.CustomerDataWriteViewContainer.setAttribute("name", "CustomerDataWriteViewContainer");
        this.GetMainLayer().appendChild(this.CustomerDataWriteViewContainer);
        this.Controls = [];
        this.CustomerData;
    }

    AddToView(parent) {
        super.AddToView(parent);
        this.Parent.appendChild(this.GetMainLayer());
    }

    SetData(customerData) {
        this.ClearView();
        this.CustomerData = customerData;
        for (let i = 0; i < Object.keys(customerData).length; i++) {
            var c = new LabledInput(this, this.CustomerDataWriteViewContainer);
            c.Settext(Object.keys(customerData)[i] + ":&nbsp;");   
            c.SetValue(customerData[Object.keys(customerData)[i]]);
            c.AddToView();
            this.Controls.push(c);
        }
    }
    GetData() {
        for (let i = 0; i < Object.keys(this.CustomerData).length; i++) {
            this.CustomerData[Object.keys(this.CustomerData)[i]] = this.Controls[i].GetValue();

            console.log(this.Controls[i].GetValue());
            //c.Settext(Object.keys(customerData)[i] + ":&nbsp;");
            //c.SetValue(customerData[Object.keys(customerData)[i]]);
            //c.AddToView();
            //this.Controls.push(c);
              
        }
        return this.CustomerData;
    }
    ClearView() {
        while (this.CustomerDataWriteViewContainer.firstChild) {
            this.CustomerDataWriteViewContainer.removeChild(this.CustomerDataWriteViewContainer.firstChild);
        }
    }
}