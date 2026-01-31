import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", 
});
export const metadata: Metadata = {
  title: "Afterburn",
  description: "Card Information Made Easy",
  icons: {
    icon: "/icon.svg"},
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-bg-base`}
      >
        {children}
      </body>
    </html>
  );
}
