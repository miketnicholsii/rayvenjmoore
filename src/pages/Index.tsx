import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import CareerSection from '@/components/home/CareerSection';
import ServicesSection from '@/components/home/ServicesSection';
import VenturesSection from '@/components/home/VenturesSection';
import StoriesSection from '@/components/home/StoriesSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import CTASection from '@/components/home/CTASection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CareerSection />
        <ServicesSection />
        <VenturesSection />
        <StoriesSection />
        <PhilosophySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
