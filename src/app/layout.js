import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://playswithguru.com"),
  title: "PWG Sports | PlaysWithGuru by PLYWG LLC",
  description: "PWG Sports is a subscription digital sports-intelligence platform from PlaysWithGuru by PLYWG LLC.",
  openGraph: {
    title: "PWG Sports | PlaysWithGuru by PLYWG LLC",
    description: "Subscription digital sports intelligence with structured prop-board context and curated Guru Plays.",
    url: "https://playswithguru.com",
    siteName: "PlaysWithGuru by PLYWG LLC",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body></html>;
}
