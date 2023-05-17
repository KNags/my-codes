 var headerTitle=document.getElementById('header-title')
var header=document.getElementById('main-header')
header.style.borderBlock="solid 3px black"

// var addTitle = document.querySelector("#main h2.title:first-of-type");
// addTitle.style.fontWeight = "bold";
// addTitle.style.color = "green";

//getelementbyclass
//  var items=document.getElementsByClassName('list-group-item')
// items[2].style.backgroundColor='green';

//  for(var i=0;i<items.length;i++){
//      items[i].style.fontWeight='bold';   
//  }

//getelementbytagname
// var list=document.getElementsByTagName('li')
// console.log(list[0])
// list[1].textContent='Option 1';
// list[1].style.backgroundColor='yellow';
// for(var i=0;i<list.length;i++){
//     list[i].style.fontWeight='bold';   
// } 

//queryselector
// var heading=document.querySelector('#main-header');
// heading.style.borderBlock  ='solid 4px blue';

// var input=document.querySelector('input');
// input.value='Enter the items';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='Enter';

// var item=document.querySelector('.list=group-item')
// item.style.color='red';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='lightgreen';
// }
 
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<even.length;i++)
// {
//     even[i].style.backgroundColor='skyblue';
// }

// const thirdItem = document.querySelector('#items li:nth-child(3)');
// thirdItem.style.display = 'none';


//traversing the dom
var itemList=document.querySelector('#items');
//parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.Color='#f4f4f4'
// console.log(itemList.parentNode.parentNode);
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='pink'
//childnode
console.log(itemList.childNodes);
console.log(itemList.children)
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='purple';
//firstchild
console.log(itemList.firstChild)
//firstelementchild
console.log(itemList.firstElementChild)
//lastchild
console.log(itemList.lastChild)
//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="Pen";
//nextsiblings
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='brown'
//createElement

//createDiv
var newDiv= document.createElement('div')
//addClass
newDiv.className='Hello'
//addId
newDiv.id='Hello1'
//addAtt
newDiv.setAttribute('title', 'Hello div');
//createTextnode
var newDivText=document.createTextNode('Hola')
//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv)
newDiv.style.fontSize='30px'
container.insertBefore (newDiv , h1)