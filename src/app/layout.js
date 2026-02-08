import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Dynamic metadata so playswithguru.com and app.playswithguru.com both get correct metadataBase/canonical/OG url
export async function generateMetadata() {
  const h = headers();

  // Host will be like: "playswithguru.com" or "app.playswithguru.com"
  const host = h.get("x-forwarded-host") || h.get("host") || "playswithguru.com";
  const proto = h.get("x-forwarded-proto") || "https";

  const baseUrl = `${proto}://${host}`;
  const base = new URL(baseUrl);

  const title = "PlaysWithGuru — Decision Support for Sports & Markets";
  const description =
    "PlaysWithGuru builds decision support systems for sports and markets — combining probability modeling, trend context, and clean analytics to help you think sharper and make smarter decisions.";

  return {
    title,
    description,

    // ✅ now correct for whichever domain you deployed to
    metadataBase: base,

    // ✅ canonical points to the current host
    alternates: {
      canonical: baseUrl,
    },

    openGraph: {
      title,
      description:
        "Decision support tools for sports props and earnings plays — probabilities, context, and clean analytics without hype or picks.",
      url: baseUrl,
      siteName: "PlaysWithGuru",
      images: [
        {
          url: "/brand/playswithguru-logo.png",
          width: 512,
          height: 512,
          alt: "PlaysWithGuru logo",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description:
        "Decision support for sports props and earnings plays. Clarity, probabilities, and context — not picks or predictions.",
      images: ["/brand/playswithguru-logo.png"],
    },

    icons: {
      icon: "/brand/favicon.ico",
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2A4A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "min-h-screen bg-white text-slate-900",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
