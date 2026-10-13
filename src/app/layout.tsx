import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan",
    template: "%s · Alex Morgan",
  },
  description: "A small portfolio of work, projects, and notes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#fbfafb] font-sans text-neutral-950">
        <div className="mx-auto w-full max-w-[640px] px-5 pt-10 pb-20 sm:pt-12">
          <SiteNav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
