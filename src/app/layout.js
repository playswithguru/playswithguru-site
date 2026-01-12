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

export const metadata = {
  title: "PlaysWithGuru — Predictive analytics for sports & markets",
  description:
    "PlaysWithGuru builds predictive analytics products for sports props (PWG) and earnings plays (TEG) — combining probability modeling, trend context, and clean decision UX.",
  metadataBase: new URL("https://playswithguru.com"),

  openGraph: {
    title: "PlaysWithGuru — Predictive analytics for sports & markets",
    description:
      "Predictive analytics for sports props and market plays — probability modeling, trend context, and decision UX.",
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
    title: "PlaysWithGuru — Predictive analytics for sports & markets",
    description:
      "Predictive analytics for sports props and market plays — probability modeling, trend context, and decision UX.",
    images: ["/brand/playswithguru-logo.png"],
  },

  icons: {
    icon: "/brand/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2A4A", // deep brand navy (safe default)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          // ✅ corporate defaults (prevents accidental dark/graveyard)
          "min-h-screen bg-white text-slate-900",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
