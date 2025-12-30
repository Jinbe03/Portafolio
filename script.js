// ==========================================
// 1. VARIABLES GLOBALES
// ==========================================
let starInterval;
let currentLang = 'es'; // Idioma por defecto
let typewriterTimeout;
let typewriterIndex = 0;

// ==========================================
// 2. DICCIONARIO DE TRADUCCIONES
// ==========================================
const translations = {
    es: {
        // --- NAVEGACIÓN ---
        logo: "Bruno | Ing. Informático",
        nav_home: "Inicio",
        nav_projects: "Proyectos",
        nav_stack: "Stack",
        nav_cv: "CV & Certs",
        nav_contact: "Contacto",
        
        // --- HERO (INICIO) ---
        hero_title: "¡Hola, soy Bruno!",
        hero_desc: "Veo la vida como un sistema de desafíos esperando la solución correcta. No me conformo con que el código funcione; busco siempre esa respuesta <strong>elegante</strong> y eficiente donde la lógica pura se encuentra con la creatividad.",
        hero_tagline: "Desarrollador de software desde el desierto más árido y colorido del mundo.",
        btn_about: "Saber más sobre mí",
        btn_projects: "Ver mis Proyectos",
        footer_copy: "© 2025 Bruno. Diseño original y propio. Todos los derechos reservados.",

        // --- PROYECTOS ---
        proj_title: "Portafolio Académico y Personal",
        
        p1_title: "Gestión CarWash",
        p1_desc: "Automatización grupal de agenda y clientes para un negocio de lavado.",
        
        p2_title: "Tax & Financial Ops",
        p2_desc: "Sistema colaborativo para gestión tributaria en Chile, Perú y Colombia.",
        
        p3_title: "Life Harmony (App)",
        p3_desc: "Desarrollo grupal de App móvil con IA para control calórico.",
        
        p4_title: "Mangacap",
        p4_desc: "Plataforma web colaborativa para lectura legal de manga.",
        
        p5_title: "TodoSolo PC",
        p5_desc: "Comparador de hardware con redirección inteligente (Proyecto Grupal).",
        
        p6_title: "Pixel Brawler",
        p6_desc: "Videojuego Beat 'em up estilo Pixel Art. Desarrollo 100% individual.",
        
        tag_fullstack: "Full Stack",
        tag_team: "Trabajo en Equipo",
        tag_solo: "Autoría Propia",
        btn_more: "Saber más",
        btn_repo: "Ver repositorio completo",

        // --- STACK (HABILIDADES) ---
        stack_title: "Habilidades Técnicas",
        skill_soft: "Desarrollo de Software",
        skill_full: "Desarrollo Full Stack (Web & Python)",
        skill_data: "Análisis de Datos (Excel, Power BI)",
        skill_db: "Bases de Datos & Cloud",
        skill_mobile: "Desarrollo Móvil (Dart)",

        tech_skills: "Tecnologías",
        ts_cloud: "Computación en la Nube",
        ts_security: "Seguridad de la Información",
        ts_auto: "Automatización",
        
        soft_skills: "Aptitudes de Ingeniero",
        ss_solve: "Resolución de Problemas",
        ss_team: "Trabajo en Equipo",
        ss_critical: "Pensamiento Crítico",
        ss_design: "Diseño de Sistemas",
        ss_agile: "Metodologías Ágiles",

        // --- CV & CERTIFICADOS ---
        cv_title: "Trayectoria & Certificaciones",
        btn_cv: "Ver CV (Español)",
        edu_title: "Ingeniería en Informática",
        edu_desc: "INACAP. Formación integral en desarrollo de software, gestión de proyectos y arquitectura de sistemas.",
        exp_title: "Proyectos de Desarrollo",
        exp_desc: "Creación de soluciones Full Stack y aplicaciones móviles. Digitalización de procesos financieros.",
        
        cert_title: "Certificaciones Oficiales",
        cert_subtitle: "(Haz clic para validar la credencial)",
        cert_full: "Desarrollador Full Stack",
        cert_cloud: "Arquitectura Cloud",
        cert_agile: "Diseño Ágil de Sistemas",
        cert_db: "Diseño y Gestión de BD",
        cert_apps: "Desarrollo de Apps Básicas",
        cert_support: "Soporte Computacional",

        // --- CONTACTO ---
        contact_title: "Base de Operaciones",
        contact_ask: "¿Tienes una misión o proyecto?",
        contact_cta: "Conectemos frecuencia desde Chile para el mundo.",
        btn_email: "Enviar Correo",

        // --- MODALS (VENTANAS EMERGENTES) ---
        bio_title: "Más allá del código",
        bio_p1: "Como futuro <strong>Ingeniero Informático</strong>, entiendo que la tecnología no se construye en solitario. Me defino como una persona curiosa y multifacética, cuyo mundo no se limita a la pantalla del ordenador.",
        bio_p2: "Encuentro mi ritmo y equilibrio en la cancha de <strong>básquetbol</strong>, donde aprendí que la comunicación y la confianza en el equipo son vitales para ganar, una filosofía que llevo a cada proyecto de software. Los <strong>videojuegos</strong> también son parte esencial de mi vida; me inspiran sus lógicas complejas y narrativas interactivas.",
        bio_p3: "Además, exploro mi lado creativo a través de la <strong>música</strong> y disfruto desarrollando software de todo tipo por pura pasión. Me motiva crear herramientas, experimentar con nuevas tecnologías y colaborar con otros para ver cómo una idea abstracta se convierte en una solución robusta.",

        cw_p1: "<strong>El Desafío:</strong> Un negocio local operaba con agendamientos manuales, sufriendo errores y pérdidas de eficiencia.",
        cw_p2: "<strong>Trabajo en Equipo:</strong> Junto a mi grupo de ingeniería, analizamos los requerimientos y <strong>desarrollamos conjuntamente</strong> una plataforma web integral. Mi rol fue clave en la integración del Backend y la base de datos, colaborando estrechamente con mis compañeros encargados del Frontend.",
        cw_p3: "<strong>Resultado:</strong> Entregamos un sistema automatizado con confirmaciones por correo y gestión de roles, optimizando el tiempo del cliente en un 40%.",

        fin_title: "Tax & Financial Operations System",
        fin_p1: "<strong>Contexto:</strong> Proyecto académico enfocado en una multinacional con operaciones en Chile, Perú y Colombia.",
        fin_p2: "<strong>Colaboración:</strong> Formé parte de un equipo multidisciplinario donde nuestra meta era digitalizar operaciones tributarias. <strong>Colaboré</strong> en el diseño de la arquitectura de datos para asegurar la integridad de la información financiera a través de las fronteras.",
        fin_p3: "<strong>Impacto:</strong> La solución permitió insertar, exportar y transformar calificaciones tributarias complejas, facilitando la toma de decisiones de inversión.",

        nutri_p1: "<strong>Objetivo:</strong> Crear una herramienta de salud accesible para el control calórico.",
        nutri_p2: "<strong>Desarrollo Colectivo:</strong> En este proyecto grupal, utilizamos <strong>Dart</strong> para construir la aplicación. Trabajamos coordinados mediante metodologías ágiles, donde mi aporte se centró en la lógica de negocio y la integración de la API de Inteligencia Artificial.",
        nutri_p3: "<strong>Innovación:</strong> Logramos que la app reconociera alimentos mediante fotos, un hito técnico alcanzado gracias a la investigación y desarrollo conjunto del equipo.",

        manga_p1: "<strong>La Misión:</strong> Cubrir la demanda de lectura de manga legal en español.",
        manga_p2: "<strong>Sinergia de Equipo:</strong> <strong>Creamos</strong> esta plataforma web dividiendo tareas entre diseño y programación. Yo apoyé fuertemente en la estructura Full Stack, asegurando que el lector fuera rápido y responsivo, mientras mis compañeros diseñaban la biblioteca de contenidos.",

        pc_p1: "<strong>Descripción:</strong> Comparador web de hardware para compras inteligentes.",
        pc_p2: "<strong>Dinámica de Grupo:</strong> Este proyecto requirió una fuerte sincronización. Mientras una parte del equipo se encargaba del scraping de datos, yo colaboré en la estructuración de esa información en el Backend (Python) y su presentación al usuario. Fue un ejercicio excelente de integración de sistemas.",

        game_title: "Pixel Brawler - Videojuego",
        game_p1: "<strong>Proyecto Personal:</strong> A diferencia de mis proyectos académicos, este videojuego es una creación de <strong>mi total autoría</strong>, nacida de mi pasión por el desarrollo y los juegos retro.",
        game_p2: "<strong>Concepto:</strong> Es un juego estilo <em>Beat 'em up</em> desarrollado con estética Pixel Art. Aunque la narrativa es sencilla, el foco principal estuvo en la implementación técnica: mecánicas de combate fluidas, gestión de estados, animación de sprites y detección de colisiones.",
        game_p3: "<strong>Logro Personal:</strong> Este proyecto demuestra mi capacidad para enfrentar un desarrollo de software completo en solitario, desde la concepción de la idea hasta la ejecución del código final, saliendo de mi zona de confort de las aplicaciones web.",
        contact_cta: "Conectemos frecuencia desde Chile para el mundo.",
        btn_email: "Enviar Correo",
        btn_download: "Descargar Original", // <--- AGREGA ESTO    
    },
    en: {
        // --- NAVIGATION ---
        logo: "Bruno | Computer Engineer",
        nav_home: "Home",
        nav_projects: "Projects",
        nav_stack: "Stack",
        nav_cv: "CV & Certs",
        nav_contact: "Contact",
        
        // --- HERO ---
        hero_title: "Hi, I'm Bruno!",
        hero_desc: "I view life as a system of challenges waiting for the right solution. I don't just settle for working code; I always strive for that <strong>elegant</strong> and efficient answer where pure logic meets creativity.",
        hero_tagline: "Software Developer from the driest and most colorful desert in the world.",
        btn_about: "More about me",
        btn_projects: "View Projects",
        footer_copy: "© 2025 Bruno. Original design. All rights reserved.",

        // --- PROJECTS ---
        proj_title: "Academic & Personal Portfolio",
        
        p1_title: "CarWash Management",
        p1_desc: "Group automation of scheduling and clients for a washing business.",
        
        p2_title: "Tax & Financial Ops",
        p2_desc: "Collaborative system for tax management in Chile, Peru, and Colombia.",
        
        p3_title: "Life Harmony (App)",
        p3_desc: "Group development of mobile App with AI for caloric control.",
        
        p4_title: "Mangacap",
        p4_desc: "Collaborative web platform for legal manga reading.",
        
        p5_title: "TodoSolo PC",
        p5_desc: "Hardware comparator with smart redirection (Group Project).",
        
        p6_title: "Pixel Brawler",
        p6_desc: "Pixel Art Beat 'em up video game. 100% individual development.",
        
        tag_fullstack: "Full Stack",
        tag_team: "Teamwork",
        tag_solo: "Sole Authorship",
        btn_more: "Learn more",
        btn_repo: "View full repository",

        // --- STACK ---
        stack_title: "Knowledge & Skills",
        skill_soft: "Software Development",
        skill_full: "Full Stack Dev (Web & Python)",
        skill_data: "Data Analysis (Excel, Power BI)",
        skill_db: "Databases & Cloud",
        skill_mobile: "Mobile Development (Dart)",

        tech_skills: "Technical Skills",
        ts_cloud: "Cloud Computing",
        ts_security: "Info Security",
        ts_auto: "Automation",
        
        soft_skills: "Engineering Aptitudes",
        ss_solve: "Problem Solving",
        ss_team: "Teamwork",
        ss_critical: "Critical Thinking",
        ss_design: "Systems Design",
        ss_agile: "Agile Methodologies",

        // --- CV & CERTIFICATES ---
        cv_title: "Career & Certifications",
        btn_cv: "View CV (English)",
        edu_title: "Computer Engineering",
        edu_desc: "INACAP. Comprehensive training in software development, project management, and systems architecture.",
        exp_title: "Development Projects",
        exp_desc: "Creation of Full Stack solutions and mobile apps. Digitalization of financial processes.",
        
        cert_title: "Official Certifications",
        cert_subtitle: "(Click to view official credential)",
        cert_full: "Full Stack Developer",
        cert_cloud: "Cloud Architecture",
        cert_agile: "Agile Systems Design",
        cert_db: "DB Design & Management",
        cert_apps: "Basic App Development",
        cert_support: "Computer Support",

        // --- CONTACT ---
        contact_title: "Operations Base",
        contact_ask: "Do you have a mission or project?",
        contact_cta: "Let's connect frequencies from Chile to the world.",
        btn_email: "Send Email",

        // --- MODALS ---
        bio_title: "Beyond the Code",
        bio_p1: "As a future <strong>Computer Engineer</strong>, I understand that technology is not built in isolation. I define myself as a curious and multifaceted person, whose world is not limited to the computer screen.",
        bio_p2: "I find my rhythm and balance on the <strong>basketball</strong> court, where I learned that communication and team trust are vital to winning, a philosophy I bring to every software project. <strong>Video games</strong> are also an essential part of my life; their complex logics and interactive narratives inspire me.",
        bio_p3: "Additionally, I explore my creative side through <strong>music</strong> and enjoy developing all kinds of software out of pure passion. I am motivated by creating tools, experimenting with new technologies, and collaborating with others to see how an abstract idea becomes a robust solution.",

        cw_p1: "<strong>The Challenge:</strong> A local business operated with manual scheduling, suffering from errors and efficiency losses.",
        cw_p2: "<strong>Teamwork:</strong> Together with my engineering group, we analyzed requirements and <strong>jointly developed</strong> a comprehensive web platform. My role was key in Backend and database integration, collaborating closely with colleagues in charge of Frontend.",
        cw_p3: "<strong>Result:</strong> We delivered an automated system with email confirmations and role management, optimizing client time by 40%.",

        fin_title: "Tax & Financial Operations System",
        fin_p1: "<strong>Context:</strong> Academic project focused on a multinational with operations in Chile, Peru, and Colombia.",
        fin_p2: "<strong>Collaboration:</strong> I was part of a multidisciplinary team where our goal was to digitize tax operations. <strong>I collaborated</strong> on the data architecture design to ensure financial information integrity across borders.",
        fin_p3: "<strong>Impact:</strong> The solution allowed inserting, exporting, and transforming complex tax ratings, facilitating investment decision-making.",

        nutri_p1: "<strong>Objective:</strong> Create an accessible health tool for caloric control.",
        nutri_p2: "<strong>Collective Development:</strong> In this group project, we used <strong>Dart</strong> to build the application. We worked coordinated via agile methodologies, where my contribution focused on business logic and Artificial Intelligence API integration.",
        nutri_p3: "<strong>Innovation:</strong> We achieved food recognition via photos, a technical milestone reached thanks to the team's joint research and development.",

        manga_p1: "<strong>The Mission:</strong> Cover the demand for legal manga reading in Spanish.",
        manga_p2: "<strong>Team Synergy:</strong> We <strong>created</strong> this web platform by dividing tasks between design and programming. I strongly supported the Full Stack structure, ensuring the reader was fast and responsive, while my colleagues designed the content library.",

        pc_p1: "<strong>Description:</strong> Hardware web comparator for smart purchases.",
        pc_p2: "<strong>Group Dynamics:</strong> This project required strong synchronization. While part of the team handled data scraping, I collaborated on structuring that information in the Backend (Python) and its presentation to the user. It was an excellent systems integration exercise.",

        game_title: "Pixel Brawler - Video Game",
        game_p1: "<strong>Personal Project:</strong> Unlike my academic projects, this video game is a creation of <strong>my sole authorship</strong>, born from my passion for development and retro games.",
        game_p2: "<strong>Concept:</strong> It is a <em>Beat 'em up</em> style game developed with Pixel Art aesthetics. Although the narrative is simple, the main focus was on technical implementation: fluid combat mechanics, state management, sprite animation, and collision detection.",
        game_p3: "<strong>Personal Achievement:</strong> This project demonstrates my ability to face full software development solo, from idea conception to final code execution, stepping out of my comfort zone of web applications.",
        contact_cta: "Let's connect frequencies from Chile to the world.",
        btn_email: "Send Email",
        btn_download: "Download Original", // <--- AGREGA ESTO
    }
};

