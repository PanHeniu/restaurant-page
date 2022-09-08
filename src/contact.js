import createNewElement, { createHTML } from './element.js';
import sushi2 from './sushi2.jpg';
import './style-contact.css'

export default function contactPage() {
    const content = document.getElementById('content');
    const mainBox = document.createElement('div');
    mainBox.id = 'main-container';
    mainBox.appendChild(createNewElement('h1', 'Contact'));

    const imgDiv = createNewElement('div', '', 'img-container');
    imgDiv.appendChild(createNewElement('img', sushi2));
    imgDiv.appendChild(createHTML('div', 'Photo by <a href="https://unsplash.com/@louishansel">Louis Hansel</a> on <a href="https://unsplash.com/photos/wXkGvQJWI-Y">Unsplash</a>'));
    mainBox.appendChild(imgDiv);

    const description = createNewElement('div', '', 'description');
    description.appendChild(createNewElement('h1', 'Email & Phone'));
    description.appendChild(createNewElement('div', `somemail@thatisntreal.com 123-456-789`));
    mainBox.appendChild(description);

    const description1 = createNewElement('div', '', 'description1');
    description.appendChild(createNewElement('h1', 'Restaurant Address'));
    description.appendChild(createNewElement('div', `Sushi Restaurant`));
    description.appendChild(createNewElement('div', `Some Street 1`));
    description.appendChild(createNewElement('div', `City`));
    mainBox.appendChild(description1);

    mainBox.appendChild(createHTML('div', 'Background Photo by <a href="https://unsplash.com/@lucbercoth">Luc Bercoth</a> on <a href="https://unsplash.com/photos/4ykELaXgeOM">Unsplash</a>'));

    content.appendChild(mainBox);
};