// Loader Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    
    // Add fade-out effect to loader once the page is fully loaded
    loader.classList.add('fade-out');

    // After the fade-out animation, hide the loader element
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000); // Timeout matches the duration of the fade-out animation
});

// Throttle scroll effect to prevent excessive function calls
let isThrottled = false;
const throttleDelay = 100;
const sections = document.querySelectorAll('section');

// Function to check if sections are visible in the viewport
const checkVisibility = () => {
    if (isThrottled) return; // Skip if already throttled
    isThrottled = true;
    
    setTimeout(() => {
        const triggerBottom = window.innerHeight * 0.8; // Trigger visibility when 80% of the section is visible
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            // If section is 80% visible, add 'visible' class
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
        
        isThrottled = false;
    }, throttleDelay); // Throttle delay to limit scroll event calls
};

// Attach the visibility check to the scroll event
window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Trigger initial visibility check on page load

// Smooth Scrolling for Anchor Links
const smoothScroll = (event) => {
    event.preventDefault();
    
    // Get the target section from the anchor link's href attribute
    const targetId = event.target.getAttribute("href").substring(1); 
    const targetSection = document.getElementById(targetId);

    // Smoothly scroll to the target section with a slight offset for navbar
    window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
    });
};

// Attach smooth scroll behavior to all navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Intersection Observer for Project Cards to reveal them when in viewport
const projectCards = document.querySelectorAll('.project-card');

// Create an intersection observer for monitoring project cards visibility
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when card comes into view
        }
    });
}, { threshold: 0.5 }); // 50% of the card should be visible to trigger

// Observe all project cards for visibility
projectCards.forEach(card => observer.observe(card));

