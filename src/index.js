import nav from './nav.js';
import mainPage from './home.js';
import menuPage from './menu.js';
import './style-index.css';
import Background from './sushi-background.jpg';
import contactPage from './contact.js';
nav();
mainPage();

document.getElementById('home').addEventListener("click", function() { 
    document.getElementById('main-container').remove(); 
    document.getElementById('home').className = 'color'; 
    document.getElementById('menu').className = ''; 
    document.getElementById('contact').className = ''; 
    mainPage(); 
});

document.getElementById('menu').addEventListener("click", function() { 
    document.getElementById('main-container').remove(); 
    document.getElementById('menu').className = 'color'; 
    document.getElementById('home').className = ''; 
    document.getElementById('contact').className = ''; 
    menuPage(); 
});

document.getElementById('contact').addEventListener("click", function() { 
    document.getElementById('main-container').remove(); 
    document.getElementById('contact').className = 'color'; 
    document.getElementById('home').className = ''; 
    document.getElementById('menu').className = ''; 
    contactPage(); 
});