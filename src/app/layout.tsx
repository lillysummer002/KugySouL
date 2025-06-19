import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OpenHands AI - Powerful AI Assistant",
  description: "OpenHands AI is a powerful agent that can execute code, browse the web, and interact with various tools. Perfect for developers, researchers, and automation.",
  keywords: ["AI", "assistant", "code execution", "web browsing", "automation", "OpenHands"],
  authors: [{ name: "OpenHands Team" }],
  openGraph: {
    title: "OpenHands AI - Powerful AI Assistant",
    description: "OpenHands AI is a powerful agent that can execute code, browse the web, and interact with various tools.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenHands AI - Powerful AI Assistant",
    description: "OpenHands AI is a powerful agent that can execute code, browse the web, and interact with various tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
