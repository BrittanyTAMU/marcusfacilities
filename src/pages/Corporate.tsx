import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { HeaderV2 } from "@/v2/HeaderV2";
import { FooterV2 } from "@/v2/FooterV2";
import { HeroV2 } from "@/v2/HeroV2";
import { CapabilitiesV2 } from "@/v2/CapabilitiesV2";
import { FAQV2 } from "@/v2/FAQV2";
import { ContactV2 } from "@/v2/ContactV2";
import { scrollToSection } from "@/lib/scroll";

export default function Corporate() {
  const location = useLocation();
  const scrollTo = location.state?.scrollTo as string | undefined;

  useEffect(() => {
    if (scrollTo) {
      const id = scrollTo.startsWith("#") ? scrollTo : `#${scrollTo}`;
      scrollToSection(id);
    }
  }, [scrollTo]);

  return (
    <>
      <Helmet>
        <title>Marcus Facilities | Precision Consulting for Complex Infrastructure</title>
        <meta
          name="description"
          content="Management consulting and technical operations. Empowering organizations through technical expertise, operational excellence, and mission-critical support. North Texas and Northern New Jersey."
        />
        <meta name="keywords" content="management consulting, technical operations, compliance, infrastructure, Texas, New Jersey" />
        <link rel="canonical" href="https://marcusfacilities.com/" />
      </Helmet>
      <HeaderV2 />
      <main>
        <HeroV2 />
        <CapabilitiesV2 />
        <FAQV2 />
        <ContactV2 />
      </main>
      <FooterV2 />
    </>
  );
}
