const openButton = document.querySelector('#openbutton');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#clousebutton');

openButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
