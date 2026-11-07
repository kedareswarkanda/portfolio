import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanda Kedareswar | AI & ML Developer",
  description:
    "Explore the portfolio of Kanda Kedareswar, a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning, with projects in AI, full-stack development and intelligent applications.",
  keywords: [
    "Kanda Kedareswar",
    "AI & ML Developer",
    "Computer Science Undergraduate",
    "Machine Learning",
    "Python",
    "FastAPI",
    "React",
    "SolarIQ",
    "UniPulse",
    "Kalasalingam Academy",
  ],
  authors: [{ name: "Kanda Kedareswar" }],
  creator: "Kanda Kedareswar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kedareswar-portfolio.vercel.app",
    title: "Kanda Kedareswar | AI & ML Developer",
    description:
      "Explore the portfolio of Kanda Kedareswar, a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning, with projects in AI, full-stack development and intelligent applications.",
    siteName: "Kanda Kedareswar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanda Kedareswar | AI & ML Developer",
    description:
      "Explore the portfolio of Kanda Kedareswar, a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning, with projects in AI, full-stack development and intelligent applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-full bg-background text-foreground flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <PageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
