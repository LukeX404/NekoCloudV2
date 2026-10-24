import type { Metadata } from "next";
import VpsView from "./VpsView";

export const metadata: Metadata = {
  title: "VPS Cloud KVM - Processador AMD Ryzen 9 9950X",
  description:
    "Servidores VPS Cloud de alta performance com processador AMD Ryzen 9 9950X, NVMe Gen4, proteção Anti-DDoS 228 Tbps, acesso root total e link de 1 Gbps.",
  openGraph: {
    title: "VPS Cloud KVM | NekoCloud - Ryzen 9 9950X",
    description:
      "Hospede aplicações, bots e servidores em VPS Cloud com Ryzen 9 9950X, NVMe Gen4 e proteção Anti-DDoS corporativa.",
    url: "https://nekocloud.com.br/vps",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NekoCloud VPS Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VPS Cloud KVM | NekoCloud",
    description: "Servidores VPS Cloud de alto desempenho com Ryzen 9 9950X.",
    images: ["/og-image.jpg"],
  },
};

export default function VpsPage() {
  return <VpsView />;
}
