import { motion } from 'framer-motion';
import FloatingShape from '../../components/canvas/FloatingShape';
import { BookOpen, Briefcase, Code, Coffee, Globe, Heart, Lightbulb, Target } from 'lucide-react';

const Section = ({ children, className = "" }) => (
    <section className={`min-h-screen w-full flex flex-col justify-center items-center p-6 relative ${className}`}>
        {children}
    </section>
);

const TimelineItem = ({ year, title, desc, icon: Icon, align = "left" }) => (
    <motion.div
        initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`flex w-full md:w-2/3 gap-4 mb-12 ${align === "right" ? "md:flex-row-reverse text-right" : ""}`}
    >
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-neon/20 flex items-center justify-center text-neon border border-neon/50">
            <Icon size={24} />
        </div>
        <div className="flex-1 glass-panel p-6 hover:bg-white/10 transition-colors">
            <span className="text-neon font-mono text-sm">{year}</span>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{desc}</p>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <div className="relative w-full bg-primary overflow-hidden pt-20">
            <FloatingShape position={['10%', '10%']} color="#bc13fe" />
            <FloatingShape position={['80%', '40%']} color="#00f3ff" />
            <FloatingShape position={['20%', '80%']} color="#302b63" />

            {/* Section 1: Personal Story */}
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl text-center z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neon to-neon-purple">
                        Beyond the Code
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        My name is <span className="text-white font-bold">Pruthviraj Talap</span>. I am a passionate software engineer from Kolhapur, Maharashtra.
                        My journey isn't just about writing Java code; it's about solving real-world problems with elegance and efficiency.
                        I believe in the power of technology to transform businesses and lives.
                    </p>
                </motion.div>
            </Section>

            {/* Section 2: Technical Journey (Timeline) */}
            <Section className="bg-black/20">
                <h2 className="text-4xl font-bold mb-16 text-white text-center">My Journey</h2>
                <div className="w-full max-w-5xl flex flex-col items-center relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -ml-0.5 md:ml-0" />

                    <TimelineItem
                        year="2024 - Present"
                        title="Java Web Developer"
                        desc="Unikaihatsu Software Pvt. Ltd. Building enterprise-grade RegTech solutions and productivity systems."
                        icon={Briefcase}
                        align="left"
                    />
                    <TimelineItem
                        year="2024"
                        title="B.Tech CSE"
                        desc="Graduated with 8.62 CGPA. Deep dived into Algorithms, Data Structures, and System Design."
                        icon={BookOpen}
                        align="right"
                    />
                    <TimelineItem
                        year="2023"
                        title="JLPT N4 Certification"
                        desc="Mastered Japanese language basics, enabling seamless communication in cross-cultural environments."
                        icon={Globe}
                        align="left"
                    />
                    <TimelineItem
                        year="2020"
                        title="The Beginning"
                        desc="Started my coding journey, fascinated by the logic and creativity of software development."
                        icon={Code}
                        align="right"
                    />
                </div>
            </Section>

            {/* Section 3: Japanese Culture Adaptation */}
            <Section className="bg-gradient-to-r from-primary to-secondary">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">Bridging Cultures</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Working with Japanese clients has instilled in me a deep appreciation for <span className="text-neon">Kaizen</span> (continuous improvement) and strict discipline.
                            I understand the nuances of "Hou-Ren-So" (Reporting, Communication, Consultation) and apply these principles to ensure project success.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-neon rounded-full" />
                                Punctuality & Professionalism
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-neon rounded-full" />
                                Attention to Detail
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-neon rounded-full" />
                                Respect for Process
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex-1 h-80 w-full glass-panel flex items-center justify-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-neon-purple/20 blur-3xl" />
                        <h3 className="text-6xl font-black text-white/10 z-0 absolute">JAPAN</h3>
                        <Globe size={120} className="text-white z-10" />
                    </motion.div>
                </div>
            </Section>

            {/* Section 4: Strengths & Personality */}
            <Section>
                <h2 className="text-4xl font-bold mb-12 text-white">Strengths & Personality</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full z-10">
                    {[
                        { icon: Lightbulb, title: "Problem Solver", desc: "I love dissecting complex issues and finding optimal solutions." },
                        { icon: Target, title: "Goal Oriented", desc: "Focused on delivering high-quality results within deadlines." },
                        { icon: Heart, title: "Passionate", desc: "Coding isn't just a job; it's my craft and creative outlet." },
                        { icon: Coffee, title: "Disciplined", desc: "Consistent effort and dedication are my keys to success." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 text-center hover:bg-white/10 transition-all"
                        >
                            <item.icon size={40} className="mx-auto mb-4 text-neon" />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Section 5: Philosophy */}
            <Section className="bg-black/40">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-4xl text-center z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-serif italic text-gray-300 mb-8">
                        "Code is poetry written for machines to perform miracles."
                    </h2>
                    <p className="text-neon text-xl font-bold">- My Philosophy</p>
                </motion.div>
            </Section>
        </div>
    );
};

export default About;
