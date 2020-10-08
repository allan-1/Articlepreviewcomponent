const shareButton = document.querySelector('[data-modal-target]');
const content = document.querySelector('[data-content]')

shareButton.addEventListener('click', () => {
    content.classList.toggle('active')
})