// ==========================================
// 3. LÓGICA DE IDIOMA Y TIPO DE CV
// ==========================================
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es'; 
    updateTexts(); 
    startTypewriter(); // Reiniciar animación de texto
    
    // 1. Cambiar texto del botón de idioma
    const btnSpan = document.querySelector('#lang-toggle span');
    btnSpan.textContent = currentLang === 'es' ? 'EN' : 'ES'; 

    // 2. LÓGICA DE DESCARGA DE CV (Inteligente)
    const btnCV = document.getElementById('btn-cv-download');
    if (btnCV) {
        if (currentLang === 'es') {
            btnCV.href = "CV-BrunoMaldonado.esp.pdf";
            btnCV.download = "CV-BrunoMaldonado.esp.pdf";
        } else {
            btnCV.href = "CV-BrunoMaldonado.eng.pdf";
            btnCV.download = "CV-BrunoMaldonado.eng.pdf";
        }
    }
}

function updateTexts() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        // NO traducir el tagline aquí, lo maneja el typewriter
        if(key === 'hero_tagline') return; 

        if(translations[currentLang][key]) {
            if(el.tagName === 'P' || el.tagName === 'H2' || el.tagName === 'SPAN') {
               el.innerHTML = translations[currentLang][key];
            } else {
               el.textContent = translations[currentLang][key];
            }
        }
    });
}

