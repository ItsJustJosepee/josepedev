import type { Metadata } from "next";
import "./globals.css";
import LocalFont from "next/font/local";
import Header from "@/components/Header";

const Minecraft = LocalFont({
  src: [
    { path: "./MCRegular.otf", weight: "400", style: "normal" },
    { path: "./MCItalic.otf", weight: "400", style: "italic" },
    { path: "./MCBold.otf", weight: "700", style: "normal" },
    { path: "./MCBoldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-minecraft",
});

const Pusab = LocalFont({
  src: "./Pusab.otf",
  variable: "--font-pusab",
});

export const metadata: Metadata = {
  title: "JosepeDev",
  description: "Página de José Barajas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${Minecraft.variable} ${Pusab.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
