import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WeKrax | Fusión Digital",
  description: "Diseño Web de Impacto + Sistemas IA Autónomos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${spaceGrotesk.variable}`}>
      <head>
        {/* Incluimos los íconos de Material Symbols desde Google (es vital para el diseño original) */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative bg-black selection:bg-primary/30 text-white">
        {children}
      </body>
    </html>
  );
}
