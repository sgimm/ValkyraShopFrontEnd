class ImageButton extends ControlBase {
    constructor(owner, parent, name, src) {
        super(owner, parent);
        this.Name = name;
        this.ImageButtonLayer = document.createElement("div");
        this.ImageButtonLayer.setAttribute("id", this.Name);
        this.ImageSrc = src;
        this.Image = document.createElement("img");
        this.Image.addEventListener("click", this.Click.bind(this));
        this.OnClick = null;
    }

    AddToView() {
        this.Image.setAttribute("width", "30");
        this.Image.setAttribute("height", "30");
        this.Image.setAttribute("src", this.ImageSrc);
        this.Image.style.cssFloat = "left";
        this.Parent.appendChild(this.ImageButtonLayer);
        this.ImageButtonLayer.appendChild(this.Image);
    }

    Click(sender)
    {        
        if(this.OnClick)
        {
            this.OnClick();
        }
    }
}