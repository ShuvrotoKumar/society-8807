import React from 'react';
import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero-section';
import { IntroductionSection } from '@/components/sections/introduction-section';
import { WhoWeServeSection } from '@/components/sections/who-we-serve-section';
import { OurServicesSection } from '@/components/sections/our-services-section';
import { OurProcessSection } from '@/components/sections/our-process-section';
import { MeetAdvisorSection } from '@/components/sections/meet-advisor-section';
import { CtaSection } from '@/components/sections/cta-section';
import { Footer } from '@/components/layout/footer';
import { AboutSection } from '@/components/sections/about';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <WhoWeServeSection />
         <OurServicesSection />
         <OurProcessSection />
        <MeetAdvisorSection />
        <CtaSection />
        {/* <IntroductionSection />   */}
      </main>
      
      <Footer />
    </div>
  );
}
