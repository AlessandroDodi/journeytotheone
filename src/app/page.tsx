import Hero from "@/components/home/Hero";
import FAQHome from "@/components/home/FAQHome";
import MainLayout from "@/components/layout/MainLayout";
import TextRevealSection from "@/components/home/TextRevealSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TeamSection from "@/components/home/TeamSection";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <TextRevealSection />
      <WhoWeAre />
      <ProjectsSection />
      <TeamSection />
      <FAQHome />
    </MainLayout>
  );
}
