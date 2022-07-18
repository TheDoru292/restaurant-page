import menuTab from './menu.js';
import contactTab from './contact.js';
import homeTab from './home.js';
import './style.css';

function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Kokoro\'s Restaurant';

    const menu = document.createElement('ul');
    const home = document.createElement('li');
    const menuItem = document.createElement('li');
    const contact = document.createElement('li');
    menuItem.textContent = 'Menu';
    home.textContent = 'Home';
    contact.textContent = 'Contact';

    let menuArray = [home, menuItem, contact];

    addEventToMenu(menuArray);

    menu.append(home, menuItem, contact);
    header.append(pageTitle, menu);

    return header;
}

function createMain() {
    const mainContent = document.createElement('div');
    mainContent.className = 'main';

    return mainContent;
}

function createFooter() {
    const footer = document.createElement('div');
    const footerParapgraph = document.createElement('p');
    footer.className = 'footer';
    footerParapgraph.textContent = 'Made with love by TheDoru';

    footer.append(footerParapgraph);

    return footer;
}

function initialize() {
    const content = document.querySelector('#content');

    content.append(createHeader());
    content.append(createMain());
    content.append(createFooter());

    homeTab();
}

function addEventToMenu(array) {
    for(const item of array) {
        item.addEventListener('click', e => {
            let value = e.target.textContent;
            checkValue(value);
        });
    }
}

function checkValue(value) {
    switch(value) {
        case "Home":
            homeTab();
            break;
        case "Menu":
            menuTab();
            break;
        case "Contact":
            contactTab();
            break;
        default:
            console.log("uh oh");
    }
}

export default initialize;