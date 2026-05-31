import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "George Marte Portfolio",
  description: "Graphic Designer and Aspiring Art Director",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
