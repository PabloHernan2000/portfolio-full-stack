import {
  MetricItem,
  CaseStudy,
  ExperienceItem,
  TechStackCategory,
  ArchitecturePrinciple,
  ChartDataPoint,
} from '../types/portfolio';

export const personalInfo = {
  name: 'Pablo Hernán Muñoz García',
  role: {
    es: 'Full-Stack Software Engineer & Especialista en Ciberseguridad',
    en: 'Full-Stack Software Engineer & Cybersecurity Specialist',
  },
  shortRole: 'Full-Stack Software Engineer',
  location: {
    es: 'Pachuca de Soto, Hidalgo, México (Disponible Remoto / Híbrido)',
    en: 'Pachuca de Soto, Hidalgo, Mexico (Available Remote / Hybrid)',
  },
  statusBadge: {
    es: 'Disponible para roles Full-Stack / Backend & Cloud',
    en: 'Available for Full-Stack / Backend & Cloud Roles',
  },
  email: 'phernanmg@gmail.com',
  github: 'https://github.com/PabloHernan2000',
  linkedin: 'https://www.linkedin.com/in/pablo-hernan-munoz-garcia',
  summary: {
    es: 'Ingeniero de Software Full-Stack con más de 3 años de experiencia diseñando, desarrollando y operando aplicaciones web, móviles y APIs de alto tráfico en producción con React, React Native, TypeScript, Node.js, Express y PostgreSQL. Especializado en arquitectura modular, alta concurrencia, resiliencia en Linux (Nginx + PM2) y ciberseguridad defensiva.',
    en: 'Full-Stack Software Engineer with 3+ years of experience designing, architecting, and operating high-traffic web, mobile, and API systems in production using React, React Native, TypeScript, Node.js, Express, and PostgreSQL. Specialized in modular design, concurrency tuning, Linux operational resilience (Nginx + PM2), and defensive cybersecurity.',
  },
  heroSubheadline: {
    es: 'Construyo sistemas distribuidos, APIs resilientes y aplicaciones de alto rendimiento donde la estabilidad, la latencia mínima y la seguridad estricta son imperativos de producción.',
    en: 'Architecting resilient distributed systems, low-latency APIs, and mission-critical applications where rock-solid stability and zero-trust security are production requisites.',
  },
};

export const metricsData: MetricItem[] = [
  {
    id: 'users',
    value: '~70,000',
    label: {
      es: 'Usuarios Activos',
      en: 'Active Users',
    },
    sublabel: {
      es: 'Plataforma estatal de movilidad y transporte público',
      en: 'Statewide mobility & public transit platform',
    },
    highlight: true,
  },
  {
    id: 'experience',
    value: '+3 Años',
    label: {
      es: 'Experiencia en Producción',
      en: 'Production Experience',
    },
    sublabel: {
      es: 'Construyendo y manteniendo software de misión crítica',
      en: 'Shipping and operating mission-critical enterprise systems',
    },
  },
  {
    id: 'uptime',
    value: '99.9%',
    label: {
      es: 'Continuidad Operativa',
      en: 'Operational Uptime',
    },
    sublabel: {
      es: 'Servidores Linux con Nginx Reverse Proxy y PM2 cluster',
      en: 'Linux production stacks running Nginx & PM2 clustering',
    },
    highlight: true,
  },
  {
    id: 'degree',
    value: 'M.Sc.',
    label: {
      es: 'Maestría en Ciberseguridad',
      en: 'M.Sc. in Cybersecurity',
    },
    sublabel: {
      es: 'UNIR México — Arquitectura defensiva y hardening de APIs',
      en: 'UNIR Mexico — Defensive systems architecture & API hardening',
    },
  },
];

export const globalPerformanceBenchmark: ChartDataPoint[] = [
  { concurrency: '100 req/s', withoutCache: 110, withCache: 11, dbQueriesWithout: 100, dbQueriesWith: 4 },
  { concurrency: '500 req/s', withoutCache: 145, withCache: 12, dbQueriesWithout: 500, dbQueriesWith: 12 },
  { concurrency: '1,000 req/s', withoutCache: 185, withCache: 13, dbQueriesWithout: 1000, dbQueriesWith: 25 },
  { concurrency: '2,500 req/s', withoutCache: 280, withCache: 15, dbQueriesWithout: 2500, dbQueriesWith: 48 },
  { concurrency: '5,000 req/s', withoutCache: 490, withCache: 18, dbQueriesWithout: 5000, dbQueriesWith: 95 },
];

