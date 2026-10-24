import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nekocloud.com.br"),
  title: {
    default: "NekoCloud | Hospedagem de Servidores Minecraft, VPS & Bare Metal",
    template: "%s | NekoCloud",
  },
  description:
    "Hospedagem de alta performance equipada com processadores AMD Ryzen 9 9950X (Zen 5), proteção Anti-DDoS de 228 Tbps Cloudflare, ativação imediata para Minecraft Java & Bedrock, VPS e Bare Metal.",
  keywords: [
    "hospedagem minecraft",
    "servidor minecraft",
    "ryzen 9 9950x minecraft",
    "vps ryzen 9950x",
    "bare metal brasil",
    "nekocloud",
    "minecraft host brasil",
    "antiddos cloudflare 228tbps",
  ],
  authors: [{ name: "NekoCloud", url: "https://nekocloud.com.br" }],
  creator: "LukeTheNeko",
  publisher: "NekoCloud",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nekocloud.com.br",
    siteName: "NekoCloud Hosting",
    title: "NekoCloud | Hospedagem Minecraft & Cloud Ryzen 9 9950X",
    description:
      "Crie seu servidor de Minecraft ou VPS com processadores AMD Ryzen 9 9950X, Anti-DDoS de 228 Tbps e suporte completo para Java e Bedrock.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NekoCloud - Minecraft Hosting & Ryzen 9 9950X Power",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NekoCloud | Hospedagem Minecraft & Cloud Ryzen 9 9950X",
    description:
      "Servidores rápidos, confiáveis e com processadores AMD Ryzen 9 9950X de última geração. Ativação imediata!",
    images: ["/og-image.jpg"],
    creator: "@nekocloud",
  },
  icons: {
    icon: "/favicon.ico",
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
