import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';



//setup tabs

const divTab = document.querySelector('div#tab');
console.log(divTab);
const divContent = document.querySelector('div#content');
const buttonHome = document.createElement('button');
const buttonMenu = document.createElement('button');
const buttonContact= document.createElement('button');


buttonHome.classList.add('tablinks');
buttonMenu.classList.add('tablinks');
buttonContact.classList.add('tablinks');

buttonHome.textContent = 'Home';
buttonMenu.textContent = 'Menu';
buttonContact.textContent = 'Contact';

divTab.appendChild(buttonHome);
divTab.appendChild(buttonMenu);
divTab.appendChild(buttonContact);

home();

function clear(){
    console.log(divContent);
    while (divContent.firstChild) {
      divContent.removeChild(divContent.lastChild);
    }
}


buttonHome.addEventListener('click', () => {
    clear();
    home();
});

buttonMenu.addEventListener('click', () => {
    clear();
    menu();
});

buttonContact.addEventListener('click', () => {
    clear();
    contact();
});
    
