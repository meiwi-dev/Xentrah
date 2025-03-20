// Internationalization System
const translations = {
    es: {
        nav: {
            home: 'Inicio',
            services: 'Servicios',
            about: 'Nosotros',
            contact: 'Contacto',
            login: 'Iniciar Sesión'
        },
        hero: {
            subtitle: 'Soluciones Logísticas',
            title: 'Eficiencia y Confiabilidad en Cada Envío',
            description: 'Optimizamos tus operaciones logísticas con tecnología de vanguardia y un servicio personalizado.',
            note: 'Más de 10 años de experiencia en el sector',
            cta: 'Solicitar Cotización'
        },
        form: {
            quickQuote: 'Consulta Rápida',
            name: 'Nombre',
            email: 'Email',
            phone: 'Teléfono',
            serviceType: 'Tipo de Servicio',
            message: 'Mensaje',
            send: 'Enviar Consulta',
            sending: 'Enviando...',
            success: '¡Mensaje enviado con éxito!',
            error: 'Error al enviar el mensaje. Por favor, intente nuevamente.',
            required: 'Por favor, complete todos los campos requeridos',
            invalidEmail: 'Por favor, ingrese un email válido'
        },
        services: {
            title: 'Nuestros Servicios',
            national: 'Transporte Nacional',
            international: 'Transporte Internacional',
            storage: 'Almacenamiento'
        },
        footer: {
            subscribe: {
                title: 'Suscríbete a nuestro Newsletter',
                description: 'Recibe las últimas noticias y ofertas especiales',
                placeholder: 'Tu email',
                button: 'Suscribirse'
            },
            contact: {
                title: 'Contacto',
                phone: '+34 123 456 789',
                email: 'info@xentrah.com',
                address: 'Calle Principal 123, Madrid'
            },
            copyright: '© 2024 Xentrah. Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            about: 'About',
            contact: 'Contact',
            login: 'Login'
        },
        hero: {
            subtitle: 'Logistics Solutions',
            title: 'Efficiency and Reliability in Every Shipment',
            description: 'We optimize your logistics operations with cutting-edge technology and personalized service.',
            note: 'Over 10 years of experience in the sector',
            cta: 'Request Quote'
        },
        form: {
            quickQuote: 'Quick Quote',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            serviceType: 'Service Type',
            message: 'Message',
            send: 'Send Inquiry',
            sending: 'Sending...',
            success: 'Message sent successfully!',
            error: 'Error sending message. Please try again.',
            required: 'Please fill in all required fields',
            invalidEmail: 'Please enter a valid email'
        },
        services: {
            title: 'Our Services',
            national: 'National Transport',
            international: 'International Transport',
            storage: 'Storage'
        },
        footer: {
            subscribe: {
                title: 'Subscribe to our Newsletter',
                description: 'Receive the latest news and special offers',
                placeholder: 'Your email',
                button: 'Subscribe'
            },
            contact: {
                title: 'Contact',
                phone: '+34 123 456 789',
                email: 'info@xentrah.com',
                address: 'Main Street 123, Madrid'
            },
            copyright: '© 2024 Xentrah. All rights reserved.'
        }
    }
};

// Language selector functionality
const langSelector = document.querySelector('.lang-selector');
let currentLang = localStorage.getItem('language') || 'es';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = key.split('.').reduce((obj, key) => obj[key], translations[lang]);
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Event listener for language selector
langSelector.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
    langSelector.value = currentLang;
}); 