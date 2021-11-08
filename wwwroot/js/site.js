// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
class ValkyraApp {
    constructor(parent) {
        this.RootComponent = new RootComponent(null, parent, new Valkyra());
    }
    Initialize() {
        this.RootComponent.Initialize();
        setInterval(this.Update.bind(this), 1);
    }
    Update() {
        if (this.RootComponent)
            this.RootComponent.Update();
    }
    SendMessage(msg) {
        this.RootComponent.SendMessage(msg);
    }
}
