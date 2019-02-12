import Snack from "./snack.js";

export default class VendingMachine {
  constructor() {
    this.snacks = {
      a1: {
        item: new Snack()
      }
    }
  }
}