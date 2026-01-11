import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-lg">
            PlaysWithGuru
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#platform" className="hover:text-slate-900">Platform</a>
            <a href="#products" className="hover:text-slate-900">Products</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a
            href="https://app.playswithguru.com"
            className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800"
          >
            Launch App
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-slate-500 mb-3">
              Data-driven forecasting for sports & markets
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Predictive analytics, built for real-world decisions.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              PlaysWithGuru is a predictive analytics company building tools that help users
              evaluate probability, risk, and opportunity across sports props and market plays —
              with a clean, user-first experience.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#products"
                className="rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 text-center"
              >
                Explore Products
              </a>
              <a
                href="https://app.playswithguru.com"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50 text-center"
              >
                Go to App
              </a>
            </div>

            <div className="mt-8 text-sm text-slate-500">
              Corporate site: <span className="font-semibold">playswithguru.com</span> • App:{" "}
              <span className="font-semibold">app.playswithguru.com</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-700">What we optimize</div>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Probability modeling & decision scoring</li>
              <li>• Trend & momentum context (multi-timeframe)</li>
              <li>• Clean UX for filtering, comparison, and action</li>
              <li>• Scalable pipelines across multiple sports & markets</li>
            </ul>

            <div className="mt-8 rounded-xl bg-white border border-slate-200 p-5">
              <div className="text-sm font-semibold">Quick links</div>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a className="text-slate-700 hover:underline" href="#platform">Platform overview</a>
                <a className="text-slate-700 hover:underline" href="#products">Products</a>
                <a className="text-slate-700 hover:underline" href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="bg-slate-50 border-t border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight">Platform</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            A unified experience that makes complex analysis usable — filtering, ranking,
            and drill-down insights without clutter.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { title: "Signal Clarity", desc: "Consistent labels and intuitive confidence cues." },
              { title: "Depth on Demand", desc: "Details when you need them, simplicity when you don’t." },
              { title: "Built to Scale", desc: "Multi-sport and multi-market architecture from day one." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-white border border-slate-200 p-6">
                <div className="font-bold">{c.title}</div>
                <div className="mt-2 text-slate-600 text-sm leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold tracking-tight">Products</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Two focus areas under the PlaysWithGuru umbrella.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-200 p-7">
            <div className="text-sm font-semibold text-slate-500">Prop Market</div>
            <div className="mt-2 text-xl font-extrabold">Sports prediction dashboard</div>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Multi-sport insights, filtering, comparisons, and daily decision support for prop evaluation.
            </p>
            <a
              href="https://app.playswithguru.com"
              className="mt-5 inline-block rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800"
            >
              Open App
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 p-7">
            <div className="text-sm font-semibold text-slate-500">Stock Market</div>
            <div className="mt-2 text-xl font-extrabold">TEG — The Earnings Guru</div>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Post-earnings reaction forecasting with structured scoring and strategy context.
            </p>
            <span className="mt-5 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
              Coming soon
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight">About</h2>
          <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed">
            PlaysWithGuru builds predictive analytics that respect the user: clean interfaces,
            disciplined methodology, and scalable systems designed for long-term reliability.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold tracking-tight">Contact</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Want to partner, invest, or request a demo?
          </p>
          <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-6">
            <div className="text-sm text-slate-600">
              Email: <span className="font-semibold">playswithguru@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500">
          © {new Date().getFullYear()} PlaysWithGuru. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

