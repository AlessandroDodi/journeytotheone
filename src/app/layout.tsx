import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeRegistry from "@/components/general/ThemeRegistry";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "journey to the one",
  description: "we're on the hunt for the one product—and we'll share every hack, failure, and victory. building & shipping a product a month. follow along at journeytotheone.com.",
  keywords: "startup, product development, building in public, software development, journey, entrepreneurship, tech, innovation",
  authors: [{ name: "Pran & Alessandro" }],
  creator: "Pran & Alessandro",
  publisher: "journey to the one",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "journey to the one",
    description: "we're on the hunt for the one product—and we'll share every hack, failure, and victory. building & shipping a product a month.",
    url: "https://journeytotheone.com",
    siteName: "journey to the one",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "journey to the one - building & shipping products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "journey to the one",
    description: "we're on the hunt for the one product—and we'll share every hack, failure, and victory.",
    images: ["/og-image.png"],
    creator: "@journeytotheone",
  },
  metadataBase: new URL("https://journeytotheone.com"),
  alternates: {
    canonical: "https://journeytotheone.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeRegistry>
          <AppRouterCacheProvider>
            {children}
            <Toaster
              position="bottom-center"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "rgba(0, 0, 0, 0.85)",
                  color: "#fff",
                },
              }}
            />
          </AppRouterCacheProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
