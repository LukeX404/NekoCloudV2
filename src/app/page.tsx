import {
  Navbar,
  Hero,
  VersionsTicker,
  PingTest,
  Plans,
  Features,
  Showcase,
  CommunityDiscord,
  Testimonials,
  Faq,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070d18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <VersionsTicker />
        <PingTest />
        <Plans />
        <Features />
        <Showcase />
        <CommunityDiscord />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
