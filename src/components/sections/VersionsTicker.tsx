"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, DownloadCloud } from "lucide-react";

interface SoftwareVersion {
  id: string;
  name: string;
  type: string;
  icon: string;
  description: string;
  tag: string;
}

const VERSIONS: SoftwareVersion[] = [
  {
    id: "purpur",
    name: "Purpur",
    type: "Servidor / Plugins",
    icon: "/versions/purpur.webp",
    description: "Fork do Paper altamente otimizado com personalização extrema de jogabilidade e máxima performance.",
    tag: "Recomendado",
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
  const [activeVersion, setActiveVersion] = useState<SoftwareVersion>(VERSIONS[0]);

  return (
    <section className="py-14 bg-gradient-to-b from-white via-sky-50/40 to-white dark:from-[#070d18] dark:via-[#09152a] dark:to-[#070d18] border-y border-sky-100 dark:border-sky-950/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-2">
          <DownloadCloud className="w-3.5 h-3.5 text-sky-500 animate-bounce" />
          <span>Instalador 1-Clique no Painel</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Instale Qualquer Versão ou Modloader com 1 Clique
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Troque de software a qualquer momento sem perder os seus mundos e arquivos.
        </p>
      </div>

      {/* Interactive Versions Badges Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {VERSIONS.map((ver) => {
            const isSelected = activeVersion.id === ver.id;
            return (
              <button
                key={ver.id}
                onClick={() => setActiveVersion(ver)}
                className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-white dark:bg-[#0d1f3b] border-sky-500 text-sky-600 dark:text-sky-400 shadow-lg shadow-sky-500/20 scale-105"
                    : "bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-sky-300 dark:hover:border-sky-700 hover:scale-102"
                }`}
              >
                <div className="relative w-7 h-7 flex-shrink-0 group-hover:rotate-12 transition-transform">
                  <Image
                    src={ver.icon}
                    alt={ver.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold leading-tight">
                    {ver.name}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {ver.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Version Spotlight Card */}
        <div className="mt-6 max-w-xl mx-auto">
          <div className="rounded-2xl bg-white/90 dark:bg-[#0b1528] border border-sky-200/80 dark:border-sky-900/60 p-4 sm:p-5 shadow-xl shadow-sky-500/5 flex items-center gap-4 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800 flex items-center justify-center flex-shrink-0 p-2 shadow-inner">
              <Image
                src={activeVersion.icon}
                alt={activeVersion.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white truncate">
                  {activeVersion.name}
                </h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  {activeVersion.type}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeVersion.description}
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <CheckCircle2 className="w-4 h-4" />
              <span>Suporte 100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
