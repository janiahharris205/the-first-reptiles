//smooth scrolling for  internal links
document.addEventListener('DOMContentLoaded', function() {
    //highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#ffd700';
        }
    });

    //smooth scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//fade in animation for content cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

//observe all content cards for animation
document.querySelectorAll('.content-card, .species-card, .fossil-item').forEach(card => {
    observer.observe(card);
});