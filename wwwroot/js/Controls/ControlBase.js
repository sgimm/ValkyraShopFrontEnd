class ControlBase {
    constructor(owner, parent) {
        this.Parent = parent;
        this.Owner = owner;
        this.MainLayer = document.createElement('div');
        this.StyleClass = null;
    }

    AddToView(parent) {
        if (!this.Parent)
            this.Parent = parent;
        this.Parent.appendChild(this.GetMainLayer())
    }

    SetStyle(styleClass) {

    }

    GetMainLayer() {
        return this.MainLayer;
    }
}