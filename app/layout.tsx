import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahallo Interactive Map",
  description: "Coding CAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-200 text-black w-screen fixed z-10 p-2 flex flex-row">
          <span className="text-2xl font-bold"> &lt;  </span>
          <h1 className="text-2xl font-bold mx-auto">Mahallo Interactive Map</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
