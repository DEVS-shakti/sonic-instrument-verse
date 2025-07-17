import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstrumentCatalogue } from "@/components/InstrumentCatalogue";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <InstrumentCatalogue />
      <Footer />
    </div>
  );
};

export default Index;
