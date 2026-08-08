import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keystone Japan - Malaysia Migration Chatbot",
  description: "AI-powered chatbot helping Japanese plan their migration to Malaysia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
