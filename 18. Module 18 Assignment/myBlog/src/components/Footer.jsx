function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-900/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="transition hover:text-white">Privacy</a>
          <a href="#" className="transition hover:text-white">Terms</a>
          <a href="#" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer