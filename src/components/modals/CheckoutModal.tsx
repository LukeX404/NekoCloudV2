"use client";

import React, { useState } from "react";
import { Plan, LocationInfo } from "@/types";
import { X, CheckCircle, Shield, MessageCircle, ExternalLink, Zap } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
  location: LocationInfo;
  billingCycle: "monthly" | "quarterly";
}

export default function CheckoutModal({
  isOpen,
  onClose,
  plan,
  location,
  billingCycle,
}: CheckoutModalProps) {
  const [serverName, setServerName] = useState("");
  const [softwareType, setSoftwareType] = useState("Paper (1.21.x)");
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen || !plan) return null;

  const basePrice = billingCycle === "monthly" 
    ? plan.monthlyPrice 
    : Math.round(plan.monthlyPrice * 3 * 0.9);

  const handleFinish = (method: "whatsapp" | "discord") => {
    const textMsg = encodeURIComponent(
      `Olá! Gostaria de contratar o plano *${plan.name}* (${plan.ram}GB RAM) na localização *${location.name}* (${billingCycle === "quarterly" ? "Trimestral" : "Mensal"}).\nNome do Servidor: ${serverName || "Meu Servidor"}\nSoftware: ${softwareType}`
    );

    if (method === "whatsapp") {
      window.open(`https://wa.me/5511999999999?text=${textMsg}`, "_blank");
    } else {
      window.open(`https://discord.gg/nekocloud`, "_blank");
    }

    setOrderComplete(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0d1b32] border border-sky-200 dark:border-sky-900 shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-900 dark:text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!orderComplete ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-xl bg-sky-500/10 text-sky-500">
                <Zap className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold">Contratar Plano {plan.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {location.name} • {plan.ram} GB RAM DDR5 • {billingCycle === "quarterly" ? "Ciclo Trimestral (-10%)" : "Ciclo Mensal"}
                </p>
              </div>
            </div>

            {/* Price overview card */}
            <div className="my-5 p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/60 flex items-center justify-between">
              <div>
                <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Total a pagar:</span>
                <span className="text-2xl font-black text-sky-600 dark:text-sky-400">
                  R$ {basePrice.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-xs text-slate-500 ml-1">
                  /{billingCycle === "quarterly" ? "trimestre" : "mês"}
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Ativação Imediata
                </span>
              </div>
            </div>

            {/* Quick customization form (No Login needed) */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nome do seu Servidor (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: CraftWorld, NekoSurvival"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-sky-500 dark:focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Versão / Software Inicial
                </label>
                <select
                  value={softwareType}
                  onChange={(e) => setSoftwareType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-sky-500 dark:focus:border-sky-400"
                >
                  <option value="Paper (1.21.x)">Paper 1.21.x (Recomendado)</option>
                  <option value="Purpur (1.20.x)">Purpur 1.20.x</option>
                  <option value="Forge (1.20.1)">Forge 1.20.1 (Modpacks)</option>
                  <option value="Fabric (1.21.x)">Fabric 1.21.x</option>
                  <option value="Spigot (1.8.8)">Spigot 1.8.8 (PvP Clássico)</option>
                  <option value="Bedrock Dedicated">Bedrock Oficial (Celular/Console)</option>
                  <option value="BungeeCord/Velocity">Velocity (Rede / Proxy)</option>
                </select>
              </div>
            </div>

            {/* Action Buttons: Instant WhatsApp or Discord */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <button
                onClick={() => handleFinish("whatsapp")}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pedir no WhatsApp com Ativação Rápida</span>
              </button>

              <button
                onClick={() => handleFinish("discord")}
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir Ticket no Discord da NekoCloud</span>
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
              🔒 Pagamento seguro via Pix (com aprovação imediata) ou Cartão de Crédito.
            </p>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold">Solicitação Enviada!</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Nossa equipe de atendimento já foi notificada. Assim que você enviar a mensagem no chat, seu servidor será provisionado em instantes!
            </p>
            <button
              onClick={() => {
                setOrderComplete(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm transition-all"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
