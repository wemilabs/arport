import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/site-header";
import { QuickNav } from "@/components/layout/quick-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arport",
  description: "The most comprehensive unified space for Academic Research",
  keywords: [
    "arport",
    "academic research",
    "portal",
    "students",
    "supervisors",
    "researchers",
  ],
  openGraph: {
    title: "Arport",
    description: "The most comprehensive unified space for Academic Research",
    type: "website",
    url: "https://arport-psi.vercel.app",
    siteName: "arport",
    images: [
      {
        url: "https://ubrw5iu3hw.ufs.sh/f/TFsxjrtdWsEIyHzxoRXdEKaUNDPVSW9zJCkG1t7F60R2joT5",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Arport",
    description: "The most comprehensive unified space for Academic Research",
    card: "summary_large_image",
    site: "arport-psi.vercel.app",
    images: [
      {
        url: "https://ubrw5iu3hw.ufs.sh/f/TFsxjrtdWsEIyHzxoRXdEKaUNDPVSW9zJCkG1t7F60R2joT5",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.className} ${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <QuickNav />
            <Header />
            <main className="flex-1">
              {children}
              {modal}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
