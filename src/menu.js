export default function menuTab() {
    const content = document.querySelector('.main');

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