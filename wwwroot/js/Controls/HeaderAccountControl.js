class HeaderAccountControl extends ControlBase{
    constructor(owner, parent) {
        super(owner, parent)
        this.OnItemSelected = null;
        this.HeaderAccountControlLayer = document.createElement("div");
        this.HeaderAccountControlLayer.setAttribute("id", "HeaderAccountControlLayer");
        this.HeaderAccountControlLayer.setAttribute("class", "HeaderAccountControlLayer");
        this.GetMainLayer().appendChild(this.HeaderAccountControlLayer);
        this.HeaderControlMenuList = document.createElement("ul");
        this.HeaderControlMenuListItemAccount = document.createElement("li");
        this.HeaderControlMenuListItemAccount.setAttribute("class", "dropdown");
        this.HeaderControlMenuListItemAccountTitle = document.createElement("a");
        this.HeaderControlMenuListItemAccountTitle.setAttribute("href", "javascript:void(0)");
        this.HeaderControlMenuListItemAccountTitle.setAttribute("class", "dropbtn");
        this.HeaderControlMenuListItemAccountTitle.innerHTML = "Account";
        this.HeaderControlMenuListDropDownContent = document.createElement("div");
        this.HeaderControlMenuListDropDownContent.setAttribute("class", "dropdown-content");
        this.HeaderControlMenuListDropDownContent.setAttribute("id", "HeaderControlMenuListDropDownContent");
        this.HeaderAccountControlLayer.appendChild(this.HeaderControlMenuList);
        this.HeaderControlMenuList.appendChild(this.HeaderControlMenuListItemAccount);
        this.HeaderControlMenuListItemAccount.appendChild(this.HeaderControlMenuListItemAccountTitle);
        this.HeaderControlMenuListItemAccount.appendChild(this.HeaderControlMenuListDropDownContent);
        this.Content = [];
    }

    AddToView(parent) {
        super.AddToView(parent);
    }

    SetConent(content) {
        this.ClearContent();
        this.Content = content;
        for (let i = 0; i < this.Content.length; i++) {
            this.Content[i].Parent = this.HeaderControlMenuListDropDownContent;
            this.Content[i].OnClick = this.ItemSelected.bind(this);
            this.Content[i].AddToView();
            this.HeaderControlMenuListDropDownContent.appendChild(this.Content[i].GetMainLayer()); 
        }
    }

    ItemSelected(sender) {
        if (this.OnItemSelected)
            this.OnItemSelected(sender);
    }

    ClearContent() {
        while (this.HeaderControlMenuListDropDownContent.firstChild) {
            this.HeaderControlMenuListDropDownContent.removeChild(this.HeaderControlMenuListDropDownContent.firstChild);
        }
    }
}
