// Profile data from CV
export const profile = {
    name: 'Zahradeen Muazu',
    title: 'Backend Engineer',
    tagline: 'Building scalable, secure systems in fintech',

    bio: `Backend Engineer with 4 years of professional experience building scalable, secure systems in the fintech space. Specialises in high-performance APIs, credit scoring tools, and loan processing services using TypeScript, Java, Python, Redis, and PostgreSQL. Currently deepening expertise in Go and cloud-native architectures for finance infrastructure.`,

    shortBio: `I build high-performance APIs and secure financial systems. Currently exploring Go and cloud-native architectures.`,

    email: 'zahradeenmuazu@yahoo.com',
    whatsapp: '+2348078236426',
    github: 'https://github.com/itxDeeni',
    linkedin: 'https://linkedin.com/in/zaharadeen-muazu',
    twitter: 'https://x.com/itxdeeni',

    location: 'Lagos, Nigeria',

    stats: [
        { label: 'Years Experience', value: '4+' },
        { label: 'Projects Built', value: '20+' },
        { label: 'APIs Developed', value: '50+' },
        { label: 'Coffee Consumed', value: '∞' }
    ],

    currentFocus: [
        'Go & Cloud-native architectures',
        'API Security & OWASP',
        'Fintech infrastructure',
        'Open source tooling'
    ],

    hobbies: [
        'Lawn Tennis',
        'Music',
        'Reading',
        'Anime'
    ]
}

export const experience = [
    {
        title: 'Software Development Engineer — Backend',
        company: 'Renmoney Microfinance Bank',
        location: 'Lagos, Nigeria',
        period: 'July 2021 - Present',
        current: true,
        highlights: [
            'Built and maintained scalable backend systems using Node.js (Express.js) and Java (Spring Boot)',
            'Designed and implemented RESTful APIs for frontend-backend integration',
            'Optimised database performance achieving 80%+ reduction in query execution times',
            'Adopted Agile methodologies and high software quality standards'
        ]
    },
    {
        title: 'Software Development Intern — Backend',
        company: 'Renmoney Microfinance Bank',
        location: 'Lagos, Nigeria',
        period: 'November 2020 - July 2021',
        current: false,
        highlights: [
            'Contributed to backend services using Node.js/Express.js',
            'Assisted in designing and testing financial applications',
            'Transitioned to full-time role based on performance'
        ]
    }
]

export const professionalProjects = [
    {
        title: 'Centralised Bank Statement Processing System',
        description: 'Backend application connecting with partner APIs to fetch customer bank statements and process them into different output formats.'
    },
    {
        title: 'Customer Financial Data Extraction Service',
        description: 'Service that analyses bank statements to extract critical financial data for credit scoring and loan decisions.'
    },
    {
        title: 'Offer Predictor System',
        description: 'Predictive scoring tool that evaluates client eligibility and creates tailored loan offers using custom risk factors.'
    },
    {
        title: 'Loan Offer Letter Generation Service',
        description: 'Automated generation of customized loan offer letters with compliance and signature handling.',
        stack: 'Java, Spring Boot, Redis, Kafka, MySQL'
    }
]

export const education = {
    degree: 'B.Sc in Computer Science',
    institution: 'Ahmadu Bello University',
    location: 'Zaria, Kaduna State, Nigeria',
    year: 2018
}

export const certifications = [
    { name: 'Modern Javascript From The Beginning', provider: 'Udemy', completed: true },
    { name: 'Mastering TypeScript', provider: 'Udemy', completed: true },
    { name: 'NestJS: The Complete Developer Guide', provider: 'Udemy', completed: true },
    { name: 'NestJS Zero to Hero', provider: 'Udemy', completed: true },
    { name: 'Unit Testing and TDD in NodeJS', provider: 'Udemy', completed: true },
    { name: 'Spring Boot 3, Spring 6 and Hibernate', provider: 'Udemy', completed: false }
]
