import { useLenis } from './hooks/useLenis';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import TrustedBySection from './sections/TrustedBySection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import StatisticsSection from './sections/StatisticsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function App() {
  useLenis();

  return (
    <div className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TrustedBySection />
        <ServicesSection />
        <PortfolioSection />
        <StatisticsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
