# ☁️ NekoCloud V2 — Next-Gen Minecraft & Cloud Hosting Landing Page

> ⚠️ **Aviso de Propósito Educacional / Projeto de Aprendizado:**  
> Este projeto é uma **landing page desenvolvida para fins de estudo, aprendizado e portfólio**. Trata-se de uma refatoração e reconstrução completa de uma versão antiga criada no passado ([NekoCloud v1](https://github.com/LukeX404/NekoCloud)), tendo como principal objetivo explorar os recursos mais recentes do ecossistema **Next.js (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS**, além de técnicas avançadas de UI/UX, temas dinâmicos e design responsivo.

---

## 📖 Sobre o Projeto

A **NekoCloud V2** é a recriação conceitual de um portal de hospedagem para servidores de jogos e computação em nuvem, com foco especial na comunidade de **Minecraft (Java & Bedrock)**, **VPS Cloud KVM** e **Servidores Bare Metal Dedicados**.

O projeto conta com:
- Design gamer/tech premium com paleta selecionada em tons de **Branco com Azul** (Modo Claro) e **Deep Navy com Azul Neon** (Modo Noturno).
- Ausência deliberada de sistema de autenticação complexo no backend, contando com uma tela demonstrativa e contratação direta e rápida via canais oficiais (WhatsApp e Discord).
- Arquitetura moderna baseada em rotas dedicadas e componentes reutilizáveis.

---

## ✨ Funcionalidades e Destaques

### 🎨 Design System & Temas (Azul & Branco / Azul Noturno)
- Alternador de tema em tempo real (Sol ☀️ / Lua 🌙) presente no cabeçalho.
- Persistência automática da preferência do usuário via `localStorage`.
- Estilização moderna com efeitos de vidro (*glassmorphism*), sombras volumétricas e iluminação suave.

### 📱 Experiência Mobile-First Total
- Navegação fluida em smartphones, tablets e monitores ultra-wide.
- Menu drawer animado com links rápidos e acesso direto à área do cliente.

### 🖥️ Hardware de Alta Performance
- Destaque para os novos processadores **AMD Ryzen 9 9950X (Zen 5)** com boost de até 5.7 GHz.
- Proteção Anti-DDoS corporativa com **Cloudflare Magic Transit** mitigando até 228 Tbps.
- Armazenamento em SSDs NVMe Gen4 Enterprise com altas taxas de IOPS.

### 🗺️ Páginas e Seções Implementadas
1. **Página Inicial (`/`)**:
   - Hero dinâmico com console simulado de servidor em tempo real (TPS 20.0, Uptime 99.9%).
   - Seletor de localização com teste de latência e cópia do IP de teste com 1 clique (Brasil 🇧🇷 e Canadá 🇨🇦).
   - Grade com os 6 planos icônicos (Madeira, Ferro, Redstone, Ouro, Diamante e Netherita).
   - Modal de checkout sem fricção para solicitação rápida.
   - Diferenciais, contadores de métricas animadas, depoimentos de clientes e FAQ sanfonado.
2. **Minecraft Hosting (`/minecraft`)**:
   - Página exclusiva dedicada a jogadores e comunidades de Minecraft Java e Bedrock (Crossplay GeyserMC).
3. **VPS Cloud (`/vps`)**:
   - Planos de servidores virtuais (Start, Pro, Ultra e Enterprise) com seletor de ciclo (Mensal/Anual com 15% OFF) e escolha de sistema operacional (Ubuntu, Debian, AlmaLinux, Windows Server).
4. **Bare Metal (`/bare-metal`)**:
   - Infraestrutura dedicada para grandes redes (Ryzen 7 7700X, Ryzen 9 9950X e AMD EPYC 9354 com IPMI dedicado).
5. **Área do Cliente Demonstrativa (`/login`)**:
   - Interface conceitual de login com opções sociais não funcionais de autenticação via **Google** e **Steam**.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router & Turbopack)
- **Biblioteca de Interface:** [React](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/) e [React Icons](https://react-icons.github.io/react-icons/)
- **Fontes:** Google Fonts (`Geist Sans` & `Geist Mono`)

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js instalado (v18.17 ou superior, recomendado v20+)
- npm, yarn ou pnpm

### Passos:
1. Clone o repositório:
   ```bash
   git clone https://github.com/LukeX404/NekoCloudV2.git
   cd NekoCloudV2
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📜 Licença e Direitos

- Este projeto foi desenvolvido exclusivamente para fins de estudo e aprimoramento técnico.
- *Minecraft* é uma marca registrada da Mojang Studios / Microsoft. A NekoCloud é um projeto conceitual independente sem afiliação direta.
