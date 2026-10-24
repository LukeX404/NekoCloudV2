"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PLANS_BR, PLANS_CAD, LOCATIONS } from "@/data/plans";
import { Plan, LocationId } from "@/types";
import CheckoutModal from "@/components/modals/CheckoutModal";
import { Check, Zap, Sparkles, Layers, ShieldCheck, Cpu } from "lucide-react";

export default function Plans() {
  const [selectedLoc, setSelectedLoc] = useState<LocationId>("br");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<Plan | null>(null);

  const plans = selectedLoc === "br" ? PLANS_BR : PLANS_CAD;
  const currentLocInfo = LOCATIONS[selectedLoc];

  const handleOpenCheckout = (plan: Plan) => {
    setSelectedPlanForModal(plan);
  };

  return (
    <section id="planos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-sky-500" />
            <span>Planos de Hospedagem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Escolha o Plano Perfeito para sua Aventura
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Todos os planos incluem processador <strong className="text-slate-900 dark:text-white">AMD Ryzen 9 9950X (5.7GHz)</strong>, proteção Anti-DDoS de 228 Tbps, subdomínio grátis e backups diários.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center shadow-sm">
            <button
              onClick={() => setSelectedLoc("br")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedLoc === "br"
                  ? "bg-white dark:bg-sky-600 text-slate-900 dark:text-white shadow-md shadow-sky-500/15"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Image src="/flags/brazil.svg" alt="Brasil" width={20} height={20} className="rounded" />
              <span>Brasil (SP)</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
                10-25ms
              </span>
            </button>

            <button
              onClick={() => setSelectedLoc("cad")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedLoc === "cad"
                  ? "bg-white dark:bg-sky-600 text-slate-900 dark:text-white shadow-md shadow-sky-500/15"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Image src="/flags/canada.svg" alt="Canadá" width={20} height={20} className="rounded" />
              <span>Canadá (BHS)</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-sky-500/15 text-sky-600 dark:text-sky-300">
                120-150ms
              </span>
            </button>
          </div>

          <div className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white dark:bg-[#0d1b32] text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "quarterly"
                  ? "bg-white dark:bg-[#0d1b32] text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>Trimestral</span>
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm">
                -10%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {plans.map((plan) => {
            const finalPrice = billingCycle === "monthly"
              ? plan.monthlyPrice
              : Math.round(plan.monthlyPrice * 0.9);

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  plan.highlight
                    ? "bg-gradient-to-b from-sky-50/90 via-white to-sky-50/50 dark:from-[#0d1f3b] dark:via-[#0a1526] dark:to-[#070e1b] border-2 border-sky-400 dark:border-sky-500 shadow-2xl shadow-sky-500/20 hover:shadow-sky-500/35 hover:-translate-y-2"
                    : "bg-white/95 dark:bg-[#0b1424] border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-sky-300 dark:hover:border-sky-600 hover:-translate-y-1.5"
                } p-6 sm:p-8 backdrop-blur-sm group`}
              >
                {plan.tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-black bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/40 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 fill-white" />
                      {plan.tag}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      Plano {plan.name}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      {currentLocInfo.name}
                    </span>
                  </div>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight font-mono">
                      {plan.ram}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-sky-500 leading-tight">
                        GB RAM
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        DDR5 ECC
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                    {plan.oldMonthlyPrice && (
                      <span className="block text-xs text-slate-400 line-through">
                        De R$ {plan.oldMonthlyPrice.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-slate-500">R$</span>
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        {finalPrice.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">/mês</span>
                    </div>
                    {billingCycle === "quarterly" && (
                      <span className="text-[11px] text-emerald-500 font-bold">
                        Cobrado trimestralmente com desconto
                      </span>
                    )}
                  </div>

                  <div className="my-4 p-3 rounded-2xl bg-sky-50/50 dark:bg-slate-900/60 border border-sky-100 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2">
                    <span className="text-sm">💡</span>
                    <span>{plan.specs.recommendedVersions}</span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium">{plan.specs.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium">{plan.specs.storage}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium">{plan.specs.antiDDoS}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>Subdomínio gratuito incluso</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>Backups automáticos inclusos</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>Suporte Crossplay Java &amp; Bedrock</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>Instalação de Mods/Plugins com 1 clique</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => handleOpenCheckout(plan)}
                    className={`w-full py-3.5 px-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                      plan.highlight
                        ? "bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-sky-500/35 hover:shadow-sky-500/50 hover:scale-[1.02]"
                        : "bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-500 text-sky-600 dark:text-sky-300 hover:text-white border border-sky-200 dark:border-sky-800/80 hover:scale-[1.02]"
                    }`}
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Contratar Plano {plan.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CheckoutModal
        isOpen={Boolean(selectedPlanForModal)}
        onClose={() => setSelectedPlanForModal(null)}
        plan={selectedPlanForModal}
        location={currentLocInfo}
        billingCycle={billingCycle}
      />
    </section>
  );
}
