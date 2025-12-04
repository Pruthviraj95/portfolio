import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Experience", path: "/experience" },
    { title: "Projects", path: "/projects" },
    { title: "Skills", path: "/skills" },
    { title: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-primary/30 border-b border-white/10">
            <Link to="/" className="text-2xl font-bold neon-text tracking-wider">
                PT<span className="text-neon-purple">.</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.title}
                        to={link.path}
                        className={`relative text-sm uppercase tracking-widest hover:text-neon transition-colors ${location.pathname === link.path ? 'text-neon' : 'text-gray-300'
                            }`}
                    >
                        {link.title}
                        {location.pathname === link.path && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 -bottom-1 w-full h-[2px] bg-neon"
                            />
                        )}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg uppercase tracking-widest ${location.pathname === link.path ? 'text-neon' : 'text-gray-300'
                                }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
