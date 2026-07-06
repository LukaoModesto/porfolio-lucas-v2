import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'Flask', 'JWT', 'REST APIs'],
  },
  {
    title: 'Banco de dados',
    skills: ['SQLite', 'SQLAlchemy', 'PostgreSQL', 'Modelagem básica'],
  },
  {
    title: 'Ferramentas',
    skills: ['Git', 'GitHub', 'VS Code', 'Swagger', 'Postman/Thunder Client'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.08),_transparent_35%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Tecnologias que uso para construir aplicações modernas.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Minha stack atual combina frontend moderno, backend em Python,
            bancos relacionais e ferramentas essenciais para desenvolvimento,
            versionamento e testes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}