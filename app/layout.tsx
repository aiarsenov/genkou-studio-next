import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GENKOU STUDIO — создаем креатив и моушн-графику для рекламы и мероприятий",
  description: "НАШИ AI ВИДЕО",
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
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
