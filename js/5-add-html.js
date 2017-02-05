'use strict';


var mainHeader = document.getElementById('main-header');

   mainHeader.innerHTML = " Treść nagłówka ";
   mainHeader.style.color = "#c00";


//zmiana pierwszego linka // 

var link = document.getElementsByClassName('link')[0];

   link.href = "http://wykop.pl";
   link.className = "nowa-klasa";



