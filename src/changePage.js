import contactImage from './image.jpg';

export default function initialize(value, content) {
    switch(value) {
        case "Home":
            changeToHome(content);
            break;
        case "Menu":
            changeToMenu(content);
            break;
        case "Contact":
            changeToContact(content);
            break;
        default:
            console.log("uh oh");
    }
}

function changeToHome(content) {
    content.textContent = '';

    const mainParagraphOne = document.createElement('p');
    const mainParagraphTwo = document.createElement('p');
    mainParagraphOne.textContent = 'Welcome to Kokoro\'s Restaurant! We are currently located in another world but you can teleport to our place for a small fee of $200.';
    mainParagraphTwo.textContent = 'Quality of the food is guaranteed, if it does not fit your tastes we will give you back 20% of the money you spent!';

    content.append(mainParagraphOne, mainParagraphTwo);
}

function changeToMenu(content) {
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

function changeToContact(content) {
    content.textContent = '';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "📞 123 456 789";

    const address = document.createElement('p');
    address.textContent = "🏘️ Somewhere in the universe";

    const image = new Image();
    image.src = contactImage;

    content.append(phoneNumber, address, image);
}