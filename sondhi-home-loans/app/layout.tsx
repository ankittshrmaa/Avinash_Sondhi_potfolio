import type { Metadata } from "next";
import { Public_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Public_Sans({ variable: "--font-public-sans", subsets: ["latin"] });
const serif = Source_Serif_4({ variable: "--font-source-serif", subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Avinash Sondhi | California Home Loans",
  description:
    "Avinash Sondhi, Branch Manager at RWM Home Loans. Purchase, refinance, FHA, VA, jumbo and investor loans across California. Free consultation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
