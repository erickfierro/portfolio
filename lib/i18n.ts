export type Locale = "en" | "es"

export const translations = {
  en: {
    // Header
    portfolioYear: "PORTFOLIO / 2025",
    availableForWork: "Available for work",
    location: "Philippines",
    currently: "CURRENTLY",
    position: "Frontend Developer",
    company: "@ Hububble",
    years: "2021 — Present",
    focus: "FOCUS",

    // Hero description
    heroDescription: "Frontend Developer crafting digital experiences at the intersection of",
    design: " design",
    technology: " technology",
    userExperience: " user experience",
    and: "and",

    // Work section
    selectedWork: "Selected Work",
    workYears: "2019 — 2025",
    jobs: [
      {
        year: "2023",
        role: "Senior Frontend Engineer",
        company: "Vercel",
        description: "Leading frontend architecture for developer tools and AI-powered features.",
      },
      {
        year: "2022",
        role: "Frontend Engineer",
        company: "Linear",
        description: "Built performant interfaces for project management and team collaboration.",
      },
      {
        year: "2021",
        role: "Full Stack Developer",
        company: "Stripe",
        description: "Developed payment infrastructure and merchant-facing dashboard features.",
      },
      {
        year: "2019",
        role: "Software Engineer",
        company: "Airbnb",
        description: "Created booking flow optimizations and host management tools.",
      },
    ],

    // Thoughts section
    recentThoughts: "Recent Thoughts",
    readMore: "Read more",
    posts: [
      {
        title: "The Future of Web Development",
        excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
        date: "Dec 2024",
        readTime: "5 min",
      },
      {
        title: "Design Systems at Scale",
        excerpt: "Lessons learned from building and maintaining design systems across multiple products.",
        date: "Nov 2024",
        readTime: "8 min",
      },
      {
        title: "Performance-First Development",
        excerpt: "Why performance should be a first-class citizen in your development workflow.",
        date: "Oct 2024",
        readTime: "6 min",
      },
      {
        title: "The Art of Code Review",
        excerpt: "Building better software through thoughtful and constructive code reviews.",
        date: "Sep 2024",
        readTime: "4 min",
      },
    ],

    // Connect section
    letsConnect: "Let's Connect",
    connectDescription:
      "Always interested in new opportunities, collaborations, and conversations about technology and design.",
    elsewhere: "ELSEWHERE",

    // Footer
    copyright: "© 2025 Felix Macaspac. All rights reserved.",
    builtWith: "Built with v0.dev by Felix Macaspac",

    // Navigation
    navigateTo: "Navigate to",
  },
  es: {
    // Header
    portfolioYear: "PORTAFOLIO / 2025",
    availableForWork: "Disponible para trabajar",
    location: "Filipinas",
    currently: "ACTUALMENTE",
    position: "Desarrollador Frontend",
    company: "@ Hububble",
    years: "2021 — Presente",
    focus: "ENFOQUE",

    // Hero description
    heroDescription: "Desarrollador Frontend creando experiencias digitales en la intersección de",
    design: " diseño",
    technology: " tecnología",
    userExperience: " experiencia de usuario",
    and: "y",

    // Work section
    selectedWork: "Trabajo Seleccionado",
    workYears: "2019 — 2025",
    jobs: [
      {
        year: "2023",
        role: "Ingeniero Frontend Senior",
        company: "Vercel",
        description: "Liderando arquitectura frontend para herramientas de desarrollo y funciones con IA.",
      },
      {
        year: "2022",
        role: "Ingeniero Frontend",
        company: "Linear",
        description: "Construí interfaces de alto rendimiento para gestión de proyectos y colaboración en equipo.",
      },
      {
        year: "2021",
        role: "Desarrollador Full Stack",
        company: "Stripe",
        description: "Desarrollé infraestructura de pagos y funciones del panel de comerciantes.",
      },
      {
        year: "2019",
        role: "Ingeniero de Software",
        company: "Airbnb",
        description: "Creé optimizaciones de flujo de reservas y herramientas de gestión para anfitriones.",
      },
    ],

    // Thoughts section
    recentThoughts: "Pensamientos Recientes",
    readMore: "Leer más",
    posts: [
      {
        title: "El Futuro del Desarrollo Web",
        excerpt:
          "Explorando cómo la IA y la automatización están transformando la forma en que construimos para la web.",
        date: "Dic 2024",
        readTime: "5 min",
      },
      {
        title: "Sistemas de Diseño a Escala",
        excerpt: "Lecciones aprendidas construyendo y manteniendo sistemas de diseño en múltiples productos.",
        date: "Nov 2024",
        readTime: "8 min",
      },
      {
        title: "Desarrollo Enfocado en Rendimiento",
        excerpt: "Por qué el rendimiento debe ser una prioridad en tu flujo de trabajo de desarrollo.",
        date: "Oct 2024",
        readTime: "6 min",
      },
      {
        title: "El Arte de la Revisión de Código",
        excerpt: "Construyendo mejor software a través de revisiones de código reflexivas y constructivas.",
        date: "Sep 2024",
        readTime: "4 min",
      },
    ],

    // Connect section
    letsConnect: "Conectemos",
    connectDescription:
      "Siempre interesado en nuevas oportunidades, colaboraciones y conversaciones sobre tecnología y diseño.",
    elsewhere: "EN OTROS LUGARES",

    // Footer
    copyright: "© 2025 Felix Macaspac. Todos los derechos reservados.",
    builtWith: "Construido con v0.dev por Felix Macaspac",

    // Navigation
    navigateTo: "Navegar a",
  },
} as const

export type Translations = typeof translations.en
