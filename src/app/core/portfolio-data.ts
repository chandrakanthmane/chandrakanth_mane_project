export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
}

export interface ProjectItem {
  name: string;
  subtitle?: string;
  period: string;
  tech: string[];
  points: string[];
  icon: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  detail: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const PROFILE = {
  name: 'Chandrakanth Mane',
  role: 'Full Stack Developer',
  location: 'Pune, India',
  phone: '+91-7981470160',
  email: 'chandrakanthmane84@gmail.com',
  github: 'https://github.com/chandrakanthmane',
  githubUsername: 'chandrakanthmane',
  linkedin: 'https://linkedin.com/in/chandrakanthmane',
  portfolio: 'https://chandrakanthmane.github.io',
  resumeFile: 'assets/ChandrakanthFSA.pdf',
  summary:
    'Full Stack Developer with 4+ years of experience across Angular, React, Node.js, Cordova and JavaScript. I build scalable web applications, lead cross-functional teams, and ship best practices that move real product metrics — from a 30% lift in user engagement to a 40% drop in load times. Comfortable owning a feature end to end: front-end UX, backend APIs, database design, and cloud deployment.',
  taglineWords: ['Full Stack Developer', 'Angular Specialist', 'React Developer', 'Node.js Engineer', 'UI Craftsman'],
};

export const STATS: StatItem[] = [
  { value: 4, suffix: '+', label: 'Years of Experience' },
  { value: 6, suffix: '+', label: 'Production Projects' },
  { value: 20, suffix: '', label: 'Developers Led' },
  { value: 30, suffix: '%', label: 'Avg. Engagement Lift' },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Languages',
    icon: 'fa-solid fa-code',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: 'fa-solid fa-display',
    skills: ['Angular', 'React', 'Bootstrap', 'Angular Material', 'Cordova'],
  },
  {
    category: 'Backend',
    icon: 'fa-solid fa-server',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
  },
  {
    category: 'Databases',
    icon: 'fa-solid fa-database',
    skills: ['PostgreSQL', 'MySQL', 'JSON'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'fa-solid fa-cloud',
    skills: ['AWS', 'Azure', 'CI/CD', 'Git', 'Bitbucket', 'Docker'],
  },
  {
    category: 'Tools',
    icon: 'fa-solid fa-toolbox',
    skills: ['VS Code', 'Chrome DevTools', 'GitHub', 'Figma', 'Jira', 'NPM'],
  },
  {
    category: 'Libraries & APIs',
    icon: 'fa-solid fa-cubes',
    skills: ['jQuery', 'AJAX', 'NgRx', 'Chart.js', 'D3.js', 'Highcharts', 'WebCrypto'],
  },
  {
    category: 'Practices',
    icon: 'fa-solid fa-diagram-project',
    skills: ['Agile', 'Scrum', 'OOPS', 'Data Structures', 'Code Reviews', 'Performance Tuning'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Reput.AI',
    location: 'Pune, India',
    period: 'Nov 2024 — Present',
    current: true,
    points: [
      'Developed end-to-end scalable web applications using Angular 18, Node.js and Express.js.',
      'Led a team of 20 developers, managing task delegation, code reviews and project timelines.',
      'Mentored junior developers and interns, driving a 75% improvement in skill assessments.',
      'Designed and implemented RESTful APIs, improving backend performance by 25%.',
      'Integrated lazy loading, interceptors and state management, cutting load times by 40%.',
      'Implemented CI/CD pipelines on AWS across dev, SIT and production environments.',
      'Established code review practices that reduced production bugs by 30%.',
    ],
  },
  {
    role: 'Angular Developer',
    company: 'Tata Consultancy Services',
    location: 'Hyderabad, India',
    period: 'Apr 2021 — Aug 2023',
    points: [
      'Built responsive web applications using Angular, TypeScript, HTML5, CSS3, Cordova and Bootstrap.',
      'Integrated RESTful APIs for seamless frontend/backend communication.',
      'Mentored junior developers on Angular best practices and coding standards.',
      'Optimized performance with lazy loading, reducing load times by 30%.',
      'Delivered technical support and troubleshooting with a 95% issue resolution rate.',
      'Performed code reviews that cut bugs by 20% while collaborating with UX/UI and backend teams.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    name: 'Reput-Tracing',
    subtitle: 'Supply Chain Management System',
    period: '2024 — Present',
    icon: 'fa-solid fa-diagram-project',
    tech: ['Angular 18', 'Node.js', 'Express.js', 'TypeScript', 'Bootstrap', 'SCSS', 'Highcharts', 'WebCrypto', 'JWT'],
    points: [
      'Improved system efficiency by 40% with a comprehensive supply chain platform.',
      'Built interactive world map and network visualizations with Highcharts, lifting engagement by 30%.',
      'Added organizational chart visualization of supplier relationships across tier levels.',
      'Integrated WebCrypto for API encryption/decryption, achieving 100% security compliance.',
      'Shipped JWT authentication that cut unauthorized access by 50%.',
    ],
  },
  {
    name: 'Digital Product Passport',
    subtitle: 'DPP System',
    period: '2024 — Present',
    icon: 'fa-solid fa-passport',
    tech: ['Angular 18', 'Node.js', 'TypeScript', 'Angular Material', 'SCSS'],
    points: [
      'Built a Digital Product Passport for fashion, footwear, cosmetics, food and diamond industries.',
      'Created industry-specific data entry with custom validation, improving accuracy by 35%.',
      'Implemented sustainability metrics and carbon footprint calculation modules.',
      'Added product comparison features, boosting decision-making capability by 40%.',
      'Delivered responsive UI with 95% cross-browser compatibility.',
    ],
  },
  {
    name: 'Carbon Emission Tracker',
    subtitle: 'Scope 1/2/3 Emissions Monitoring',
    period: '2024 — Present',
    icon: 'fa-solid fa-leaf',
    tech: ['Angular 18', 'Node.js', 'Chart.js', 'D3.js', 'TypeScript'],
    points: [
      'Architected an emissions tracking app covering Scope 1, 2 and 3 monitoring.',
      'Built an interactive dashboard with dynamic graphs across electricity, transport and supply chain.',
      'Reduced calculation errors by 40% using industry-standard emission factors.',
      'Added automated threshold alerts, improving response times by 30%.',
    ],
  },
  {
    name: 'Dynamic Report Generator',
    subtitle: 'Template-Driven Reporting Platform',
    period: '2024 — Present',
    icon: 'fa-solid fa-file-lines',
    tech: ['Angular 18', 'Node.js', 'Express.js', 'TypeScript', 'Third-party APIs'],
    points: [
      'Built a report generation platform with customizable templates and dynamic content.',
      'Integrated spell check, grammar validation and AI-powered rephrasing, lifting content quality by 45%.',
      'Added image compression/format conversion, cutting storage needs by 60%.',
      'Shipped Word export with 99% formatting fidelity plus role-based access with audit trails.',
    ],
  },
  {
    name: 'Banking Danamon',
    subtitle: 'Multi-Currency & Onboarding Systems',
    period: '2022 — 2023',
    icon: 'fa-solid fa-building-columns',
    tech: ['Angular 8 & 11', 'Cordova', 'TypeScript', 'Bootstrap', 'REST APIs'],
    points: [
      'Enabled online foreign transactions, growing transaction volume by 50%.',
      'Integrated ExchangeRate-API for real-time currency conversion.',
      'Built video banking, customer journey mapping and referral code features.',
      'Adopted Git/Bitbucket workflows that cut deployment issues by 40%.',
    ],
  },
  {
    name: 'StrykerCIAM',
    subtitle: 'Medical Application',
    period: '2021 — 2022',
    icon: 'fa-solid fa-briefcase-medical',
    tech: ['React', 'JavaScript', 'TypeScript', 'CSS3', 'React Router', 'Cordova'],
    points: [
      'Built registration, dashboard and multi-language support for a medical application.',
      'Created reusable React components, improving development efficiency by 25%.',
      'Implemented responsive design with Flexbox, lifting mobile engagement by 20%.',
    ],
  },
];

export const EDUCATION: EducationItem = {
  degree: 'B.Tech — Electronics and Communication Engineering',
  school: 'Bharath University',
  location: 'Chennai, India',
  period: '2016 — 2020',
  detail: 'CGPA: 8.7 / 10 (First Class)',
};

export const CERTIFICATIONS: string[] = [
  'Angular Essentials (Angular 2+ with TypeScript) — Udemy',
  'Responsive Web Design — freeCodeCamp',
];

export const ACHIEVEMENTS: string[] = [
  'Developer of the Quarter award for exceptional performance and project contributions.',
  'Led successful project deliveries resulting in a 30% improvement in user satisfaction.',
  'Mentored 15+ junior developers and interns with measurable skill improvements.',
];
