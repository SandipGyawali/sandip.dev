import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme.provider";
import { metaData } from "@/data/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en" suppressHydrationWarning className="">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body
        className={`flex min-h-screen flex-col font-sans max-w-3xl m-auto px-4 xs:px-10 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="w-full h-full justify-center items-center m-auto py-4 xs:py-10">
            {children}
          </main>
          <Footer />
          <Toaster richColors closeButton position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
