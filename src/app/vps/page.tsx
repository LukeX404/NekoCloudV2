"use client";

import React, { useState } from "react";
import { Navbar, Footer } from "@/components";
import { VPS_PLANS, VpsPlan } from "@/data/plans";
import { Server, Cpu, HardDrive, ShieldCheck, Check, Zap, ArrowRight, MessageCircle } from "lucide-react";

export default function VpsPage() {
  const [selectedPlan, setSelectedPlan] = useState<VpsPlan | null>(null);
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [selectedOs, setSelectedOs] = useState("Ubuntu 24.04 LTS");

  const osOptions = [
    "Ubuntu 24.04 LTS",
    "Ubuntu 22.04 LTS",
    "Debian 12 Bookworm",
    "AlmaLinux 9",
    "Windows Server 2022",
  ];

  const handleHireVps = (plan: VpsPlan) => {
    const price = billing === "monthly" ? plan.monthlyPrice : Math.round(plan.monthlyPrice * 0.85);
    const textMsg = encodeURIComponent(
      `Olá! Tenho interesse no plano de *${plan.name}* (Ryzen 9 9950X - ${plan.ram}GB RAM - ${plan.vcpu} vCPU) por R$ ${price.toFixed(2)}/mês (${billing === "annual" ? "Anual -15% OFF" : "Mensal"}).\nSistema desejado: ${selectedOs}`
    );
    window.open(`https://wa.me/5511999999999?text=${textMsg}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070d18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* VPS Hero */}
        <section className="py-12 md:py-16 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4">
            <Server className="w-3.5 h-3.5 text-sky-500" />
            <span>Virtualização KVM &amp; Acesso Root Total</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            VPS Cloud de Ultra Performance
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Hospede bots, aplicações web, proxies ou servidores de jogos com a força bruta do processador <strong className="text-slate-900 dark:text-white font-semibold">AMD Ryzen 9 9950X (5.7GHz)</strong> e armazenamento NVMe Gen4.
          </p>

          {/* OS Selector & Billing Cycle */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Billing Toggle */}
            <div className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  billing === "monthly"
                    ? "bg-white dark:bg-[#0d1b32] text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                Faturamento Mensal
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  billing === "annual"
                    ? "bg-white dark:bg-[#0d1b32] text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                <span>Anual</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-white">
                  -15% OFF
                </span>
              </button>
            </div>

            {/* Default OS Picker */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Sistema Inicial:</span>
              <select
                value={selectedOs}
                onChange={(e) => setSelectedOs(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
              >
                {osOptions.map((os) => (
                  <option key={os} value={os}>
                    {os}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* VPS Plans Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VPS_PLANS.map((plan) => {
              const currentPrice =
                billing === "monthly"
                  ? plan.monthlyPrice
                  : Math.round(plan.monthlyPrice * 0.85);

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                    plan.highlight
                      ? "bg-gradient-to-b from-sky-50 to-white dark:from-[#0d1f3b] dark:to-[#091323] border-2 border-sky-500 shadow-xl shadow-sky-500/15 md:-translate-y-2"
                      : "bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-800"
                  }`}
                >
                  {plan.tag && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-sky-500 text-white shadow-md">
                        {plan.tag}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-medium mt-0.5">
                      {plan.cpuModel}
                    </p>

                    {/* Price */}
                    <div className="my-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                      {plan.oldPrice && (
                        <span className="block text-xs text-slate-400 line-through">
                          R$ {plan.oldPrice.toFixed(2).replace(".", ",")}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-semibold text-slate-500">R$</span>
                        <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                          {currentPrice.toFixed(2).replace(".", ",")}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">/mês</span>
                      </div>
                    </div>

                    {/* Specs list */}
                    <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => handleHireVps(plan)}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md ${
                        plan.highlight
                          ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-sky-500/25"
                          : "bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-500 text-sky-600 dark:text-sky-300 hover:text-white border border-sky-200 dark:border-sky-800"
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                      <span>Contratar {plan.name}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* VPS Feature Highlights */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="rounded-3xl bg-slate-50 dark:bg-[#0b1528] border border-slate-200 dark:border-slate-800 p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
              Recursos Avançados Inclusos na VPS Cloud
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Mitigação Anti-DDoS 228 Tbps
                </h4>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                  Proteção constante e transparente sem latência adicional contra qualquer ataque volumétrico.
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  CPU Dedicada Zen 5 (9950X)
                </h4>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                  Sem overselling. Núcleos de alta frequência com IPC topo de linha para tarefas exigentes.
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-4">
                  <HardDrive className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  SSDs NVMe Gen4 Enterprise
                </h4>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                  Taxas de leitura e gravação que ultrapassam 7.000 MB/s para carregamento imediato.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
