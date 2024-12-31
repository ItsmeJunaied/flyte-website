import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./component/Home/Nav";
import { navbarData } from "@/api/Dummy";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flyte Solutions Ltd.",
  description: "Welcome to Flyte Solutions Ltd. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
        <script src="/script.js" defer></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav navData={navbarData}/>
        {children}
      </body>
    </html>
  );
}
