   'use strict';

var secondLink = document.getElementsByTagName("a")[1];

/*---------------------------------------*/
   function alarm(e) {

      e.preventDefault();
      console.log('Czy masz 18 lat?');
      console.log(e.clientX+" "+ e.clientY );
   }

   secondLink.onclick = alarm;

/*-------------------------------------*/

var thirdLink = document.getElementsByTagName("a")[2];

thirdLink.addEventListener('click', alarm);


var mainHeader = document.getElementById('main-header');

function resize(e) {
   if(e.type == 'mouseover'){
      //mainHeader.style.fontSize = "40px";
   } else {
      //mainHeader.style.fontSize = "inherit";
   }
}

mainHeader.onmouseover = resize; 
mainHeader.onmouseout = resize; 

var header = document.getElementsByTagName('header')[0].onclick = klikHeader;

var header = document.getElementsByTagName('h1')[0].onclick = klikH1;

   function klikHeader(e){
      console.log(" kliknales w header ");
   }

   function klikH1(e){
      e.stopPropagation();
      console.log(" kliknales w h1 ");
   }


