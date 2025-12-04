import { motion } from 'framer-motion';
import ContactGlobe from '../../components/canvas/ContactGlobe';
import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';

const Section = ({ children, className = "" }) => (
    <section className={`min-h-screen w-full flex flex-col justify-center items-center p-6 relative ${className}`}>
        {children}
    </section>
);

const ContactCard = ({ icon: Icon, title, value, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -5 }}
        className="glass-panel p-8 flex flex-col items-center gap-4 hover:bg-white/10 transition-all cursor-pointer w-full"
    >
        <div className="p-4 rounded-full bg-neon/20 text-neon">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-center">{value}</p>
    </motion.a>
);

const Contact = () => {
    return (
        <div className="relative w-full bg-primary overflow-hidden pt-20">
            <ContactGlobe />

            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Let's Connect</h1>
                    <p className="text-xl text-gray-400">Ready to start your next project with me?</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10 mb-20">
                    <ContactCard
                        icon={Mail}
                        title="Email"
                        value="pruthvirajtalap2001@gmail.com"
                        href="mailto:pruthvirajtalap2001@gmail.com"
                    />
                    <ContactCard
                        icon={Phone}
                        title="Phone"
                        value="+91 9359272172"
                        href="tel:+919359272172"
                    />
                    <ContactCard
                        icon={MapPin}
                        title="Location"
                        value="Kolhapur, Maharashtra, India"
                        href="https://maps.google.com"
                    />
                </div>

                <div className="w-full max-w-2xl glass-panel p-8 z-10">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Send a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Name</label>
                                <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-neon focus:outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm">Email</label>
                                <input type="email" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-neon focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-400 text-sm">Message</label>
                            <textarea rows={5} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-neon focus:outline-none transition-colors" placeholder="Tell me about your project..." />
                        </div>
                        <button className="w-full py-4 bg-neon text-primary font-bold text-lg rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                            <Send size={20} />
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="flex gap-8 mt-20 z-10">
                    <motion.a
                        whileHover={{ scale: 1.2, color: '#00f3ff' }}
                        href="https://www.linkedin.com/in/pruthvirajtalap-6a044a216"
                        target="_blank"
                        className="text-gray-400 transition-colors"
                    >
                        <Linkedin size={32} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: '#00f3ff' }}
                        href="#"
                        target="_blank"
                        className="text-gray-400 transition-colors"
                    >
                        <Github size={32} />
                    </motion.a>
                </div>
            </Section>

        </div>
    );
};

export default Contact;
