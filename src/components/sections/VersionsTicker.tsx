"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DownloadCloud, CheckCircle2, Sparkles } from "lucide-react";

interface SoftwareVersion {
  id: string;
  name: string;
  type: string;
  icon: string;
  description: string;
  tag: string;
  recommended?: boolean;
}

const VERSIONS: SoftwareVersion[] = [
  {
    id: "purpur",
    name: "Purpur",
    type: "Servidor / Plugins",
    icon: "/versions/purpur.webp",
    description: "Fork do Paper altamente otimizado com personalização extrema de jogabilidade e máxima performance.",
    tag: "Recomendado",
    recommended: true,
  },
  {
    id: "fabric",
    name: "Fabric",
    type: "Modloader Leve",
    icon: "/versions/fabric.webp",
    description: "Modloader moderno, modular e extremamente rápido para mods de cliente e servidor nas versões recentes.",
    tag: "Ultra Rápido",
  },
  {
    id: "forge",
    name: "Forge",
    type: "Modloader Clássico",
    icon: "/versions/forge.webp",
    description: "A plataforma clássica para os maiores modpacks do mundo (RLCraft, All The Mods, Pixelmon).",
    tag: "Para Modpacks",
  },
  {
    id: "spigot",
    name: "Spigot",
    type: "Plugins Clássicos",
    icon: "/versions/spigot.webp",
    description: "Um dos softwares mais tradicionais e compatível com milhares de plugins históricos do ecossistema.",
    tag: "Estabilidade",
  },
  {
    id: "bukkit",
    name: "CraftBukkit",
    type: "Legado",
    icon: "/versions/bukkit.webp",
    description: "A base histórica de servidores com plugins. Excelente para versões clássicas e servidores nostálgicos.",
    tag: "Clássico",
  },
  {
    id: "mohist",
    name: "Mohist",
    type: "Híbrido Mods + Plugins",
    icon: "/versions/mohist.webp",
    description: "Permite usar mods Forge e plugins Bukkit simultaneamente no mesmo servidor.",
    tag: "Híbrido",
  },
  {
    id: "magma",
    name: "Magma",
    type: "Híbrido Otimizado",
    icon: "/versions/magma.webp",
    description: "Combinação de Forge com Paper para suporte híbrido de mods e plugins com foco em desempenho.",
    tag: "Híbrido",
  },
  {
    id: "minecraft",
    name: "Vanilla Oficial",
    type: "Oficial Mojang",
    icon: "/versions/minecraft.webp",
    description: "O servidor puro e oficial da Mojang Studios sem modificações, pronto para o survival tradicional.",
    tag: "Oficial",
  },
];

export default function VersionsTicker() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white via-sky-50/40 to-white dark:from-[#060c18] dark:via-[#09152a] dark:to-[#060c18] border-y border-sky-100 dark:border-sky-950/60 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3 shadow-sm">
          <DownloadCloud className="w-4 h-4 text-sky-500 animate-bounce" />
          <span>Instalador 1-Clique no Painel</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Instale Qualquer Versão ou Modloader com 1 Clique
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Troque de software a qualquer momento sem perder os seus mundos e arquivos.
        </p>
      </div>

      {/* Carousel Track with Larger Cards */}
      <div 
        className="relative w-full overflow-hidden py-4 group"
      >
        {/* Left & Right gradient masks for smooth edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white dark:from-[#060c18] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white dark:from-[#060c18] to-transparent z-20 pointer-events-none" />

        {/* Carousel Container - pauses when hovering over ANY card or track */}
        <div 
          className="flex gap-5 w-max animate-marquee group-hover:[animation-play-state:paused]"
        >
          {/* Double array to create seamless loop */}
          {[...VERSIONS, ...VERSIONS].map((ver, idx) => {
            const isCardHovered = hoveredCard === `${ver.id}-${idx}`;

            return (
              <div
                key={`${ver.id}-${idx}`}
                onMouseEnter={() => setHoveredCard(`${ver.id}-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`w-[290px] sm:w-[320px] flex-shrink-0 p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  ver.recommended
                    ? "bg-white/95 dark:bg-[#0c1b35] border-sky-500/50 shadow-xl shadow-sky-500/10 ring-1 ring-sky-500/30"
                    : "bg-white/90 dark:bg-[#091326]/90 border-slate-200/80 dark:border-sky-950/80 shadow-lg shadow-sky-950/5 hover:border-sky-400 dark:hover:border-sky-500"
                } ${
                  isCardHovered ? "scale-105 shadow-2xl shadow-sky-500/20 border-sky-400" : ""
                }`}
              >
                <div>
                  {/* Card Header: Icon, Name and Tag */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800/80 flex items-center justify-center p-2 flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                        <Image
                          src={ver.icon}
                          alt={ver.name}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                          {ver.name}
                        </h3>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {ver.type}
                        </span>
                      </div>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                      ver.recommended
                        ? "bg-sky-500 text-white border-sky-400 shadow-sm"
                        : "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20"
                    }`}>
                      {ver.tag}
                    </span>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[48px]">
                    {ver.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Suporte 100%</span>
                  </span>

                  <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded-md">
                    1-Clique
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
