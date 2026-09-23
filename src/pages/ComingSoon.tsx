export default function ComingSoon() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          La Catrina
        </span>

        <h1 className="mt-5 text-5xl font-black leading-tight text-brand md:text-6xl">
          Próximamente.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-brand-dark/70">
          Estamos preparando algo especial.
          <br />
          El sabor de México está por llegar.
        </p>
      </div>
    </main>
  );
}