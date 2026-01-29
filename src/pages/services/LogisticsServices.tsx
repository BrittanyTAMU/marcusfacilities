import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Truck, CheckCircle, AlertTriangle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

const benefits = [
  "Keep loading docks and yards operational",
  "Minimize costly operational shutdowns",
  "Priority SLA with guaranteed response times",
  "24/7 emergency response availability",
  "Documentation for safety compliance",
  "Multi-facility contracts available",
];

const challenges = [
  "Operational shutdowns cost thousands per hour",
  "Loading docks are high-risk slip zones",
  "Forklift and truck traffic on ice is dangerous",
  "Supply chain delays cascade downstream",
];

export default function LogisticsServices() {
  return (
    <>
      <Helmet>
        <title>Industrial Ice Prevention Services Texas | Marcus Facilities</title>
        <meta
          name="description"
          content="Keep warehouses, distribution centers, and logistics hubs operational during Texas freeze events. Priority SLA, 24/7 response, loading dock ice control. Dallas-Fort Worth."
        />
        <meta
          name="keywords"
          content="industrial ice prevention Texas, warehouse freeze safety Dallas-Fort Worth, logistics hub de-icing DFW, distribution center ice control, loading dock freeze protection"
        />
        <link rel="canonical" href="https://marcusfacilities.com/services/logistics" />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero */}
        <section className="hero-gradient pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center">
                <Truck className="w-7 h-7 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider">
                Service Segment
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Logistics & Industrial<br />
              <span className="text-accent">Freeze-Event Services</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
              Keep your operations running during Texas freeze events. Priority SLA, dedicated crews, and guaranteed response times for warehouses, distribution centers, and logistics hubs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  <Shield className="w-5 h-5 mr-2" />
                  Request Priority SLA
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#faq">Common Questions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Priority SLA callout */}
        <section className="py-8 bg-accent">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <Clock className="w-10 h-10 text-accent-foreground" />
              <div>
                <h3 className="text-xl font-bold text-accent-foreground">
                  Priority SLA Available
                </h3>
                <p className="text-accent-foreground/80">
                  Guaranteed response times with dedicated crews for logistics and industrial facilities
                </p>
              </div>
              <Button variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
                <a href="#contact">Learn More</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges & Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-2 text-destructive mb-4">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">The Challenge</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Why Logistics Needs Coverage
                  </h2>
                  <ul className="space-y-4">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-success mb-4">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">Our Solution</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    How We Help
                  </h2>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
}
