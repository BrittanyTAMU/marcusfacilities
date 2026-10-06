import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { HeaderCareer } from "@/career/HeaderCareer";
import { FooterCareer } from "@/career/FooterCareer";
import { HeroCareer } from "@/career/HeroCareer";
import { ValuePropCareer } from "@/career/ValuePropCareer";
import { HowItWorksCareer } from "@/career/HowItWorksCareer";
import { MarcusKnowsCareer } from "@/career/MarcusKnowsCareer";
import { ImposterCareer } from "@/career/ImposterCareer";
import { PrivacyEncourageCareer } from "@/career/PrivacyEncourageCareer";
import { WingmanCareer } from "@/career/WingmanCareer";
import { FounderCareer } from "@/career/FounderCareer";
import { AudienceBarCareer } from "@/career/AudienceBarCareer";
import { FinalCtaCareer } from "@/career/FinalCtaCareer";
import { ContactCareer } from "@/career/ContactCareer";
import { scrollToSection } from "@/lib/scroll";

export default function CareerHome() {
  const location = useLocation();
  useEffect(() => {
    const fromState = location.state?.scrollTo as string | undefined;
    if (!fromState) return;
    const id = fromState.startsWith("#") ? fromState : `#${fromState}`;
    const t = window.setTimeout(() => scrollToSection(id), 50);
    return () => window.clearTimeout(t);
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>MARCUS | Job Search Wingman — Keep Your Day Job</title>
        <meta
          name="description"
          content="Your job-search wingman. Keep your day job while we help find opportunities, manage applications, craft outreach, and keep follow-up on track."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://marcusfacilities.com/" />
      </Helmet>
      <HeaderCareer />
      <main>
        <HeroCareer />
        <ValuePropCareer />
        <HowItWorksCareer />
        <MarcusKnowsCareer />
        <ImposterCareer />
        <PrivacyEncourageCareer />
        <WingmanCareer />
        <FounderCareer />
        <AudienceBarCareer />
        <FinalCtaCareer />
        <ContactCareer />
      </main>
      <FooterCareer />
    </>
  );
}
