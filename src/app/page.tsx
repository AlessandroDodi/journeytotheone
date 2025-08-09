import Hero from "@/components/home/Hero";
import FAQHome from "@/components/home/FAQHome";
import MainLayout from "@/components/layout/MainLayout";
import TextRevealSection from "@/components/home/TextRevealSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <TextRevealSection />
      <WhoWeAre />
      <ProjectsSection />
      <FAQHome />
    </MainLayout>
  );
}
