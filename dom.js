 var headerTitle=document.getElementById('header-title')
var header=document.getElementById('main-header')
header.style.borderBlock="solid 3px black"

var addTitle = document.querySelector("#main h2.title:first-of-type");
addTitle.style.fontWeight = "bold";
addTitle.style.color = "green";

var items=document.getElementsByClassName('list-group-item')
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';   
}
