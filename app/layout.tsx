import type { Metadata } from "next";
import { Space_Mono, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: "400",
});

const nanumPenScript = Nanum_Pen_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanum-pen-script",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Neo Brutalism UI",
  description: "By Denaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${nanumPenScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
