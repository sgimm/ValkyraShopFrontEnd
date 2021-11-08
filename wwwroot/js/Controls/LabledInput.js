class LabledInput extends ControlBase {
    constructor(owner, parent, required) {
        super(owner, parent);
        this.WebAccount = new CustomerWebAccount();
        this.LabledInputLayoutRoot = document.createElement("div");
        this.LabledInputLayoutRoot.setAttribute("id", "LabledInputLayoutRoot")
        this.LabledInputLayoutRoot.setAttribute("style", "width: 250px;")
        this.Label = document.createElement("font");
        this.Label.setAttribute("style", "display:flex;")
        this.Input = document.createElement("input");
        this.Input.setAttribute("style", "display:flex;")
        this.Required = false;
        if (required) {
            this.Label.setAttribute("style", "display:flex; color: #ff0000")
        }
    }



    AddToView() {
        this.Parent.appendChild(this.LabledInputLayoutRoot);
        this.LabledInputLayoutRoot.appendChild(this.Label);
        this.LabledInputLayoutRoot.appendChild(this.Input);
    }

    Settext(text) {
        this.Label.innerHTML = text;
    }

    SetType(type) {
        this.Input.setAttribute("type", type);
    }

    GetValue() {
        return this.Input.value;
    }

    SetValue(value) {
        return this.Input.value = value;
    }
}