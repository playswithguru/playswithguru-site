const appUrl = "https://app.playswithguru.com";
const termsUrl = `${appUrl}/terms-of-service`;
const privacyUrl = `${appUrl}/privacy-policy`;
const contactUrl = `${appUrl}/contact`;

const productCards = [
  {
    eyebrow: "SPORTS INTELLIGENCE",
    title: "PWG Sports",
    description:
      "A subscription digital sports-intelligence platform. Explore the broader prop board, compare context, filter opportunities, and use structured analytics to support your own decisions.",
    points: ["Full prop-board intelligence", "Matchup, trend & pricing context", "Guru Overs & Guru Unders curated from the broader board"],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PWG Sports",
  applicationCategory: "SportsApplication",
  operatingSystem: "Web",
  description: "A subscription digital sports-intelligence platform from PlaysWithGuru by PLYWG LLC.",
  brand: { "@type": "Brand", name: "PlaysWithGuru by PLYWG LLC" },
  offers: [
    { "@type": "Offer", price: "69.99", priceCurrency: "USD", name: "PWG Sports Monthly" },
    { "@type": "Offer", price: "149.99", priceCurrency: "USD", name: "PWG Sports Three-Month" },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="PlaysWithGuru home">
            <img src="/brand/playswithguru-logo.png" alt="PlaysWithGuru" className="h-16 w-16 object-contain" />
            <span className="text-xl font-extrabold tracking-tight">PlaysWithGuru</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#platform" className="hover:text-slate-950">Platform</a>
            <a href="#products" className="hover:text-slate-950">Products</a>
            <a href="#pricing" className="hover:text-slate-950">Pricing</a>
            <a href="#guru-plays" className="hover:text-slate-950">Guru Plays</a>
            <a href="#community" className="hover:text-slate-950">Community</a>
            <a href="#about" className="hover:text-slate-950">About</a>
          </nav>
          <a href={appUrl} className="rounded-xl bg-[#073b63] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#052f50]">Launch App</a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
              Subscription sports intelligence
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.045em] text-slate-950 md:text-7xl">
              Decision support,<br />built for uncertainty.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              PWG Sports turns complex sports data into structured intelligence you can actually use — giving you the broader analytical landscape while elevating selected opportunities through Guru Plays.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#products" className="rounded-xl bg-[#073b63] px-6 py-3 font-bold text-white hover:bg-[#052f50]">Explore Products</a>
              <a href={appUrl} className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-900 hover:bg-slate-50">Open Dashboard</a>
            </div>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">Manifesto</div>
              <p className="mt-1 text-sm text-slate-600">
                We don&apos;t sell certainty. We build decision systems. <a href="/manifesto" className="font-semibold text-[#073b63] underline underline-offset-4 hover:text-[#052f50]">Read the Manifesto.</a>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm md:p-9">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#0aa9df]">The PWG approach</div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight">See more. Filter better. Decide with context.</h2>
            <div className="mt-7 space-y-5">
              {[
                ["01", "Broad intelligence", "Access the wider sports board, structures, matchups, trends and supporting data."],
                ["02", "Structured evaluation", "Use consistent scoring, filtering and context to reduce noise and compare opportunities."],
                ["03", "Curated Guru Plays", "See the opportunities elevated from that broader universe when the conditions we evaluate show meaningful alignment."],
              ].map(([n, title, text]) => (
                <div key={n} className="grid grid-cols-[44px_1fr] gap-4 border-t border-slate-200 pt-5 first:border-0 first:pt-0">
                  <div className="font-black text-slate-300">{n}</div>
                  <div><div className="font-bold">{title}</div><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="max-w-3xl">
            <div className="section-kicker">Platform</div>
            <h2 className="section-title">The intelligence is yours. The selection is ours.</h2>
            <p className="section-copy">PWG is not simply a picks service. Explore the underlying intelligence, evaluate the full landscape and develop your own plays. Guru Plays are the curated layer on top.</p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {[
              ["Signal clarity", "Clean labels, comparables and context designed to make large amounts of information easier to evaluate."],
              ["Depth on demand", "Start with the board. Filter, compare and drill into the supporting intelligence when you need more context."],
              ["Built to expand", "A common intelligence architecture supporting multiple sports and new analytical capabilities over time."],
            ].map(([title, desc]) => <div key={title} className="card"><h3>{title}</h3><p>{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 py-20">
        <div className="section-kicker">Products</div>
        <h2 className="section-title">One focused sports-intelligence platform.</h2>
        <p className="section-copy">PWG Sports is the only public PlaysWithGuru subscription product.</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-1">
          {productCards.map((p) => (
            <article key={p.title} className="product-card">
              <div className="text-xs font-extrabold tracking-[0.16em] text-slate-400">{p.eyebrow}</div>
              <h3 className="mt-3 text-3xl font-black tracking-tight">{p.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{p.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {p.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d2a62b]" />{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="guru-plays" className="bg-[#07182a] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-sky-400">Guru Plays</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Curated from the intelligence. Not a substitute for it.</h2>
          </div>
          <div className="space-y-5 text-slate-300">
            <p>Our systems may analyze and surface many opportunities. Guru Plays are opportunities from that broader universe where the conditions we evaluate show meaningful alignment and where Guru sees opportunity.</p>
            <p>For PWG Sports, that includes <strong className="text-white">Guru Overs</strong> and <strong className="text-white">Guru Unders</strong>.</p>
            <p className="text-sm text-slate-400">Published Guru Plays can be tracked with wins and losses. No play is guaranteed.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-20">
        <div className="section-kicker">Pricing</div>
        <h2 className="section-title">Straightforward PWG Sports access.</h2>
        <p className="section-copy">Choose monthly or three-month access to the complete subscription digital sports-intelligence platform.</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-1">
          <div className="pricing-card featured">
            <div className="pricing-label">PWG SPORTS</div><h3>PWG Sports</h3><p className="pricing-desc">Sports prop intelligence across the broader board, with Guru Overs & Guru Unders.</p>
            <div className="mt-7"><span className="price">$69.99</span><span className="term"> / month</span></div>
            <div className="mt-2 text-sm font-semibold text-slate-600">$149.99 / 3 months</div>
            <div className="mt-2 text-sm font-bold text-[#073b63]">Save $59.98</div>
            <div className="mt-2 text-sm text-slate-500">No free trial.</div>
            <a href={appUrl} className="price-button">Launch App</a>
          </div>
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-500">Subscriptions provide access to digital analytical content and platform features. Purchases are non-refundable. No subscription or play guarantees an outcome.</p>
      </section>

      <section id="community" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div><div className="section-kicker">Community</div><h2 className="section-title">The platform does the analysis. The community gives it a home.</h2><p className="section-copy">Discord is the member community and curated-play delivery layer — with dedicated channels for Guru Overs, Guru Unders, results and member discussion.</p></div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7"><div className="font-extrabold">Built for focused discussion</div><p className="mt-3 text-sm leading-6 text-slate-600">Guru Play channels stay focused on published plays. Broader sports, setup and results discussion belongs in the Guru Lounge.</p></div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20">
        <div className="section-kicker">About</div>
        <h2 className="section-title">Measure signals. Respect uncertainty. Let the work speak.</h2>
        <p className="section-copy">PlaysWithGuru builds decision-support systems for people who value context, structure and risk clarity over promises. The goal is not to manufacture certainty. It is to make complex information more usable.</p>
        <div className="mt-10 rounded-3xl border border-slate-200 p-7 text-sm leading-6 text-slate-600">
          PlaysWithGuru by PLYWG LLC provides research, analytics and informational content. Nothing presented on the platform should be considered individualized betting advice. Sports involve risk, and no outcome is guaranteed.
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} PlaysWithGuru by PLYWG LLC. All rights reserved.</div>
          <div className="flex flex-wrap gap-5"><a href="#platform">Platform</a><a href="#products">Products</a><a href="#pricing">Pricing</a><a href="/manifesto">Manifesto</a><a href={termsUrl}>Terms of Service</a><a href={privacyUrl}>Privacy Policy</a><a href={termsUrl}>Refund and Cancellation Policy</a><a href={contactUrl}>Contact/Support</a></div>
        </div>
      </footer>
    </main>
  );
}
