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
        <title>Marcus Facilities</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Marcus Facilities"
        />
        <meta name="keywords" content="" />
        <meta property="og:title" content="Marcus Facilities" />
        <meta property="og:description" content="Marcus Facilities" />
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
