import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: 'Web Chat',
  description: 'Real-time chat application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
       className="min-h-screen bg-gray-100"
      >
        {children}
      </body>
    </html>
  );
}
