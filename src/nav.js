import { createContact } from "./contact";
import { createMain } from "./main-page";
import { createMenu } from "./menu";

function eventLis()
{
    let body = document.querySelector('body');
    let nav1 = document.querySelector('.nav-1'); 
    let nav2 = document.querySelector('.nav-2');
    let nav3 = document.querySelector('.nav-3');

    nav1.addEventListener('click',createMain);
    nav2.addEventListener('click',createMenu);
    nav3.addEventListener('click',createContact);
      
}


export {eventLis}