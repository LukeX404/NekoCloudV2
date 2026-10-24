"use client";

import React from "react";
import { ShieldCheck, Cpu, Clock, LayoutDashboard, Globe, Zap, ArrowUpRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Proteção Anti-DDoS 228 Tbps",
      desc: "Defesa multicamada de ponta com Cloudflare Magic Transit. Bloqueia ataques volumétricos L3/L4 e ataques L7 de botnets sem causar lag ou congelamento no jogo.",
      badge: "Cloudflare",
    },
    {
      icon: Cpu,
      title: "Processadores AMD Ryzen 9 7950X",
      desc: "Clocks impressionantes de até 5.7 GHz com memórias RAM DDR5 ECC ultra rápidas e NVMe Gen4, garantindo 20 TPS estáveis até nos modpacks mais pesados.",
      badge: "Hardware High-End",
    },
    {
      icon: Zap,
      title: "Ativação Instantânea",
      desc: "Sem filas de espera! Assim que a transação for aprovada via Pix ou Cartão, seu servidor é provisionado e configurado automaticamente em menos de 1 minuto.",
      badge: "Automático",
    },
    {
      icon: LayoutDashboard,
      title: "Painel Intuitivo e Completo",
      desc: "Instale mods, plugins e troque a versão do servidor com apenas 1 clique. Gerenciador de arquivos SFTP, backups agendados e console interativo em tempo real.",
      badge: "Fácil de Usar",
    },
    {
      icon: Globe,
      title: "Subdomínio Personalizado Grátis",
      desc: "Diga adeus a endereços cheios de números e portas feias. Crie um IP memorável como jogar.seunome.nekocloud.com.br sem pagar nada a mais por isso.",
      badge: "Incluso",
    },
    {
      icon: Clock,
      title: "Disponibilidade de 99.9% Uptime",
      desc: "Sua comunidade sempre online quando você mais precisa. Infraestrutura com fontes de energia redundantes e monitoramento de rede ativo 24 horas por dia.",
      badge: "Confiabilidade",
    },
  ];

  return (
    <section id="vantagens" className="py-20 md:py-28 bg-slate-50/60 dark:bg-[#070d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
            <Zap className="w-3.5 h-3.5 text-sky-500" />
            <span>Infraestrutura de Elite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Por que Escolher a NekoCloud?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Construímos uma arquitetura pensada exclusivamente para jogadores, donos de servidores e comunidades exigentes de Minecraft.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200/90 dark:border-slate-800/80 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:gap-2 transition-all">
                  <span>Saber mais</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
