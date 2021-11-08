class Button extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.Name = ''
        this.OnClick = null;
        this.ButtonContainer = document.createElement('div');
        this.ButtonContent = document.createElement('div');
        this.ButtonContent.onclick = (function (sender) {
            this.OnButtonClick(this);
        }).bind(this);
        this.ButtonContainer.appendChild(this.ButtonContent);
        this.GetMainLayer().appendChild(this.ButtonContainer);
    }

    setText(text) {
        this.ButtonContent.innerHTML = text;
    }

    SetSize(width, height) {
        this.ButtonContainer.setAttribute("style", "width:" + width + "px;" + "height:" + height + "px;");
        this.ButtonContent.setAttribute("style", "width:" + width + "px;" + "height:" + height + "px; background-color: #ff33aa");
    }

    AddToView(parent) {
        super.AddToView(parent);
    }

    OnButtonClick(self) {
        if (self.OnClick)
            self.OnClick(this);
    }
    
    setName(name) {
        this.Name = name;
    }

    getName() {
        return this.Name;
    }
}