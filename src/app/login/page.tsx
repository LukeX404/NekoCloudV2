import type { Metadata } from "next";
import LoginView from "./LoginView";

export const metadata: Metadata = {
  title: "Área do Cliente - Painel de Controle",
  description:
    "Acesse a Área do Cliente da NekoCloud para gerenciar seus servidores de Minecraft e instâncias VPS Cloud.",
  openGraph: {
    title: "Área do Cliente | NekoCloud",
    description: "Gerencie seus servidores, faturas e suporte na NekoCloud.",
    url: "https://nekocloud.com.br/login",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NekoCloud Área do Cliente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Área do Cliente | NekoCloud",
    description: "Painel de controle e gerenciamento de servidores NekoCloud.",
    images: ["/og-image.jpg"],
  },
};

export default function LoginPage() {
  return <LoginView />;
}
