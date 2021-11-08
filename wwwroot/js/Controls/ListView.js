class ListView extends ControlBase {
    constructor(owner, parent) {
        super(owner, parent);
        this.ItemSource = []
        this.SelectedItem = null;

        this.ListViewContainer = document.createElement('div');        
    }

    AddToView(parent) {
        if (!parent)
            this.Parent = parent;
    }
}