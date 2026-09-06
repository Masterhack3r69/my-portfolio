import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Deckson | System & Network Administrator · Developer",
  description: "John Deckson Edusma, System and Network Administrator at Don Jose Ecleo Memorial College and Full Stack Developer based in the Philippines.",
  icons: { icon: "/signature.png", apple: "/signature.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
