import { Helmet } from "react-helmet-async";
import { HeaderV2 } from "@/v2/HeaderV2";
import { FooterV2 } from "@/v2/FooterV2";
import { AboutUsV2 } from "@/v2/AboutUsV2";

export default function AboutV2() {
  return (
    <>
      <Helmet>
        <title>About Us | Marcus Facilities</title>
        <meta
          name="description"
          content="Marcus Facilities is led by a 3x engineer and Texas A&M alumna. Minority woman-owned management consulting with a systems-engineering approach."
        />
        <link rel="canonical" href="https://marcusfacilities.com/#/about" />
      </Helmet>

      <HeaderV2 />
      <main className="pt-24">
        <AboutUsV2 />
      </main>
      <FooterV2 />
    </>
  );
}
