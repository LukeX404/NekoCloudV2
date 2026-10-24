import type { Metadata } from "next";
import BareMetalView from "./BareMetalView";

export const metadata: Metadata = {
  title: "Servidores Bare Metal Dedicados - AMD Ryzen 9 9950X & EPYC",
  description:
    "Servidores Dedicados Bare Metal de máxima performance com AMD Ryzen 9 9950X e EPYC, IPMI remoto, RAID NVMe Gen4 e proteção Anti-DDoS de 228 Tbps Cloudflare.",
  openGraph: {
    title: "Servidores Bare Metal Dedicados | NekoCloud",
    description:
      "Hardware 100% dedicado sem compartilhamento de recursos. Ryzen 9 9950X, EPYC, link dedicado e mitigação Anti-DDoS 228 Tbps.",
    url: "https://nekocloud.com.br/bare-metal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NekoCloud Bare Metal Hosting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servidores Bare Metal Dedicados | NekoCloud",
    description: "Servidores Dedicados com Ryzen 9 9950X e AMD EPYC.",
    images: ["/og-image.jpg"],
  },
};

export default function BareMetalPage() {
  return <BareMetalView />;
}