// ==========================================
// 4. EFECTO TYPEWRITER (ESCRITURA)
// ==========================================
function startTypewriter() {
    const textElement = document.getElementById('typewriter-text');
    const textToType = translations[currentLang]['hero_tagline'];
    
    // Limpiar estado anterior
    clearTimeout(typewriterTimeout);
    textElement.textContent = '';
    typewriterIndex = 0;
    
    function type() {
        if (typewriterIndex < textToType.length) {
            textElement.textContent += textToType.charAt(typewriterIndex);
            typewriterIndex++;
            typewriterTimeout = setTimeout(type, 50); // Velocidad de escritura
        }
    }
    
    type();
}

// ==========================================
// 5. INICIALIZACIÓN (ONLOAD)
// ==========================================
window.onload = function() {
    updateTexts(); // <--- ESTA LÍNEA FALTABA (Carga los textos en español al inicio)
    startTypewriter();
    startStarAnimation(); 
};

// ==========================================
// 6. GESTIÓN DE PESTAÑAS (TABS)
// ==========================================
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => { content.classList.remove('active-content'); });
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => { btn.classList.remove('active'); });
    document.getElementById(tabName).classList.add('active-content');
    if(evt) { evt.currentTarget.classList.add('active'); }
}

function triggerTab(tabName) {
    const navButtons = document.querySelectorAll('.tab-btn');
    navButtons.forEach(btn => {
        if(btn.getAttribute('onclick').includes(tabName)) { btn.click(); }
    });
}

