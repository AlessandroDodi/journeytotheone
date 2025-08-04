import { ReactNode } from "react";
import Footer from "./Footer";
import ResponsiveAppBar from "./appbar/AppBar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
}
