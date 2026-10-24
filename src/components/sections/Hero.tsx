"use client";

import React, { useState } from "react";
import Link from "next/link";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import {
  Cpu,
  Shield,
  Activity,
  ArrowRight,
  Copy,
  Check,
  Zap,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const testIp = "jogar.nekocloud.com.br";

  const copyIp = () => {
    navigator.clipboard.writeText(testIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col items-center justify-center">
      {/* Particles.js Interactive Canvas Background */}
      <ParticlesBackground />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/15 dark:bg-sky-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Top Zen 5 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-500/10 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 border border-sky-400/30 backdrop-blur-md mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <span className="font-mono uppercase text-[11px] sm:text-xs">
            AMD Ryzen 9 9950X (Zen 5) • 5.7 GHz Boost • Anti-DDoS 228 Tbps
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
          Hospedagem Minecraft &amp; Cloud de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300 drop-shadow-sm">
            Desempenho Extremo
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Servidores de alta performance com processadores AMD Zen 5, discos NVMe Gen5, proteção Anti-DDoS Anycast contínua e suporte especializado 24/7.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/minecraft"
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Ver Planos Minecraft</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={copyIp}
            className="w-full sm:w-auto px-6 py-4 text-sm font-semibold rounded-2xl bg-white/80 dark:bg-[#070e1e]/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-sky-500/30 hover:border-sky-400 dark:hover:border-sky-400 backdrop-blur-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-sky-500/10"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-500 dark:text-emerald-400 font-bold">IP Copiado com Sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-sky-400" />
                <span>IP de Teste: <span className="font-mono text-sky-500 dark:text-sky-400 font-bold">{testIp}</span></span>
              </>
            )}
          </button>
        </div>

        {/* Simplified Futuristic Console Card */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="rounded-3xl bg-white/80 dark:bg-[#081226]/85 backdrop-blur-2xl border border-sky-200/60 dark:border-sky-500/20 p-5 sm:p-6 shadow-2xl shadow-sky-950/20 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  node01.nekocloud.io
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ONLINE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 my-4">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                <span className="block text-[10px] font-bold uppercase text-slate-400">TPS Servidor</span>
                <span className="text-base sm:text-lg font-black text-emerald-500">20.0 / 20.0</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                <span className="block text-[10px] font-bold uppercase text-slate-400">Ping Fibra (SP)</span>
                <span className="text-base sm:text-lg font-black text-sky-500">11 ms</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                <span className="block text-[10px] font-bold uppercase text-slate-400">Frequência CPU</span>
                <span className="text-base sm:text-lg font-black text-cyan-400">5.7 GHz</span>
              </div>
            </div>

            <div className="font-mono text-xs rounded-xl bg-slate-950 text-slate-300 p-3 space-y-1 border border-slate-800">
              <p className="text-sky-400">[NekoCloud Core] AMD Ryzen 9 9950X (Zen 5) @ 5.70 GHz</p>
              <p className="text-emerald-400">[AntiDDoS Anycast] Proteção Cloudflare Magic Transit: 228 Tbps Ativa</p>
              <p className="text-slate-400">[GeyserMC] Suporte multiplataforma Java &amp; Bedrock conectado</p>
            </div>
          </div>
        </div>

        {/* 4 Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Ativação em menos de 60 segundos
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Crossplay Java &amp; Bedrock
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Backups diários automáticos
          </span>
        </div>
      </div>
    </section>
  );
}
