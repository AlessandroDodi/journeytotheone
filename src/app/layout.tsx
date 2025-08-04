import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeRegistry from "@/components/general/ThemeRegistry";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Sneaker Dev",
  description: "Selling and buying Antibot Services",
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
