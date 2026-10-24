import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NekoCloud | Hospedagem Minecraft, VPS & Bare Metal - AMD Ryzen 9 9950X",
  description:
    "Hospedagem de alta performance equipada com processadores AMD Ryzen 9 9950X (Zen 5), proteção Anti-DDoS de 228 Tbps, ativação imediata para Minecraft, VPS Cloud e Bare Metal.",
  keywords: [
    "hospedagem minecraft",
    "ryzen 9 9950x minecraft",
    "vps ryzen 9950x",
    "bare metal brasil",
    "servidor dedicado 9950x",
    "nekocloud",
    "minecraft crossplay host",
  ],
  authors: [{ name: "NekoCloud" }],
  openGraph: {
    title: "NekoCloud | Hospedagem Minecraft, VPS & Bare Metal",
    description: "Servidores rápidos, confiáveis e com processadores AMD Ryzen 9 9950X de última geração.",
    url: "https://nekocloud.com.br",
    siteName: "NekoCloud",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
