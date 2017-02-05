'use strict';

var pierwszyDiv = document.getElementById('parFirst');
/*

//console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.childNodes); //wszystko
console.log(pierwszyDiv.children[0]);  // tylko HTML

*/

//children - otrzymuje tablice ogarniętą
//child - otrzymuje obiekt ( w chuj tam komentarzy i tekstow )
/*

var pierwszyChild = pierwszyDiv.childNodes[0];
   console.log(pierwszyDiv.pierwszyChild);
   console.log(pierwszyDiv.previousSibling.previousSibling);
   console.log(pierwszyDiv.nextSibling);
   console.log(pierwszyDiv.nextSibling.nextSibling);
*/


//var childNodesDiva = pierwszyDiv.childNodes;


console.log(pierwszyDiv.children);

for (var i=0; i<pierwszyDiv.children.length; i++){
      console.log(pierwszyDiv.children[i])
}


childNodesDiva.forEach( function(element) {
   if(element.nodeType == 1) {
      console.log("TAK >> HTML >>"+element);
   } else { 
      console.log("NIE >> HTML >>"+element);
   }
});

// 1 - element
// 3 - text
// 8 - comment




