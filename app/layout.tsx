import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Society Max - Wealth Management",
  description: "Professional wealth management services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: 'Playfair Display, serif' }}>
        {children}
      </body>
    </html>
  );
}
