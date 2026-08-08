import Hero from '@/FrontEnd/Home/Hero';
import AboutWork from '@/FrontEnd/Home/Aboutwork';
import CommunityImpact from '@/FrontEnd/Home/CommunityImpact';
import Instragram from '@/FrontEnd/Home/Instragram';
import Footer from '@/FrontEnd/Components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AboutWork />
      <CommunityImpact />
      <Instragram />
      <Footer />
    </main>
  );
}
