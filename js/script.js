document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');

    const rightActions = document.querySelector('.right-actions');
    if (navMenu.classList.contains('active')) {
      rightActions.style.display = 'flex';
    } else {
      rightActions.style.display = 'none';
    }
  });
});