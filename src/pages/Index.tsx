import { useState } from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import SectionNav from '@/components/ui/SectionNav';
import Preloader from '@/components/ui/Preloader';
import PageLoadAnimation, { AnimatedSection } from '@/components/ui/PageLoadAnimation';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import CredentialsSection from '@/components/home/CredentialsSection';
import VenturesSection from '@/components/home/VenturesSection';
import LeadershipSection from '@/components/home/LeadershipSection';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import SpeakingSection from '@/components/home/SpeakingSection';
import CTASection from '@/components/home/CTASection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        canonical="/"
        description="Rayven J. Moore, CPA - Clarity for complex financial decisions. Finance leader, entrepreneur, and Houston businessman helping organizations, entrepreneurs, and communities navigate complexity and build durable value."
      />
      <Preloader onComplete={() => setIsLoaded(true)} />
      <ScrollProgress />
      <Header />
      <SectionNav />
      <PageLoadAnimation isLoaded={isLoaded}>
        <main>
          <AnimatedSection>
            <HeroSection />
          </AnimatedSection>
          <AnimatedSection>
            <AboutSection />
          </AnimatedSection>
          <AnimatedSection>
            <CredentialsSection />
          </AnimatedSection>
          <AnimatedSection>
            <VenturesSection />
          </AnimatedSection>
          <AnimatedSection>
            <LeadershipSection />
          </AnimatedSection>
          <AnimatedSection>
            <CaseStudiesPreview />
          </AnimatedSection>
          <AnimatedSection>
            <SpeakingSection />
          </AnimatedSection>
          <AnimatedSection>
            <CTASection />
          </AnimatedSection>
          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        </main>
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </PageLoadAnimation>
    </div>
  );
};

export default Index;
