function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-cyan-400">
            Software Developer
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Lucas Andrade
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
            Construindo aplicações modernas com foco em backend, interfaces limpas
            e experiências digitais bem estruturadas.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Ver projetos
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contato
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App