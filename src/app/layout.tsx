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
  title: "NekoCloud | Hospedagem de Servidores Minecraft - Ryzen 9 7950X & Anti-DDoS",
  description:
    "Hospedagem de servidores Minecraft de alta performance com processadores AMD Ryzen 9 7950X, proteção Anti-DDoS de 228 Tbps, ativação instantânea e suporte Java & Bedrock.",
  keywords: [
    "hospedagem minecraft",
    "servidor minecraft",
    "nekocloud",
    "minecraft host brasil",
    "ryzen 9 7950x minecraft",
    "minecraft bedrock host",
  ],
  authors: [{ name: "NekoCloud" }],
  openGraph: {
    title: "NekoCloud | Hospedagem de Servidores Minecraft",
    description: "Servidores Minecraft rápidos, confiáveis e com ativação automática instantânea.",
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