// ==========================================
// 7. GESTIÓN DE MODALS (VENTANAS)
// ==========================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const backdrop = document.getElementById('modal-backdrop');
    const starContainer = document.getElementById('star-container');
    
    if(modal) {
        modal.style.display = 'flex';
        backdrop.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('active');
            backdrop.classList.add('active');
            starContainer.classList.add('stars-active');
            startStarAnimation(); 
        }, 10);
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal-overlay');
    const backdrop = document.getElementById('modal-backdrop');
    const starContainer = document.getElementById('star-container');
    
    modals.forEach(modal => {
        modal.classList.remove('active');
        setTimeout(() => { modal.style.display = 'none'; }, 500);
    });

    if(backdrop) {
        backdrop.classList.remove('active');
        setTimeout(() => { backdrop.style.display = 'none'; }, 500);
    }

    if(starContainer) { starContainer.classList.remove('stars-active'); }
}

// Cerrar al hacer clic fuera del modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay') || event.target.id === 'modal-backdrop') {
        closeAllModals();
    }
}

// ==========================================
// 8. EFECTO DE ESTRELLAS FUGACES
// ==========================================
function startStarAnimation() {
    // Evitar sobrecargar con demasiadas estrellas si ya hay
    if(document.querySelectorAll('.star-wrapper-trajectory').length < 5) {
        for(let i = 0; i < 15; i++) { createShootingStar(); }
        clearInterval(starInterval);
        starInterval = setInterval(createShootingStar, 150);
    }
}

