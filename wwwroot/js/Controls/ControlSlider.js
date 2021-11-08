class ControlSlider extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.ImageSliderContainer = document.createElement("div");
        this.ImageSliderContent = document.createElement("div");
        this.ImageSliderContent.setAttribute('class', 'Content');
        this.Elapsed = 0;
        this.Interval = 1000;
        this.Index = 0;
        this.Count = 0;
        this.Source = [];
        this.PrevButton = new Button(this, this.ImageSliderContainer);
        this.PrevButton.SetSize(150, 30);
        this.PrevButton.OnClick = this.Prev.bind(this);
        this.NextButton = new Button(this, this.ImageSliderContainer);
        this.NextButton.SetSize(150, 30);
        this.NextButton.OnClick = this.Next.bind(this);
        this.ImageSliderContainer.appendChild(this.ImageSliderContent);
        this.ImageSliderContainer.appendChild(this.PrevButton.GetMainLayer());
        this.ImageSliderContainer.appendChild(this.NextButton.GetMainLayer());
        this.GetMainLayer().appendChild(this.ImageSliderContainer);
    }

    SetSource(items) {
        this.Source = items;
        this.Count = items.length;
        this.SwitchTo(this.Index);
    }

    AddItem(item) {
        this.Source.push(item)
        this.Count++;
    }

    Update() {
        this.Elapsed++;
        if (this.Elapsed >= this.Interval) {
            this.Next();
            this.Elapsed = 0;
        }
    }

    Prev() {
        if (this.Count > 0)
            this.Index--;
        if (this.Index < 0) {
            this.Index = this.Count - 1;
        }
        this.Elapsed = 0;
        this.SwitchTo(this.Index);
    }

    Next() {
        if (this.Count > 0)
            this.Index++;
        if (this.Index > this.Count-1) {
            this.Index = 0;
        }
        this.Elapsed = 0;
        this.SwitchTo(this.Index);
    }

    SwitchTo(index) {
        console.log(index);
        while (this.ImageSliderContent.firstChild) {
            this.ImageSliderContent.removeChild(this.ImageSliderContent.firstChild);
        }
        this.ImageSliderContent.appendChild(this.Source[index].GetMainLayer());
    }

    AddToView(parent) {
        super.AddToView(parent);
    }
}