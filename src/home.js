export default function homeTab() {
    const content = document.querySelector('.main');

    content.textContent = '';

    const mainParagraphOne = document.createElement('p');
    const mainParagraphTwo = document.createElement('p');
    mainParagraphOne.textContent = 'Welcome to Kokoro\'s Restaurant! We are currently located in another world but you can teleport to our place for a small fee of $200.';
    mainParagraphTwo.textContent = 'Quality of the food is guaranteed, if it does not fit your tastes we will give you back 20% of the money you spent!';

    content.append(mainParagraphOne, mainParagraphTwo);
}