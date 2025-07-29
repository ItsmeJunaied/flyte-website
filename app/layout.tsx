import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../component/Home/Nav";
import { navbarData } from "@/api/Dummy";
import AOSComponent from "../component/Common/AOSComponent";
import Footer from "../component/Common/Footer";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import ClientProvider from "@/component/Common/ClientProvider";
import DriftChat from "@/component/Common/DriftChat";
import PageTracker from "@/component/PageTracker/PageTracker";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flyte Solutions | Hire Remote Software Development Team.",
  description:
    "Flyte Solutions specializes in providing top remote software development teams, delivering innovative web, mobile, and cloud solutions to accelerate your business growth.",
  keywords: [
    "Flyte Solutions",
    "Software Company",
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "IT Consulting",
    "Bangladesh",
  ],
  authors: [{ name: "Flyte Solutions Ltd.", url: "https://www.flytesolutions.com" }],
  openGraph: {
    title: "Flyte Solutions | Hire Remote Software Development Team.",
    description:
      "Flyte Solutions specializes in providing top remote software development teams, delivering innovative web, mobile, and cloud solutions to accelerate your business growth.",
    url: "https://www.flytesolutions.com",
    siteName: "Flyte Solutions Ltd.",
    images: [
      {
        url: "https://www.flytesolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Flyte Solutions Ltd.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flyte Solutions | Hire Remote Software Development Team.",
    description: "Flyte Solutions specializes in providing top remote software development teams, delivering innovative web, mobile, and cloud solutions to accelerate your business growth.",
    images: ["https://www.flytesolutions.com/logo.png"],
  },
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
        {/* <script src="/script.js" defer></script> */}

        {/* Google Analytics Script */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KZXPXP1F7J" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZXPXP1F7J');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script src="/script.js" strategy="lazyOnload" />
        <AOSComponent />

        {/* ✅ Wrap children inside ClientProvider to provide Redux & Toast */}
        <ClientProvider>
          <Suspense fallback={null}>
            <PageTracker />
          </Suspense>
          <Nav navData={navbarData} />
          {children}
          <DriftChat />
          <div className="bg-[#2A3342]">
            <div className="container">
              <Footer />
            </div>
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