export const featuredProjects: CaseStudy[] = [
  {
    slug: 'modular-transit-api',
    title: {
      es: 'Plataforma Estatal de Movilidad y API de Alto Tráfico',
      en: 'Statewide Transit Platform & High-Throughput API',
    },
    subtitle: {
      es: 'Infraestructura modular en Node.js, Express, Redis y React Native sirviendo a ~70,000 ciudadanos',
      en: 'Modular infrastructure with Node.js, Express, Redis, and React Native serving ~70,000 citizens',
    },
    badge: {
      es: 'Producción Gubernamental',
      en: 'Government Production',
    },
    period: '2024 – Actualidad',
    category: {
      es: 'Sistemas Distribuidos & Movilidad',
      en: 'Distributed Systems & Mobility',
    },
    role: {
      es: 'Full-Stack Software Engineer & Arquitecto Técnico',
      en: 'Full-Stack Software Engineer & Technical Architect',
    },
    impactMetrics: [
      { label: { es: 'Usuarios activos', en: 'Active users' }, value: '~70k' },
      { label: { es: 'Reducción de latencia', en: 'Latency reduction' }, value: '-92%' },
      { label: { es: 'Cache hit ratio', en: 'Cache hit ratio' }, value: '96.4%' },
      { label: { es: 'Disponibilidad', en: 'Availability' }, value: '99.95%' },
    ],
    overview: {
      es: 'Diseño e implementación de la arquitectura completa del backend y la integración móvil para el sistema de transporte público del Estado de Hidalgo. La plataforma centraliza rutas georreferenciadas, telemetría de unidades, cálculo de rutas óptimas y notificaciones en tiempo real para decenas de miles de usuarios diarios.',
      en: 'Architected and built the full backend and mobile integration for the Hidalgo State public transit system. The platform aggregates georeferenced route mapping, vehicle telemetry, optimal route calculation, and real-time push alerts for tens of thousands of daily riders.',
    },
    businessProblem: {
      es: 'El sistema anterior sufría de cuellos de botella severos en horas pico de transporte (07:00 - 09:00 y 18:00 - 20:00), provocando tiempos de respuesta superiores a 2.5 segundos, caídas de base de datos relacional y usuarios desinformados sobre retrasos o cambios de paradas.',
      en: 'The previous architecture faced critical bottlenecks during peak commute hours (07:00-09:00 & 18:00-20:00), with response times degrading past 2.5 seconds, relational database thread saturation, and commuters left without live service visibility.',
    },
    technicalChallenges: [
      {
        es: 'Eliminar el acoplamiento directo entre rutas y controladores para permitir cambios sin riesgo de regresiones.',
        en: 'Decouple domain logic from HTTP routing through dependency injection to isolate business services.',
      },
      {
        es: 'Mitigar la carga destructiva de consultas espaciales complejas a PostgreSQL en cada petición de consulta de rutas.',
        en: 'Mitigate heavy geospatial queries hammering PostgreSQL by introducing intelligent cache invalidation.',
      },
      {
        es: 'Coordinar notificaciones masivas push y cálculo de distancias con la API de Google Maps manteniendo control de costos y cuotas.',
        en: 'Orchestrate push notifications and Google Maps API route lookups while enforcing quota safety and deduplication.',
      },
    ],
    architecturalSolution: {
      summary: {
        es: 'Se diseñó un monolito modular desacoplado en capas (Controllers, Services, Repositories) con Inyección de Dependencias manual y tipada en TypeScript, complementado con un esquema Cache-Aside con Redis y reverse proxy balanceado en Nginx.',
        en: 'Engineered a clean modular tiered monolith (Controllers, Services, Repositories) with typed Dependency Injection in TypeScript, combined with a Redis Cache-Aside pattern and Nginx reverse proxy buffering.',
      },
      highlights: [
        {
          es: 'Estrategia Cache-Aside en Redis con TTL adaptativo: las rutas de mayor frecuencia responden en memoria con latencias < 12ms.',
          en: 'Redis Cache-Aside pattern with dynamic TTL: high-frequency transit lines resolve from memory in < 12ms.',
        },
        {
          es: 'Capa de abstracción para servicios de geolocalización (Google Maps) con buffers de proximidad y throttling controlado.',
          en: 'Clean abstraction layer for Google Maps API integration with distance caching and request throttling.',
        },
        {
          es: 'Cliente móvil React Native con sincronización offline-first y manejo de caché local para zonas de baja conectividad celular.',
          en: 'React Native mobile client with offline-first state resilience and local payload caching for low-signal zones.',
        },
      ],
    },
    flowSteps: [
      {
        step: '01',
        title: { es: 'Petición Cliente / Móvil', en: 'Client / Mobile Request' },
        description: {
          es: 'React Native / Web client envía solicitud de rutas con token JWT y coordenadas geográficas.',
          en: 'Client submits route query with verified JWT token and geographic coordinates.',
        },
      },
      {
        step: '02',
        title: { es: 'Nginx Reverse Proxy', en: 'Nginx Reverse Proxy' },
        description: {
          es: 'Terminación SSL/TLS, compresión gzip/brotli, rate-limiting por IP y balanceo de carga interno hacia PM2.',
          en: 'SSL termination, compression, IP-based rate limiting, and internal reverse proxying to PM2 cluster.',
        },
      },
      {
        step: '03',
        title: { es: 'Capa de Caché Redis', en: 'Redis Cache-Aside Layer' },
        description: {
          es: 'Verificación de llave hash geoespacial. Cache Hit retorna datos en ~12ms sin tocar base de datos.',
          en: 'Hash key lookup. Cache Hit immediately returns sanitized payload in ~12ms without touching SQL.',
        },
      },
      {
        step: '04',
        title: { es: 'PostgreSQL & Repositorio', en: 'PostgreSQL & Repositories' },
        description: {
          es: 'En caso de Cache Miss, el servicio ejecuta consulta optimizada con índices B-Tree/GIS y repuebla Redis con TTL adaptativo.',
          en: 'On Cache Miss, query executes against optimized indexed tables and populates Redis with dynamic TTL.',
        },
      },
    ],
    performanceData: [
      { concurrency: '100 req/s', withoutCache: 95, withCache: 11, dbQueriesWithout: 100, dbQueriesWith: 5 },
      { concurrency: '500 req/s', withoutCache: 140, withCache: 12, dbQueriesWithout: 500, dbQueriesWith: 18 },
      { concurrency: '1k req/s', withoutCache: 190, withCache: 13, dbQueriesWithout: 1000, dbQueriesWith: 32 },
      { concurrency: '2.5k req/s', withoutCache: 310, withCache: 14, dbQueriesWithout: 2500, dbQueriesWith: 65 },
      { concurrency: '5k req/s', withoutCache: 520, withCache: 16, dbQueriesWithout: 5000, dbQueriesWith: 110 },
    ],
    stack: ['Node.js', 'Express.js', 'TypeScript', 'Redis', 'PostgreSQL', 'React Native', 'Nginx', 'PM2', 'Linux'],
    results: [
      {
        es: 'Soporte ininterrumpido durante eventos masivos estatales sin saturación de memoria ni caídas de servicio.',
        en: 'Zero downtime achieved during peak state commute surges and public regional events.',
      },
      {
        es: 'Reducción de consumo de CPU de la base de datos de 85% a menos del 18% bajo tráfico concurrente sostenido.',
        en: 'Database CPU utilization dropped from 85% to under 18% under sustained peak concurrency.',
      },
      {
        es: 'Aprobación y adopción por más de 70,000 ciudadanos activos en el estado de Hidalgo.',
        en: 'Validated and adopted by more than 70,000 citizens across the regional transport network.',
      },
    ],
    demoGithubUrl: 'https://github.com/PabloHernan2000',
  },
  {
    slug: 'risk-reporting-suite',
    title: {
      es: 'Suite Administrativa de Control Interno y Gestión de Riesgos',
      en: 'Enterprise Internal Control & Risk Governance Suite',
    },
    subtitle: {
      es: 'Plataforma integral en React + TypeScript + Express + PostgreSQL con matrices dinámicas y generación documental',
      en: 'Comprehensive React + TypeScript + Express + PostgreSQL platform with dynamic matrices and automated reporting',
    },
    badge: {
      es: 'Gobierno & Cumplimiento',
      en: 'Governance & Compliance',
    },
    period: '2024',
    category: {
      es: 'Arquitectura Empresarial & Analítica',
      en: 'Enterprise Architecture & Analytics',
    },
    role: {
      es: 'Lead Full-Stack Developer',
      en: 'Lead Full-Stack Developer',
    },
    impactMetrics: [
      { label: { es: 'Tiempo de auditoría', en: 'Audit cycle time' }, value: '-70%' },
      { label: { es: 'Reportes generados', en: 'Generated reports' }, value: '+5,000' },
      { label: { es: 'Integridad documental', en: 'Document integrity' }, value: '100%' },
      { label: { es: 'Módulos integrados', en: 'Integrated modules' }, value: '6 Módulos' },
    ],
    overview: {
      es: 'Desarrollo de una suite integral de gobernanza administrativa para dependencias públicas. Incluye matrices multidimensionales de evaluación de riesgos institucionales, sistema de reservación y asignación de salas con control de concurrencia, y un pipeline de renderizado y exportación automatizada de reportes normativos en PDF y Excel.',
      en: 'Engineered an end-to-end administrative governance suite for institutional oversight. Features dynamic multi-variable risk matrices, room reservation with concurrency locking, and an automated background generation pipeline for high-fidelity compliance PDF and Excel reports.',
    },
    businessProblem: {
      es: 'Los procesos de auditoría y control de riesgos se gestionaban en hojas de cálculo desarticuladas, generando inconsistencias de datos, colisiones en la reserva de recursos y semanas de trabajo manual para compilar dictámenes oficiales.',
      en: 'Risk evaluation and compliance auditing relied on unversioned spreadsheets, resulting in data desynchronization, scheduling collisions, and weeks of manual labor to generate mandatory statutory filings.',
    },
    technicalChallenges: [
      {
        es: 'Garantizar que no existieran reservas simultáneas en el módulo de espacios físicos bajo peticiones concurrentes.',
        en: 'Prevent double-booking race conditions during simultaneous room reservation attempts.',
      },
      {
        es: 'Generar archivos PDF estructurados con tablas complejas, sellos y gráficos sin bloquear el Event Loop de Node.js.',
        en: 'Render heavy PDF documents containing complex multi-page tables and charts without starving the Node.js event loop.',
      },
      {
        es: 'Diseñar un esquema relacional normalizado en PostgreSQL con auditoría histórica de cada cambio en la matriz de riesgos.',
        en: 'Model a strictly normalized PostgreSQL schema with immutable audit logging tracking every risk matrix alteration.',
      },
    ],
    architecturalSolution: {
      summary: {
        es: 'Se implementó una SPA reactiva con React 18, Vite y Tailwind conectada a una API REST con Express y transacciones ACID en PostgreSQL con bloqueos de fila (`SELECT ... FOR UPDATE`), junto con workers dedicados para generación documental asíncrona.',
        en: 'Built a reactive SPA with React 18, Vite, and Tailwind wired to an Express REST API employing strict ACID row-level locking (`SELECT ... FOR UPDATE`) in PostgreSQL and dedicated worker threads for asynchronous document synthesis.',
      },
      highlights: [
        {
          es: 'Transacciones con aislamiento en PostgreSQL para erradicar condiciones de carrera en reservaciones.',
          en: 'PostgreSQL isolated transactions with row-level locks eliminating double-reservation anomalies.',
        },
        {
          es: 'Pipeline de generación de reportes vectoriales en PDF y libros de cálculo Excel formateados automáticamente con validación de tipos.',
          en: 'Typed report compilation pipeline streaming formatted PDF and Excel binaries directly to authenticated users.',
        },
        {
          es: 'Componentes de interfaz tipo Linear con feedback optimista, validaciones Zod y matrices de calor de riesgo interactivas.',
          en: 'Linear-inspired UI components with optimistic updates, Zod schema validation, and interactive risk heatmaps.',
        },
      ],
    },
    flowSteps: [
      {
        step: '01',
        title: { es: 'Captura & Validación de Matriz', en: 'Input & Schema Validation' },
        description: {
          es: 'Frontend valida esquemas tipados con feedback instantáneo y envía cálculo ponderado al backend.',
          en: 'Frontend validates form state using strict schemas with immediate feedback and dispatches payload.',
        },
      },
      {
        step: '02',
        title: { es: 'Transacción ACID Segura', en: 'ACID Transaction Processing' },
        description: {
          es: 'PostgreSQL ejecuta inserción con bloqueo transaccional e historial inmutable de auditoría.',
          en: 'PostgreSQL commits data within an isolated transaction with automated audit trail logging.',
        },
      },
      {
        step: '03',
        title: { es: 'Pipeline de Exportación', en: 'Document Generation Pipeline' },
        description: {
          es: 'Worker procesa la plantilla vectorial en memoria, genera el PDF/Excel y firma los metadatos normativos.',
          en: 'Worker builds vector template in memory, generates signed PDF/Excel, and returns stream.',
        },
      },
    ],
    performanceData: [
      { concurrency: '50 req/s', withoutCache: 85, withCache: 14, dbQueriesWithout: 50, dbQueriesWith: 3 },
      { concurrency: '200 req/s', withoutCache: 130, withCache: 15, dbQueriesWithout: 200, dbQueriesWith: 10 },
      { concurrency: '500 req/s', withoutCache: 210, withCache: 18, dbQueriesWithout: 500, dbQueriesWith: 22 },
      { concurrency: '1k req/s', withoutCache: 380, withCache: 22, dbQueriesWithout: 1000, dbQueriesWith: 45 },
    ],
    stack: ['React', 'Vite', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'PDFKit / ExcelJS'],
    results: [
      {
        es: 'Reducción del ciclo de entrega de dictámenes de auditoría institucional de 15 días a menos de 4 horas.',
        en: 'Reduced the institutional audit delivery cycle from 15 business days to under 4 hours.',
      },
      {
        es: 'Cero incidencias de sobreasignación o colisiones en la reserva de recursos institucionales.',
        en: 'Zero scheduling overlap incidents or resource reservation conflicts across the entire organization.',
      },
      {
        es: 'Cumplimiento normativo del 100% verificado por órganos de fiscalización interna.',
        en: '100% regulatory compliance validation confirmed by internal institutional oversight boards.',
      },
    ],
    demoGithubUrl: 'https://github.com/PabloHernan2000',
  },
  {
    slug: 'legacy-systems-modernization',
    title: {
      es: 'Modernización de Sistemas Legacy e Ingeniería Inversa',
      en: 'Legacy Systems Modernization & Reverse Engineering',
    },
    subtitle: {
      es: 'Migración crítica de PHP 3 a PHP 8 y reconstrucción de plataforma .NET de avalúos sin código fuente',
      en: 'Critical migration from PHP 3 to PHP 8 and black-box reverse engineering of a .NET appraisal platform',
    },
    badge: {
      es: 'Ingeniería Inversa & Resiliencia',
      en: 'Reverse Engineering & Modernization',
    },
    period: '2023 – 2024',
    category: {
      es: 'Refactorización Crítica & Ciberseguridad',
      en: 'Critical Refactoring & Cybersecurity',
    },
    role: {
      es: 'Web Developer & Systems Engineer',
      en: 'Web Developer & Systems Engineer',
    },
    impactMetrics: [
      { label: { es: 'Versión modernizada', en: 'Language jump' }, value: 'PHP 3 → 8' },
      { label: { es: 'Vulnerabilidades mitigadas', en: 'Mitigated vulnerabilities' }, value: '35+ CVEs' },
      { label: { es: 'Disponibilidad restaurada', en: 'Restored availability' }, value: '99.9%' },
      { label: { es: 'Compatibilidad de datos', en: 'Data integrity' }, value: '100%' },
    ],
    overview: {
      es: 'Recuperación y modernización profunda de dos infraestructuras críticas del sector público municipal: un sistema de recaudación y multas desarrollado en PHP 3 con brechas de seguridad severas actualizado a PHP 8 con sentencias preparadas, y la reconstrucción completa mediante ingeniería de caja negra de un sistema de avalúos catastrales en .NET sin código fuente original hacia un stack web moderno conectado a SQL Server.',
      en: 'Deep modernization and recovery of two critical municipal infrastructures: a legacy infraction and fee collection system written in PHP 3 upgraded to modern secure PHP 8 with prepared statements, and the ground-up reverse engineering of an undocumented .NET real estate appraisal system migrated to modern web technologies atop SQL Server.',
    },
    businessProblem: {
      es: 'El sistema de multas corría en versiones de PHP sin soporte desde hacía dos décadas, con riesgo crítico de inyecciones SQL masivas. Paralelamente, el sistema de avalúos solo funcionaba en máquinas físicas obsoletas con Windows Server 2003 y no se contaba con el código fuente del proveedor original, imposibilitando el mantenimiento.',
      en: 'The infraction platform ran on unsupported PHP runtimes with severe SQL injection risks. Concurrently, the municipal appraisal platform was locked to decaying legacy servers running Windows Server 2003 with zero source code available from original contractors.',
    },
    technicalChallenges: [
      {
        es: 'Analizar el tráfico de red y los esquemas de bases de datos de SQL Server para deducir la lógica de cálculo catastral sin documentación.',
        en: 'Inspect packet traffic and reverse-engineer SQL Server schemas to extract complex assessment formulas without documentation.',
      },
      {
        es: 'Reescribir consultas dinámicas concatenadas vulnerables a inyección SQL en sentencias preparadas con PDO sin alterar fórmulas históricas.',
        en: 'Refactor hundreds of vulnerable string-concatenated SQL queries into secure PDO prepared statements preserving historical calculations.',
      },
      {
        es: 'Migrar la infraestructura a servidores Linux protegidos con Nginx y aislamiento de permisos.',
        en: 'Migrate runtime infrastructure to hardened Linux servers secured behind Nginx with least-privilege policies.',
      },
    ],
    architecturalSolution: {
      summary: {
        es: 'Se ejecutó un análisis forense de la base de datos SQL Server mediante scripts de trazabilidad y descompilación controlada para extraer las reglas de negocio. Posteriormente se desarrolló una arquitectura web desacoplada con validaciones exhaustivas de entrada, sanitización de datos y autenticación robusta.',
        en: 'Executed forensic schema tracing and network inspection to systematically extract all business calculation models, followed by architecting a modern decoupled web solution with strict input validation, data sanitization, and role-based access control.',
      },
      highlights: [
        {
          es: 'Reemplazo total de sintaxis obsoleta por PHP 8.2 tipado estricto con PDO y transacciones seguras.',
          en: 'Total refactoring to strict-typed PHP 8.2 using PDO parameterized queries and secure transactions.',
        },
        {
          es: 'Reconstrucción de la interfaz de avalúos con tecnologías web modernas accesibles desde cualquier navegador sin plugins legacy.',
          en: 'Rebuilt appraisal UI into responsive modern web views accessible from any standard browser without legacy plugins.',
        },
        {
          es: 'Implementación de hashing seguro para credenciales y eliminación de contraseñas almacenadas en texto plano.',
          en: 'Implemented modern Argon2id/bcrypt credential hashing, purging plaintext credential storage forever.',
        },
      ],
    },
    flowSteps: [
      {
        step: '01',
        title: { es: 'Ingeniería Inversa & Trazado', en: 'Reverse Engineering & Tracing' },
        description: {
          es: 'Análisis de transacciones en SQL Server Profiler para mapear el 100% de los procedimientos almacenados y fórmulas.',
          en: 'Profiler trace execution on SQL Server to reconstruct 100% of hidden stored procedures and formulas.',
        },
      },
      {
        step: '02',
        title: { es: 'Hardening & Refactorización', en: 'Hardening & Refactoring' },
        description: {
          es: 'Eliminación de código deprecado, parametrización de consultas y sanitización contra inyecciones SQL y XSS.',
          en: 'Elimination of legacy syntax, query parameterization, and comprehensive XSS/SQLi sanitization.',
        },
      },
      {
        step: '03',
        title: { es: 'Despliegue en Linux Seguro', en: 'Hardened Linux Deployment' },
        description: {
          es: 'Migración a servidor Linux con Nginx, cabeceras de seguridad estrictas (CSP, HSTS) y respaldos automatizados.',
          en: 'Deployment onto modern Linux VM behind Nginx with strict security headers (CSP, HSTS) and automated backups.',
        },
      },
    ],
    performanceData: [
      { concurrency: '50 req/s', withoutCache: 240, withCache: 18, dbQueriesWithout: 50, dbQueriesWith: 5 },
      { concurrency: '150 req/s', withoutCache: 480, withCache: 22, dbQueriesWithout: 150, dbQueriesWith: 12 },
      { concurrency: '300 req/s', withoutCache: 890, withCache: 26, dbQueriesWithout: 300, dbQueriesWith: 20 },
      { concurrency: '500 req/s', withoutCache: 1450, withCache: 32, dbQueriesWithout: 500, dbQueriesWith: 35 },
    ],
    stack: ['PHP 8', 'SQL Server', 'JavaScript', 'CSS3', 'Nginx', 'Linux', 'Security Hardening'],
    results: [
      {
        es: 'Mitigación de más de 35 vulnerabilidades críticas y eliminación del vector de inyección SQL en recaudación.',
        en: 'Remediated 35+ critical CVE-class security exposures and permanently closed SQLi attack surfaces.',
      },
      {
        es: 'Extensión de la vida útil operativa de sistemas esenciales sin costo de licencias privativas adicionales.',
        en: 'Extended operational lifespan of essential municipal systems with zero additional proprietary license costs.',
      },
      {
        es: 'Tiempo de respuesta del cálculo de avalúos reducido de 4.2 segundos a menos de 180 milisegundos.',
        en: 'Appraisal assessment generation speed slashed from 4.2 seconds down to sub-180 milliseconds.',
      },
    ],
    demoGithubUrl: 'https://github.com/PabloHernan2000',
  },
];

