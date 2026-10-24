import { Plan, LocationInfo, FaqItem, Testimonial } from "@/types";

export const LOCATIONS: Record<string, LocationInfo> = {
  br: {
    id: "br",
    name: "Brasil",
    flag: "/flags/brazil.svg",
    datacenter: "São Paulo, SP",
    ping: "10 ~ 25ms",
    serverIp: "brasil.nekocloud.com.br",
  },
  cad: {
    id: "cad",
    name: "Canadá",
    flag: "/flags/canada.svg",
    datacenter: "Beauharnois, BHS",
    ping: "120 ~ 150ms",
    serverIp: "canada.nekocloud.com.br",
  },
};

export const PLANS_BR: Plan[] = [
  {
    id: "br-madeira",
    name: "Madeira",
    ram: 2,
    monthlyPrice: 20.0,
    oldMonthlyPrice: 35.0,
    tag: "Ideal para Vanilla / Leve",
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "2 GB DDR5 ECC",
      storage: "30 GB NVMe Gen4",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Ideal p/ 1.8.8 até 1.16 ou 2-5 amigos",
    },
  },
  {
    id: "br-ferro",
    name: "Ferro",
    ram: 4,
    monthlyPrice: 50.0,
    oldMonthlyPrice: 65.0,
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "4 GB DDR5 ECC",
      storage: "50 GB NVMe Gen4",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Suporta 1.20+ e plugins leves",
    },
  },
  {
    id: "br-redstone",
    name: "Redstone",
    ram: 6,
    monthlyPrice: 70.0,
    oldMonthlyPrice: 80.0,
    highlight: true,
    tag: "Mais Popular",
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "6 GB DDR5 ECC",
      storage: "65 GB NVMe Gen4",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Perfeito p/ Paper/Purpur com 20+ plugins",
    },
  },
  {
    id: "br-ouro",
    name: "Ouro",
    ram: 8,
    monthlyPrice: 90.0,
    oldMonthlyPrice: 110.0,
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "8 GB DDR5 ECC",
      storage: "80 GB NVMe Gen4",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Excelente para Modpacks médios / Servidores públicos",
    },
  },
  {
    id: "br-diamante",
    name: "Diamante",
    ram: 16,
    monthlyPrice: 140.0,
    oldMonthlyPrice: 160.0,
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "16 GB DDR5 ECC",
      storage: "120 GB NVMe Gen4",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Modpacks pesados (RLCraft/ATM9) e Redes",
    },
  },
  {
    id: "br-netherita",
    name: "Netherita",
    ram: 32,
    monthlyPrice: 190.0,
    oldMonthlyPrice: 220.0,
    tag: "Performance Extrema",
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "32 GB DDR5 ECC",
      storage: "200 GB NVMe Gen4",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Grandes servidores, BungeeCord/Velocity & Comunidades",
    },
  },
];

export const PLANS_CAD: Plan[] = [
  {
    id: "cad-madeira",
    name: "Madeira",
    ram: 4,
    monthlyPrice: 15.0,
    oldMonthlyPrice: 30.0,
    tag: "Custo-Benefício Máximo",
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "4 GB DDR5",
      storage: "50 GB NVMe",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Ideal para começar com baixo custo",
    },
  },
  {
    id: "cad-ferro",
    name: "Ferro",
    ram: 6,
    monthlyPrice: 45.0,
    oldMonthlyPrice: 60.0,
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "6 GB DDR5",
      storage: "70 GB NVMe",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Suporta todas as versões atuais",
    },
  },
  {
    id: "cad-redstone",
    name: "Redstone",
    ram: 8,
    monthlyPrice: 65.0,
    oldMonthlyPrice: 75.0,
    highlight: true,
    tag: "Melhor Escolha",
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "8 GB DDR5",
      storage: "90 GB NVMe",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Ideal para Modpacks e comunidades médias",
    },
  },
  {
    id: "cad-ouro",
    name: "Ouro",
    ram: 16,
    monthlyPrice: 80.0,
    oldMonthlyPrice: 100.0,
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "16 GB DDR5",
      storage: "120 GB NVMe",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Suporta grandes modpacks",
    },
  },
  {
    id: "cad-diamante",
    name: "Diamante",
    ram: 32,
    monthlyPrice: 130.0,
    oldMonthlyPrice: 170.0,
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "32 GB DDR5",
      storage: "180 GB NVMe",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Grandes redes e múltiplos servidores",
    },
  },
  {
    id: "cad-netherita",
    name: "Netherita",
    ram: 64,
    monthlyPrice: 180.0,
    oldMonthlyPrice: 210.0,
    tag: "Capacidade Gigante",
    specs: {
      cpu: "Ryzen 9 9950X (Zen 5 @ 5.7GHz)",
      ram: "64 GB DDR5",
      storage: "250 GB NVMe",
      antiDDoS: "Cloudflare 228 Tbps",
      subdomain: true,
      backups: true,
      modsAndPlugins: true,
      geyserSupport: true,
      recommendedVersions: "Redes massivas de servidores",
    },
  },
];

