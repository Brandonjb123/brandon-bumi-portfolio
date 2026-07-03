import { motion } from 'framer-motion'

// ----- DATA SKILL AI ENGINEERING -----
const aiSkills = [
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'LangChain', initial: { text: 'LC', color: '#00d977' } },
  { name: 'LangGraph', initial: { text: 'LG', color: '#00f0ff' } },
  { name: 'LLM APIs', initial: { text: 'LLM', color: '#ffd700' } },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
  { name: 'RAG', initial: { text: 'RAG', color: '#ff6b35' } },
  { name: 'Prompt Engineering', initial: { text: 'PE', color: '#b400ff' } },
  { name: 'ChromaDB', initial: { text: 'CD', color: '#ff0080' } },
  { name: 'Pinecone', initial: { text: 'PC', color: '#6c63ff' } },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'AI Agents', initial: { text: 'AA', color: '#00ff88' } },
  { name: 'Redis', icon: 'devicon-redis-plain colored' },
  // ----- TIGA BARU -----
  { name: 'REST APIs', initial: { text: 'API', color: '#00ff88' } },
  { name: 'n8n', initial: { text: 'N8N', color: '#ff6b35' } },
  { name: 'Workflow Automation', initial: { text: 'WF', color: '#a855f7' } },
]

// ----- DATA SKILL FULLSTACK FOUNDATION -----
const fullstackSkills = [
  { name: 'React.js', icon: 'devicon-react-original colored' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Zustand', initial: { text: 'ZS', color: '#00b4d8' } },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'CI/CD', initial: { text: '⚙️', color: '#ffffff' } },
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

// ----- KOMPONEN CARD SKILL -----
function SkillCard({
  name,
  icon,
  initial,
  hoverGlow,
}: {
  name: string
  icon?: string | null
  initial?: { text: string; color: string }
  hoverGlow: string
}) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-2 p-3 border border-white/10 rounded-xl bg-white/[0.02] min-w-[90px]
                 transition-all duration-300 cursor-default
                 ${hoverGlow} hover:scale-110 hover:bg-white/[0.04]`}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {initial ? (
        <div
          className="w-10 h-10 rounded-xl border-[1.5px] flex items-center justify-center font-mono font-bold text-sm"
          style={{
            borderColor: initial.color,
            color: initial.color,
            backgroundColor: 'rgba(10,10,10,0.8)',
          }}
        >
          {initial.text}
        </div>
      ) : icon ? (
        <i className={`${icon} text-2xl`} />
      ) : null}
      <span className="text-[10px] font-mono text-white/50 text-center">{name}</span>
    </motion.div>
  )
}

// ----- KOMPONEN UTAMA TECH STACK -----
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
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={'icon' in skill ? skill.icon : undefined}
                    initial={'initial' in skill ? skill.initial : undefined}
                    hoverGlow={category.hoverGlow}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}