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
  title: "Kanda Kedareswar | AI & ML Undergraduate",
  description:
    "Kanda Kedareswar is an AI & ML undergraduate focused on machine learning, Python, data analysis and full-stack development.",
  keywords: [
    "Kanda Kedareswar",
    "AI & ML Undergraduate",
    "Machine Learning",
    "Python",
    "Data Analysis",
    "Full Stack Development",
    "Kalasalingam Academy",
    "Smart Borewell Starter",
    "AI Academic & Career Navigator",
  ],
  authors: [{ name: "Kanda Kedareswar" }],
  creator: "Kanda Kedareswar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/kedareswarkanda",
    title: "Kanda Kedareswar | AI & ML Undergraduate",
    description:
      "Kanda Kedareswar is an AI & ML undergraduate focused on machine learning, Python, data analysis and full-stack development.",
    siteName: "Kanda Kedareswar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanda Kedareswar | AI & ML Undergraduate",
    description:
      "Kanda Kedareswar is an AI & ML undergraduate focused on machine learning, Python, data analysis and full-stack development.",
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
