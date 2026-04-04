import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richard Carpino | IT Professional Portfolio",
  description:
    "Portfolio website for Richard Carpino featuring IT credentials, programming projects, AI skills, and Unity game development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}