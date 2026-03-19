// Skills data organized by category
export const skills = {
    languages: {
        title: 'Languages',
        icon: '💻',
        items: [
            { name: 'TypeScript', level: 90 },
            { name: 'Java', level: 85 },
            { name: 'Python', level: 80 },
            { name: 'Go', level: 75 },
            { name: 'JavaScript', level: 90 },
            { name: 'SQL', level: 85 }
        ]
    },
    backend: {
        title: 'Backend Frameworks',
        icon: '⚙️',
        items: [
            { name: 'Node.js', level: 90 },
            { name: 'NestJS', level: 85 },
            { name: 'Express.js', level: 90 },
            { name: 'Spring Boot', level: 80 },
            { name: 'Django', level: 70 },
            { name: 'Gin', level: 70 }
        ]
    },
    frontend: {
        title: 'Frontend',
        icon: '🎨',
        items: [
            { name: 'Vue.js', level: 80 },
            { name: 'Angular', level: 60 },
            { name: 'React', level: 50 },
            { name: 'Tailwind CSS', level: 85 },
            { name: 'HTML/CSS', level: 90 }
        ]
    },
    databases: {
        title: 'Databases',
        icon: '🗄️',
        items: [
            { name: 'PostgreSQL', level: 90 },
            { name: 'MySQL', level: 85 },
            { name: 'MongoDB', level: 80 },
            { name: 'Redis', level: 85 },
            { name: 'Firebase', level: 70 }
        ]
    },
    devops: {
        title: 'DevOps & Tools',
        icon: '🚀',
        items: [
            { name: 'Docker', level: 85 },
            { name: 'Kafka', level: 75 },
            { name: 'AWS', level: 70 },
            { name: 'Linux', level: 85 },
            { name: 'Git', level: 90 },
            { name: 'Prometheus', level: 70 },
            { name: 'Grafana', level: 70 }
        ]
    },
    orms: {
        title: 'ORMs & Libraries',
        icon: '📚',
        items: [
            { name: 'Hibernate', level: 80 },
            { name: 'Sequelize', level: 85 },
            { name: 'TypeORM', level: 85 },
            { name: 'Prisma', level: 80 },
            { name: 'Mocha', level: 75 }
        ]
    },
    dataml: {
        title: 'Data & ML Tools',
        icon: '📊',
        items: [
            { name: 'NumPy', level: 70 },
            { name: 'Pandas', level: 70 },
            { name: 'Matplotlib', level: 65 },
            { name: 'Anaconda', level: 70 }
        ]
    },
    security: {
        title: 'Security',
        icon: '🔐',
        items: [
            { name: 'API Security', level: 85 },
            { name: 'OWASP', level: 80 },
            { name: 'Penetration Testing', level: 75 },
            { name: 'JWT/OAuth', level: 85 }
        ]
    }
}

export const skillsList = Object.values(skills)
