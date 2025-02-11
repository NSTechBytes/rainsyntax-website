// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe elements with animation classes
document.querySelectorAll('.fade-in-up, .stagger-fade-in').forEach((element) => {
  observer.observe(element);
});

function toggleDocs() {
  let mainContent = document.getElementById('main-content');
  let docsContent = document.getElementById('docs-content');
  let button = document.querySelector('.nav-link');

  mainContent.classList.toggle('hidden');
  docsContent.classList.toggle('hidden');

  // Toggle button text
  button.textContent = docsContent.classList.contains('hidden') ? "Documentation" : "Home";
   // Scroll to top when documentation is shown
   if (!docsContent.classList.contains('hidden')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Smooth scroll for documentation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});