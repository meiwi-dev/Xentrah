// Objeto con las traducciones
const translations = {
    es: {
        // Navegación
        'nav-home': 'Inicio',
        'nav-distribution': 'Distribución',
        'nav-services': 'Servicios',
        'nav-partners': 'Socios',
        'nav-contact': 'Contacto',
        'nav-quote': 'Cotizar',

        // Hero Section
        'hero-subtitle': 'Eficiencia y Confiabilidad en Cada Envío',
        'hero-title': 'Soluciones Logísticas Inteligentes',
        'hero-description': 'Optimizamos tus operaciones de transporte y almacenamiento con tecnología de vanguardia y personal altamente capacitado.',
        'hero-note': '¡Únete a las empresas que confían en nosotros!',

        // Formulario
        'form-title': 'Consulta Rápida',
        'form-name': 'Nombre',
        'form-email': 'Correo Electrónico',
        'form-phone': 'Teléfono',
        'form-service': 'Servicio de Interés',
        'form-message': 'Mensaje',
        'form-submit': 'Enviar Consulta',

        // Servicios
        'services-title': 'Nuestros Servicios',
        'services-subtitle': 'Soluciones integrales para tu logística',

        // Distribución
        'distribution-title': 'Distribución General Urbana',
        'distribution-description': 'Nuestro servicio de distribución urbana está diseñado para optimizar las entregas en áreas metropolitanas, garantizando tiempos de entrega precisos y un seguimiento en tiempo real.',

        // Socios
        'partners-title': 'Nuestros Socios',
        'partners-subtitle': 'Empresas que confían en nosotros',

        // Footer
        'footer-subscribe-title': 'Suscríbete a Nuestro Boletín',
        'footer-subscribe-text': 'Recibe las últimas noticias y actualizaciones sobre nuestros servicios.',
        'footer-email-placeholder': 'Tu correo electrónico',
        'footer-subscribe-button': 'Suscribirse',
        'footer-contact-title': 'Contacto',
        'footer-address': 'Calle Principal 123, Ciudad',
        'footer-phone': '+1 234 567 890',
        'footer-email': 'info@xentrah.com',
        'footer-copyright': '© 2024 Xentrah. Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-distribution': 'Distribution',
        'nav-services': 'Services',
        'nav-partners': 'Partners',
        'nav-contact': 'Contact',
        'nav-quote': 'Quote',

        // Hero Section
        'hero-subtitle': 'Efficiency and Reliability in Every Shipment',
        'hero-title': 'Smart Logistics Solutions',
        'hero-description': 'We optimize your transportation and storage operations with cutting-edge technology and highly trained personnel.',
        'hero-note': 'Join the companies that trust us!',

        // Form
        'form-title': 'Quick Quote',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-phone': 'Phone',
        'form-service': 'Service of Interest',
        'form-message': 'Message',
        'form-submit': 'Send Inquiry',

        // Services
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive logistics solutions',

        // Distribution
        'distribution-title': 'General Urban Distribution',
        'distribution-description': 'Our urban distribution service is designed to optimize deliveries in metropolitan areas, ensuring precise delivery times and real-time tracking.',

        // Partners
        'partners-title': 'Our Partners',
        'partners-subtitle': 'Companies that trust us',

        // Footer
        'footer-subscribe-title': 'Subscribe to Our Newsletter',
        'footer-subscribe-text': 'Receive the latest news and updates about our services.',
        'footer-email-placeholder': 'Your email address',
        'footer-subscribe-button': 'Subscribe',
        'footer-contact-title': 'Contact',
        'footer-address': '123 Main Street, City',
        'footer-phone': '+1 234 567 890',
        'footer-email': 'info@xentrah.com',
        'footer-copyright': '© 2024 Xentrah. All rights reserved.'
    }
};

// Función para actualizar el idioma
function updateLanguage(lang) {
    // Guardar la preferencia de idioma
    localStorage.setItem('preferredLanguage', lang);

    // Actualizar todos los elementos con atributo data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Actualizar el selector de idioma
    const langSelector = document.querySelector('.lang-selector');
    if (langSelector) {
        langSelector.value = lang;
    }
}

// Inicializar el idioma
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el idioma preferido o usar español por defecto
    const preferredLang = localStorage.getItem('preferredLanguage') || 'es';
    
    // Configurar el selector de idioma
    const langSelector = document.querySelector('.lang-selector');
    if (langSelector) {
        langSelector.value = preferredLang;
        langSelector.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }

    // Aplicar el idioma inicial
    updateLanguage(preferredLang);
}); 