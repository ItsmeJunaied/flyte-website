// Function to be triggered on click
function showMenu() {
    const toggle = document.getElementById('nav-toggle');
    
    if (toggle) {
      toggle.addEventListener('click', () => {
        console.log("Menu clicked");
      });
    }
  }
  
  // Ensure this runs after the DOM is ready
  document.addEventListener('DOMContentLoaded', showMenu);
  