import Hero from "@/components/home/Hero";
import FAQHome from "@/components/home/FAQHome";
import MainLayout from "@/components/layout/MainLayout";
import TextRevealSection from "@/components/home/TextRevealSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <TextRevealSection />
      <ProjectsSection />
      <FAQHome />
    </MainLayout>
  );
}
