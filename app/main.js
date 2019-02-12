import VenderController from "./components/vendrcontroller.js";


class App {
  constructor() {
    this.controllers = {
      venderController: new VenderController()
    }
  }
}


// @ts-ignore
window.app = new App()