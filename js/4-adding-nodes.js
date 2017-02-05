'use strict';
/*

   var istniejacyWezel = document.getElementById('parFirst').children[2];
      console.log(istniejacyWezel);

//wezel

   var newElement = document.createElement('p');

//utworzenie paragrafu 

   var newElementContent = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nulla delectus, qui dolorem ratione neque temporibus sint. Facilis voluptas, inventore eveniet nihil modi ipsam, repellendus quasi esse neque aspernatur iusto."
   );

//utworznie kontentu

   newElement.appendChild(newElementContent);

//podmiana contentu

   document.getElementById('parFirst').appendChild(newElement, istniejacyWezel); // wazne // 

      console.log(newElement);
*/


// br po linku i usun klase

var linki = document.getElementsByTagName('a');


for(var i =0; i<linki.length; i++) {
   
    var br = document.createElement('br');
   
    linki[i].parentNode.insertBefore(br, linki[i].nextSibling);
   
    linki[i].removeAttribute('class');   
       
    console.log(linki[i]);
}




// instertBefore(co, gdzie) - dodaje childa





