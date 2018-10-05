'use strict';

(function() {
  let paintingcanvas;
  let context;
  let image;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    paintingcanvas = document.getElementById('paintingcanvas');
    context = paintingcanvas.getContext('2d');
    image = new Image();
    image.src = '/images/pic.png';
    image.onload = drawCanvas;
  }

  function drawCanvas() {
    context.clearRect(0,0,paintingcanvas.width, paintingcanvas.height);
    context.drawImage(image,10,10);
  }

})();
