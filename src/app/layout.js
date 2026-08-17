import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "PlaysWithGuru | Decision Support for Sports & Markets",
  description: "Sports prop, market structure and earnings intelligence built to help users evaluate opportunity with context, structure and risk clarity.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body></html>;
}
