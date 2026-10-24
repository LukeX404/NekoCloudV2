"use client";

import React from "react";
import { Navbar, Footer } from "@/components";
import { BARE_METAL_PLANS, BareMetalPlan } from "@/data/plans";
import { HardDrive, Check, Zap, Network, Shield, Server, Sparkles } from "lucide-react";

export default function BareMetalView() {
  const handleHireBareMetal = (plan: BareMetalPlan) => {
    const textMsg = encodeURIComponent(
      `Olá! Gostaria de contratar o servidor dedicado Bare Metal *${plan.name}* (${plan.cpu} - ${plan.ram} - ${plan.storage}) por R$ ${plan.monthlyPrice.toFixed(2)}/mês com proteção Anti-DDoS 228 Tbps.`
    );
    window.open(`https://wa.me/5511999999999?text=${textMsg}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070d18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="py-12 md:py-16 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4 shadow-sm">
            <HardDrive className="w-3.5 h-3.5 text-sky-500" />
            <span>Hardware 100% Dedicado &amp; IPMI Remoto</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Servidores Bare Metal de Alta Performance
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Potência computacional bruta sem compartilhamento de recursos. Ideal para grandes redes de Minecraft, Proxmox VE, Kubernetes ou clusters empresariais.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BARE_METAL_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-sky-50/90 via-white to-sky-50/50 dark:from-[#0d1f3b] dark:via-[#0a1526] dark:to-[#070e1b] border-2 border-sky-400 dark:border-sky-500 shadow-2xl shadow-sky-500/25 lg:-translate-y-3 hover:shadow-sky-500/40"
                    : "bg-white/95 dark:bg-[#0b1424] border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-sky-300 dark:hover:border-sky-700 hover:-translate-y-1.5"
                } backdrop-blur-sm`}
              >
                {plan.tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-black bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 fill-white" />
                      {plan.tag}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-sky-500 font-bold mt-1">
                    {plan.cores}
                  </p>

                  <div className="my-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    {plan.oldPrice && (
                      <span className="block text-xs text-slate-400 line-through">
                        R$ {plan.oldPrice.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-slate-500">R$</span>
                      <span className="text-4xl font-black text-slate-900 dark:text-white font-mono">
                        {plan.monthlyPrice.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">/mês</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 p-4 rounded-2xl bg-sky-50/50 dark:bg-slate-900/60 border border-sky-100 dark:border-slate-800 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Processador:</span>
                      <strong className="text-slate-800 dark:text-slate-200">{plan.cpu}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Memória RAM:</span>
                      <strong className="text-slate-800 dark:text-slate-200">{plan.ram}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Armazenamento:</span>
                      <strong className="text-slate-800 dark:text-slate-200">{plan.storage}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Conectividade:</span>
                      <strong className="text-emerald-500">{plan.uplink}</strong>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {plan.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="font-medium">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => handleHireBareMetal(plan)}
                    className={`w-full py-3.5 px-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                      plan.highlight
                        ? "bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-sky-500/35 hover:scale-[1.02]"
                        : "bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-500 text-sky-600 dark:text-sky-300 hover:text-white border border-sky-200 dark:border-sky-800 hover:scale-[1.02]"
                    }`}
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Contratar {plan.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Network className="w-6 h-6 text-sky-500 mx-auto mb-2" />
              <span className="block text-sm font-black text-slate-900 dark:text-white">IPMI / KVM</span>
              <span className="text-xs text-slate-500">Acesso remoto 24/7</span>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Shield className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
              <span className="block text-sm font-black text-slate-900 dark:text-white">228 Tbps DDoS</span>
              <span className="text-xs text-slate-500">Cloudflare Magic Transit</span>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Server className="w-6 h-6 text-sky-500 mx-auto mb-2" />
              <span className="block text-sm font-black text-slate-900 dark:text-white">Virtualização</span>
              <span className="text-xs text-slate-500">Proxmox, ESXi ou Linux</span>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <Zap className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <span className="block text-sm font-black text-slate-900 dark:text-white">SLA 99.99%</span>
              <span className="text-xs text-slate-500">Garantia corporativa</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
