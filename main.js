// // //grab single element
// // const form =document.getElementById('my-form');
// // console.log(form);


// // console.log(document.querySelector('h1'));

// //select multiple elements
// const nodeitems = console.log(document.querySelectorAll('.user'));
// console.log(document.getElementsByClassName('user'));
// // console.log(document.getElementsByTagName('li'));







// //dom manipulation
// const ul = document.querySelector('.users'); //grabbing the ul
// // ul.remove();
// // ul.firstElementChild.textContent = 'Html and css'; //first child
// // ul.children[1].innerText = 'Javascript'; //second child
// // ul.lastElementChild.innerHTML = '<h1>Hello</h1><span>hello friends chai pilo</span>' //adds html to the last element;



// const btn = document.querySelector('.btn'); //selects the button
// btn.style.background = 'red';  //changes the background color of the button


// //event listeners
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'Html and css'; //first child
// ul.children[1].innerText = 'Javascript'; //second child
// ul.lastElementChild.innerHTML = '<h1>Hello</h1><span>hello friends chai pilo</span>' //adds html to the last element; //prevents the default behavior of the button
//     console.log(e);                         
// }) //adds an event listener to the button









const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('.users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        msg
            .classList
            .add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        const textNode = document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`
        );
        li.appendChild(textNode);
        userList.appendChild(li);

    }
}





