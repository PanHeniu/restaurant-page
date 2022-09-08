import createNewElement from './element.js';
import './style-nav.css'

export default function nav() {
    const content = document.getElementById('content');
    const mainNav = createNewElement('div', '', 'nav-container');
    
    const home = document.createElement('div');
    home.textContent = 'Home';
    home.id = 'home';
    home.className = 'color';

    const menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.id = 'menu';

    const contact = document.createElement('div');
    contact.textContent = 'Contact';
    contact.id = 'contact';
    
    mainNav.appendChild(home);
    mainNav.appendChild(menu);
    mainNav.appendChild(contact);
    content.appendChild(mainNav);
};
