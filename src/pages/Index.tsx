import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ProcurementSidebar } from "@/components/sections/ProcurementSidebar";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { scrollToSection } from "@/lib/scroll";

const Index = () => {
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
        <title>Marcus Facilities | Government Contracting Services | Facilities & Logistics</title>
        <meta
          name="description"
          content="Professional facilities operations, logistics, environmental services, and compliance support for government agencies and prime contractors. NAICS 561210. Serving North Texas and Northern New Jersey."
        />
        <meta
          name="keywords"
          content="government contracting, facilities support services, NAICS 561210, logistics services, environmental services, compliance support, prime contractor, subcontractor, DFW metroplex, Northern New Jersey"
        />
        <link rel="canonical" href="https://marcusfacilities.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Marcus Facilities | Government Contracting Services" />
        <meta property="og:description" content="Trusted facilities operations, logistics, environmental services, and compliance support for government agencies and prime contractors." />
        <meta property="og:type" content="website" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Marcus Facilities",
            "description": "Professional facilities operations, logistics, environmental services, and compliance support for government contracting",
            "url": "https://marcusfacilities.com",
            "email": "sales@marcusfacilities.com",
            "areaServed": [
              { "@type": "City", "name": "Dallas-Fort Worth" },
              { "@type": "City", "name": "Northern New Jersey" }
            ],
            "serviceType": ["Facilities Operations", "Logistics & Transport", "Environmental Services", "Compliance & Support"]
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <About />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <Services />
              </div>
              <div className="lg:col-span-1">
                <ProcurementSidebar />
              </div>
            </div>
          </div>
        </section>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
