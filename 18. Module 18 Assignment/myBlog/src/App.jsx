import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950 text-slate-100">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-indigo-600/30 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[120px]" />
      </div>

      <Header showBack={!!selected} onBack={() => setSelected(null)} onHome={() => setSelected(null)} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {loading && (
          <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
            <p className="text-slate-400">Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center backdrop-blur">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-red-500/15 text-2xl">⚠️</div>
              <h2 className="mb-2 text-xl font-bold text-red-400">Something went wrong</h2>
              <p className="mb-6 text-slate-400">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="rounded-full bg-linear-to-r from-indigo-500 to-fuchsia-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
                Try Again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && selected && (
          <article className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
              <span className="mb-4 inline-block rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">Post #{selected.id}</span>
              <h1 className="mb-6 bg-linear-to-r from-white to-slate-400 bg-clip-text text-3xl font-extrabold leading-tight text-transparent sm:text-4xl">{selected.title}</h1>
              <p className="whitespace-pre-line leading-relaxed text-slate-300">{selected.body}</p>
            </div>
          </article>
        )}

        {!loading && !error && !selected && (
          <>
            <div className="mb-10 text-center">
              <h2 className="mb-3 bg-linear-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">All Posts</h2>
              <p className="text-slate-400">Fresh stories, ideas, and updates from the team.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-indigo-500/20">
                  <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-indigo-300/80">Post #{post.id}</span>
                  <h3 className="mb-2 line-clamp-2 text-lg font-bold text-white">{post.title}</h3>
                  <p className="mb-5 line-clamp-3 flex-1 text-sm text-slate-400">{post.body}</p>
                  <button
                    onClick={() => setSelected(post)}
                    className="w-full rounded-xl bg-linear-to-r from-indigo-500 to-fuchsia-500 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
