// JustPlay Language Switching System
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('justplay-language') || 'en';
        this.translations = {};
        this.init();
    }

    init() {
        this.loadTranslations();
        this.setupLanguageToggle();
        this.applyLanguage(this.currentLanguage);
    }

    loadTranslations() {
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.about': 'About',
                'nav.contact': 'Contact',
                'nav.terms': 'T&C',
                
                // Home Page
                'home.hero.title': 'Empowering Sports Connections',
                'home.hero.subtitle': 'The social sports platform that connects players, teams, and tournaments. Play. Connect. Shine.',
                'home.hero.cta1': 'Explore Services',
                'home.hero.cta2': 'Get Started',
                'home.features.title': 'Why Choose JustPlay?',
                'home.features.subtitle': 'Discover the features that make JustPlay the ultimate sports platform for players, teams, and organizers.',
                'home.features.event.title': 'Event Management',
                'home.features.event.desc': 'Create, manage, and participate in sports events with ease. From casual matches to organized tournaments, connect with players who share your passion.',
                'home.features.team.title': 'Team Building',
                'home.features.team.desc': 'Build and manage your sports teams with comprehensive member management, role assignments, and team statistics tracking.',
                'home.features.tournament.title': 'Tournament Organization',
                'home.features.tournament.desc': 'Organize and participate in tournaments with structured brackets, match scheduling, and real-time results tracking.',
                'home.services.title': 'Our Services',
                'home.services.subtitle': 'Comprehensive sports platform services designed to enhance your athletic experience and community connections.',
                'home.about.title': 'About JustPlay',
                'home.about.subtitle': 'Connecting the sports community through innovative technology and passionate development.',
                'home.contact.title': 'Get In Touch',
                'home.contact.subtitle': 'Ready to join the JustPlay community? Contact us to learn more or get started today.',
                'home.contact.info': 'Connect With Us',
                'home.contact.desc': 'Have questions about JustPlay? Want to learn more about our services? We\'re here to help you get the most out of your sports experience.',
                'home.contact.form.name': 'Name',
                'home.contact.form.email': 'Email',
                'home.contact.form.subject': 'Subject',
                'home.contact.form.message': 'Message',
                'home.contact.form.submit': 'Send Message',
                'home.footer.desc': 'The social sports platform that connects players, teams, and tournaments. Play. Connect. Shine.',
                'home.footer.services': 'Services',
                'home.footer.company': 'Company',
                'home.footer.connect': 'Connect',
                'home.footer.copyright': '© 2025 JustPlay by DallosCorp. All rights reserved.',
                
                // Common
                'common.learn_more': 'Learn More',
                'common.get_started': 'Get Started',
                'common.contact_us': 'Contact Us',
                'common.read_more': 'Read More',
                'common.back_to_top': 'Back to Top',
                
                // Services Page
                'services.title': 'Our Services',
                'services.subtitle': 'Comprehensive sports platform services designed to enhance your athletic experience and community connections.',
                'services.event.title': 'Event Management',
                'services.event.desc': 'Create, manage, and participate in sports events with our comprehensive event management system.',
                'services.team.title': 'Team Management',
                'services.team.desc': 'Build and manage your sports teams with our comprehensive team management system.',
                'services.tournament.title': 'Tournament Organization',
                'services.tournament.desc': 'Organize structured tournaments with our advanced tournament management system.',
                'services.user.title': 'User Profiles & Authentication',
                'services.user.desc': 'Secure user management with comprehensive profiles and authentication system.',
                
                // About Page
                'about.title': 'About JustPlay',
                'about.subtitle': 'Connecting the sports community through innovative technology and passionate development.',
                'about.mission.title': 'Our Mission',
                'about.mission.desc': 'JustPlay is dedicated to revolutionizing the way people connect through sports.',
                'about.technology.title': 'Our Technology',
                'about.technology.desc': 'JustPlay is built using modern, scalable technologies that ensure reliability, security, and performance.',
                
                // Contact Page
                'contact.title': 'Contact Us',
                'contact.subtitle': 'Ready to join the JustPlay community? Contact us to learn more or get started today.',
                'contact.info.title': 'Get In Touch',
                'contact.info.desc': 'Have questions about JustPlay? We\'re here to help you get the most out of your sports experience.',
                'contact.form.name': 'Full Name',
                'contact.form.email': 'Email Address',
                'contact.form.phone': 'Phone Number',
                'contact.form.subject': 'Subject',
                'contact.form.message': 'Message',
                'contact.form.submit': 'Send Message',
                'contact.faq.title': 'Frequently Asked Questions',
                
                // Terms Page
                'terms.title': 'Terms & Conditions',
                'terms.subtitle': 'Please read these terms and conditions carefully before using JustPlay services.',
                'terms.last_updated': 'Last Updated:',
                'terms.acceptance': 'Acceptance of Terms',
                'terms.description': 'Description of Service',
                'terms.accounts': 'User Accounts and Registration',
                'terms.conduct': 'User Conduct and Responsibilities',
                'terms.content': 'Content and Intellectual Property',
                'terms.privacy': 'Privacy and Data Protection',
                'terms.availability': 'Service Availability and Modifications',
                'terms.payment': 'Payment and Billing',
                'terms.termination': 'Termination',
                'terms.disclaimers': 'Disclaimers and Limitations of Liability',
                'terms.indemnification': 'Indemnification',
                'terms.governing': 'Governing Law and Dispute Resolution',
                'terms.changes': 'Changes to Terms',
                'terms.severability': 'Severability',
                'terms.contact': 'Contact Information',
                'terms.agreement': 'Entire Agreement'
            },
            es: {
                // Navigation
                'nav.home': 'Inicio',
                'nav.services': 'Servicios',
                'nav.about': 'Acerca de',
                'nav.contact': 'Contacto',
                'nav.terms': 'Términos',
                
                // Home Page
                'home.hero.title': 'Empoderando Conexiones Deportivas',
                'home.hero.subtitle': 'La plataforma deportiva social que conecta jugadores, equipos y torneos. Juega. Conecta. Brilla.',
                'home.hero.cta1': 'Explorar Servicios',
                'home.hero.cta2': 'Comenzar',
                'home.features.title': '¿Por qué elegir JustPlay?',
                'home.features.subtitle': 'Descubre las características que hacen de JustPlay la plataforma deportiva definitiva para jugadores, equipos y organizadores.',
                'home.features.event.title': 'Gestión de Eventos',
                'home.features.event.desc': 'Crea, gestiona y participa en eventos deportivos con facilidad. Desde partidos casuales hasta torneos organizados, conecta con jugadores que comparten tu pasión.',
                'home.features.team.title': 'Construcción de Equipos',
                'home.features.team.desc': 'Construye y gestiona tus equipos deportivos con gestión integral de miembros, asignación de roles y seguimiento de estadísticas del equipo.',
                'home.features.tournament.title': 'Organización de Torneos',
                'home.features.tournament.desc': 'Organiza y participa en torneos con llaves estructuradas, programación de partidos y seguimiento de resultados en tiempo real.',
                'home.services.title': 'Nuestros Servicios',
                'home.services.subtitle': 'Servicios integrales de plataforma deportiva diseñados para mejorar tu experiencia atlética y conexiones comunitarias.',
                'home.about.title': 'Acerca de JustPlay',
                'home.about.subtitle': 'Conectando la comunidad deportiva a través de tecnología innovadora y desarrollo apasionado.',
                'home.contact.title': 'Ponte en Contacto',
                'home.contact.subtitle': '¿Listo para unirte a la comunidad JustPlay? Contáctanos para aprender más o comenzar hoy.',
                'home.contact.info': 'Conéctate con Nosotros',
                'home.contact.desc': '¿Tienes preguntas sobre JustPlay? ¿Quieres aprender más sobre nuestros servicios? Estamos aquí para ayudarte a aprovechar al máximo tu experiencia deportiva.',
                'home.contact.form.name': 'Nombre',
                'home.contact.form.email': 'Correo Electrónico',
                'home.contact.form.subject': 'Asunto',
                'home.contact.form.message': 'Mensaje',
                'home.contact.form.submit': 'Enviar Mensaje',
                'home.footer.desc': 'La plataforma deportiva social que conecta jugadores, equipos y torneos. Juega. Conecta. Brilla.',
                'home.footer.services': 'Servicios',
                'home.footer.company': 'Empresa',
                'home.footer.connect': 'Conectar',
                'home.footer.copyright': '© 2025 JustPlay por DallosCorp. Todos los derechos reservados.',
                
                // Common
                'common.learn_more': 'Aprender Más',
                'common.get_started': 'Comenzar',
                'common.contact_us': 'Contáctanos',
                'common.read_more': 'Leer Más',
                'common.back_to_top': 'Volver Arriba',
                
                // Services Page
                'services.title': 'Nuestros Servicios',
                'services.subtitle': 'Servicios integrales de plataforma deportiva diseñados para mejorar tu experiencia atlética y conexiones comunitarias.',
                'services.event.title': 'Gestión de Eventos',
                'services.event.desc': 'Crea, gestiona y participa en eventos deportivos con nuestro sistema integral de gestión de eventos.',
                'services.team.title': 'Gestión de Equipos',
                'services.team.desc': 'Construye y gestiona tus equipos deportivos con nuestro sistema integral de gestión de equipos.',
                'services.tournament.title': 'Organización de Torneos',
                'services.tournament.desc': 'Organiza torneos estructurados con nuestro sistema avanzado de gestión de torneos.',
                'services.user.title': 'Perfiles de Usuario y Autenticación',
                'services.user.desc': 'Gestión segura de usuarios con perfiles integrales y sistema de autenticación.',
                
                // About Page
                'about.title': 'Acerca de JustPlay',
                'about.subtitle': 'Conectando la comunidad deportiva a través de tecnología innovadora y desarrollo apasionado.',
                'about.mission.title': 'Nuestra Misión',
                'about.mission.desc': 'JustPlay está dedicado a revolucionar la forma en que las personas se conectan a través del deporte.',
                'about.technology.title': 'Nuestra Tecnología',
                'about.technology.desc': 'JustPlay está construido usando tecnologías modernas y escalables que garantizan confiabilidad, seguridad y rendimiento.',
                
                // Contact Page
                'contact.title': 'Contáctanos',
                'contact.subtitle': '¿Listo para unirte a la comunidad JustPlay? Contáctanos para aprender más o comenzar hoy.',
                'contact.info.title': 'Ponte en Contacto',
                'contact.info.desc': '¿Tienes preguntas sobre JustPlay? Estamos aquí para ayudarte a aprovechar al máximo tu experiencia deportiva.',
                'contact.form.name': 'Nombre Completo',
                'contact.form.email': 'Dirección de Correo',
                'contact.form.phone': 'Número de Teléfono',
                'contact.form.subject': 'Asunto',
                'contact.form.message': 'Mensaje',
                'contact.form.submit': 'Enviar Mensaje',
                'contact.faq.title': 'Preguntas Frecuentes',
                
                // Terms Page
                'terms.title': 'Términos y Condiciones',
                'terms.subtitle': 'Por favor lee estos términos y condiciones cuidadosamente antes de usar los servicios de JustPlay.',
                'terms.last_updated': 'Última Actualización:',
                'terms.acceptance': 'Aceptación de Términos',
                'terms.description': 'Descripción del Servicio',
                'terms.accounts': 'Cuentas de Usuario y Registro',
                'terms.conduct': 'Conducta y Responsabilidades del Usuario',
                'terms.content': 'Contenido y Propiedad Intelectual',
                'terms.privacy': 'Privacidad y Protección de Datos',
                'terms.availability': 'Disponibilidad del Servicio y Modificaciones',
                'terms.payment': 'Pago y Facturación',
                'terms.termination': 'Terminación',
                'terms.disclaimers': 'Descargos y Limitaciones de Responsabilidad',
                'terms.indemnification': 'Indemnización',
                'terms.governing': 'Ley Aplicable y Resolución de Disputas',
                'terms.changes': 'Cambios a los Términos',
                'terms.severability': 'Divisibilidad',
                'terms.contact': 'Información de Contacto',
                'terms.agreement': 'Acuerdo Completo'
            }
        };
    }

    setupLanguageToggle() {
        const languageToggle = document.querySelector('.language-toggle');
        if (!languageToggle) return;

        const enButton = languageToggle.querySelector('[data-lang="en"]');
        const esButton = languageToggle.querySelector('[data-lang="es"]');

        if (enButton) {
            enButton.addEventListener('click', () => this.switchLanguage('en'));
        }
        if (esButton) {
            esButton.addEventListener('click', () => this.switchLanguage('es'));
        }
    }

    switchLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('justplay-language', language);
        this.applyLanguage(language);
        this.updateLanguageButtons();
    }

    applyLanguage(language) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[language][key];
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translation;
                } else if (element.tagName === 'INPUT' && element.type === 'email') {
                    element.placeholder = translation;
                } else if (element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update page title and meta description
        this.updatePageMeta(language);
    }

    updateLanguageButtons() {
        const enButton = document.querySelector('[data-lang="en"]');
        const esButton = document.querySelector('[data-lang="es"]');

        if (enButton && esButton) {
            enButton.classList.toggle('active', this.currentLanguage === 'en');
            esButton.classList.toggle('active', this.currentLanguage === 'es');
        }
    }

    updatePageMeta(language) {
        const titles = {
            en: {
                'index': 'JustPlay — Empowering Sports Connections',
                'services': 'Services — JustPlay',
                'about': 'About — JustPlay',
                'contact': 'Contact — JustPlay',
                'terms': 'Terms & Conditions — JustPlay'
            },
            es: {
                'index': 'JustPlay — Empoderando Conexiones Deportivas',
                'services': 'Servicios — JustPlay',
                'about': 'Acerca de — JustPlay',
                'contact': 'Contacto — JustPlay',
                'terms': 'Términos y Condiciones — JustPlay'
            }
        };

        const currentPage = this.getCurrentPage();
        const title = titles[language][currentPage];
        if (title) {
            document.title = title;
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('services')) return 'services';
        if (path.includes('about')) return 'about';
        if (path.includes('contact')) return 'contact';
        if (path.includes('terms')) return 'terms';
        return 'index';
    }

    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});
