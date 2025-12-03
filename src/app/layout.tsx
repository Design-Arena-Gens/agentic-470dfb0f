import type { Metadata } from "next";
import { Cairo, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Operette — منصة للأتمتة الذكية",
  description:
    "منصة Operette تساعد الشركات الصغيرة والمتوسطة على تبسيط العمليات الداخلية ورفع الإنتاجية بثقة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${notoSansArabic.variable}`}>
        {children}
      </body>
    </html>
  );
}
