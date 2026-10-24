"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BARE_METAL_PLANS, BareMetalPlan } from "@/data/plans";
import { HardDrive, Cpu, ShieldCheck, Check, Zap, Server, Network, Shield } from "lucide-react";

export default function BareMetalPage() {
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
        {/* Bare Metal Hero */}
        <section className="py-12 md:py-16 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4">
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

        {/* Bare Metal Plans Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BARE_METAL_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-sky-50 to-white dark:from-[#0d1f3b] dark:to-[#091323] border-2 border-sky-500 shadow-2xl shadow-sky-500/20 lg:-translate-y-3"
                    : "bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-800"
                }`}
              >
                {plan.tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md">
                      {plan.tag}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold mt-1">
                    {plan.cores}
                  </p>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    {plan.oldPrice && (
                      <span className="block text-xs text-slate-400 line-through">
                        R$ {plan.oldPrice.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-slate-500">R$</span>
                      <span className="text-4xl font-black text-slate-900 dark:text-white">
                        {plan.monthlyPrice.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/mês</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Processador:</span>
                      <strong className="text-slate-800 dark:text-slate-200">{plan.cpu}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Memória RAM:</span>
                      <strong className="text-slate-800 dark:text-slate-200">{plan.ram}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Armazenamento:</span>
                      <strong className="text-slate-800 dark:text-slate-200">{plan.storage}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Conectividade:</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">{plan.uplink}</strong>
                    </div>
                  </div>

                  {/* Detailed Specs list */}
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {plan.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => handleHireBareMetal(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                      plan.highlight
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-sky-500/30"
                        : "bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-500 text-sky-600 dark:text-sky-300 hover:text-white border border-sky-200 dark:border-sky-800"
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    <span>Contratar {plan.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bare Metal Specs Badges */}
        <section className="max-w-5xl mx-auto px-4 mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Network className="w-6 h-6 text-sky-500 mx-auto mb-2" />
              <span className="block text-sm font-bold text-slate-900 dark:text-white">IPMI / KVM</span>
              <span className="text-xs text-slate-500">Acesso remoto total</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Shield className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
              <span className="block text-sm font-bold text-slate-900 dark:text-white">228 Tbps DDoS</span>
              <span className="text-xs text-slate-500">Cloudflare Magic Transit</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Server className="w-6 h-6 text-sky-500 mx-auto mb-2" />
              <span className="block text-sm font-bold text-slate-900 dark:text-white">Virtualização</span>
              <span className="text-xs text-slate-500">Proxmox, ESXi ou Linux</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Zap className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <span className="block text-sm font-bold text-slate-900 dark:text-white">SLA 99.99%</span>
              <span className="text-xs text-slate-500">Garantia contratual</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
