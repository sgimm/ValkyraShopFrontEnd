class SearchControl extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent)
        this.SearchControlLayer = document.createElement("div");
        this.SearchControlLayer.setAttribute("id", "SearchControlLayer")
        this.SearchControlLayer.setAttribute("class", "SearchControlLayer")
        this.SearchInput = document.createElement("input");
        this.SearchInput.setAttribute("id", "SearchInput");
        this.SearchInput.setAttribute("class", "SearchInput");
        this.SearchButton = document.createElement("input");
        this.SearchButton.setAttribute("type", "submit");
        this.SearchButton.setAttribute("id", "SearchButton");
        this.SearchButton.setAttribute("class", "SearchButton");
    }

    AddToView() {        
        this.SearchInput.setAttribute("size", "120");
        this.Parent.appendChild(this.SearchControlLayer);
        this.SearchControlLayer.appendChild(this.SearchInput);
        this.SearchControlLayer.appendChild(this.SearchButton);
    }
}