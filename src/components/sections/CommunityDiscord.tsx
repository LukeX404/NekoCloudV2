"use client";

import React from "react";
import { MessageSquare, Users, Shield, ArrowUpRight } from "lucide-react";

export default function CommunityDiscord() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 p-8 sm:p-12 md:p-16 text-white overflow-hidden shadow-2xl shadow-sky-500/20">
          {/* Background decoration */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-sky-300/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white backdrop-blur-sm mb-4 border border-white/20">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Comunidade Ativa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Faça Parte da Nossa Comunidade no Discord
            </h2>

            <p className="mt-4 text-base sm:text-lg text-sky-100 max-w-2xl leading-relaxed">
              Tire dúvidas em tempo real com nossa equipe técnica, participe de sorteios mensais de servidores e conheça milhares de outros donos de servidores de Minecraft.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-sky-100">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-200" />
                <span>+12.000 membros no Discord</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-200" />
                <span>Suporte 24/7 via ticket</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl bg-white text-blue-700 font-extrabold text-base hover:bg-sky-50 transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-2 hover:scale-105 active:scale-100"
              >
                <span>Entrar no Servidor do Discord</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <span className="text-xs text-sky-200 text-center sm:text-left">
                Convite direto sem necessidade de cadastro prévio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
