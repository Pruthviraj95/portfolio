import { motion } from 'framer-motion';
import CodeBlock from '../../components/ui/CodeBlock';
import { ArrowRight, Database, Layout, Lock, Server } from 'lucide-react';

const Section = ({ children, className = "" }) => (
    <section className={`min-h-screen w-full flex flex-col justify-center items-center p-6 relative ${className}`}>
        {children}
    </section>
);

const CaseStudy = ({ title, subtitle, problem, solution, result, techStack, codeSnippet }) => (
    <div className="w-full max-w-7xl mb-32">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h2>
            <p className="text-neon text-xl">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
                <div className="glass-panel p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                    <p className="text-gray-300">{problem}</p>
                </div>
                <div className="glass-panel p-8 border border-neon/30">
                    <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                    <p className="text-gray-300">{solution}</p>
                </div>
                <div className="glass-panel p-8 bg-neon/10">
                    <h3 className="text-2xl font-bold text-white mb-4">The Impact</h3>
                    <p className="text-gray-300">{result}</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-gray-400 mb-4">Core Logic Implementation</h3>
                <CodeBlock code={codeSnippet} filename="Service.java" />

                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                    {techStack.map((tech) => (
                        <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neon">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const insiderTradingCode = `
@Transactional
public void processTradeRequest(TradeRequest request) {
    // Check if user is in Grey List
    if (greyListRepository.existsByEmployeeId(request.getEmployeeId())) {
        throw new RestrictedTradingException("Employee is on Grey List");
    }

    // Check Trading Window
    if (!tradingWindowService.isWindowOpen()) {
        throw new WindowClosedException("Trading window is currently closed");
    }

    // Process Approval Workflow
    approvalService.initiateWorkflow(request);
    auditLogger.log(Action.TRADE_REQUEST, request);
}`;

    const productivityCode = `
public List<TaskMetrics> getTeamProductivity(Long teamId) {
    // Optimized SQL for performance
    String sql = "SELECT t.user_id, COUNT(t.id) as completed_tasks, " +
                 "AVG(t.completion_time) as avg_time " +
                 "FROM tasks t WHERE t.team_id = :teamId " +
                 "AND t.status = 'COMPLETED' " +
                 "GROUP BY t.user_id";
                 
    return jdbcTemplate.query(sql, 
        new MapSqlParameterSource("teamId", teamId), 
        new TaskMetricsMapper());
}`;

    return (
        <div className="relative w-full bg-primary overflow-hidden pt-20">

            <Section>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        Case Studies
                    </h1>
                    <p className="text-xl text-gray-400">
                        Deep dives into complex systems I've architected and optimized.
                    </p>
                </motion.div>
            </Section>

            <Section>
                <CaseStudy
                    title="Insider Trading Compliance"
                    subtitle="RegTech Solution for SEBI Regulations"
                    problem="Financial institutions need to strictly monitor employee trading to prevent insider trading. Manual tracking was error-prone, slow, and lacked a verifiable audit trail, posing significant regulatory risks."
                    solution="I architected a comprehensive Spring Boot application that automates the entire compliance workflow. Features include automated Grey List checks, dynamic trading window management based on corporate events, and a multi-level approval system."
                    result="Reduced compliance processing time by 60%. Ensured 100% adherence to SEBI PIT regulations with zero manual errors. The system now handles thousands of employee requests seamlessly."
                    techStack={["Java", "Spring Boot", "Hibernate", "MySQL", "JSP"]}
                    codeSnippet={insiderTradingCode}
                />

                <CaseStudy
                    title="Productivity Management"
                    subtitle="Enterprise Resource Optimization"
                    problem="The legacy system suffered from slow query performance (taking 10+ seconds for reports) and a clunky UI, leading to poor user adoption and inaccurate productivity tracking."
                    solution="I refactored the backend to use optimized SQL queries and introduced a microservices-ready architecture. On the frontend, I modernized the UI components for a smoother experience."
                    result="Achieved 80-90% improvement in query performance (reports now load in <1s). User engagement increased significantly due to the responsive UI."
                    techStack={["Spring MVC", "SQL Optimization", "Microservices", "Bootstrap"]}
                    codeSnippet={productivityCode}
                />
            </Section>

        </div>
    );
};

export default Projects;
