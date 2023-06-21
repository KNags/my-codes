function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phonenumber.value;
    //localStorage.setItem('name',name);
    //localStorage.setItem('email',email);
    //localStorage.setItem('phonenumber',phonenumber);
    const obj={
        name,
        email,
        phonenumber,
    }
    localStorage.setItem(obj.email ,JSON.stringify(obj));
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
const parentElem = document.getElementById('listofitems')
const childElem = document.createElement('li')
// parentElem.innerHTML=parentElem.innerHTML+`${obj.name} - ${obj.email} - ${obj.phonenumber}`
// parentElem.appendChild(childElem)
childElem.textContent=obj.name + '-' + obj.email + '-' + obj.phonenumber

const editButton = document.createElement('input');
editButton.type = 'button';
editButton.value = 'Edit';
editButton.onclick = () => {
localStorage.removeItem(childElem);
parentElem.removeChild(childElem);
document.getElementById('username').value = obj.name;
document.getElementById('email').value = obj.email;
document.getElementById('phoneNumber').value = obj.phonenumber;
}
childElem.appendChild(deleteButton)
childElem.appendChild(editButton)
parentElem.appendChild(childElem)
}