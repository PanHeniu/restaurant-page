export default function createNewElement(element, textContent, className) {
    const newElement = document.createElement(element);
    if (element === 'img') {
        newElement.src = textContent;
    } else if (textContent !== undefined) {
        newElement.textContent = textContent;
    }

    if (className !== undefined) {
        newElement.classList.add(className);
    }

    return newElement;
};

export function createHTML(element, content) {
    const newElement = document.createElement(element);
    newElement.innerHTML = content;
    return newElement;
};

export function createMenuItem(itemName, itemPrice, itemImage, imageCredit) {
    const newItem = createNewElement('div', '', 'item-container');
    newItem.appendChild(createNewElement('h2', itemName, 'item-title'));
    newItem.appendChild(createNewElement('img', itemImage));
    newItem.appendChild(createHTML('div', imageCredit));
    newItem.appendChild(createNewElement('h2', itemPrice, 'item-title'));
    return newItem;
}