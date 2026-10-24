"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LOCATIONS } from "@/data/plans";
import { Copy, Check, Wifi, Globe2, Sparkles } from "lucide-react";

export default function PingTest() {
  const [selectedLoc, setSelectedLoc] = useState<"br" | "cad">("br");
  const [copied, setCopied] = useState(false);
  const [pinging, setPinging] = useState(false);
  const [currentPing, setCurrentPing] = useState<number | null>(null);

  const loc = LOCATIONS[selectedLoc];

  const handleCopy = () => {
    navigator.clipboard.writeText(loc.serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const simulatePing = () => {
    setPinging(true);
    setCurrentPing(null);
    setTimeout(() => {
      const base = selectedLoc === "br" ? 14 : 128;
      const variation = Math.floor(Math.random() * 8) - 4;
      setCurrentPing(base + variation);
      setPinging(false);
    }, 600);
  };

  return (
    <section id="teste-ping" className="py-16 bg-slate-50 dark:bg-[#070d18] border-y border-slate-200/80 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
            <Globe2 className="w-3.5 h-3.5 text-sky-500" />
            <span>Infraestrutura Global</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Teste a Latência em Nossos Servidores
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Escolha uma localização, copie o IP e conecte-se no seu jogo para conferir a estabilidade antes de contratar.
          </p>

          {/* Location Picker Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setSelectedLoc("br");
                setCurrentPing(null);
              }}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all ${
                selectedLoc === "br"
                  ? "bg-white dark:bg-[#0d1b32] border-sky-500 shadow-md shadow-sky-500/15 text-slate-900 dark:text-white font-bold"
                  : "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300"
              }`}
            >
              <Image src="/flags/brazil.svg" alt="Brasil" width={28} height={28} className="rounded" />
              <div className="text-left">
                <span className="block text-sm">Brasil (São Paulo)</span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">10 ~ 25ms</span>
              </div>
            </button>

            <button
              onClick={() => {
                setSelectedLoc("cad");
                setCurrentPing(null);
              }}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all ${
                selectedLoc === "cad"
                  ? "bg-white dark:bg-[#0d1b32] border-sky-500 shadow-md shadow-sky-500/15 text-slate-900 dark:text-white font-bold"
                  : "bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300"
              }`}
            >
              <Image src="/flags/canada.svg" alt="Canadá" width={28} height={28} className="rounded" />
              <div className="text-left">
                <span className="block text-sm">Canadá (BHS)</span>
                <span className="text-xs text-sky-600 dark:text-sky-400 font-medium">120 ~ 150ms</span>
              </div>
            </button>
          </div>

          {/* IP Box */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-2 sm:p-2.5 rounded-2xl bg-white dark:bg-[#0d1b32] border border-sky-200 dark:border-sky-900/60 shadow-lg shadow-sky-500/5 gap-2">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-xs">
                  IP
                </div>
                <div className="text-left">
                  <span className="block font-mono text-sm sm:text-base font-bold text-slate-800 dark:text-white">
                    {loc.serverIp}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Compatível: Java 1.8x ~ 1.21.x &amp; Bedrock
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={simulatePing}
                  disabled={pinging}
                  className="px-3 py-2 text-xs font-semibold rounded-xl text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800/80 transition-all flex items-center gap-1.5"
                  title="Testar Ping"
                >
                  <Wifi className="w-3.5 h-3.5" />
                  <span>{pinging ? "Medindo..." : currentPing ? `${currentPing} ms` : "Pingar"}</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl text-white bg-sky-500 hover:bg-sky-600 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/25"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar IP</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
