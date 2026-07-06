import { motion } from 'framer-motion'
import { Code2, Database, Rocket, ShieldCheck } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Frontend moderno',
    description:
      'Interfaces com React, TypeScript, Tailwind CSS e foco em experiência visual limpa.',
  },
  {
    icon: Database,
    title: 'Backend estruturado',
    description:
      'APIs com Python, FastAPI, Flask, autenticação JWT e organização em camadas.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e validação',
    description:
      'Atenção a autenticação, validação de dados e boas práticas para aplicações reais.',
  },
  {
    icon: Rocket,
    title: 'Produto real',
    description:
      'Foco em transformar projetos em soluções utilizáveis, com deploy, versionamento e evolução contínua.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Sobre mim
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Desenvolvedor em evolução, construindo projetos com cara de produto.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Me chamo Lucas, sou um desenvolvedor formado em Ciência da Computação,
            com foco em criar aplicações modernas, organizadas e funcionais.
            Tenho estudado e desenvolvido projetos pessoais envolvendo backend, frontend,
            autenticação, APIs e interfaces com experiência profissional.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Meu objetivo é atuar como desenvolvedor, evoluindo como profissional
            full stack e criando soluções que demonstrem domínio técnico,
            organização de código e visão de produto.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}