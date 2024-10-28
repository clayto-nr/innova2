import Head from 'next/head';
import { Archivo as ArchivoFont } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/600px.css";

const archivo = ArchivoFont({ subsets: ["latin"] });

export const metadata = {
  title: "Innovabot",
  description: "Innovabot usa IA para interagir com clientes, respondendo perguntas e automatizando tarefas com eficiência.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon?v=4',
    shortcut: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robotsTxt: '/robots.txt',
  sitemap: '/sitemap.xml'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="keywords" content="Innovabot, Chatbot, Atendimento ao cliente, Sistema de chatbot, Respostas instantâneas, Redução do tempo de espera, Agilidade no atendimento, Kanban, Chat GPT, Integrações, Planos de atendimento, Campanhas de marketing, API Externa, Open.AI, DialogFlow, N8N, WebHooks, Typebot, Gerenciamento de conversas, Suporte ao cliente automatizado" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
