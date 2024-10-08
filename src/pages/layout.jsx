import localFont from "next/font/local";
import Head from "next/head";
// import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

      <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
