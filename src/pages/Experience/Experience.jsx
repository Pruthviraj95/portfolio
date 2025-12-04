import { motion } from 'framer-motion';
import SystemDiagram3D from '../../components/canvas/SystemDiagram3D';
import { ArrowRight, CheckCircle, Database, Lock, Server, Shield, TrendingUp, Users } from 'lucide-react';

const Section = ({ children, className = "" }) => (
    <section className={`min-h-screen w-full flex flex-col justify-center items-center p-6 relative ${className}`}>
        {children}
    </section>
);

const ProjectCard = ({ title, role, period, children }) => (
    <div className="w-full max-w-6xl glass-panel p-8 md:p-12 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/10 pb-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
                <p className="text-neon text-xl">{role}</p>
            </div>
            <span className="text-gray-400 font-mono mt-2 md:mt-0">{period}</span>
        </div>
        {children}
    </div>
);

const BulletPoint = ({ children }) => (
    <li className="flex items-start gap-3 mb-4 text-gray-300">
        <CheckCircle size={20} className="text-neon mt-1 flex-shrink-0" />
        <span>{children}</span>
    </li>
);

const Experience = () => {
    return (
        <div className="relative w-full bg-primary overflow-hidden pt-20">

            {/* Header */}
            <Section className="min-h-[50vh]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Professional Experience</h1>
                    <p className="text-2xl text-neon">Unikaihatsu Software Pvt. Ltd.</p>
                    <p className="text-gray-400 mt-2">Java Web Developer | June 2024 – Present</p>
                </motion.div>
            </Section>

            {/* RegTech Project */}
            <Section>
                <ProjectCard title="Insider Trading Compliance RegTech" role="Core Developer" period="Mar 2025 – Present">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Shield className="text-neon" /> Key Contributions
                            </h3>
                            <ul className="list-none">
                                <BulletPoint>Developed Spring MVC modules for SEBI PIT compliance workflows.</BulletPoint>
                                <BulletPoint>Implemented automated Grey List Management for bulk employee tracking.</BulletPoint>
                                <BulletPoint>Engineered secure data access using Hibernate ORM to prevent SQL injection.</BulletPoint>
                                <BulletPoint>Built complex approval workflows for "Permission to Transact" modules.</BulletPoint>
                                <BulletPoint>Integrated dynamic Ban Period logic to control trading windows.</BulletPoint>
                                <BulletPoint>Created audit trails for all user actions to ensure regulatory compliance.</BulletPoint>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                <Server className="text-neon" /> System Architecture
                            </h3>
                            <SystemDiagram3D />
                            <p className="text-sm text-gray-400 text-center mt-2">Interactive 3D Architecture Visualization</p>
                        </div>
                    </div>
                </ProjectCard>
            </Section>

            {/* Productivity System Project */}
            <Section>
                <ProjectCard title="Productivity Management System" role="Backend Developer" period="June 2024 – Feb 2025">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="order-2 lg:order-1">
                            <div className="glass-panel p-6 h-full flex flex-col justify-center items-center text-center">
                                <TrendingUp size={64} className="text-neon mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">Performance Impact</h3>
                                <div className="grid grid-cols-2 gap-8 w-full">
                                    <div>
                                        <p className="text-4xl font-bold text-neon-purple">80%</p>
                                        <p className="text-gray-400 text-sm">Query Optimization</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-neon-purple">99%</p>
                                        <p className="text-gray-400 text-sm">Uptime</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Users className="text-neon" /> Key Contributions
                            </h3>
                            <ul className="list-none">
                                <BulletPoint>Enhanced legacy UI components for better usability and responsiveness.</BulletPoint>
                                <BulletPoint>Optimized complex SQL queries, improving database performance by 80-90%.</BulletPoint>
                                <BulletPoint>Supported modular microservices integration for future scalability.</BulletPoint>
                                <BulletPoint>Collaborated with cross-functional teams to define requirements.</BulletPoint>
                                <BulletPoint>Implemented role-based access control (RBAC) for different user levels.</BulletPoint>
                            </ul>
                        </div>
                    </div>
                </ProjectCard>
            </Section>

            {/* Achievements */}
            <Section className="bg-gradient-to-t from-black/50 to-transparent">
                <h2 className="text-4xl font-bold mb-12 text-white">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-panel p-8 text-center border-t-4 border-neon"
                    >
                        <div className="text-5xl font-bold text-white mb-2">8.52</div>
                        <p className="text-neon uppercase tracking-widest text-sm">Performance Score</p>
                        <p className="text-gray-400 mt-4 text-sm">Reflecting strong technical skills and teamwork at Unikaihatsu.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-panel p-8 text-center border-t-4 border-neon-purple"
                    >
                        <div className="text-5xl font-bold text-white mb-2">JLPT N4</div>
                        <p className="text-neon-purple uppercase tracking-widest text-sm">Japanese Certification</p>
                        <p className="text-gray-400 mt-4 text-sm">Certified proficiency in Japanese language and culture.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-panel p-8 text-center border-t-4 border-neon"
                    >
                        <div className="text-5xl font-bold text-white mb-2">8.62</div>
                        <p className="text-neon uppercase tracking-widest text-sm">CGPA</p>
                        <p className="text-gray-400 mt-4 text-sm">B.Tech in Computer Science & Engineering.</p>
                    </motion.div>
                </div>
            </Section>

        </div>
    );
};

export default Experience;
