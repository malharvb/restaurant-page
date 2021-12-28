import { eventLis } from "./nav";

function createContact()
{
    let content = document.querySelector('#content');
    content.innerHTML = '';
    let header = document.createElement('header');
    header.textContent = 'Baratie';

    
    let navbar = document.createElement('div');
    navbar.id = 'navbar';
    let nav1 = document.createElement('span');
    nav1.textContent = 'Home';
    nav1.classList.add('nav-1')
    navbar.appendChild(nav1);
    let nav2 = document.createElement('span');
    nav2.textContent = 'Menu';
    nav2.classList.add('nav-2');
    navbar.appendChild(nav2);
    let nav3 = document.createElement('span');
    nav3.textContent = 'Contact';
    nav3.classList.add('nav-3');
    navbar.appendChild(nav3);
    
    let text = document.createElement('div');
    text.innerHTML = 'Contact Us <br> fakemail@fakemail.com';
    text.id = 'text';

    content.appendChild(header);
    content.appendChild(navbar);
    content.appendChild(text);

    eventLis();

}

export {createContact};