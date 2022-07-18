import contactImage from './image.jpg';

function homeTab(content) {
    content.textContent = '';

    const mainParagraphOne = document.createElement('p');
    const mainParagraphTwo = document.createElement('p');
    mainParagraphOne.textContent = 'Welcome to Kokoro\'s Restaurant! We are currently located in another world but you can teleport to our place for a small fee of $200.';
    mainParagraphTwo.textContent = 'Quality of the food is guaranteed, if it does not fit your tastes we will give you back 20% of the money you spent!';

    content.append(mainParagraphOne, mainParagraphTwo);
}

function menuTab(content) {
    content.textContent = '';

    const firstMenuItem = document.createElement('div');
    const secondMenuItem = document.createElement('div');

    firstMenuItem.textContent = createMenuItem("Lasagna", "delicious", "$20");
    secondMenuItem.textContent = createMenuItem("Pizza", "so-so", "$15");

    content.append(firstMenuItem, secondMenuItem);
}

function createMenuItem(name, quality, price) {
    let string = `${name}, ${quality}, ${price}`;

    return string;
}

function contactTab(content) {
    content.textContent = '';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "📞 123 456 789";

    const address = document.createElement('p');
    address.textContent = "🏘️ Somewhere in the universe";

    const image = new Image();
    image.src = contactImage;

    content.append(phoneNumber, address, image);
}

export {
    menuTab,
    contactTab,
    homeTab
}