document.addEventListener("DOMContentLoaded", function() {
  const collapsibles = document.querySelectorAll('.collapsible');
  const hideAwardsButtons = document.querySelectorAll('.hide-awards');
  
  collapsibles.forEach((button, index) => {
    button.addEventListener('click', () => {
      const awards = button.nextElementSibling;
      awards.style.display = awards.style.display === 'block' ? 'none' : 'block';
      button.textContent = awards.style.display === 'block' ? 'Hide Awards' : 'Show Awards';
      hideAwardsButtons[index].style.display = awards.style.display === 'block' ? 'block' : 'none';
    });
  });
  
  hideAwardsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const awards = button.parentElement;
      awards.style.display = 'none';
      const showAwardsButton = awards.previousElementSibling;
      showAwardsButton.textContent = 'Show Awards';
      button.style.display = 'none';
    });
  });
});