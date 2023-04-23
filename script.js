const openButton = document.querySelector('#openbutton');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#clousebutton');

openButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
document.addEventListener('click', (event) => {
    
  if (!event.target.closest('#modal') && modal.style.display === 'block' && event.target != openButton ) {
      modal.style.display = 'none';
  }
});
