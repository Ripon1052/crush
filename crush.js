const box = document.querySelector('.box');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const boxRect = box.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = '<h1>I Love You Too 💗<h1>';
    yesBtn.style.display = 'none'; // Hide the Yes button
    noBtn.style.display = 'none'; // Hide the No button
    message.classList.remove('hidden'); // Show the message
});

setInterval(() => {
    const maxX = boxRect.width - noBtnRect.width - 10; // Adjusted for button size
    const maxY = boxRect.height - noBtnRect.height - 10; // Adjusted for button size
    const i = Math.floor(Math.random() * maxX);
    const j = Math.floor(Math.random() * maxY);
    noBtn.style.marginLeft = i + 'px';
    noBtn.style.marginTop = j + 'px';
}, 500);

noBtn.addEventListener('click', () => {
    const maxX = boxRect.width - noBtnRect.width - 10; // Adjusted for button size
    const maxY = boxRect.height - noBtnRect.height - 10; // Adjusted for button size
    const i = Math.floor(Math.random() * maxX);
    const j = Math.floor(Math.random() * maxY);
    noBtn.style.marginLeft = i + 'px';
    noBtn.style.marginTop = j + 'px';
});