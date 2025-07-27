// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Only proceed if it's a hash link
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Calculate offset for fixed navbar
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
});

// Solutions section functionality
let currentSolution = 0;
const solutions = [
    {
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'E-Invoicing'
    },
    {
        image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Invoice Compliance'
    },
    {
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Invoice Record Management'
    }
];

// About section functionality
// Auto-rotate solutions
function rotateSolutions() {
    currentSolution = (currentSolution + 1) % solutions.length;
    updateSolutionDisplay();
}

function updateSolutionDisplay() {
    // Update active solution item
    const solutionItems = document.querySelectorAll('.solution-item');
    solutionItems.forEach((item, index) => {
        if (index === currentSolution) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update solution image
    const solutionImage = document.getElementById('solutionImage');
    if (solutionImage) {
        solutionImage.src = solutions[currentSolution].image;
        solutionImage.alt = solutions[currentSolution].alt;
    }
}

// Click handlers for solution items
document.addEventListener('DOMContentLoaded', function() {
    const solutionItems = document.querySelectorAll('.solution-item');
    
    solutionItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentSolution = index;
            updateSolutionDisplay();
        });
    });
    
    // Start auto-rotation
    setInterval(rotateSolutions, 4000);
    
    // Initialize display
    updateSolutionDisplay();
});