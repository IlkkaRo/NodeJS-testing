'use strict';

(function(){
  let iceCreamList;
  let name;
  let price;
  let iceCreamImage;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    iceCreamList = document.getElementById('iceCreams');
    name = document.getElementById('name');
    price = document.getElementById('price');
    iceCreamImage = document.getElementById('iceCreamImage');
    fetch('/all')
      .then(result=>result.json()) //switch it to JSON
      .then(flavors=>populateIceCreamList(flavors))
      .catch(err => console.log(err));
  }

  function populateIceCreamList(flavors) {
    for(let flavor of flavors) {
      let option = document.createElement('option');
      option.value = `/${flavor}`; //option value in select list
      option.textContent = flavor[0].toUpperCase()+flavor.substr(1); //first to upper case rest as they are
      iceCreamList.appendChild(option); //goes through array and adds one by one to the list
    }
    iceCreamList.addEventListener('change', choose);
    iceCreamList.value = ''; //empty at start, not necessary
  }

  function choose() {
    let iceCream = iceCreamList.value;
    if(iceCream.length>0) {
      fetch(`/api${iceCream}`) //becomes api/blueberry
        .then(result=>result.json())
        .then(data=>updateResult(data))
        .catch(err=>console.log(err));
    }
    else {
      updateResult({name:'', price:'', image:''});
    }
  }

  function updateResult(data) {
    name.textContent=data.name;
    price.textContent=data.price;
    if(data.image.length===0) {
      iceCreamImage.classList.add('hiddenimage');
    }
    else {
      iceCreamImage.classList.remove('hiddeimage');
      iceCreamImage.src=`/images/${data.image}`;
    }
  }

})();
