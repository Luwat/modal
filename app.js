const openBtn = document.querySelector('.open-btn');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');

const openModal = () => {
    modalContainer.style.display = 'block';
};

const closeModal = () => {
    modalContainer.style.display = 'none';
};

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

window.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});