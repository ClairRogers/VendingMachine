import VenderController from "./components/vendercontroller.js";


class App {
  constructor() {
    this.controllers = {
      venderController: new VenderController()
    }
  }
}


// @ts-ignore
window.app = new App()