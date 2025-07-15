import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const sansFont = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "create-ai-stack",
  description: "CLI tool to build full-stack AI applications quickly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sansFont.variable} font-[family-name:var(--font-sans)] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
