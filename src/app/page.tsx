import Hero from '@/FrontEnd/Home/Hero';
import AboutWork from '@/FrontEnd/Home/AboutWork';
import CommunityImpact from '@/FrontEnd/Home/CommunityImpact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AboutWork />
      <CommunityImpact />
    </main>
  );
}
