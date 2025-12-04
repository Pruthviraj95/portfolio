import { motion } from 'framer-motion';
import { ArrowDown, Code, Database, Globe, Server, Cpu } from 'lucide-react';
import PixelGame from "../../components/game/pixelGame";

const Section = ({ children, className = "" }) => (
    <section className={`min-h-screen w-full flex flex-col justify-center items-center p-6 relative ${className}`}>
        {children}
    </section>
);

const SkillCard = ({ icon: Icon, title, desc }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="glass-panel p-6 w-full md:w-80 flex flex-col items-center text-center gap-4 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all duration-300"
    >
        <div className="p-4 rounded-full bg-white/5 text-neon">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="relative w-full bg-primary overflow-hidden">
            {/* Section 1: Hero */}
            <Section className="z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center gap-6"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        className="w-32 h-32 rounded-full border-4 border-neon shadow-[0_0_30px_#00f3ff] overflow-hidden mb-4"
                    >
                        <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Pruthviraj" alt="Avatar" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neon to-neon-purple text-center"
                    >
                        PRUTHVIRAJ
                        <br />
                        TALAP
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl md:text-2xl text-gray-300 tracking-widest uppercase text-center"
                    >
                        Java Web Developer & Creative Coder
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 animate-bounce"
                    >
                        <ArrowDown className="text-neon" size={32} />
                    </motion.div>
                </motion.div>
            </Section>

            {/* Section 2: Intro Narration */}
            <Section className="bg-primary/80 backdrop-blur-sm z-10">
                <div className="max-w-4xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8 neon-purple-text"
                    >
                        Architecting Digital Universes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 leading-relaxed"
                    >
                        I am a software engineer bridging the gap between robust backend logic and immersive frontend experiences.
                        With expertise in <span className="text-neon">Java, Spring Boot, and Modern Web Tech</span>, I build scalable systems that feel alive.
                        My journey involves mastering complex algorithms while embracing the discipline of Japanese work culture.
                    </motion.p>
                </div>
            </Section>

            {/* Section 3: Skills Reveal */}
            <Section className="bg-gradient-to-b from-primary/80 to-secondary/80 backdrop-blur-sm z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-4xl font-bold mb-12 text-white"
                >
                    Core Capabilities
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCard icon={Server} title="Backend Architecture" desc="Spring Boot, Hibernate, REST APIs" />
                    <SkillCard icon={Code} title="Frontend Magic" desc="React, Three.js, Tailwind, JSP" />
                    <SkillCard icon={Database} title="Data Mastery" desc="MySQL, SQL Optimization, ORM" />
                    <SkillCard icon={Cpu} title="System Design" desc="Microservices, Scalability, Security" />
                    <SkillCard icon={Globe} title="Global Mindset" desc="Japanese (JLPT N4), Cross-cultural Communication" />
                </div>
            </Section>

            {/* Section 4: Infinite Slider (Marquee) */}
            <div className="w-full py-20 bg-primary z-10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary z-20 pointer-events-none" />
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-12 whitespace-nowrap"
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-12 text-6xl md:text-8xl font-black text-white/5 uppercase">
                            <span>Java</span>
                            <span>Spring</span>
                            <span>React</span>
                            <span>MySQL</span>
                            <span>Hibernate</span>
                            <span>Innovation</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Section 5: CTA */}
            {/* <Section className="bg-black/50 backdrop-blur-md z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-bold mb-8 text-white">Ready to Explore?</h2>
                    <button className="px-12 py-4 bg-neon text-primary font-bold text-xl rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_#00f3ff]">
                        Enter Portfolio
                    </button>
                </motion.div>
            </Section> */}
            {/* Section 6: Mini Game Section */}
            <Section className="bg-black/50 backdrop-blur-md z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-8 text-white text-center"
                >
                    Play My Mini Game 🎮
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-2xl mx-auto"
                >
                    <PixelGame />
                </motion.div>
            </Section>

        </div>
    );
};

export default Home;
