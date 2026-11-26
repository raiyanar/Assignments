function Header({ onHome, showBack, onBack }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {showBack ? (
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white">
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back
          </button>
        ) : (
          <button onClick={onHome} className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-indigo-500 to-fuchsia-500 text-lg font-black text-white shadow-lg shadow-indigo-500/30">B</span>
            <span className="bg-linear-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">My Blog</span>
          </button>
        )}
        <nav className="hidden items-center gap-1 sm:flex">
          <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
            Home
          </a>
          <a href="#" className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
