import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeaderCareer } from "@/career/HeaderCareer";
import { FooterCareer } from "@/career/FooterCareer";
import { FounderCareer } from "@/career/FounderCareer";
import { WingmanCareer } from "@/career/WingmanCareer";

export default function CareerAbout() {
  useEffect(() => {
    window.location.replace("/about/");
  }, []);
  return (
    <>
      <Helmet>
        <title>About | MARCUS Job Search Wingman</title>
        <meta
          name="description"
          content="Meet Brittany Washington — 3x engineer and founder of MARCUS. Built from a real job search, not a recruiting playbook."
        />
        <link rel="canonical" href="https://www.marcusfacilities.com/about/" />
      </Helmet>
      <HeaderCareer />
      <main>
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl pt-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Home
          </Link>
        </div>
        <FounderCareer />
        <WingmanCareer />
      </main>
      <FooterCareer />
    </>
  );
}