function stopStarAnimation() { clearInterval(starInterval); }

function createShootingStar() {
    const starContainer = document.getElementById('star-container');
    
    // Solo crear si el contenedor está activo (o siempre visible si prefieres)
    if (!starContainer || !starContainer.classList.contains('stars-active')) return;

    const wrapper = document.createElement('div');
    wrapper.classList.add('star-wrapper-trajectory');

    // Posición aleatoria de inicio (arriba-derecha)
    const startX = Math.random() * 110 + 20; 
    const startY = Math.random() * 100 - 50; 
    
    wrapper.style.left = startX + '%';
    wrapper.style.top = startY + '%';
    
    const duration = Math.random() * 5 + 3; 
    wrapper.style.animationDuration = duration + 's';

    const body = document.createElement('div');
    body.classList.add('star-body-wavy');

    wrapper.appendChild(body);
    starContainer.appendChild(wrapper);

    // Limpieza automática
    setTimeout(() => {
        if (wrapper.parentNode === starContainer) {
            starContainer.removeChild(wrapper);
        }
    }, duration * 1000);
}
// === VISUALIZADOR DE DOCUMENTOS (PDF) ===
// === VISUALIZADOR (Versión compatible con PDF directo) ===

// === VISUALIZADOR DE DOCUMENTOS (PDF) ===

