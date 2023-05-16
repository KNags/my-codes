 var headerTitle=document.getElementById('header-title')
var header=document.getElementById('main-header')
header.style.borderBlock="solid 3px black"

var addTitle = document.querySelector("#main h2.title:first-of-type");
addTitle.style.fontWeight = "bold";
addTitle.style.color = "green";

//getelementbyclass
 var items=document.getElementsByClassName('list-group-item')
items[2].style.backgroundColor='green';

 for(var i=0;i<items.length;i++){
     items[i].style.fontWeight='bold';   
 }

//getelementbytagname
var list=document.getElementsByTagName('li')
console.log(list[0])
list[1].textContent='Option 1';
list[1].style.backgroundColor='yellow';
for(var i=0;i<list.length;i++){
    list[i].style.fontWeight='bold';   
} 

//queryselector
var heading=document.querySelector('#main-header');
heading.style.borderBlock  ='solid 4px blue';

var input=document.querySelector('input');
input.value='Enter the items';

var submit=document.querySelector('input[type="submit"]');
submit.value='Enter';

// var item=document.querySelector('.list=group-item')
// item.style.color='red';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='lightgreen';
}
 
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<even.length;i++)
{
    even[i].style.backgroundColor='skyblue';
}

const thirdItem = document.querySelector
('#items li:nth-child(3)');
thirdItem.style.display = 'none';