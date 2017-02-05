   'use strict';

var secondLink = document.getElementsByTagName("a")[1];

/*---------------------------------------*/
   function alarm(e) {

      e.preventDefault();
      console.log('Czy masz 18 lat?');
      console.log(e.clientX);
   }

   secondLink.onclick = alarm;

/*-------------------------------------*/

var thirdLink = document.getElementsByTagName("a")[2];

thirdLink.addEventListener('click', alarm);





