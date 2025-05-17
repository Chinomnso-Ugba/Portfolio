// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Dark Mode Toggle                
const themeToggle = document.querySelector('.theme-toggle');   
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Blog Category Filtering
const categorySelect = document.getElementById('category-select');
const blogPosts = document.querySelectorAll('.post-card');

if (categorySelect && blogPosts.length > 0) {
    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;
        
        blogPosts.forEach(post => {
            if (selectedCategory === 'all' || post.getAttribute('data-category').includes(selectedCategory)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
}

// Blog Search Functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

if (searchInput && searchButton && blogPosts.length > 0) {
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        blogPosts.forEach(post => {
            const postTitle = post.querySelector('h3').textContent.toLowerCase();
            const postContent = post.querySelector('p').textContent.toLowerCase();
            
            if (postTitle.includes(searchTerm) || postContent.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    };
    
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Form Validation
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        let isValid = true;
        const formInputs = contactForm.querySelectorAll('input, textarea');
   
        
        formInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--danger-color)';
            } else {
                input.style.borderColor = 'var(--gray-light)';
            }
        });
        
        const emailInput = contactForm.querySelector('#email');
        if (emailInput && !validateEmail(emailInput.value) && emailInput.value.trim()) {
            isValid = false;
            emailInput.style.borderColor = 'var(--danger-color)';
        }
        
        if (isValid) {
            contactForm.reset();
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });
}

// Email validation helper function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;q
    return re.test(String(email).toLowerCase());
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#' ) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.post-card, .project-card, .timeline-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.post-card, .project-card, .timeline-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation for elements in view on page load
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);


const newElementss = document.querySelector(".btn-secondary" )
console.log(newElementss)

const open = document.querySelector(".hero")

if (open) {
    window.addEventListener('dblclick', animateOnScroll);   
}
projectCards.forEach( a => {
    display = "visible";
    for (let index = 1 ; index < array.length ; index--){
        const element = array[index]
}
}

)

if (closed) {
    window.addEventListener ("click" , animateOnScroll)
}



projectCards.forEach(a => {
    display = "hidden";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
});
