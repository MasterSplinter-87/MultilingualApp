// app/layout.tsx
"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: "en" | "ro" };
}>) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Provider store={store}>
            <LanguageSwitcher locale={locale} />
          </Provider>
        </header>
        {children}
      </body>
    </html>
  );
}
