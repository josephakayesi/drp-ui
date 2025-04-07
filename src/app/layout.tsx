import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Header from "@/stories/header/Header";
import Footer from "@/stories/footer/Footer";
import { Toaster, Sonner } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// const typoRegular = localFont({
//   src: "../public/fonts/typoGroteskRegular.otf",
//   variable: "--font-typo-regular",
//   display: "swap",
// });

// const typoBlack = localFont({
//   src: "../public/fonts/typoGroteskBold.otf",
//   variable: "--font-typo-black",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Distant Relatives Project",
  description: "Helping Our Relatives In Need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[scrollbar-gutter:stable] overflow-y-auto overflow-x-clip">
      <body className={` ${montserrat.variable} antialiased`}>
        <ThemeProvider>
          <Toaster />
          <Sonner />
          <Header />
          <div
            className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8"
          >
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
