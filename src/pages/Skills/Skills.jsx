import { motion } from 'framer-motion';
import TechOrbit from '../../components/canvas/TechOrbit';
import { Code, Database, Server, Settings, Users } from 'lucide-react';

const Section = ({ children, className = "" }) => (
    <section className={`min-h-screen w-full flex flex-col justify-center items-center p-6 relative ${className}`}>
        {children}
    </section>
);

const SkillBar = ({ skill, level }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
            <span className="text-white font-bold">{skill}</span>
            <span className="text-neon">{level}%</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-neon to-neon-purple"
            />
        </div>
    </div>
);

const SkillCategory = ({ title, icon: Icon, skills }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 w-full max-w-xl"
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-full bg-neon/20 text-neon">
                <Icon size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        {skills.map((s) => (
            <SkillBar key={s.name} skill={s.name} level={s.level} />
        ))}
    </motion.div>
);

const Skills = () => {
    return (
        <div className="relative w-full bg-primary overflow-hidden pt-20">

            <Section>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Technical Arsenal</h1>
                    <p className="text-xl text-gray-400">My weapons of choice for building digital empires.</p>
                </motion.div>
                <TechOrbit />
                <p className="text-sm text-gray-500 mt-4">Interactive 3D Cloud - Drag to Rotate</p>
            </Section>

            <Section className="bg-black/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full">
                    <SkillCategory
                        title="Backend Development"
                        icon={Server}
                        skills={[
                            { name: "Java", level: 95 },
                            { name: "Spring Boot", level: 90 },
                            { name: "Hibernate / JPA", level: 85 },
                            { name: "RESTful APIs", level: 90 },
                            { name: "Microservices", level: 80 }
                        ]}
                    />
                    <SkillCategory
                        title="Frontend Development"
                        icon={Code}
                        skills={[
                            { name: "HTML5 / CSS3", level: 90 },
                            { name: "JavaScript (ES6+)", level: 85 },
                            { name: "React / Vite", level: 80 },
                            { name: "Tailwind CSS", level: 90 },
                            { name: "Three.js / R3F", level: 70 }
                        ]}
                    />
                    <SkillCategory
                        title="Database & Tools"
                        icon={Database}
                        skills={[
                            { name: "MySQL", level: 85 },
                            { name: "Git / GitHub", level: 90 },
                            { name: "Maven / Gradle", level: 85 },
                            { name: "Docker", level: 75 },
                            { name: "Postman", level: 90 }
                        ]}
                    />
                    <SkillCategory
                        title="Soft Skills & Languages"
                        icon={Users}
                        skills={[
                            { name: "Problem Solving", level: 95 },
                            { name: "Japanese (JLPT N4)", level: 60 },
                            { name: "Cross-cultural Communication", level: 90 },
                            { name: "Team Leadership", level: 85 },
                            { name: "Agile Methodology", level: 90 }
                        ]}
                    />
                </div>
            </Section>

        </div>
    );
};

export default Skills;
