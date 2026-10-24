"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, DownloadCloud, Play, ArrowRight, Zap, Check } from "lucide-react";

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);

  const activeVersion = VERSIONS[selectedIndex];

  // Auto-cycle through versions every 3.5s with animation
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % VERSIONS.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSimulateInstall = () => {
    if (installing) return;
    setInstalling(true);
    setInstalled(false);
    setTimeout(() => {
      setInstalling(false);
      setInstalled(true);
      setTimeout(() => setInstalled(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-sky-50/50 to-white dark:from-[#060c18] dark:via-[#09152a] dark:to-[#060c18] border-y border-sky-100 dark:border-sky-950/60 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3 shadow-sm animate-pulse">
          <DownloadCloud className="w-4 h-4 text-sky-500" />
          <span>Instalador 1-Clique no Painel</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Instale Qualquer Versão ou Modloader com 1 Clique
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Troque de software a qualquer momento sem perder os seus mundos e arquivos.
        </p>
      </div>

      {/* Infinite Animated Running Track (Marquee Ribbon) */}
      <div 
        className="relative w-full overflow-hidden py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left and right fade gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white dark:from-[#060c18] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white dark:from-[#060c18] to-transparent z-10 pointer-events-none" />

        {/* Double track for continuous smooth flow */}
        <div className="flex gap-3 sm:gap-4 w-max animate-marquee">
          {[...VERSIONS, ...VERSIONS].map((ver, idx) => {
            const isSelected = activeVersion.id === ver.id;
            return (
              <button
                key={`${ver.id}-${idx}`}
                onClick={() => {
                  setSelectedIndex(idx % VERSIONS.length);
                  setIsPaused(true);
                }}
                className={`group flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-white dark:bg-[#0c1c38] border-sky-500 text-sky-600 dark:text-sky-400 shadow-xl shadow-sky-500/20 scale-105 ring-2 ring-sky-500/30"
                    : "bg-white/90 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-sky-400 dark:hover:border-sky-600 hover:scale-102 backdrop-blur-md"
                }`}
              >
                <div className="relative w-8 h-8 flex-shrink-0 group-hover:rotate-12 transition-transform">
                  <Image
                    src={ver.icon}
                    alt={ver.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-sm font-extrabold leading-tight">
                    {ver.name}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-400">
                    {ver.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Version Spotlight Animated Showcase Card */}
      <div className="max-w-2xl mx-auto px-4 mt-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-sky-400/30 via-blue-600/20 to-transparent p-[1.5px] shadow-2xl shadow-sky-500/10">
          <div className="rounded-3xl bg-white/95 dark:bg-[#081226]/95 backdrop-blur-2xl border border-sky-100 dark:border-sky-900/60 p-5 sm:p-6 transition-all duration-500">
            {/* Top cycling progress indicator */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-mono font-bold text-sky-500 uppercase tracking-wider">
                  Software Ativo
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-400">
                  {selectedIndex + 1} de {VERSIONS.length}
                </span>
                <div className="flex gap-1">
                  {VERSIONS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === selectedIndex
                          ? "w-5 bg-sky-500"
                          : "w-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-sky-400"
                      }`}
                      aria-label={`Ver versão ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-sky-50 to-blue-50 dark:from-[#0c1b33] dark:to-[#081226] border border-sky-200/80 dark:border-sky-700/60 flex items-center justify-center flex-shrink-0 p-3 shadow-lg group-hover:scale-105 transition-transform">
                <Image
                  src={activeVersion.icon}
                  alt={activeVersion.name}
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>

              <div className="flex-1 text-center sm:text-left min-w-0">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {activeVersion.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    {activeVersion.type}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {activeVersion.tag}
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeVersion.description}
                </p>
              </div>
            </div>

            {/* Bottom Actions inside the card */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Compatibilidade 100% garantida</span>
              </div>

              <button
                onClick={handleSimulateInstall}
                disabled={installing}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-md shadow-sky-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-80"
              >
                {installing ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Instalando no Servidor...</span>
                  </>
                ) : installed ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Instalado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <DownloadCloud className="w-4 h-4" />
                    <span>Instalar {activeVersion.name} (1-Clique)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
