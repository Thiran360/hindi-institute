import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import ServicesSection from "@/components/ServicesSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CompanyLogos from "@/components/CompanyLogos";
import FeatureComparison from "@/components/FeatureComparison";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CompanyLogos />
        <StatisticsSection />
        <CoursesSection />
        <FeatureComparison />
        <TestimonialsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
