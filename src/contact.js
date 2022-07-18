import contactImage from './image.jpg';

export default function contactTab() {
    const content = document.querySelector('.main');

    content.textContent = '';

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "📞 123 456 789";

    const address = document.createElement('p');
    address.textContent = "🏘️ Somewhere in the universe";

    const image = new Image();
    image.src = contactImage;

    content.append(phoneNumber, address, image);
}