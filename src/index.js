import { homeTab, contactTab, menuTab } from './changePage.js';
import './style.css';

function createPage() {
    const content = document.querySelector('#content');

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

    const mainContent = document.createElement('div');
    const mainParagraphOne = document.createElement('p');
    const mainParagraphTwo = document.createElement('p');
    mainContent.className = 'main';
    mainParagraphOne.textContent = 'Welcome to Kokoro\'s Restaurant! We are currently located in another world but you can teleport to our place for a small fee of $200.';
    mainParagraphTwo.textContent = 'Quality of the food is guaranteed, if it does not fit your tastes we will give you back 20% of the money you spent!';

    const footer = document.createElement('div');
    const footerParapgraph = document.createElement('p');
    footer.className = 'footer';
    footerParapgraph.textContent = 'Made with love by TheDoru'

    menu.append(home, menuItem, contact);
    header.append(pageTitle, menu);
    mainContent.append(mainParagraphOne, mainParagraphTwo);
    footer.append(footerParapgraph);
    content.append(header, mainContent, footer);

    let menuArray = [home, menuItem, contact];

    for(const item of menuArray) {
        item.addEventListener('click', e => {
            let value = e.target.textContent;
            checkValue(value, mainContent);
        });
    }

}

function checkValue(value, element) {
    switch(value) {
        case "Home":
            homeTab(element);
            break;
        case "Menu":
            menuTab(element);
            break;
        case "Contact":
            contactTab(element);
            break;
        default:
            console.log("uh oh");
    }
}

createPage();