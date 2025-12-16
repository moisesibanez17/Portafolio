// Translations object
const translations = {
    es: {
        // Navigation
        'nav-inicio': 'Inicio',
        'nav-sobre-mi': 'Sobre mí',
        'nav-proyectos': 'Proyectos',
        'nav-experiencia': 'Experiencia',
        'nav-cv': 'CV',
        'nav-contacto': 'Contacto',
        
        // Hero section
        'hero-greeting': 'Hola, soy',
        'hero-subtitle': 'Ingeniero en Computación y Desarrollador.',
        'hero-lead': 'Construyo productos digitales útiles y sencillos de usar. Me interesa mejorar la experiencia del usuario a través de buen código y diseño accesible.',
        'btn-projects': 'Ver proyectos',
        'btn-contact': 'Contáctame',
        
        // About section
        'about-title': 'Sobre mí',
        'about-lead': 'Estudiante de Ingeniería en Computación con experiencia práctica en soporte de TI avanzado, automatización con scripts y desarrollo web',
        'about-bullet-1': 'Proporcioné soporte avanzado y resolución de problemas de hardware, software y conectividad',
        'about-bullet-2': 'Creación de scripts de automatización utilizando PowerShell, Python y Batch para optimizar operaciones y mejorar la eficiencia del equipo',
        'about-bullet-3': 'Administré y mantuve el entorno Microsoft 365/Azure, incluyendo aprovisionamiento de usuarios y aplicación de políticas de seguridad',
        'skills-title': 'Habilidades',
        'tools-title': 'Herramientas',
        
        // Projects section
        'projects-title': 'Proyectos',
        'project-1-title': 'Extractor de datos',
        'project-1-desc': 'Extrae metadatos del repositorio institucional de la Universidad Catolica de Bogota para su analisis',
        'project-2-title': 'Beneficios Estudiantiles UDG',
        'project-2-desc': 'Pagina web con los beneficios para los estudiantes de la Universidad de Guadalajara',
        'project-3-title': 'TecnoShop',
        'project-3-desc': 'Pagina web para venta de productos tecnológicos',
        'btn-demo': 'Demo',
        'btn-code': 'Código',
        
        // Experience section
        'experience-title': 'Experiencia',
        'exp-1-date': 'Septiembre 2025 — Presente',
        'exp-1-company': 'Grupo ABG',
        'exp-1-desc-1': 'Desarrolle soluciones de scripting avanzado para la resolucion automatizada de fallos recurrentes de Nivel 2, optimizando la gestion de hardware y software crıtico.',
        'exp-1-desc-2': 'Implemente y mantuve la infraestructura de usuarios en Microsoft 365/Azure mediante scripts de aprovisionamiento, asegurando el cumplimieto de polıticas de seguridad a traves de la codificacion y automatizacion.',
        'exp-1-desc-3': 'Participe en la evaluacion de nuevas herramientas de software y la integracion de APIs para mejorar la conectividad y el flujo de datos.',
        'exp-2-date': 'Enero 2024 — Mayo 2025',
        'exp-2-company': 'Grupo Plasencia',
        'exp-2-desc-1': 'Fui el responsable principal del desarrollo de scripts robustos de automatizacion de tareas con PowerShell, Python y Batch, lo que incremento la eficiencia operativa de los procesos crıticos de TI.',
        'exp-2-desc-2': 'Codifique rutinas de gestion de identidades y control de permisos en Windows Active Directory para mas de 200 usuarios, utilizando scripting para garantizar la consistencia y la seguridad del acceso.',
        'exp-2-desc-3': 'Realice analisis de logs y genere informes automatizados a traves de scripts personalizados, proporcionando soporte tecnico y mejorando la capacidad de respuesta del equipo.',
        
        // CV section
        'cv-title': 'Currículum Vitae',
        'cv-lead': 'Puedes ver y descargar mi CV completo aquí:',
        'btn-download-cv': 'Descargar CV (PDF)',
        'btn-view-cv': 'Ver en nueva pestaña',
        
        // Contact section
        'contact-title': 'Contacto',
        'contact-lead': '¿Quieres trabajar conmigo o tienes alguna pregunta? Escríbeme:',
        
        // Footer
        'footer-text': 'Moisés Ibañez.'
    },
    en: {
        // Navigation
        'nav-inicio': 'Home',
        'nav-sobre-mi': 'About Me',
        'nav-proyectos': 'Projects',
        'nav-experiencia': 'Experience',
        'nav-cv': 'CV',
        'nav-contacto': 'Contact',
        
        // Hero section
        'hero-greeting': 'Hi, I\'m',
        'hero-subtitle': 'Computer Engineer and Developer.',
        'hero-lead': 'I build useful and user-friendly digital products. I\'m interested in improving user experience through good code and accessible design.',
        'btn-projects': 'View projects',
        'btn-contact': 'Contact me',
        
        // About section
        'about-title': 'About Me',
        'about-lead': 'Computer Engineering student with hands-on experience in advanced IT support, script automation, and web development',
        'about-bullet-1': 'Provided advanced support and troubleshooting for hardware, software, and connectivity issues',
        'about-bullet-2': 'Created automation scripts using PowerShell, Python, and Batch to optimize operations and improve team efficiency',
        'about-bullet-3': 'Managed and maintained Microsoft 365/Azure environment, including user provisioning and security policy enforcement',
        'skills-title': 'Skills',
        'tools-title': 'Tools',
        
        // Projects section
        'projects-title': 'Projects',
        'project-1-title': 'Data Extractor',
        'project-1-desc': 'Extracts metadata from the institutional repository of the Catholic University of Bogota for analysis',
        'project-2-title': 'UDG Student Benefits',
        'project-2-desc': 'Website with benefits for students at the University of Guadalajara',
        'project-3-title': 'TecnoShop',
        'project-3-desc': 'Website for selling technological products',
        'btn-demo': 'Demo',
        'btn-code': 'Code',
        
        // Experience section
        'experience-title': 'Experience',
        'exp-1-date': 'September 2025 — Present',
        'exp-1-company': 'Grupo ABG',
        'exp-1-desc-1': 'Developed advanced scripting solutions for automated resolution of recurring Level 2 failures, optimizing critical hardware and software management.',
        'exp-1-desc-2': 'Implemented and maintained user infrastructure in Microsoft 365/Azure through provisioning scripts, ensuring compliance with security policies through coding and automation.',
        'exp-1-desc-3': 'Participated in the evaluation of new software tools and API integration to improve connectivity and data flow.',
        'exp-2-date': 'January 2024 — May 2025',
        'exp-2-company': 'Grupo Plasencia',
        'exp-2-desc-1': 'Was the main responsible for developing robust task automation scripts with PowerShell, Python, and Batch, which increased operational efficiency of critical IT processes.',
        'exp-2-desc-2': 'Coded identity management and permission control routines in Windows Active Directory for over 200 users, using scripting to ensure consistency and access security.',
        'exp-2-desc-3': 'Performed log analysis and generated automated reports through custom scripts, providing technical support and improving team responsiveness.',
        
        // CV section
        'cv-title': 'Curriculum Vitae',
        'cv-lead': 'You can view and download my complete CV here:',
        'btn-download-cv': 'Download CV (PDF)',
        'btn-view-cv': 'View in new tab',
        
        // Contact section
        'contact-title': 'Contact',
        'contact-lead': 'Want to work with me or have any questions? Write me:',
        
        // Footer
        'footer-text': 'Moisés Ibañez.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // allow normal behavior for external links
            const href = this.getAttribute('href');
            if (!href.startsWith('#')) return;
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({behavior:'smooth', block:'start'});

            // close mobile nav if open
            document.body.classList.remove('nav-open');
            document.querySelectorAll('.nav-toggle').forEach(b => b.classList.remove('active'));
        });
    });

    // Mobile nav toggle
    const body = document.body;
    const toggle = document.querySelector('.nav-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            body.classList.toggle('nav-open');
            toggle.classList.toggle('active');
        });
    }

    // set year
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('language') || 'es';
    
    // Apply saved language on load
    setLanguage(currentLang);
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(currentLang);
            localStorage.setItem('language', currentLang);
        });
    }
    
    function setLanguage(lang) {
        // Update active state in toggle button
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Update CV links based on language
        const cvFile = lang === 'es' ? 'assets/cv/cv-es.pdf' : 'assets/cv/cv-en.pdf';
        const cvDownload = document.getElementById('cv-download');
        const cvView = document.getElementById('cv-view');
        const cvIframe = document.getElementById('cv-iframe');
        
        if (cvDownload) cvDownload.href = cvFile;
        if (cvView) cvView.href = cvFile;
        if (cvIframe) cvIframe.src = cvFile;
    }
});