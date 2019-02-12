import VendingMachine from "../models/vendingmachine.js";

//PRIVATE
let _vm = new VendingMachine()
let transaction = false

//PUBLIC
export default class VenderService {
  constructor() {

  }
  get SnackDictionary() {
    return _vm.snacks
  }
  get Balance() {
    return _vm.balance
  }
  addMoney(num) {
    _vm.balance += num
  }
  purchase(num) {
    if (_vm.balance >= num) {
      _vm.balance -= num
      transaction = true
    } else if (_vm.balance < num) {
      transaction = false
    }
  }
  get Transaction() {
    return transaction
  }
}