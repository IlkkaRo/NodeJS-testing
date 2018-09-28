'use strict';

(function(){
  let dudeList;
  let firstname;
  let lastname;
  let birth;
  let death;
  let pic;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    dudeList = document.getElementById('duDes');
    firstname = document.getElementById('firstname');
    lastname = document.getElementById('lastname');
    birth = document.getElementById('birth');
    death = document.getElementById('death');
    pic = document.getElementById('pic');
    fetch('/all')
      .then(result => result.json())
      .then(dudes => populateDudeList(dudes))
      .catch(err => console.log(err));
  }

  function populateDudeList(dudes) {
    for(let dude of dudes) {
      let option = document.createElement('option');
      option.value = `/${dude}`;
      option.textContent = dude[0].toUpperCase()+dude.substr(1);
      dudeList.appendChild(option);
    }
    dudeList.addEventListener('change', choose);
    dudeList.value = '';
  }

})()
