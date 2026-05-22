import { Geist, Geist_Mono } from "next/font/google";
import { LayoutGroupProvider } from "@/components/providers/layout-group-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { TransitionProvider } from "@/components/providers/transition-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { FilmGrain } from "@/components/decorative";
import { WebsiteJsonLd } from "@/components/seo/json-ld";
import { baseMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <FilmGrain />
        <WebsiteJsonLd />
        <ThemeProvider>
          <LenisProvider>
            <MotionProvider>
              <TransitionProvider>
                <LayoutGroupProvider>{children}</LayoutGroupProvider>
              </TransitionProvider>
            </MotionProvider>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
