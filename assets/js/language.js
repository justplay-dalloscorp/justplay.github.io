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
                'home.hero.title': 'Where Every Passion Becomes a Rock Star! 🌟',
                'home.hero.subtitle': 'JustPlay is the platform where anyone can showcase their talent! Whether you\'re into sports, music, art, gaming, or any passion - this is your space to shine! Forget complicated apps - we make everything simple, fun, and epic. Your time to be special is now!',
                'home.hero.cta1': 'Show Your Skills',
                'home.hero.cta2': 'Join the Game',
                'home.features.title': 'Why JustPlay is EPIC! 🚀',
                'home.features.subtitle': 'Check out these game-changing features that make JustPlay the coolest platform for all passions ever! Whether you\'re an athlete, artist, gamer, or creator - this is your space to shine! No boring stuff here - just pure awesomeness!',
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
                'home.footer.copyright': '© 2025 JustPlay by Dallos Corp. All rights reserved.',
                
                // Services Page
                'services.title': 'Our Epic Features! 🔥',
                'services.subtitle': 'Everything you need to dominate your passion and show the world what you\'re made of! Whether you\'re into sports, art, music, gaming, or any talent - this is your platform!',
                'services.events.title': 'Events - Where All Passions Unite!',
                'services.events.subtitle': 'Create epic events for any passion in seconds! From art exhibitions to music jams, gaming tournaments to cultural festivals - find your community and show off your talent! No more complicated setups or boring forms. Just pure, passion-driven action!',
                'services.teams.title': 'Communities - Build Your Dream Crew!',
                'services.teams.subtitle': 'Assemble your ultimate community! Add members, assign roles, track achievements, and dominate together. Your crew, your rules, your victory!',
                'services.tournaments.title': 'Competitions - Rise to the Top!',
                'services.tournaments.subtitle': 'Organize or join competitions that matter! From art contests to gaming tournaments, music battles to cultural showcases - automatic brackets, live updates, and epic showdowns await! Ready to claim your throne? This is where legends are made and champions are crowned!',
                'services.profile.title': 'Profile - You\'re the Rock Star!',
                'services.profile.subtitle': 'Showcase your talent like never before! Your profile is your stage - display achievements, skills, and let everyone know why you\'re legendary! This is where you become the star you were meant to be!',
                'services.chat.title': 'Chat - Simple & Powerful!',
                'services.chat.subtitle': 'Forget WhatsApp and complicated apps! Our chat is super simple, lightning fast, and gets things done! Connect, coordinate, and conquer together without the hassle of multiple apps!',
                'services.security.title': 'Security - Rock Solid!',
                'services.security.subtitle': 'Your data is safe with us! Advanced security features keep your account and information protected 24/7! We take your privacy seriously so you can focus on what matters - playing and winning!',
                
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
                'about.subtitle': 'Connecting passionate people from all communities through innovative technology and community-driven development. Where every talent becomes a rock star!',
                'about.tags.passions': '🎯 All Passions',
                'about.tags.simple': '⚡ Simple & Fast',
                'about.tags.rockstars': '🌟 Rock Stars',
                'about.tags.platform': '🚀 Epic Platform',
                'about.mission.title': 'Our Mission',
                'about.mission.description': 'JustPlay is dedicated to revolutionizing the way people connect through their passions. We believe that any passion - whether it\'s sports, art, music, gaming, or any talent - has the power to bring communities together, foster friendships, and create lasting memories.',
                'about.passions.art': '🎨 Art',
                'about.passions.music': '🎵 Music',
                'about.passions.gaming': '🎮 Gaming',
                'about.passions.sports': '⚽ Sports',
                'about.passions.culture': '🎭 Culture',
                'about.vision.title': 'Our Vision',
                'about.vision.description': 'We envision a world where finding your community, joining a group, or organizing an event is as simple as a few clicks. By leveraging modern technology and understanding the needs of passionate communities, we\'re building tools that enhance the experience for everyone involved - no matter what their passion is!',
                'about.whatwedo.title': 'What We Do',
                'about.whatwedo.subtitle': 'JustPlay is a comprehensive platform that serves passionate people from all communities and interests:',
                'about.whatwedo.people.title': 'For Passionate People',
                'about.whatwedo.people.item1': '🎯 Discover and join events for any passion',
                'about.whatwedo.people.item2': '👥 Find communities that match your interests',
                'about.whatwedo.people.item3': '🏆 Track achievements and showcase talent',
                'about.whatwedo.people.item4': '💬 Connect with others who share your passion',
                'about.whatwedo.people.item5': '🎪 Participate in competitions and showcases',
                'about.whatwedo.communities.title': 'For Communities',
                'about.whatwedo.communities.item1': '👑 Manage community rosters and roles',
                'about.whatwedo.communities.item2': '📅 Coordinate activities and events',
                'about.whatwedo.communities.item3': '📊 Track performance and achievements',
                'about.whatwedo.communities.item4': '🔍 Find and recruit new members',
                'about.whatwedo.communities.item5': '🎯 Organize practices and meetups',
                'about.whatwedo.organizers.title': 'For Organizers',
                'about.whatwedo.organizers.item1': '🎨 Create events for any passion',
                'about.whatwedo.organizers.item2': '📝 Handle registration and management',
                'about.whatwedo.organizers.item3': '🏆 Generate brackets and schedules',
                'about.whatwedo.organizers.item4': '📈 Track results and maintain records',
                'about.whatwedo.organizers.item5': '📢 Promote to passionate communities',
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
                'terms.subtitle': 'Welcome to JustPlay! Please read these terms and conditions carefully before using our platform. We\'re here to make your experience awesome while keeping everything fair and secure!',
                'terms.tags.fair': '🛡️ Fair & Secure',
                'terms.tags.transparent': '⚖️ Transparent',
                'terms.tags.userfriendly': '🌟 User-Friendly',
                'terms.tags.simple': '🚀 Simple',
                'terms.section1.title': '1. Acceptance of the Terms',
                'terms.section2.title': '2. Registration and Authentication',
                'terms.section3.title': '3. Features',
                'terms.section4.title': '4. User-Generated Content',
                'terms.section5.title': '5. Service Modifications',
                'terms.section6.title': '6. Limitation of Liability',
                'terms.section7.title': '7. Account Suspension or Termination',
                'privacy.title': 'Privacy Policy',
                'privacy.subtitle': 'How we collect, use, and protect your personal information',
                'privacy.collect.title': 'Information We Collect',
                'privacy.use.title': 'How We Use Information',
                'privacy.sharing.title': 'Information Sharing',
                'privacy.security.title': 'Data Security',
                'privacy.rights.title': 'Your Rights',
                'privacy.changes.title': 'Policy Changes',
                'terms.contact.title': 'Contact Information',
                'terms.contact.subtitle': 'For questions or requests, you can reach us at:',
                'terms.contact.email.title': 'Support Email',
                'terms.contact.buttons.contact': 'Contact Us',
                'terms.contact.buttons.learn': 'Learn More',
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
                'home.hero.title': '¡Donde Cada Pasión se Convierte en una Estrella! 🌟',
                'home.hero.subtitle': '¡JustPlay es <strong>la</strong> plataforma donde <em>cualquiera</em> puede mostrar su talento! Ya sea que te guste el deporte, música, arte, gaming, o cualquier pasión - ¡este es <strong>tu</strong> espacio para brillar! Olvida las apps complicadas - hacemos todo simple, divertido y épico. ¡Tu momento de ser especial es <strong>ahora</strong>!',
                'home.hero.cta1': 'Muestra tus Habilidades',
                'home.hero.cta2': 'Únete al Juego',
                'home.features.title': '¡Por qué JustPlay es <strong>épico</strong>! 🚀',
                'home.features.subtitle': '¡Mira estas características que cambian el juego y hacen de JustPlay la plataforma más genial para <strong>todas</strong> las pasiones! Ya seas atleta, artista, gamer, o creador - ¡este es <strong>tu</strong> espacio para brillar! ¡Nada aburrido aquí - solo pura genialidad!',
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
                'home.footer.copyright': '© 2025 JustPlay por Dallos Corp. Todos los derechos reservados.',
                
                // Services Page
                'services.title': '¡Nuestras Características Épicas! 🔥',
                'services.subtitle': '¡Todo lo que necesitas para dominar <strong>tu</strong> pasión y mostrarle al mundo de qué estás hecho! Ya seas del deporte, arte, música, gaming, o cualquier talento - ¡esta es <strong>tu</strong> plataforma!',
                'services.events.title': '¡Eventos - Donde Todas las Pasiones se Unen!',
                'services.events.subtitle': '¡Crea eventos épicos para <strong>cualquier</strong> pasión en segundos! Desde exposiciones de arte hasta jams de música, torneos de gaming hasta festivales culturales - encuentra tu comunidad y muestra tu talento! No más configuraciones complicadas o formularios aburridos. ¡Solo pura acción impulsada por la pasión!',
                'services.teams.title': '¡Comunidades - Construye tu Crew de Ensueño!',
                'services.teams.subtitle': '¡Ensambla tu comunidad definitiva! Agrega miembros, asigna roles, rastrea logros y domina juntos. Tu crew, tus reglas, tu victoria!',
                'services.tournaments.title': '¡Competencias - Sube a la Cima!',
                'services.tournaments.subtitle': '¡Organiza o únete a competencias que importan! Desde concursos de arte hasta torneos de gaming, batallas de música hasta muestras culturales - llaves automáticas, actualizaciones en vivo y enfrentamientos épicos te esperan! ¿Listo para reclamar <strong>tu</strong> trono? ¡Aquí es donde se hacen las leyendas y se coronan los campeones!',
                'services.profile.title': '¡Perfil - Eres la Estrella de Rock!',
                'services.profile.subtitle': '¡Muestra tu talento como nunca antes! Tu perfil es tu escenario - exhibe logros, habilidades y deja que todos sepan por qué eres legendario! ¡Aquí es donde te conviertes en la estrella que estabas destinado a ser!',
                'services.chat.title': '¡Chat - Simple y Poderoso!',
                'services.chat.subtitle': '¡Olvida WhatsApp y apps complicadas! Nuestro chat es súper simple, súper rápido y hace las cosas! ¡Conecta, coordina y conquista juntos sin la molestia de múltiples apps!',
                'services.security.title': '¡Seguridad - Sólida como una Roca!',
                'services.security.subtitle': '¡Tus datos están seguros con nosotros! Características de seguridad avanzadas mantienen tu cuenta e información protegidas 24/7! Nos tomamos tu privacidad en serio para que puedas enfocarte en lo que importa - ¡jugar y ganar!',
                
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
                'about.subtitle': 'Conectando personas apasionadas de todas las comunidades a través de tecnología innovadora y desarrollo impulsado por la comunidad. ¡Donde cada talento se convierte en una estrella de rock!',
                'about.tags.passions': '🎯 Todas las Pasiones',
                'about.tags.simple': '⚡ Simple y Rápido',
                'about.tags.rockstars': '🌟 Estrellas de Rock',
                'about.tags.platform': '🚀 Plataforma Épica',
                'about.mission.title': 'Nuestra Misión',
                'about.mission.description': 'JustPlay está dedicado a revolucionar la forma en que las personas se conectan a través de sus pasiones. Creemos que <strong>cualquier</strong> pasión - ya sea deportes, arte, música, gaming, o cualquier talento - tiene el poder de unir comunidades, fomentar amistades y crear recuerdos duraderos.',
                'about.passions.art': '🎨 Arte',
                'about.passions.music': '🎵 Música',
                'about.passions.gaming': '🎮 Gaming',
                'about.passions.sports': '⚽ Deportes',
                'about.passions.culture': '🎭 Cultura',
                'about.vision.title': 'Nuestra Visión',
                'about.vision.description': 'Visualizamos un mundo donde encontrar tu comunidad, unirte a un grupo, u organizar un evento sea tan simple como unos pocos clics. Al aprovechar la tecnología moderna y entender las necesidades de las comunidades apasionadas, estamos construyendo herramientas que mejoran la experiencia para todos los involucrados - ¡no importa cuál sea <strong>su</strong> pasión!',
                'about.whatwedo.title': 'Lo Que Hacemos',
                'about.whatwedo.subtitle': 'JustPlay es una plataforma integral que sirve a personas apasionadas de <strong>todas</strong> las comunidades e intereses:',
                'about.whatwedo.people.title': 'Para Personas Apasionadas',
                'about.whatwedo.people.item1': '🎯 Descubre y únete a eventos para <strong>cualquier</strong> pasión',
                'about.whatwedo.people.item2': '👥 Encuentra comunidades que coincidan con tus intereses',
                'about.whatwedo.people.item3': '🏆 Rastrea logros y muestra tu talento',
                'about.whatwedo.people.item4': '💬 Conecta con otros que comparten tu pasión',
                'about.whatwedo.people.item5': '🎪 Participa en competencias y exhibiciones',
                'about.whatwedo.communities.title': 'Para Comunidades',
                'about.whatwedo.communities.item1': '👑 Gestiona listas de miembros y roles de la comunidad',
                'about.whatwedo.communities.item2': '📅 Coordina actividades y eventos',
                'about.whatwedo.communities.item3': '📊 Rastrea rendimiento y logros',
                'about.whatwedo.communities.item4': '🔍 Encuentra y recluta nuevos miembros',
                'about.whatwedo.communities.item5': '🎯 Organiza prácticas y reuniones',
                'about.whatwedo.organizers.title': 'Para Organizadores',
                'about.whatwedo.organizers.item1': '🎨 Crea eventos para <strong>cualquier</strong> pasión',
                'about.whatwedo.organizers.item2': '📝 Maneja registro y gestión',
                'about.whatwedo.organizers.item3': '🏆 Genera brackets y horarios',
                'about.whatwedo.organizers.item4': '📈 Rastrea resultados y mantiene registros',
                'about.whatwedo.organizers.item5': '📢 Promociona a comunidades apasionadas',
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
                'terms.subtitle': '¡Bienvenido a JustPlay! Por favor lee estos términos y condiciones cuidadosamente antes de usar nuestra plataforma. ¡Estamos aquí para hacer tu experiencia increíble mientras mantenemos todo justo y seguro!',
                'terms.tags.fair': '🛡️ Justo y Seguro',
                'terms.tags.transparent': '⚖️ Transparente',
                'terms.tags.userfriendly': '🌟 Amigable para el Usuario',
                'terms.tags.simple': '🚀 Simple',
                'terms.section1.title': '1. Aceptación de los Términos',
                'terms.section2.title': '2. Registro y Autenticación',
                'terms.section3.title': '3. Características',
                'terms.section4.title': '4. Contenido Generado por el Usuario',
                'terms.section5.title': '5. Modificaciones del Servicio',
                'terms.section6.title': '6. Limitación de Responsabilidad',
                'terms.section7.title': '7. Suspensión o Terminación de Cuenta',
                'privacy.title': 'Política de Privacidad',
                'privacy.subtitle': 'Cómo recopilamos, usamos y protegemos tu información personal',
                'privacy.collect.title': 'Información que Recopilamos',
                'privacy.use.title': 'Cómo Usamos la Información',
                'privacy.sharing.title': 'Compartir Información',
                'privacy.security.title': 'Seguridad de Datos',
                'privacy.rights.title': 'Tus Derechos',
                'privacy.changes.title': 'Cambios en la Política',
                'terms.contact.title': 'Información de Contacto',
                'terms.contact.subtitle': 'Para preguntas o solicitudes, puedes contactarnos en:',
                'terms.contact.email.title': 'Email de Soporte',
                'terms.contact.buttons.contact': 'Contáctanos',
                'terms.contact.buttons.learn': 'Aprende Más',
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
