import Contact from '@/FrontEnd/Contact/Contact';
import Navbar from '@/FrontEnd/Components/Navbar';
import Footer from '@/FrontEnd/Components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Add a black header block to provide contrast for the fixed Navbar which expects a dark background initially */}
      <div className="h-[120px] bg-[#111111] w-full relative z-40">
        <Navbar />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
