import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Segments } from "@/components/sections/Segment";
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Marcus Facilities | Freeze Event Safety & Ice Control Services in Texas</title>
        <meta
          name="description"
          content="Professional freeze-event safety services for Texas HOAs, apartments, retail, and logistics properties. Pre-treatment, ice control, and 24/7 emergency response. Serving Houston, Dallas, Austin, San Antonio."
        />
        <meta
          name="keywords"
          content="HOA ice prevention Houston, commercial de-icing Austin, Texas ice hazard services, property slip-and-fall mitigation, apartment ice safety vendor, freeze event prevention Texas"
        />
        <link rel="canonical" href="https://marcusfacilities.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Marcus Facilities | Freeze Event Safety Services" />
        <meta property="og:description" content="Professional ice control and freeze-event prevention for Texas commercial and residential properties." />
        <meta property="og:type" content="website" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Marcus Facilities",
            "description": "Professional freeze-event safety and ice control services for Texas properties",
            "url": "https://marcusfacilities.com",
            "telephone": "+1-800-000-0000",
            "email": "operations@marcusfacilities.com",
            "areaServed": [
              { "@type": "City", "name": "Houston" },
              { "@type": "City", "name": "Dallas" },
              { "@type": "City", "name": "Austin" },
              { "@type": "City", "name": "San Antonio" }
            ],
            "serviceType": ["Ice Control", "Freeze Event Prevention", "Pre-Treatment", "Emergency Response"],
            "priceRange": "$$"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why does Texas get ice instead of snow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Texas freeze events typically occur when temperatures hover around 32°F (0°C). Rain falls as liquid but freezes on contact with cold surfaces, creating dangerous ice layers."
                }
              },
              {
                "@type": "Question",
                "name": "Who is responsible for ice on private property in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Property owners and managers are legally responsible for maintaining safe conditions on their premises, including during freeze events. This includes parking lots, walkways, stairs, ramps, and entrances."
                }
              },
              {
                "@type": "Question",
                "name": "Why do HOAs need pre-treatment services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pre-treatment is the most effective way to prevent ice formation. Applied before a freeze event, brine solutions prevent the bond between ice and pavement, making any ice that does form much easier to remove."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Problem />
        <Segments />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
