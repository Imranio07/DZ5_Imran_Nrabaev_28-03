//Modal
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const closeModalButton = document.querySelector('.modal_close');
let isModalOpen = false;

const openModal = () => {
  isModalOpen = true
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

const closeModal = () => {
  isModalOpen = false
  modal.style.display = 'none';
  document.body.style.overflow = '';
}
modalTrigger.onclick = () => openModal();
closeModalButton.onclick = () => closeModal();
modal.onclick = (event) => {
  if (event.target === modal) closeModal();

}

function endScroll() {
  if (!isModalOpen && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    openModal();
    window.removeEventListener('scroll', endScroll);
  }
}
window.addEventListener('scroll', endScroll);

function openModalAfterDelay() {
  setTimeout(() => {
    openModal();
  }, 10000);
}

openModalAfterDelay();

    