export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    title: {
      es: 'Linux & Reverse Proxy Buffering',
      en: 'Linux & Reverse Proxy Buffering',
    },
    description: {
      es: 'Operación en distribuciones empresariales (Rocky Linux / Debian). Nginx configurado para terminación TLS de baja latencia, compresión gzip/brotli, HTTP/2 y absorción de picos de tráfico para proteger la capa de aplicación.',
      en: 'Operated across enterprise Linux distros (Rocky Linux / Debian). Nginx tuned for low-latency TLS termination, gzip/brotli compression, HTTP/2, and traffic surge buffering to safeguard application runtimes.',
    },
    badge: 'Infraestructura',
    bullets: [
      {
        es: 'Clusterización de Node.js mediante PM2 para aprovechar todos los núcleos de CPU del servidor.',
        en: 'Node.js clustering via PM2 process manager utilizing all server CPU cores with auto-restart.',
      },
      {
        es: 'Aislamiento de procesos y contención de recursos mediante Docker y usuarios Linux no privilegiados.',
        en: 'Process isolation and resource containment via Docker and unprivileged service accounts.',
      },
      {
        es: 'Políticas estrictas de cortafuegos (UFW / Firewalld) exponiendo únicamente puertos 80/443 y SSH vía llaves criptográficas.',
        en: 'Strict firewall rules (UFW/Firewalld) exposing only 80/443 and SSH via cryptographic key pairs.',
      },
    ],
  },
  {
    title: {
      es: 'Ciberseguridad Defensiva & Hardening',
      en: 'Defensive Cybersecurity & Hardening',
    },
    description: {
      es: 'Conocimientos avanzados derivados de la Maestría en Ciberseguridad (UNIR México) aplicados directamente a la arquitectura de software. Enfoque "Secure by Default" en cada endpoint y capa de transporte.',
      en: 'Advanced specialization from M.Sc. in Cybersecurity (UNIR Mexico) baked into daily engineering practices. "Secure by Default" posture across every endpoint and transport channel.',
    },
    badge: 'Ciberseguridad M.Sc.',
    bullets: [
      {
        es: 'Validación estricta de esquemas de entrada (Zod / Joi) y sanitización contra inyecciones SQL, NoSQL y XSS.',
        en: 'Rigorous input schema validation and sanitization preventing SQL, NoSQL, and XSS injection vectors.',
      },
      {
        es: 'Rate-limiting multinivel con Redis (Token Bucket / Sliding Window) para mitigar ataques de fuerza bruta y DoS.',
        en: 'Multi-tier rate limiting with Redis (Token Bucket / Sliding Window) mitigating brute force and DoS spikes.',
      },
      {
        es: 'Cabeceras HTTP de seguridad (Content-Security-Policy, HSTS, X-Frame-Options) y manejo seguro de tokens JWT en cookies HttpOnly.',
        en: 'Hardened HTTP headers (CSP, HSTS, X-Frame-Options) and secure JWT storage in HttpOnly SameSite cookies.',
      },
    ],
  },
  {
    title: {
      es: 'Patrón Cache-Aside & Resiliencia en BD',
      en: 'Cache-Aside Pattern & DB Resilience',
    },
    description: {
      es: 'Desacoplamiento entre la base de datos relacional y las lecturas de alta frecuencia. Redis actúa como primera línea de respuesta manteniendo a PostgreSQL protegido y ágil.',
      en: 'Decoupling heavy read paths from relational engines. Redis serves as first-line response cache, keeping PostgreSQL agile and protected from thread exhaustion.',
    },
    badge: 'Rendimiento',
    bullets: [
      {
        es: 'Invalidación atómica de llaves de caché al detectar mutaciones en entidades mediante eventos o triggers controlados.',
        en: 'Atomic cache invalidation on entity mutations through event listeners and coordinated updates.',
      },
      {
        es: 'Pools de conexiones ajustados a la capacidad de hardware (`pg-pool`) con timeouts estrictos para prevenir bloqueos de hilo.',
        en: 'Database connection pooling tuned to hardware limits with aggressive timeout guards.',
      },
      {
        es: 'Indexación estratégica (B-Tree, GiST para coordenadas geográficas) y análisis recurrente con `EXPLAIN ANALYZE`.',
        en: 'Strategic indexing (B-Tree, GiST for coordinates) validated continuously with `EXPLAIN ANALYZE`.',
      },
    ],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: 'exp-hidalgo',
    role: {
      es: 'Desarrollador Full-Stack',
      en: 'Full-Stack Software Engineer',
    },
    company: 'Gobierno del Estado de Hidalgo',
    period: {
      es: 'Mar. 2024 – Actualidad',
      en: 'Mar. 2024 – Present',
    },
    location: {
      es: 'Pachuca de Soto, Hidalgo',
      en: 'Pachuca de Soto, Hidalgo',
    },
    description: {
      es: 'Liderazgo en diseño y desarrollo de arquitecturas de software para plataformas ciudadanas de alta demanda y sistemas internos gubernamentales.',
      en: 'Engineering backend and frontend systems for high-demand citizen-facing digital services and internal governmental platforms.',
    },
    achievements: [
      {
        es: 'Diseñó y desplegó la API modular y aplicación móvil para la plataforma estatal de transporte (~70,000 usuarios activos).',
        en: 'Architected and deployed the modular API and mobile solution powering the state public transport service (~70k active users).',
      },
      {
        es: 'Implementó arquitectura de caché con Redis reduciendo el tiempo de respuesta de endpoints críticos de 180ms a 12ms.',
        en: 'Implemented Redis caching architecture slashing critical endpoint response times from 180ms to 12ms.',
      },
      {
        es: 'Desarrolló la suite de control interno y riesgos con generación automatizada de reportes normativos en PDF y Excel.',
        en: 'Developed the internal control and risk governance suite with automated compliance PDF/Excel reporting.',
      },
      {
        es: 'Configuración y mantenimiento de infraestructura de servidores Linux con Nginx, PM2 y directrices de ciberseguridad defensiva.',
        en: 'Operated Linux server infrastructure utilizing Nginx, PM2, and defensive cybersecurity practices.',
      },
    ],
    technologies: ['Node.js', 'Express', 'TypeScript', 'React', 'React Native', 'PostgreSQL', 'Redis', 'Nginx', 'Linux'],
    type: 'work',
  },
  {
    id: 'exp-pachuca',
    role: {
      es: 'Desarrollador Web y Soporte de Sistemas',
      en: 'Web Developer & Systems Support Engineer',
    },
    company: 'Presidencia Municipal de Pachuca de Soto',
    period: {
      es: 'May. 2023 – Mar. 2024',
      en: 'May 2023 – Mar. 2024',
    },
    location: {
      es: 'Pachuca de Soto, Hidalgo',
      en: 'Pachuca de Soto, Hidalgo',
    },
    description: {
      es: 'Mantenimiento, migración y desarrollo de aplicaciones web institucionales para la administración municipal.',
      en: 'Maintained, refactored, and engineered municipal enterprise applications and digital public services.',
    },
    achievements: [
      {
        es: 'Modernizó el sistema municipal de multas migrándolo de PHP 3 a PHP 8, eliminando vulnerabilidades críticas de inyección SQL.',
        en: 'Modernized municipal infraction collection platform from PHP 3 to PHP 8, eradicating critical SQL injection risks.',
      },
      {
        es: 'Reconstruyó mediante ingeniería inversa un sistema de avalúos catastrales en .NET sin código fuente hacia tecnologías web modernas.',
        en: 'Reverse-engineered an undocumented legacy .NET appraisal application to modern web interfaces on SQL Server.',
      },
      {
        es: 'Administración de bases de datos relacionales SQL Server y MySQL asegurando la integridad de registros ciudadanos.',
        en: 'Managed enterprise relational databases (SQL Server, MySQL) ensuring full citizen transaction data integrity.',
      },
    ],
    technologies: ['PHP 8', 'SQL Server', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Linux', 'Apache/Nginx'],
    type: 'work',
  },
  {
    id: 'exp-uaeh',
    role: {
      es: 'Desarrollador Full-Stack',
      en: 'Full-Stack Developer',
    },
    company: 'UAEH - Centro de Cómputo Académico',
    period: {
      es: 'Jul. 2022 – Dic. 2022',
      en: 'Jul. 2022 – Dec. 2022',
    },
    location: {
      es: 'Pachuca de Soto, Hidalgo',
      en: 'Pachuca de Soto, Hidalgo',
    },
    description: {
      es: 'Desarrollo de módulos web para la gestión de infraestructura tecnológica universitaria y seguimiento de soporte técnico.',
      en: 'Engineered web service modules for academic computing infrastructure tracking and technical support workflows.',
    },
    achievements: [
      {
        es: 'Desarrolló interfaces administrativas y APIs REST para catalogación y asignación de recursos de cómputo.',
        en: 'Built administrative interfaces and REST endpoints for campus-wide IT resource cataloging and reservation.',
      },
      {
        es: 'Optimización de consultas SQL para reportes analíticos de uso de infraestructura por estudiantes y docentes.',
        en: 'Optimized complex relational SQL queries for campus usage analytics across faculty and student bodies.',
      },
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'CSS3', 'REST APIs', 'Git'],
    type: 'work',
  },
  {
    id: 'edu-master',
    role: {
      es: 'Maestría en Ciberseguridad',
      en: 'M.Sc. in Cybersecurity',
    },
    company: 'UNIR México (Universidad Internacional de La Rioja)',
    period: {
      es: '2026 – Actualidad',
      en: '2026 – Present',
    },
    location: {
      es: 'En línea / Posgrado Profesional',
      en: 'Online / Professional Postgraduate',
    },
    description: {
      es: 'Especialización de posgrado orientada a la seguridad en el ciclo de vida del software, análisis forense, criptografía aplicada y auditoría de sistemas.',
      en: 'Advanced specialization in secure software development lifecycle (SSDLC), threat modeling, applied cryptography, and defensive infrastructure auditing.',
    },
    achievements: [
      {
        es: 'Enfoque en arquitectura Zero-Trust, hardening de servidores Linux, seguridad en APIs REST y prevención de OWASP Top 10.',
        en: 'Focus on Zero-Trust systems architecture, Linux host hardening, REST API security, and OWASP Top 10 remediation.',
      },
      {
        es: 'Aplicación inmediata de estándares de cifrado y mitigación de vectores de ataque en proyectos de producción gubernamentales.',
        en: 'Direct operational translation of cryptographic best practices and vulnerability mitigation into production deployments.',
      },
    ],
    technologies: ['Ciberseguridad Defensiva', 'Hardening Linux', 'SSDLC', 'OWASP', 'Criptografía', 'Auditoría Forense'],
    type: 'education',
  },
  {
    id: 'edu-bachelor',
    role: {
      es: 'Licenciatura en Ciencias Computacionales',
      en: 'B.Sc. in Computer Science',
    },
    company: 'Universidad Autónoma del Estado de Hidalgo (UAEH)',
    period: {
      es: '2018 – 2022',
      en: '2018 – 2022',
    },
    location: {
      es: 'Pachuca de Soto, Hidalgo',
      en: 'Pachuca de Soto, Hidalgo',
    },
    description: {
      es: 'Fundamentos sólidos en estructuras de datos, algoritmos, complejidad computacional, diseño de compiladores y redes de computadoras.',
      en: 'Rigorous foundation in data structures, algorithms, computational complexity, database theory, and operating systems.',
    },
    achievements: [
      {
        es: 'Titulado con formación integral en desarrollo de software, análisis de sistemas y bases de datos relacionales.',
        en: 'Graduated with high competence across software engineering, systems design, and database administration.',
      },
    ],
    technologies: ['Estructuras de Datos', 'Algoritmos', 'Sistemas Operativos', 'Bases de Datos', 'Redes'],
    type: 'education',
  },
];

