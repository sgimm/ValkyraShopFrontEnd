class CustomerViewControl extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.CustomerViewContainer = document.createElement('div');
        this.CustomerViewDynamicData = document.createElement('div');
        this.CustomerViewDynamicData.setAttribute("name", "CustomerViewDynamicData");
        this.PageTitle = document.createElement("div");
        this.PageData;
        this.OnSaveClicked;

        this.Title = document.createElement("p");
        this.Title.style.fontStyle = "bold";
        this.Title.style.fontSize = "20px";
        this.Title.innerHTML = "Profile";
        
        this.PageTitle.appendChild(this.Title);
        this.EditData = new Button(this, this.CustomerViewDynamicData);
        this.EditData.setText("edit");
        this.EditData.GetMainLayer().style.cssFloat = "right";
        this.EditData.GetMainLayer().style.width = "300px";
        this.EditData.GetMainLayer().style.height = "30px";
        this.EditData.OnClick = this.EditClicked.bind(this);

        this.SaveData = new Button(this, this.CustomerViewDynamicData);
        this.SaveData.setText("Save");
        this.SaveData.GetMainLayer().style.cssFloat = "right";
        this.SaveData.GetMainLayer().style.width = "300px";
        this.SaveData.GetMainLayer().style.height = "30px";
        this.SaveData.OnClick = this.SaveClicked.bind(this);

        this.CustomerViewContainer.appendChild(this.PageTitle);
        this.CustomerViewContainer.appendChild(this.CustomerViewDynamicData);
        this.CustomerReadControl = new CustomerDataReadView(this, this.CustomerViewDynamicData);
        this.CustomerWriteControl = new CustomerDataWriteView(this, this.CustomerViewDynamicData);
        
        this.GetMainLayer().appendChild(this.CustomerViewContainer);        
    }

    AddToView(parent) {
        super.AddToView(parent);
    }

    SetCustomerData(data) {
        this.PageData = null;
        this.ClearView();
        this.PageData = data;
        this.CustomerReadControl.SetData(this.PageData);
        this.EditData.AddToView();
        this.CustomerReadControl.AddToView();
    }

    EditClicked() {
        this.ClearView();
        this.CustomerWriteControl.SetData(this.PageData);
        this.CustomerWriteControl.AddToView();
        this.SaveData.AddToView();
    }

    SaveClicked() {
        if (this.OnSaveClicked)
            this.OnSaveClicked(this.CustomerWriteControl.GetData());
    }

    ClearView() {
        while (this.CustomerViewDynamicData.firstChild) {
            this.CustomerViewDynamicData.removeChild(this.CustomerViewDynamicData.firstChild);
        }
    }
}