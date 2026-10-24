"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, Cpu, Activity, ArrowRight, Copy, Check, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const testIp = "jogar.nekocloud.com.br";

  const copyIp = () => {
    navigator.clipboard.writeText(testIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[650px] h-96 md:h-[650px] bg-gradient-to-tr from-sky-500/20 to-blue-600/10 dark:from-sky-500/15 dark:to-blue-700/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-400/15 dark:bg-sky-400/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Hospedagem Minecraft &amp; Cloud de Nova Geração</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Crie seu servidor com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-cyan-300">
                Performance Imparável
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Infraestrutura de ponta equipada com <strong className="text-slate-900 dark:text-white font-semibold">AMD Ryzen 9 9950X (Zen 5 @ 5.7GHz)</strong>, proteção Anti-DDoS de 228 Tbps e suporte completo para versões Java e Bedrock.
            </p>

            {/* Badges Highlights */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Cpu className="w-4 h-4 text-sky-500" />
                <span>Ryzen 9 9950X (5.7GHz)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Cloudflare 228 Tbps</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Activity className="w-4 h-4 text-sky-500" />
                <span>Ping BR 10~25ms</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/minecraft"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl shadow-lg shadow-sky-500/30 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
              >
                <span>Planos Minecraft</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/vps"
                className="w-full sm:w-auto px-6 py-4 text-sm font-semibold rounded-xl bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/50 dark:hover:bg-sky-950/30 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Ver VPS Cloud</span>
              </Link>

              {/* Quick Copy IP Button */}
              <button
                onClick={copyIp}
                className="w-full sm:w-auto px-5 py-4 text-xs font-semibold rounded-xl bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/50 dark:hover:bg-sky-950/30 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">IP Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-sky-500" />
                    <span>IP Teste: <span className="font-mono text-sky-600 dark:text-sky-400">{testIp}</span></span>
                  </>
                )}
              </button>
            </div>

            {/* Sub-note */}
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              ⚡ Ativação automática em menos de 60 segundos com suporte técnico direto.
            </p>
          </div>

          {/* Right Column: Interactive Server Mockup Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-sky-500/20 to-blue-600/10 p-[1px] shadow-2xl shadow-sky-500/10">
              <div className="rounded-2xl bg-white dark:bg-[#0b1528] border border-sky-100 dark:border-sky-950 p-5 md:p-6 shadow-xl">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="ml-2 text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-sky-500" />
                      console.nekocloud.io
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Server Status Stats */}
                <div className="grid grid-cols-3 gap-3 my-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">TPS</span>
                    <span className="text-lg font-bold text-emerald-500">20.0</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">CPU Host</span>
                    <span className="text-sm font-bold text-sky-500">R9 9950X</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">Uptime</span>
                    <span className="text-lg font-bold text-slate-800 dark:text-slate-200">99.9%</span>
                  </div>
                </div>

                {/* Simulated Server Console Output */}
                <div className="font-mono text-xs rounded-xl bg-slate-950 text-slate-200 p-4 space-y-1.5 border border-slate-800 shadow-inner overflow-hidden">
                  <p className="text-sky-400">[NekoCloud System] Host AMD Ryzen 9 9950X ready.</p>
                  <p className="text-slate-400">[Paper/Purpur] Loading version 1.21.x &amp; Floodgate...</p>
                  <p className="text-emerald-400">[GeyserMC] Bedrock bridge initialized on port 19132.</p>
                  <p className="text-slate-400">[AntiDDoS] Cloudflare Magic Transit: ACTIVE (228 Tbps).</p>
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-800 text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Done (1.822s)! Server ready for players.</span>
                  </div>
                </div>

                {/* Server Quick Info Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Crossplay Java &amp; Bedrock</span>
                  <span className="text-sky-600 dark:text-sky-400 font-semibold">Subdomínio Grátis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
