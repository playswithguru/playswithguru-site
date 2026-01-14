import Image from "next/image";

const APP_LOGIN_URL = "https://app.playswithguru.com/login";

const NAV = [
  { label: "Platform", href: "#platform" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PRODUCT_CARDS = [
  {
    title: "Prop Market (PWG)",
    desc: "Sports prop analytics designed for clarity — filtering, comparisons, and decision support across multiple leagues.",
    bullets: ["Probabilities & tags", "Multi-sport coverage", "Clean decision UI"],
  },
  {
    title: "The Earnings Guru (TEG)",
    desc: "Earnings-focused market insights that organize timing, sentiment, and multi-timeframe confirmation into actionable signals.",
    bullets: ["Earnings timing buckets", "Trend + momentum context", "Strategy suggestions (non-advisory)"],
  },
  {
    title: "Pipelines & Scoring Engine",
    desc: "A scalable data pipeline + scoring layer that powers both PWG and TEG, built to expand across new sports and markets.",
    bullets: ["Scalable architecture", "Consistent scoring", "Extensible product surface"],
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--pwg-border)", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)" }}>
      <div className="pwg-container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-20 w-20 overflow-hidden rounded-xl">
            <Image
              src="/brand/playswithguru-logo.png"
              alt="PlaysWithGuru"
              width={96}
              height={96}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="font-semibold tracking-tight text-lg text-slate-900">
            PlaysWithGuru
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-slate-700 hover:opacity-80">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#products"
            className="hidden rounded-xl px-3 py-2 text-sm font-semibold md:inline-flex"
            style={{ border: "1px solid var(--pwg-border)" }}
          >
            Explore
          </a>
          <a
            href={APP_LOGIN_URL}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm"
            style={{ background: "linear-gradient(135deg, var(--pwg-navy), var(--pwg-blue))" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-8">
      <div className="pwg-pill text-slate-700">
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ background: "var(--pwg-cyan)" }}
        />
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
        {desc}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <main className="pwg-container">
        <section className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="pwg-pill text-slate-700">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--pwg-gold)" }}
              />
              Data-driven forecasting for sports & markets
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Predictive analytics,
              <br />
              built for real-world decisions.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              PlaysWithGuru builds predictive products that help users evaluate
              probability, risk, and opportunity across sports props, earnings events,
              and market plays — with a clean, user-first experience.
            </p>


            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm"
                style={{ background: "linear-gradient(135deg, var(--pwg-navy), var(--pwg-blue))" }}
              >
                Explore Products
              </a>
              <a
                href={APP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold"
                style={{ border: "1px solid var(--pwg-border)" }}
              >
                Go to App
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="pwg-pill">Probability modeling</span>
              <span className="pwg-pill">Trend & momentum context</span>
              <span className="pwg-pill">Decision UX</span>
            </div>
          </div>

          <div className="pwg-card p-6 md:p-7">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-900">What we optimize</div>
              <div className="text-xs text-slate-500">PlaysWithGuru</div>
            </div>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--pwg-cyan)" }} />
                <span>Probability modeling & decision scoring</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--pwg-cyan)" }} />
                <span>Trend & momentum context (multi-timeframe)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--pwg-cyan)" }} />
                <span>Clean UX for filtering, comparison, and action</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--pwg-cyan)" }} />
                <span>Scalable pipelines across multiple sports & markets</span>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl p-4" style={{ border: "1px solid var(--pwg-border)" }}>
              <div className="text-sm font-semibold text-slate-900">Quick links</div>
              <div className="mt-3 grid gap-2 text-sm">
                <a className="pwg-link text-slate-700" href="#platform">Platform overview</a>
                <a className="pwg-link text-slate-700" href="#products">Products</a>
                <a className="pwg-link text-slate-700" href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section id="platform" className="py-14 md:py-20">
          <SectionTitle
            eyebrow="Platform"
            title="A consistent scoring layer across verticals."
            desc="We design our products around how people actually make decisions: reduce noise, surface context, and present the next best action."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Signal clarity",
                desc: "Clean labels, comparables, and context so users can act faster with confidence.",
              },
              {
                title: "Scalable data",
                desc: "A pipeline approach that expands across leagues, markets, and new features without redesigning everything.",
              },
              {
                title: "User-first UX",
                desc: "A premium interface built for filtering, comparing, and tracking outcomes over time.",
              },
            ].map((c) => (
              <div key={c.title} className="pwg-card p-6">
                <div className="text-base font-semibold text-slate-900">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-14 md:py-20">
          <SectionTitle
            eyebrow="Products"
            title="Built for sports props and market plays."
            desc="Two product lines — one unified engine. PWG supports sports prop decisioning; TEG focuses on earnings-driven market opportunities."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {PRODUCT_CARDS.map((p) => (
              <div key={p.title} className="pwg-card p-6">
                <div className="text-base font-semibold text-slate-900">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--pwg-gold)" }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6" style={{ border: "1px solid var(--pwg-border)" }}>
            <div>
              <div className="text-base font-semibold text-slate-900">Ready to see the platform?</div>
              <div className="mt-1 text-sm text-slate-600">
                Launch the app to explore PWG / TEG modules.
              </div>
            </div>
            <a
              href={APP_LOGIN_URL}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm"
              style={{ background: "linear-gradient(135deg, var(--pwg-navy), var(--pwg-blue))" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-14 md:py-20">
          <SectionTitle
            eyebrow="About"
            title="Built by builders."
            desc="PlaysWithGuru is a data-driven analytics company focused on turning complex signals into practical decisions — without the clutter."
          />

          <div className="pwg-card p-7">
            <p className="text-base leading-relaxed text-slate-700">
              Our philosophy is simple: combine probability modeling with trend context, present it in a clean interface,
              and keep the experience focused on what matters — clarity, confidence, and repeatability.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Note: PlaysWithGuru products are for informational and educational purposes and are not financial advice.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-14 md:py-20">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect."
            desc="Partnerships, press, product questions, and early access requests."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="pwg-card p-6">
              <div className="text-base font-semibold text-slate-900">Email</div>
              <p className="mt-2 text-sm text-slate-600">
                Reach us at{" "}
                <a className="pwg-link" href="mailto:playswithguru@gmail.com">
                  playswithguru@gmail.com
                </a>
              </p>
            </div>

            <div className="pwg-card p-6">
              <div className="text-base font-semibold text-slate-900">App access</div>
              <p className="mt-2 text-sm text-slate-600">
                Use the Launch App button or go directly to{" "}
                <a className="pwg-link" href={APP_LOGIN_URL}>
                  app.playswithguru.com/login
                </a>
              </p>
            </div>
          </div>
        </section>

        <footer className="py-10 text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-6" style={{ borderColor: "var(--pwg-border)" }}>
            <div>© {new Date().getFullYear()} PlaysWithGuru. All rights reserved.</div>
            <div className="flex gap-4">
              <a className="hover:opacity-80" href="#platform">Platform</a>
              <a className="hover:opacity-80" href="#products">Products</a>
              <a className="hover:opacity-80" href="/privacy">Privacy</a>
              <a className="hover:opacity-80" href="/terms">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
