import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed font import
import "./globals.css";
import Layout from "../components/Layout"; // Import the Layout component

const inter = Inter({ subsets: ["latin"] }); // Changed font variable

export const metadata: Metadata = {
  title: "My Portfolio", // Changed title
  description: "My personal portfolio website", // Changed description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* Changed className */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
