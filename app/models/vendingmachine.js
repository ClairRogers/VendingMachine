import Snack from "../models/snack.js";

//PRIVATE


//PUBLIC
export default class VendingMachine {
  constructor() {
    this.snacks = {
      A1: new Snack('Doritos', 2, 'assets/doritos.png'),
      A2: new Snack('Cheetos', 1.50, 'assets/cheetos.jpg'),
      A3: new Snack('Lays', 1.70, 'assets/lays.jpg')
    }
    this.balance = 0
  }
}
