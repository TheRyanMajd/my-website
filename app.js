window.onload = function() {
  checkMobileCSS();
};

function checkMobileCSS() {
  
    if (window.matchMedia("(max-width: 767px)").matches) {
 
      const columnLeft = document.querySelector('.column-left');
      const image = columnLeft.querySelector('img');
      image.src = './Resources/Images/mobile.gif';

    } 
}
