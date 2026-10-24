"use client";

import React from "react";
import { FaDiscord } from "react-icons/fa";
import { Users, Ticket, ArrowUpRight, Gift, Hash, ShieldCheck, Sparkles } from "lucide-react";

export default function CommunityDiscord() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1e2338] via-[#121626] to-[#0a0d18] border border-indigo-500/30 p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-indigo-950/50 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                <FaDiscord className="w-4 h-4 text-[#5865F2]" />
                <span>Comunidade Ativa</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Faça Parte da Nossa Comunidade no{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300">
                  Discord
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Tire dúvidas em tempo real com nossa equipe técnica, participe de sorteios mensais de servidores e conheça milhares de outros donos de servidores de Minecraft.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-md mx-auto lg:mx-0">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-white">+12.000 membros</span>
                    <span className="text-xs text-indigo-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      1.840 online agora
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <Ticket className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-white">Suporte 24/7 via ticket</span>
                    <span className="text-xs text-sky-300">Atendimento em minutos</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold text-base transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-100 flex items-center justify-center gap-2.5"
                >
                  <FaDiscord className="w-5 h-5" />
                  <span>Entrar no Servidor do Discord</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-slate-400">
                  Convite direto sem necessidade de cadastro
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#1e202c]/90 border border-indigo-500/20 p-5 sm:p-6 shadow-2xl backdrop-blur-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#5865F2] flex items-center justify-center text-white font-black text-lg">
                      N
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        NekoCloud Oficial
                        <ShieldCheck className="w-4 h-4 text-sky-400" />
                      </h4>
                      <span className="text-[11px] text-slate-400">Comunidade de Jogadores &amp; Devs</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Hash className="w-4 h-4 text-slate-400" />
                      <span className="font-semibold text-white">anuncios-e-updates</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300">Novidades</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-amber-400" />
                      <span className="font-semibold text-white">sorteios-mensais</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300">Servidores Grátis</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Hash className="w-4 h-4 text-slate-400" />
                      <span className="font-semibold text-white">suporte-e-duvidas</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">Ativo 24/7</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#141620] border border-white/5 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-sky-500 text-white font-bold flex items-center justify-center text-[10px]">
                      S
                    </div>
                    <span className="font-bold text-sky-400">Suporte NekoCloud</span>
                    <span className="text-[10px] text-slate-500">hoje às 18:42</span>
                  </div>
                  <p className="text-slate-300 pl-8 leading-relaxed">
                    Sorteio de um servidor <strong className="text-white">Diamante (32GB DDR5)</strong> aberto no canal <span className="text-indigo-400">#sorteios-mensais</span>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
