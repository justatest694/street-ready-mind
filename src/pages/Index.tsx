import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DifferenceSection from "@/components/DifferenceSection";
import WhoForSection from "@/components/WhoForSection";
import TrainingSection from "@/components/TrainingSection";
import ContactSection from "@/components/ContactSection";
import ConfidenceSection from "@/components/ConfidenceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DifferenceSection />
      <WhoForSection />
      <TrainingSection />
      <ContactSection />
      <ConfidenceSection />

      <footer className="py-6 text-center text-muted-foreground text-sm border-t border-border">
        <p>© 2026 LS Street MMA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
