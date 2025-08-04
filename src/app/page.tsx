import Hero from "@/components/home/Hero";
import FeaturesHome from "@/components/home/FeaturesHome";
import FAQHome from "@/components/home/FAQHome";
import MainLayout from "@/components/layout/MainLayout";
import TextRevealSection from "@/components/home/TextRevealSection";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <TextRevealSection />
      <FeaturesHome />
      <FAQHome />
    </MainLayout>
  );
}
