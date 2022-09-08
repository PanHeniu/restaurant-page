import createNewElement, { createHTML } from './element.js';
import SushiImg from './sushi.jpg';
import './style-home.css'

export default function mainPage() {
    const content = document.getElementById('content');
    const mainBox = document.createElement('div');
    mainBox.id = 'main-container';
    mainBox.appendChild(createNewElement('h1', 'Sushi Restaurant'));

    const imgDiv = createNewElement('div', '', 'img-container');
    imgDiv.appendChild(createNewElement('img', SushiImg));
    imgDiv.appendChild(createHTML('div', 'Photo by <a href="https://unsplash.com/@jckbck">Jakub Dziubak</a> on <a href="https://unsplash.com/photos/iOHJKJqO6E0">Unsplash</a>'));
    mainBox.appendChild(imgDiv);

    const description = createNewElement('div', '', 'description');
    description.appendChild(createNewElement('h1', 'About Us'));
    description.appendChild(createNewElement('div', `Best sushi money can buy. Or is it? Don't wait and come in to find out. いただきます`));
    mainBox.appendChild(description);

    const hoursMain = createNewElement('div', '', 'hours-main');
    hoursMain.appendChild(createNewElement('h1', 'Opening Hours'));
    const hoursBox = createNewElement('div', '', 'hours-box');

    const hoursArray = [`Sunday: closed`, `Monday: 9am - 10pm`, `Tuesday: 9am - 10pm`, `Wednesday: 9am - 10pm`, `Thursday: 9am - 10pm`, `Friday: 9am - 10pm`, `Saturday: 10am - 10pm`];

    for (let i = 0; i < hoursArray.length; i++) {
        hoursBox.appendChild(createNewElement('div', hoursArray[i]));
    };
    hoursMain.appendChild(hoursBox);
    mainBox.appendChild(hoursMain);

    mainBox.appendChild(createHTML('div', 'Background Photo by <a href="https://unsplash.com/@lucbercoth">Luc Bercoth</a> on <a href="https://unsplash.com/photos/4ykELaXgeOM">Unsplash</a>'));

    content.appendChild(mainBox);
};

