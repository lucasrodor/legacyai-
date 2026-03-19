import { Navbar } from "@/components/navbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ProblemSection } from "@/components/problem-section";
import { SolutionBento } from "@/components/solution-bento";
import { AudienceSparkles } from "@/components/audience-sparkles";
import { SuccessCards } from "@/components/success-cards";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsMarqueeV2 } from "@/components/testimonials-marquee-v2";
import { FAQAccordion } from "@/components/faq-accordion";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* 1. Hero Section - Stitch ID: bbefdd7946954ab088c9241f3796679b */}
      <HeroGeometric />
      
      {/* 2. Pain Points Section - Stitch ID: 250f47f93a27485aa2b11de0e7fd80c8 */}
      <ProblemSection />
      
      {/* 3. Features Section - Stitch ID: 3cd9d1acaabe454195718e7198cdb271 */}
      <SolutionBento />
      
      {/* 4. Target Audience Section - Stitch ID: 1e005e02ef4343f8b83fbe629dff677e */}
      <AudienceSparkles />
      
      {/* 4.1 Success Highlights */}
      <SuccessCards />
      
      {/* 5. Process & Testimonials */}
      <ProcessSection />
      <TestimonialsMarqueeV2 />
      
      {/* 6. FAQ - Stitch ID: aa9b539ff19b482494bb3528aa961e74 */}
      <FAQAccordion />
      
      <Footer />
    </main>
  );
}
