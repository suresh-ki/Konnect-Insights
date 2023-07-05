import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import TagManager from "@/components/TagManager/TagManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Konnect Insights - An omni-channel customer experience management platform",
  description: "An omni-channel customer experience management platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense>
        <TagManager />
      </Suspense>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