function openDoc(url, title) { 
    const modal = document.getElementById('modal-viewer');
    const iframe = document.getElementById('doc-frame');
    const titleEl = document.getElementById('viewer-title');
    const downloadBtn = document.getElementById('download-fallback');
    const backdrop = document.getElementById('modal-backdrop');
    
    if(iframe && modal) {
        let cleanUrl = url.split('#')[0];      
        iframe.src = cleanUrl + "#toolbar=0&navpanes=0&view=FitH"; 
        if(downloadBtn) {
            downloadBtn.href = cleanUrl;
            downloadBtn.download = cleanUrl.split('/').pop();
        }

        if(titleEl) titleEl.textContent = title;

        modal.style.display = 'flex';
        backdrop.style.display = 'block';
        
        setTimeout(() => {
            modal.classList.add('active');
            backdrop.classList.add('active');
        }, 10);
    }
}

function previewCV() {
    let cvUrl = "";
    let cvTitle = "";

    // Elegimos el PDF según el idioma
    if (currentLang === 'es') {
        cvUrl = "certificados/CV-BrunoMaldonado.esp.pdf";
        cvTitle = "CV (Español)";
    } else {
        cvUrl = "certificados/CV-BrunoMaldonado.eng.pdf";
        cvTitle = "CV (English)";
    }

    // Llamamos a openDoc solo con la URL del PDF
    openDoc(cvUrl, cvTitle);
}