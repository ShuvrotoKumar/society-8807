import type { Metadata } from "next";
import "./globals.css";
import favicon from "./favicon.png";

export const metadata: Metadata = {
  title: "Society-8807",
  description: "Professional wealth management services",
  icons: {
    icon: favicon.src,
  },
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} sizes="any" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Playfair Display, serif' }}>
        {children}
      </body>
    </html>
  );
}
