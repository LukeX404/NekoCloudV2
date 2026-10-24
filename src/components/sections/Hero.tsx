"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import {
  Shield,
  Cpu,
  Activity,
  ArrowRight,
  Copy,
  Check,
  Terminal,
  RotateCw,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [restarting, setRestarting] = useState(false);
  const [serverStatus, setServerStatus] = useState("ONLINE");
  const testIp = "jogar.nekocloud.com.br";

  const copyIp = () => {
    navigator.clipboard.writeText(testIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const simulateRestart = () => {
    if (restarting) return;
    setRestarting(true);
    setServerStatus("REINICIANDO...");
    setTimeout(() => {
      setServerStatus("ONLINE");
      setRestarting(false);
    }, 1800);
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Interactive Particles.js Background */}
      <ParticlesBackground />

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] lg:w-[1000px] h-[350px] sm:h-[650px] lg:h-[700px] bg-gradient-to-tr from-sky-500/20 via-blue-600/10 to-cyan-400/10 rounded-full blur-[110px] pointer-events-none -z-10 animate-aurora" />
      <div className="absolute -top-20 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-700/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 mb-6 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Processadores AMD Zen 5 (9950X) com Clocks de até 5.7 GHz</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Hospedagem de Minecraft com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300 drop-shadow-sm">
                Desempenho Extremo
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Descubra servidores de Minecraft sem engasgos, TPS estável em 20.0 e proteção Anti-DDoS Cloudflare de 228 Tbps. Compatível com Java e Bedrock em crossplay contínuo.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 dark:bg-[#0b1528]/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
                <Cpu className="w-4 h-4 text-sky-500" />
                <span>Ryzen 9 9950X (5.7GHz)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 dark:bg-[#0b1528]/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Anti-DDoS 228 Tbps</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 dark:bg-[#0b1528]/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Ping BR 10~25ms</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/minecraft"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 rounded-2xl shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Planos Minecraft</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={copyIp}
                className="w-full sm:w-auto px-6 py-4 text-sm font-semibold rounded-2xl bg-white dark:bg-[#0b1528] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/50 dark:hover:bg-sky-950/30 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">IP Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-sky-500" />
                    <span>IP de Teste: <span className="font-mono text-sky-600 dark:text-sky-400 font-bold">{testIp}</span></span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                Ativação em menos de 60 segundos
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                Crossplay Java &amp; Bedrock
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                Backups automáticos inclusos
              </span>
            </div>
          </div>

          {/* Right Column: Live Interactive Server Console */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-3xl bg-gradient-to-br from-sky-400/30 via-blue-600/30 to-indigo-500/20 p-[1.5px] shadow-2xl shadow-sky-500/20">
              <div className="rounded-3xl bg-white/95 dark:bg-[#091122]/95 backdrop-blur-2xl border border-sky-100 dark:border-sky-900/60 p-5 sm:p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400/90"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400/90"></span>
                    <span className="ml-2 text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-sky-500" />
                      node01.nekocloud.io
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={simulateRestart}
                      disabled={restarting}
                      title="Reiniciar servidor simulado"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                      <RotateCw className={`w-3.5 h-3.5 ${restarting ? "animate-spin text-sky-500" : ""}`} />
                    </button>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      serverStatus === "ONLINE"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${serverStatus === "ONLINE" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}></span>
                      {serverStatus}
                    </span>
                  </div>
                </div>

                <div className="my-4 relative rounded-2xl overflow-hidden border border-sky-100 dark:border-sky-900/60 shadow-lg group">
                  <Image
                    src="/og-image.jpg"
                    alt="NekoCloud Server Visual"
                    width={500}
                    height={260}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">Paper 1.21.x + Floodgate</span>
                        <h4 className="text-base font-extrabold text-white leading-tight">Servidor Survival RPG</h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl bg-sky-500/80 backdrop-blur-md text-white text-xs font-bold border border-sky-400/30">
                        9950X Zen 5
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 my-3">
                  <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">TPS</span>
                    <span className="text-base font-black text-emerald-500">20.0 / 20.0</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Ping Fibra</span>
                    <span className="text-base font-black text-sky-500">11 ms</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">CPU Host</span>
                    <span className="text-base font-black text-cyan-400">5.7 GHz</span>
                  </div>
                </div>

                <div className="font-mono text-xs rounded-2xl bg-slate-950 text-slate-300 p-3.5 space-y-1 border border-slate-800 shadow-inner">
                  <p className="text-sky-400">[NekoCloud System] AMD Ryzen 9 9950X (Zen 5) @ 5.70 GHz</p>
                  <p className="text-slate-400">[AntiDDoS] Cloudflare Magic Transit: ACTIVE (228 Tbps)</p>
                  <p className="text-emerald-400">[GeyserMC] Bedrock bridge initialized on port 19132.</p>
                  <div className="flex items-center gap-2 pt-1.5 text-emerald-400 font-bold border-t border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Done (1.68s)! Servidor operacional.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
