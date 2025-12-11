import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import SixthSection from "./organigram-section";

import GetStartedFree from "./get-started-section";

import NewsSection from "./news-section";
import ResultsSection from "./results-section";

export const revalidate = 60 * 60;

export default async function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />

      <NewsSection />

      <ResultsSection />

      <SecondSection />

      <SixthSection />

      <GetStartedFree />
    </div>
  );
}
