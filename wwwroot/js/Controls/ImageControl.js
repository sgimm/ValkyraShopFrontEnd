class ImageControl extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.Image = document.createElement('img');
        this.GetMainLayer().appendChild(this.Image);
    }

    SetSource(source)
    {
        this.Image.setAttribute('src', source);
    }

    SetSize(width, height)
    {
        this.Image.setAttribute('style', 'width:' + width + 'px;height:' + height + 'px;');
    }    
}