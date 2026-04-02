import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TestProvider } from "@/context/TestContext";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["cyrillic", "latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "WordCoder - Английский для программистов",
  description:
    "Интерактивный тренажер для изучения английского языка с мгновенной проверкой",
  keywords: [
    "английский для программистов",
    "IT английский",
    "технический английский",
    "английский для разработчиков",
    "английский для IT",
    "учить английский программисту",
    "английские слова для программистов",
    "изучение IT английского онлайн",
    "тренажер английского для разработчиков",
    "как выучить английский программисту",
    "learn programming english",
    "english for developers",
    "it english vocabulary",
    "technical english for programmers",
    "english for software engineers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans min-h-screen bg-background text-foreground transition-colors duration-300">
        <ThemeProvider defaultTheme="light" storageKey="wordcoder-theme">
          <TestProvider>{children}</TestProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
