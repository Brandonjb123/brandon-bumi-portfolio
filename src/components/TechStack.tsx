import { motion } from 'framer-motion'

const aiSkills = [
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
  { name: 'LangChain', icon: null },
  { name: 'LLM APIs', icon: null },
  { name: 'RAG', icon: null },
  { name: 'Prompt Engineering', icon: null },
  { name: 'Agentic AI', icon: null },
  { name: 'n8n', icon: null },
  { name: 'Vector Database', icon: null },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
]

const fullstackSkills = [
  { name: 'React.js', icon: 'devicon-react-original colored' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express.js', icon: 'devicon-express-original colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Zustand', icon: null },
]

const skillCategories = [
  {
    title: 'AI Engineering',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:border-neon-cyan/60',
    skills: aiSkills,
  },
  {
    title: 'Fullstack Foundation',
    hoverGlow: 'hover:shadow-[0_0_20px_rgba(180,0,255,0.3)] hover:border-neon-purple/60',
    skills: fullstackSkills,
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-mono text-neon-cyan mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
          <span className="block w-16 h-0.5 bg-neon-cyan/40 mt-3" />
        </motion.h2>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: catIndex * 0.2 },
                },
              }}
            >
              <h3 className="text-lg font-semibold font-mono text-white/60 mb-6 uppercase tracking-wide">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={`flex flex-col items-center gap-2 p-3 border border-white/10 rounded-xl bg-white/[0.02] min-w-[90px]
                               transition-all duration-300 cursor-default
                               ${category.hoverGlow} hover:scale-110 hover:bg-white/[0.04]`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill.icon ? (
                      <i className={`${skill.icon} text-2xl`} />
                    ) : (
                      <span className="text-xs font-mono text-neon-cyan/80 text-center leading-tight">
                        {skill.name}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-white/50 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}