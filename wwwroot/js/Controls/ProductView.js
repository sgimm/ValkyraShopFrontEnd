class ProductView extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.SliderContainer = document.createElement('div');
        this.ControlSlider = new ControlSlider(this, this.SliderContainer);
        this.GetMainLayer().appendChild(this.ControlSlider.GetMainLayer());
    }

    SetSliderSource(items) {
        var controls = [];
        for (let i = 0; i < items.length; i++) {
            var img = new ImageControl(this, null);
            img.SetSource(items[i]);
            img.SetSize(400, 300);
            controls.push(img);
        }
        this.ControlSlider.SetSource(controls);
    }

    Update() {
        this.ControlSlider.Update();
    }

    SetProductSource(items) {

    }

    AddToView() {

    }
}