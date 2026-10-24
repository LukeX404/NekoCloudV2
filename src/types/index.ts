export interface Plan {
  id: string;
  name: string;
  ram: number; // in GB
  monthlyPrice: number;
  oldMonthlyPrice?: number;
  highlight?: boolean;
  tag?: string;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    antiDDoS: string;
    subdomain: boolean;
    backups: boolean;
    modsAndPlugins: boolean;
    geyserSupport: boolean;
    recommendedVersions: string;
  };
}

export type LocationId = "br" | "cad";

export interface LocationInfo {
  id: LocationId;
  name: string;
  flag: string;
  datacenter: string;
  ping: string;
  serverIp: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  stars: number;
  content: string;
  highlightTag?: string;
}
