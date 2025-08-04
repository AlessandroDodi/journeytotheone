import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/home/Hero";
import FeaturesHome from "@/components/home/FeaturesHome";
import FAQHome from "@/components/home/FAQHome";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <FeaturesHome />
      <FAQHome />
    </MainLayout>
  );
}
