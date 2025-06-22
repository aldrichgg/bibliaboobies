import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { SalesPopup } from '@/components/landing/SalesPopup';

export const metadata: Metadata = {
  title: 'BíbliaTeca Mapeada - A Bíblia para Colorir',
  description: 'Uma coleção cristã com 60 desenhos para colorir, do Antigo ao Novo Testamento. Tempo de qualidade com Deus e em família.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-blue-50">
        {children}
        <Toaster />
        <SalesPopup />
      </body>
    </html>
  );
}
