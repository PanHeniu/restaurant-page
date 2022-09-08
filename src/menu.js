import createNewElement, { createHTML, createMenuItem } from './element.js';
import sushiItem1 from './sushi-item1.jpg';
import sushiItem2 from './sushi-item2.jpg';
import sushiItem3 from './sushi-item3.jpg';
import './style-menu.css'

export default function menuPage() {
    const content = document.getElementById('content');
    const mainBox = document.createElement('div');
    mainBox.id = 'main-container';
    mainBox.appendChild(createNewElement('h1', 'Menu'));

    const item1 = createMenuItem('Hosomaki', '$20', sushiItem1, 'Photo by <a href="https://unsplash.com/es/@mahmoud_fawzy100">Mahmoud Fawzy</a> on <a href="https://unsplash.com/photos/FBezBX26dyY">Unsplash</a>');
    mainBox.appendChild(item1);

    const item2 = createMenuItem('Uramaki', '$30', sushiItem2, 'Photo by <a href="https://unsplash.com/@ahtziri">Ahtziri Lagarde</a> on <a href="https://unsplash.com/photos/9sFos3nkhaE">Unsplash</a>');
    mainBox.appendChild(item2);

    const item3 = createMenuItem('Nigiri', '$40', sushiItem3, 'Photo by <a href="https://unsplash.com/@pires128">Felippe Lopes</a> on <a href="https://unsplash.com/photos/EUf-J5PDIcI">Unsplash</a>');
    mainBox.appendChild(item3);

    mainBox.appendChild(createHTML('div', 'Background Photo by <a href="https://unsplash.com/@lucbercoth">Luc Bercoth</a> on <a href="https://unsplash.com/photos/4ykELaXgeOM">Unsplash</a>'));

    content.appendChild(mainBox);
};

