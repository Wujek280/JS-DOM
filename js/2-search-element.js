'use strict';
var parFirst = document.getElementById('parFirst');
var linki = document.getElementsByClassName('link');
var linkiPoTagu = document.getElementsByTagName('a');

var linkiPoSelektorze = document.querySelectorAll('.link');

linkiPoSelektorze.forEach(function (element, i) {
   console.log("#" + i + "  Class: " + element.className + "  innerHTML: " + element.outerHTML + " \n")
});


console.log(linkiPoSelektorze);