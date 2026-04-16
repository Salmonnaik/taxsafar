import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';

export default function Home() {
  return (
    <div className="min-h-screen font-body bg-mesh-animated">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Testimonials />
        <CTASection />
        <FAQs />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
