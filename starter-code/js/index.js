let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');



function updateSubtot(products) {
  let unitPrice = document.querySelectorAll('.pu > span');
  let qty = document.querySelectorAll('.qty input[type=number]');
  let subtotal = document.querySelectorAll('.subtot > span');
  let newPrice = 0;
  for (let i = 0; i < products.length; i++) {
    newPrice = parseFloat(unitPrice[i].innerText) * parseFloat(qty[i].value);
    subtotal[i].innerHTML = newPrice;
  }
}

let addItemButton = document.getElementById('create').onclick = createRow

let head = document.querySelectorAll('thead tr th')
let arrHead = Array.from(head)

function createRow() {

  let parent = document.getElementsByTagName('tbody')[0];
  let newName = document.querySelector('input[type=text]').value;
  let rowCnt = parent.rows.length;

  let tr = parent.insertRow(rowCnt);
  tr.setAttribute('class', "product");
  for (let i = 0; i < 1; i++) {
    let newName = document.querySelector('.new input').value;
    let newValue = document.querySelector('.newPrice').value
    let td = document.createElement('td')
    let td0 = tr.insertCell(0)
    let td1 = tr.insertCell(1)
    let td2 = tr.insertCell(2)
    let td3 = tr.insertCell(3)
    let td4 = tr.insertCell(4)
    td0.innerHTML = newName;
    td0.className = 'name';
    td1.innerHTML = '<td>$<span>'+ newValue + ' </span></td>'
    td1.className = 'pu'
    td2.innerHTML = '<label><input type = "number" value = "' + 1 + '" min = "0" ></label>'
    td2.className = 'qty'
    td3.innerHTML = '<td>$<span >0</span></td>'
    td3.className = 'subtot'
    td4.innerHTML = '<button class="btn btn-delete delete">Delete</button>'
    td4.className = 'rm'
    setDelete()
  }
}

function calcAll() {
  let $products = document.querySelectorAll('.product');
  let products = Array.from($products);

  updateSubtot(products);
  let result = 0;
  $products.forEach(elem => result += elem.querySelector('.pu span').innerText * elem.querySelector('.qty input').value);
  document.querySelector('h2 span').innerHTML = result;
}

//  handler of remove botton and put in the function create!!!
function setDelete(){ 
  let $delete = document.querySelectorAll('.rm');
  $delete.forEach(elem => elem.onclick = deleteItem)

  function deleteItem() {

    document.querySelector('.product').remove()

  }

}


setDelete()


$calc.onclick = calcAll;








// let deletes = Array.from($delete);




// function nameProduct() {
//   let nmePro = document.querySelectorAll('.product .newname')
//   nmePro.
// }















// function test() {
//   let button = document.querySelector(".product");
//   button.className = "product deleted";
//   let toDelete = document.querySelector(".deleted");​
//   for (let i = 0; i < table.childNodes.length; i++) {
//     if (table.childNodes[i] == toDelete) {
//       table.removeChild(table.childNodes[i]);
//     }
//   }
// }



// let $cart = document.querySelector('#cart tbody');
// var $calc = document.getElementById('calc');
// function updateSubtot(product) {
//   let arrProducts = document.getElementsByClassName('productPrice')
//   var arr = [].slice.call(arrProducts)

//   // console.log(arrProducts)
//   // console.log(arr)

//   for (var i = 0; i < arr.length; i++) {
//     let priceProduct = parseFloat(arr[i].innerHTML, 10)
//     // console.log(priceProduct)

//     let quantity = document.getElementsByClassName("units");
//     let arr2 = [].slice.call(quantity);
//     let amountTotal = arr2[i].value;
//     // console.log(amountTotal)

//     let priceLabel = document.getElementsByClassName(product);
//     // console.log(priceLabel)
//     let arr3 = [].slice.call(priceLabel);
//     // console.log(arr3)
//     let finalProductPrice = priceProduct * amountTotal;
//     finalProductPrice = finalProductPrice.toFixed(2);
//     priceLabel[i].innerText = finalProductPrice;
//   }
// }
// function calcAll() {


//   let arrProducts = document.querySelectorAll('.product');
//   let result = 0;
//   // arrProducts.forEach(elem => updateSubtot(elem));
//   arrProducts.forEach(elem => result += +elem.querySelector('.pu span').innerText * elem.querySelector('.qty input').value);
//   // console.log(result)

//   document.querySelector('h2 span').innerHTML = result;
//   updateSubtot('totalPriceProduct')
// }
// $calc.onclick = calcAll;