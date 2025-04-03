import { AppThemeProvider } from "@/features/theme/ThemeProvider";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Glow",
  description: "A social media application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={workSans.className}>
        <ReduxProvider>
          <AppThemeProvider>{children}</AppThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
