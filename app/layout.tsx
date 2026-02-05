import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/ThemeContext";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
