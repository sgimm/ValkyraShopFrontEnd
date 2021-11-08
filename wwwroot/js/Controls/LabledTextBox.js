class LabeledTextBox extends ControlBase{
    constructor(owner, parent) {
        super(owner, parent);
        this.LabeledTextBoxContainer = document.createElement("div");
        this.LabeledTextBoxContainer.setAttribute("name", "LabeledTextBoxContainer");
        this.LabeledTextBoxContainer.setAttribute("style", "display:flex");
        this.Label = document.createElement('div');
        this.Label.setAttribute("name", "Label");
        this.Label.setAttribute("style", "float:left;");
        this.TextBox = document.createElement("div");
        this.TextBox.setAttribute("name", "TextBox");
        this.TextBox.setAttribute("style", "float:left");
        this.LabeledTextBoxContainer.appendChild(this.Label);
        this.LabeledTextBoxContainer.appendChild(this.TextBox);
        this.GetMainLayer().appendChild(this.LabeledTextBoxContainer);
    }

    SetLabelText(text) {
        this.Label.innerHTML = text;
    }

    SetTextBoxText(text) {
        this.TextBox.innerHTML = text;
    }

    SetLabelSize(w, h) {
        this.Label.style.width = w;
        this.Label.style.height = h;
    }

    AddToView(parent) {
        super.AddToView(parent);
        this.Parent.appendChild(this.GetMainLayer());
    }
}