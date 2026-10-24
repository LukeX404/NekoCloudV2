"use client";

import React, { useEffect, useState } from "react";
import { Users, Server, Globe2, Award } from "lucide-react";

export default function Showcase() {
  const [stats, setStats] = useState({
    clients: 0,
    servers: 0,
    countries: 0,
    years: 0,
  });

  useEffect(() => {
    const duration = 1800; // ms
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setStats({
        clients: Math.floor(ease * 60000),
        servers: Math.floor(ease * 450000),
        countries: Math.floor(ease * 5),
        years: Math.floor(ease * 6),
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      icon: Users,
      value: `+${stats.clients.toLocaleString("pt-BR")}`,
      label: "Clientes Confiantes",
      sub: "Comunidades e jogadores ativos",
    },
    {
      icon: Server,
      value: `+${stats.servers.toLocaleString("pt-BR")}`,
      label: "Servidores Criados",
      sub: "Iniciados com sucesso",
    },
    {
      icon: Globe2,
      value: `${stats.countries} Países`,
      label: "Presença Global",
      sub: "Datacenters interconectados",
    },
    {
      icon: Award,
      value: `${stats.years}+ Anos`,
      label: "No Mercado",
      sub: "Especialistas em Minecraft",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-sky-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4 border border-sky-500/30">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-mono">
                  {item.value}
                </span>
                <span className="mt-2 text-sm sm:text-base font-bold text-sky-200">
                  {item.label}
                </span>
                <span className="mt-0.5 text-xs text-sky-400/80">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
