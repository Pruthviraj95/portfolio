import { motion } from 'framer-motion';

const CodeBlock = ({ code, language = "java", filename = "Snippet.java" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-white/10 font-mono text-sm my-8"
        >
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-xs">{filename}</span>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="text-gray-300">
                    <code>{code}</code>
                </pre>
            </div>
        </motion.div>
    );
};

export default CodeBlock;
