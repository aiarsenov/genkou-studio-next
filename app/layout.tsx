import type { Metadata } from "next";
import localFont from "next/font/local";
import FloatingGecko from "@/components/FloatingGecko";
import "./globals.css";

export const roboto = localFont({
  src: [
    { path: "../public/fonts/Roboto-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Roboto-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../public/fonts/Roboto-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Roboto-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Roboto-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Roboto-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../public/fonts/Roboto-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Roboto-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../public/fonts/Roboto-Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Roboto-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const robotoCondensed = localFont({
  src: [
    { path: "../public/fonts/RobotoCondensed-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/RobotoCondensed-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/RobotoCondensed-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/RobotoCondensed-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/RobotoCondensed-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/RobotoCondensed-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GENKOU STUDIO — создаем креатив и моушн-графику для рекламы и мероприятий",
  description: "НАШИ AI ВИДЕО",
  icons: {
    icon: '/images/site icon.png',
  },
  openGraph: {
    title: "GENKOU STUDIO — создаем креатив и моушн-графику для рекламы и мероприятий",
    description: "НАШИ AI ВИДЕО",
    url: "https://genkoustudio.ru",
    type: "website",
    images: [
      {
        url: "https://static.tildacdn.com/tild3735-3736-4164-b537-373731316564/Frame_14.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${roboto.variable} ${robotoCondensed.variable}`}>
      <body className="antialiased">
        {children}
        <FloatingGecko />
      </body>
    </html>
  );
}