export const techStackCategories: TechStackCategory[] = [
  {
    id: 'frontend-mobile',
    title: {
      es: 'Frontend & Mobile',
      en: 'Frontend & Mobile',
    },
    description: {
      es: 'Interfaces web y aplicaciones móviles de alto rendimiento con renderizado optimizado, tipado estricto y diseño accesible.',
      en: 'High-performance web interfaces and mobile applications featuring optimized rendering, strict typing, and accessible design.',
    },
    iconName: 'Layout',
    skills: [
      { name: 'React 18+', level: 'Producción', tag: 'Web Core' },
      { name: 'React Native', level: 'Producción', tag: 'Cross-Platform' },
      { name: 'TypeScript', level: 'Avanzado', tag: 'Strict Mode' },
      { name: 'Vite', level: 'Producción', tag: 'Tooling' },
      { name: 'Tailwind CSS', level: 'Producción', tag: 'Design Systems' },
      { name: 'Material UI', level: 'Producción', tag: 'Enterprise UI' },
      { name: 'Zustand / Redux', level: 'Intermedio', tag: 'State Management' },
    ],
  },
  {
    id: 'backend-apis',
    title: {
      es: 'Backend & APIs',
      en: 'Backend & APIs',
    },
    description: {
      es: 'Servicios modulares de alta concurrencia, APIs REST escalables, inyección de dependencias y comunicación en tiempo real.',
      en: 'Modular high-throughput services, scalable REST APIs, dependency injection patterns, and real-time event streaming.',
    },
    iconName: 'Server',
    skills: [
      { name: 'Node.js', level: 'Avanzado', tag: 'Runtime' },
      { name: 'Express.js', level: 'Avanzado', tag: 'REST Framework' },
      { name: 'Inyección de Dependencias', level: 'Arquitectura', tag: 'Clean Architecture' },
      { name: 'WebSockets', level: 'Producción', tag: 'Real-time' },
      { name: 'RESTful Architecture', level: 'Avanzado', tag: 'API Standards' },
      { name: 'JWT & Auth Workflows', level: 'Producción', tag: 'Security' },
      { name: 'PHP 8 (Modern)', level: 'Intermedio', tag: 'Legacy Migration' },
    ],
  },
  {
    id: 'databases-cache',
    title: {
      es: 'Bases de Datos & Caché',
      en: 'Databases & Cache',
    },
    description: {
      es: 'Diseño relacional normalizado, transacciones seguras con bloqueos de fila, caching predictivo y mitigación de cuellos de botella.',
      en: 'Strict relational modeling, isolated transactions with row locking, predictive caching, and read-path bottleneck mitigation.',
    },
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Avanzado', tag: 'ACID / Índices' },
      { name: 'Redis (Cache-Aside)', level: 'Producción', tag: 'In-Memory / Latency' },
      { name: 'SQL Server', level: 'Producción', tag: 'Enterprise Relational' },
      { name: 'MySQL', level: 'Producción', tag: 'Relational' },
      { name: 'MongoDB', level: 'Intermedio', tag: 'Document Store' },
      { name: 'Transacciones ACID', level: 'Avanzado', tag: 'Data Integrity' },
    ],
  },
  {
    id: 'infra-security',
    title: {
      es: 'Infraestructura & Ciberseguridad',
      en: 'Infrastructure & Cybersecurity',
    },
    description: {
      es: 'Despliegue operativo continuo sobre Linux, proxy inverso con Nginx, gestión de procesos con PM2 y hardening de seguridad.',
      en: 'Continuous Linux operations, resilient Nginx reverse proxy tuning, PM2 process supervision, and system hardening.',
    },
    iconName: 'ShieldCheck',
    skills: [
      { name: 'Linux (Rocky / Debian)', level: 'Avanzado', tag: 'OS Host' },
      { name: 'Nginx Reverse Proxy', level: 'Avanzado', tag: 'TLS / Compression' },
      { name: 'PM2 Cluster Mode', level: 'Producción', tag: 'Process Manager' },
      { name: 'Docker', level: 'Producción', tag: 'Containers' },
      { name: 'Git & GitHub', level: 'Avanzado', tag: 'Version Control' },
      { name: 'Ciberseguridad Defensiva', level: 'M.Sc. En Curso', tag: 'Zero Trust' },
      { name: 'Rate Limiting / Hardening', level: 'Producción', tag: 'DDoS / Protection' },
    ],
  },
];