// Planos VPS Cloud
export interface VpsPlan {
  id: string;
  name: string;
  vcpu: number;
  cpuModel: string;
  ram: number; // GB
  storage: string;
  bandwidth: string;
  monthlyPrice: number;
  oldPrice?: number;
  highlight?: boolean;
  tag?: string;
  features: string[];
}

export const VPS_PLANS: VpsPlan[] = [
  {
    id: "vps-start",
    name: "VPS Start",
    vcpu: 1,
    cpuModel: "AMD Ryzen 9 9950X",
    ram: 4,
    storage: "50 GB NVMe Gen4",
    bandwidth: "1 Gbps Port",
    monthlyPrice: 39.9,
    oldPrice: 55.0,
    tag: "Entrada Rápida",
    features: [
      "1 vCPU Ryzen 9 9950X (5.7GHz)",
      "4 GB RAM DDR5",
      "50 GB NVMe Gen4 SSD",
      "Proteção Anti-DDoS 228 Tbps",
      "1 IP IPv4 Dedicado + /64 IPv6",
      "Painel com Reinstalação de OS",
      "Linux (Ubuntu, Debian, AlmaLinux)",
    ],
  },
  {
    id: "vps-pro",
    name: "VPS Pro",
    vcpu: 2,
    cpuModel: "AMD Ryzen 9 9950X",
    ram: 8,
    storage: "100 GB NVMe Gen4",
    bandwidth: "1 Gbps Port",
    monthlyPrice: 69.9,
    oldPrice: 95.0,
    highlight: true,
    tag: "Mais Vendido",
    features: [
      "2 vCPUs Ryzen 9 9950X (5.7GHz)",
      "8 GB RAM DDR5",
      "100 GB NVMe Gen4 SSD",
      "Proteção Anti-DDoS 228 Tbps",
      "1 IP IPv4 Dedicado + /64 IPv6",
      "Acesso Root Completo",
      "Linux ou Windows Server",
    ],
  },
  {
    id: "vps-ultra",
    name: "VPS Ultra",
    vcpu: 4,
    cpuModel: "AMD Ryzen 9 9950X",
    ram: 16,
    storage: "180 GB NVMe Gen4",
    bandwidth: "1 Gbps Port",
    monthlyPrice: 129.9,
    oldPrice: 169.0,
    features: [
      "4 vCPUs Ryzen 9 9950X (5.7GHz)",
      "16 GB RAM DDR5",
      "180 GB NVMe Gen4 SSD",
      "Proteção Anti-DDoS 228 Tbps",
      "1 IP IPv4 Dedicado + /64 IPv6",
      "Backups Semanais Inclusos",
      "Linux ou Windows Server",
    ],
  },
  {
    id: "vps-enterprise",
    name: "VPS Enterprise",
    vcpu: 8,
    cpuModel: "AMD Ryzen 9 9950X",
    ram: 32,
    storage: "300 GB NVMe Gen4",
    bandwidth: "1 Gbps Port",
    monthlyPrice: 229.9,
    oldPrice: 289.0,
    tag: "Máxima Força",
    features: [
      "8 vCPUs Ryzen 9 9950X (5.7GHz)",
      "32 GB RAM DDR5",
      "300 GB NVMe Gen4 SSD",
      "Proteção Anti-DDoS 228 Tbps",
      "2 IPs IPv4 Dedicados",
      "Prioridade no Suporte 24/7",
      "Linux ou Windows Server",
    ],
  },
];

// Planos Bare Metal (Servidores Dedicados)
export interface BareMetalPlan {
  id: string;
  name: string;
  cpu: string;
  cores: string;
  ram: string;
  storage: string;
  uplink: string;
  antiDDoS: string;
  monthlyPrice: number;
  oldPrice?: number;
  highlight?: boolean;
  tag?: string;
  specs: string[];
}

