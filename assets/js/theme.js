// Theme System
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.setAttribute('aria-label', 'Cambiar tema');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';

// Add theme toggle to navbar
document.querySelector('.nav-links').appendChild(themeToggle);

// Theme variables
const themes = {
    light: {
        '--bg-light': '#f8f8f8',
        '--bg-dark': '#1a1a1a',
        '--text-light': '#ffffff',
        '--text-dark': '#333333',
        '--text-gray': '#666666',
        '--text-muted': '#888888',
        '--shadow-sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        '--shadow-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        '--shadow-lg': '0 10px 15px rgba(0, 0, 0, 0.1)'
    },
    dark: {
        '--bg-light': '#1a1a1a',
        '--bg-dark': '#f8f8f8',
        '--text-light': '#333333',
        '--text-dark': '#ffffff',
        '--text-gray': '#cccccc',
        '--text-muted': '#999999',
        '--shadow-sm': '0 2px 4px rgba(0, 0, 0, 0.3)',
        '--shadow-md': '0 4px 6px rgba(0, 0, 0, 0.3)',
        '--shadow-lg': '0 10px 15px rgba(0, 0, 0, 0.3)'
    }
};

// Theme toggle functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Update theme variables
    Object.entries(themes[newTheme]).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    
    // Save preference
    localStorage.setItem('theme', newTheme);
}

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set initial theme variables
    Object.entries(themes[savedTheme]).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });
    
    // Set initial icon
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Event listeners
themeToggle.addEventListener('click', toggleTheme);

// Initialize theme on load
document.addEventListener('DOMContentLoaded', initTheme);

// Add theme styles
const style = document.createElement('style');
style.textContent = `
    .theme-toggle {
        background: none;
        border: none;
        color: var(--text-light);
        cursor: pointer;
        padding: 8px;
        font-size: 1.2rem;
        transition: transform var(--transition-normal);
    }
    
    .theme-toggle:hover {
        transform: scale(1.1);
    }
    
    [data-theme="dark"] .hero {
        background-color: var(--bg-light);
    }
    
    [data-theme="dark"] .hero-form {
        background-color: var(--bg-dark);
        color: var(--text-light);
    }
    
    [data-theme="dark"] .hero-form input,
    [data-theme="dark"] .hero-form select,
    [data-theme="dark"] .hero-form textarea {
        background-color: var(--bg-light);
        color: var(--text-dark);
    }
    
    [data-theme="dark"] .service-card,
    [data-theme="dark"] .proposal-card,
    [data-theme="dark"] .partner-card {
        background-color: var(--bg-dark);
        color: var(--text-light);
    }
    
    [data-theme="dark"] .footer {
        background-color: var(--bg-dark);
    }
`;
document.head.appendChild(style); 