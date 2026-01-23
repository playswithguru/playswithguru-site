import Link from "next/link";

export default function ManifestoPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      {/* Minimal branding / orientation */}
      <header className="mb-12">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold tracking-wide">
            PlaysWithGuru
          </Link>

          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-800"
          >
            Back to Home
          </Link>
        </div>

        <p className="mt-3 text-sm text-neutral-500">
          Decision support for sports props and earnings plays.
        </p>

        <div className="mt-6 h-px w-full bg-neutral-200" />
      </header>

      <h1 className="text-3xl font-semibold mb-8">The PlaysWithGuru Manifesto</h1>

      <div className="space-y-6 text-lg leading-relaxed text-neutral-800">
        <p>We believe every decision carries weight.</p>

        <p>
          Not because outcomes are guaranteed, but because responsibility belongs
          to the one who chooses.
        </p>

        <p>
          In betting and in markets, noise is abundant. Certainty is advertised.
          Discipline is rare.
        </p>

        <p>PlaysWithGuru exists to restore balance.</p>

        <p>
          We do not predict the future. We do not promise outcomes. We do not
          confuse activity with insight.
        </p>

        <p>We study context. We measure signals. We respect uncertainty.</p>

        <p>
          Every play is a judgment made under conditions we do not control. Our
          role is to make those conditions visible — their strengths, their
          limits, and their risks.
        </p>

        <p>
          A sound process does not eliminate loss. It makes loss understandable.
        </p>

        <p>
          PlaysWithGuru is built for those who value clarity over confidence,
          structure over impulse, and stewardship over speculation.
        </p>

        <p className="font-medium">Decide with care.</p>
      </div>

      <footer className="mt-16 pt-8 border-t border-neutral-200 text-sm text-neutral-500">
        © {new Date().getFullYear()} PlaysWithGuru
      </footer>
    </main>
  );
}
