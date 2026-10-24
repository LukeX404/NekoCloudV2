"use client";

import React from "react";
import { ShieldCheck, Cpu, Clock, LayoutDashboard, Globe, Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Proteção Anti-DDoS 228 Tbps",
      desc: "Defesa multicamada com Cloudflare Magic Transit. Bloqueia ataques volumétricos L3/L4 e botnets sem aumentar a latência dos jogadores.",
      badge: "Cloudflare",
      highlight: true,
    },
    {
      icon: Cpu,
      title: "AMD Ryzen 9 9950X (Zen 5)",
      desc: "Frequências impressionantes de até 5.7 GHz com memórias RAM DDR5 ECC e SSDs NVMe Gen4, garantindo 20 TPS sem oscilações.",
      badge: "Zen 5 High-End",
      highlight: false,
    },
    {
      icon: Zap,
      title: "Ativação 100% Instantânea",
      desc: "Sem filas de espera. Assim que o pagamento via Pix ou Cartão for aprovado, seu servidor é provisionado em menos de 1 minuto.",
      badge: "Automático",
      highlight: false,
    },
    {
      icon: LayoutDashboard,
      title: "Painel Intuitivo e Completo",
      desc: "Instale modpacks, plugins e altere a versão do servidor com apenas 1 clique. Acesso SFTP, console ao vivo e backups diários.",
      badge: "1-Clique",
      highlight: false,
    },
    {
      icon: Globe,
      title: "Subdomínio Personalizado Grátis",
      desc: "Crie um endereço memorável como jogar.seunome.nekocloud.com.br sem taxas adicionais e com proteção de DNS redundante.",
      badge: "Grátis",
      highlight: false,
    },
    {
      icon: Clock,
      title: "Garantia de 99.9% Uptime",
      desc: "Infraestrutura com fontes redundantes de energia, links de fibra dedicados e monitoramento 24 horas por dia.",
      badge: "SLA Garantido",
      highlight: false,
    },
  ];

  return (
    <section id="vantagens" className="py-20 md:py-28 bg-slate-50/50 dark:bg-[#070d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-sky-500" />
            <span>Infraestrutura de Elite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Por que Escolher a NekoCloud?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Hardware de última geração e proteção corporativa desenhados para a melhor experiência gamer.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white/90 dark:bg-[#0b1424] border border-slate-200/90 dark:border-slate-800/90 p-7 sm:p-8 shadow-sm hover:shadow-2xl hover:border-sky-400 dark:hover:border-sky-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 dark:bg-sky-500/15 text-sky-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-500">
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Incluso em todos os planos
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
