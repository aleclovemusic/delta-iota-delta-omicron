// burger animation to and from X
function toggleBurgerAnimation() {
    var burger = document.querySelector('.burger');
    burger.classList.toggle('change');
  }
  
  // toggle burger overlay
  
  const burgerButton = document.getElementsByClassName("burger")[0]
  const burgerLinks = document.getElementsByClassName("burgermenu")[0]
  
  burgerButton.addEventListener('click', () => {
    burgerLinks.classList.toggle('showburger')
  })
  
    // Check screen width and close overlay if it exceeds 600px
    function checkScreenWidth() {
  
      if (window.innerWidth > 600 && burgerLinks.classList.contains('showburger')) {
        burgerLinks.classList.remove('showburger');
  
      const burger = document.getElementById('burgerIcon')
      if (window.innerWidth > 600 && burger.classList.contains('change')) {
        burger.classList.remove('change')
      }
    }
    }
  
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenWidth);
  
    // Initial check on page load
    checkScreenWidth();
  