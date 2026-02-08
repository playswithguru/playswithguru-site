import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SAFE: no headers(), no generateMetadata()
export const metadata = {
  title: "PlaysWithGuru — Decision Support for Sports & Markets",
  description:
    "PlaysWithGuru builds decision support systems for sports and markets — combining probability modeling, trend context, and clean analytics to help you think sharper and make smarter decisions.",

  // ✅ Keep ONE canonical base. Prefer the marketing domain.
  metadataBase: new URL("https://playswithguru.com"),

  alternates: {
    canonical: "https://playswithguru.com",
  },

  openGraph: {
    title: "PlaysWithGuru — Decision Support for Sports & Markets",
    description:
      "Decision support tools for sports props and earnings plays — probabilities, context, and clean analytics without hype or picks.",
    url: "https://playswithguru.com",
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
    title: "PlaysWithGuru — Decision Support for Sports & Markets",
    description:
      "Decision support for sports props and earnings plays. Clarity, probabilities, and context — not picks or predictions.",
    images: ["/brand/playswithguru-logo.png"],
  },

  icons: {
    icon: "/brand/favicon.ico",
  },
};

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
