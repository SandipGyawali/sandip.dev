import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme.provider";
import { metaData } from "@/data/metadata";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FollowCursor from "@/components/FollowCursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  icons: {
    icon: "/logo2.png",
  },
  keywords: ["sandip", "Sandip Gyawali", "sandipgyawali"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/logo.png" sizes="any" />
      <body
        className={`flex min-h-screen flex-col font-sans md:max-w-7xl lg:mx-auto lg:flex-row ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main
            className={cn(
              "relative flex-1 flex-col overflow-x-hidden border-x border-dashed border-neutral-300 dark:border-neutral-600"
            )}
          >
            <Navbar />
            {children}
            <Toaster richColors closeButton position="bottom-right" />
            <Footer />

            {/* cursor */}
            <FollowCursor />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