export const BARE_METAL_PLANS: BareMetalPlan[] = [
  {
    id: "bm-zen",
    name: "Bare Metal Zen",
    cpu: "AMD Ryzen 7 7700X",
    cores: "8 Cores / 16 Threads (5.4GHz)",
    ram: "64 GB DDR5",
    storage: "2x 1TB NVMe Gen4 (Software RAID 1)",
    uplink: "1 Gbps Ilimitado",
    antiDDoS: "Cloudflare Magic Transit 228 Tbps",
    monthlyPrice: 489.0,
    oldPrice: 590.0,
    tag: "Custo-Benefício",
    specs: [
      "Processador AMD Ryzen 7 7700X",
      "64 GB Memória RAM DDR5",
      "2x 1TB NVMe Gen4 SSD",
      "Acesso KVM / IPMI Remoto 24/7",
      "Proteção Anti-DDoS Corporativa",
      "Link de 1 Gbps Dedicado",
      "SLA de 99.99% Garantido",
    ],
  },
  {
    id: "bm-prime",
    name: "Bare Metal Prime 9950X",
    cpu: "AMD Ryzen 9 9950X (Zen 5)",
    cores: "16 Cores / 32 Threads (5.7GHz)",
    ram: "128 GB DDR5 ECC",
    storage: "2x 2TB NVMe Gen4 (RAID 1)",
    uplink: "2.5 Gbps Ilimitado",
    antiDDoS: "Cloudflare Magic Transit 228 Tbps",
    monthlyPrice: 890.0,
    oldPrice: 1050.0,
    highlight: true,
    tag: "Mais Procurado",
    specs: [
      "Processador AMD Ryzen 9 9950X (Zen 5)",
      "128 GB Memória RAM DDR5 ECC",
      "2x 2TB NVMe Gen4 Enterprise",
      "Acesso KVM / IPMI com Virtual Media",
      "Mitigação Anti-DDoS 228 Tbps",
      "Link de 2.5 Gbps Dedicado",
      "Ideal para Grandes Comunidades e Provedores",
    ],
  },
  {
    id: "bm-titan",
    name: "Bare Metal Titan EPYC",
    cpu: "AMD EPYC 9354",
    cores: "32 Cores / 64 Threads (3.8GHz Turbo)",
    ram: "256 GB DDR5 ECC Reg",
    storage: "4x 2TB NVMe Gen4 (Hardware RAID 10)",
    uplink: "10 Gbps Burst / 2.5 Gbps Garantido",
    antiDDoS: "Cloudflare Magic Transit 228 Tbps",
    monthlyPrice: 1690.0,
    oldPrice: 1990.0,
    tag: "Servidor Monstro",
    specs: [
      "Processador AMD EPYC 9354 de 32 Cores",
      "256 GB RAM DDR5 Registrada ECC",
      "4x 2TB NVMe Gen4 em RAID 10",
      "Controladora RAID por Hardware",
      "Acesso IPMI dedicado",
      "Rede redundante com 10 Gbps",
      "Pronto para Virtualização (Proxmox/ESXi)",
    ],
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Como e quando recebo minha hospedagem?",
    answer:
      "A ativação é 100% imediata e automatizada! Assim que seu pagamento for confirmado (instantâneo via Pix ou Cartão), os dados de acesso ao painel de controle chegam no seu WhatsApp ou Discord.",
  },
  {
    question: "Posso instalar qualquer modpack ou plugin?",
    answer:
      "Sim! Oferecemos suporte completo a Forge, Fabric, NeoForge, Spigot, Paper, Purpur e BungeeCord/Velocity. Nosso painel possui instalador de mods/plugins com apenas 1 clique ou via SFTP/Gerenciador de Arquivos.",
  },
  {
    question: "Jogadores de Minecraft Celular / Console (Bedrock) podem jogar?",
    answer:
      "Com certeza! Nossos servidores contam com suporte pré-configurado a GeyserMC e Floodgate, permitindo que amigos do celular, Xbox, PlayStation e PC joguem juntos no mesmo mundo com crossplay perfeito.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos Pix com aprovação em segundos, Cartão de Crédito com parcelamento, Boleto Bancário e Mercado Pago.",
  },
  {
    question: "O que acontece se eu sofrer um ataque DDoS?",
    answer:
      "Você não precisa se preocupar. Contamos com a proteção Cloudflare Magic Transit de 228 Tbps, que filtra e mitiga qualquer ataque instantaneamente sem causar lag ou queda no seu servidor.",
  },
  {
    question: "Posso fazer upgrade de plano sem perder meus dados?",
    answer:
      "Sim! Você pode aumentar a quantidade de memória RAM ou espaço em disco a qualquer momento pelo suporte, e todos os seus mundos, construções e configurações permanecem intactos.",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Paulo Gomes",
    role: "Dono do Servidor Nekolandia RPG",
    avatar: "/person/person3.png",
    stars: 5,
    highlightTag: "Ping de 12ms",
    content:
      "Migrei meu servidor de 80 jogadores simultâneos para a NekoCloud e a diferença foi brutal. Zero lag de TPS, processador Ryzen 9 9950X voa e o suporte respondeu em minutos pelo Discord.",
  },
  {
    name: "Maria Rocha",
    role: "Criadora de Conteúdo & Modpacks",
    avatar: "/person/person2.png",
    stars: 5,
    highlightTag: "Ativação Rápida",
    content:
      "O painel é super limpo e fácil de mexer. Consegui subir meu modpack com mais de 200 mods no plano Redstone sem travar nada. Recomendo de olhos fechados!",
  },
  {
    name: "Vinícius Araujo",
    role: "Fundador de Rede Hardcore",
    avatar: "/person/person1.png",
    stars: 5,
    highlightTag: "Anti-DDoS Perfeito",
    content:
      "Já sofremos ataques pesados de concorrentes e o servidor nem piscou graças à proteção Cloudflare. Nenhuma outra hospedagem no Brasil entregou essa estabilidade com esse preço.",
  },
];
