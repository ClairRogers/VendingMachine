import VenderService from "./venderservice.js";

//PRIVATE
let venderService = new VenderService()

function drawSnacks() {
  let snackDictionary = venderService.SnackDictionary
  let b = venderService.Balance
  let template = ''
  for (const prop in snackDictionary) {
    let snack = snackDictionary[prop]
    template += `<div class="col-12 col-md-4">
  <img class="img-fluid mt-4 pics" src="${snack.img}">
    <h1>${snack.name}</h1>
    <h2>$${snack.price.toFixed(2)}</h2>
    <button class="btn btn-success w-100" onclick="app.controllers.venderController.purchase(${snack.price})">${prop}</button>
      </div>`
  }
  document.getElementById('bal').innerText = b.toFixed(2)
  document.getElementById('draw-vm').innerHTML = template
}



//PUBLIC
export default class VenderController {
  constructor() {
    drawSnacks()
  }
  addMoney(num) {
    venderService.addMoney(num)
    drawSnacks()
  }
  purchase(num) {
    venderService.purchase(num)
    drawSnacks()
    if (venderService.Transaction) {
      document.getElementById('results').innerText = `Purchase successful!`
    } else {
      document.getElementById('results').innerText = `No money!`
    }
  }
}





