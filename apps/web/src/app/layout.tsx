import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { AppLayout } from "@/components/Layout";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socrática",
  description: "Quem é você que busca o conhecimento?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* O fundo creme que domina a tela e a fonte Lora */}
      <body
        className={`${lora.className} bg-[#f4f3ee] text-[#333333] antialiased`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
