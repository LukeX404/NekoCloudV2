"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PLANS_BR, PLANS_CAD, LOCATIONS } from "@/data/plans";
import { Plan, LocationId } from "@/types";
import CheckoutModal from "@/components/modals/CheckoutModal";
import { Check, Zap, Server, Shield, Sparkles, Layers } from "lucide-react";

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
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
            <Layers className="w-3.5 h-3.5 text-sky-500" />
            <span>Planos de Hospedagem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Escolha o Plano Perfeito para sua Aventura
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Todos os planos incluem processador <strong className="text-slate-900 dark:text-white">AMD Ryzen 9 9950X</strong>, proteção Anti-DDoS de 228 Tbps, subdomínio grátis e backups automáticos.
          </p>
        </div>

        {/* Controls: Location Selector + Billing Cycle */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Location Selector */}
          <div className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center shadow-sm">
            <button
              onClick={() => setSelectedLoc("br")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selectedLoc === "br"
                  ? "bg-white dark:bg-sky-600 text-slate-900 dark:text-white shadow-md shadow-sky-500/10"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Image src="/flags/brazil.svg" alt="Brasil" width={20} height={20} className="rounded" />
              <span>Brasil (SP)</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                10-25ms
              </span>
            </button>

            <button
              onClick={() => setSelectedLoc("cad")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selectedLoc === "cad"
                  ? "bg-white dark:bg-sky-600 text-slate-900 dark:text-white shadow-md shadow-sky-500/10"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Image src="/flags/canada.svg" alt="Canadá" width={20} height={20} className="rounded" />
              <span>Canadá (BHS)</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-300">
                120-150ms
              </span>
            </button>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white dark:bg-[#0d1b32] text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === "quarterly"
                  ? "bg-white dark:bg-[#0d1b32] text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>Trimestral</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950">
                -10%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => {
            const finalPrice = billingCycle === "monthly"
              ? plan.monthlyPrice
              : Math.round(plan.monthlyPrice * 0.9);

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  plan.highlight
                    ? "bg-gradient-to-b from-sky-50 to-white dark:from-[#0d1f3b] dark:to-[#091323] border-2 border-sky-500 shadow-xl shadow-sky-500/15 hover:shadow-2xl hover:shadow-sky-500/25 md:-translate-y-2"
                    : "bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-800"
                } p-6 sm:p-8`}
              >
                {/* Popular or Recommended Tag */}
                {plan.tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {plan.tag}
                    </span>
                  </div>
                )}

                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Plano {plan.name}
                    </h3>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      {currentLocInfo.name}
                    </span>
                  </div>

                  {/* RAM Feature */}
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                      {plan.ram}
                    </span>
                    <span className="text-xl font-bold text-sky-600 dark:text-sky-400">
                      GB RAM DDR5
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="mt-5 pb-5 border-b border-slate-100 dark:border-slate-800/80">
                    {plan.oldMonthlyPrice && (
                      <span className="block text-xs text-slate-400 line-through">
                        De R$ {plan.oldMonthlyPrice.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-slate-500">R$</span>
                      <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        {finalPrice.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/mês</span>
                    </div>
                    {billingCycle === "quarterly" && (
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                        Cobrado trimestralmente com 10% OFF
                      </span>
                    )}
                  </div>

                  {/* Target version helper note */}
                  <div className="my-4 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                    💡 {plan.specs.recommendedVersions}
                  </div>

                  {/* Specs List */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{plan.specs.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{plan.specs.storage}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{plan.specs.antiDDoS}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Subdomínio gratuito incluso</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Backups automáticos inclusos</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Suporte Crossplay Java &amp; Bedrock</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Painel intuitivo com 1 clique</span>
                    </li>
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8">
                  <button
                    onClick={() => handleOpenCheckout(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md ${
                      plan.highlight
                        ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-sky-500/30 hover:shadow-sky-500/40"
                        : "bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-500 dark:hover:bg-sky-600 text-sky-600 dark:text-sky-300 hover:text-white border border-sky-200 dark:border-sky-800"
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    <span>Contratar Plano {plan.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Checkout Modal */}
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
