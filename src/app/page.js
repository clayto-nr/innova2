import { SpeedInsights } from "@vercel/speed-insights/next"
import { TbMailFast } from "react-icons/tb";
import { PiChatsCircleFill, PiPlantBold, PiXBold, PiChatTeardropText, PiPlugsFill } from "react-icons/pi";
import { FaGear, FaGears } from "react-icons/fa6";
import { IoMdCheckmark, IoIosWifi } from "react-icons/io";
import { LuKanbanSquare } from "react-icons/lu";
import { SiOpenai } from "react-icons/si";
import { BsMegaphone } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import Header from "./header";

export const metadata = {
  title: 'Innovabot - Chatbot Completo e Multi-Atendentes para WhatsApp',
  description: 'O Innovabot oferece um sistema de chatbot avançado para WhatsApp, com funcionalidades como atendimento simultâneo, integração com Kanban, agendamentos e ChatGPT. Planos flexíveis para todos os tipos de empresas.',
  openGraph: {
    title: 'Innovabot - Chatbot Completo e Multi-Atendentes para WhatsApp',
    description: 'Conheça o Innovabot, o sistema de chatbot ideal para empresas que buscam atendimento rápido, eficiente e com múltiplos atendentes em um só WhatsApp. Acesse já e veja os planos disponíveis!',
    url: 'https://innovabot.com.br/android-chrome-512x512.png',
    images: [
      {
        url: 'https://innovabot.com.br',  
        width: 1200,
        height: 630,
        alt: 'Logo do Innovabot e recursos do sistema',
      },
    ],
  },
 
}


export default function Home() {
  return (
    <>
      <SpeedInsights />
      <Header />
      <main>
        <div className="container-2">
          <h1>Vários atendentes usando um único
            WhatsApp</h1>
          <p className="p-white">Sistema de chatbot com uma ampla gama de funcionalidades.</p>
          <a href="#section1"><button className="btn-3">Começar a usar agora!</button></a>
        </div>
      </main>
      <section>
        <h2>Quais são as vantagens de usar nosso sistema?</h2>
        <div className="container-3">
          <div className="card">
            <div className="org">
              <div className="svg">
                <TbMailFast />
              </div>
              <h4>Rápido e eficiente</h4>
            </div>
            <ul>
              <li>Respostas instantâneas a qualquer hora do dia</li>
              <li>Reduza o tempo de espera dos clientes com <br /> um atendimento ágil</li>
            </ul>
          </div>
          <div className="card">
            <div className="org">
              <div className="svg">
                <PiChatsCircleFill />
              </div>
              <h4>Rápido e eficiente</h4>
            </div>
            <ul>
              <li>Gerenciamento de diversas conversas <br /> simultaneamente sem perda de qualidade</li>
              <li>Tenha vários atendentes em um só whatsapp</li>
            </ul>
          </div>
          <div className="card">
            <div className="org">
              <div className="svg">
                <FaGear />
              </div>
              <h4>Rápido e eficiente</h4>
            </div>
            <ul>
              <li>Kanban</li>
              <li>Chat GPT</li>
              <li>Agendamentos</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="section1">
        <div className="org-2">
          <h2 className="center">Todos os nossos planos</h2>
          <p className="p-gray">Oferecemos uma variedade de planos adaptados às necessidades de diferentes empresas.</p>
        </div>
        <div className="container-4">
          <div className="card-vertical">
            <div className="org-2">
              <div className="border">
                <PiPlantBold style={{ color: '#3FBF1F' }} />
              </div>
              <h4>Plano básico</h4>
            </div>
            <hr />
            <div className="etiqueta user"><HiUsers />2 ATENDENTES</div>

            <div className="org-3">
              <div className="valor">
                <h2>
                  R$ 79,00
                </h2>

                <span>/mês*</span>
              </div>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Campanhas</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Agendamentos</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />API Externa</p>
              <p className="p-bold"><PiXBold style={{ color: '#890000' }} />Chat Interno</p>
              <p className="p-bold"><PiXBold style={{ color: '#890000' }} />Kanban</p>
              <p className="p-bold"><PiXBold style={{ color: '#890000' }} />Open.Ai <span className="span-2"> “Chat GPT”</span></p>
              <p className="p-bold"><PiXBold style={{ color: '#890000' }} />Integrações <span className="span-2"> “DialogFlow, N8N...”</span></p>
            </div>
            <a href="https://wa.me/5511977690905?text=Gostaria%20de%20contratar%20o%20*plano%20básico.*%20Por%20favor,%20me%20envie%20mais%20informações.">
              <button class="btn-2">Contratar agora</button>
            </a>
          </div>
          <div className="card-vertical">
            <div className="etiqueta">MAIS VENDIDO <img src="/cup-star-bold.svg" alt="ic_round-menu" /></div>
            <div className="org-2">
              <div className="border">
                <img src="/solar_cup-star-bold.svg" alt="ic_round-menu" />
              </div>
              <h4>Plano profissional</h4>

            </div>
            <hr />
            <div className="etiqueta user"><HiUsers />5 ATENDENTES</div>
            <div className="valor">
              <h2>
                R$ 149,00
              </h2>

              <span>/mês*</span>
            </div>
            <div className="org-3">
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Campanhas</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Agendamentos</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />API Externa</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Chat Interno</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Kanban</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Open.Ai <span className="span-2"> “Chat GPT”</span></p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Integrações <span className="span-2"> “DialogFlow, N8N...”</span></p>
            </div>
            <a href="https://wa.me/5511977690905?text=Gostaria%20de%20contratar%20o%20*plano%20profissional.*%20Por%20favor,%20me%20envie%20mais%20informações.">
              <button class="btn-2">Contratar agora</button>
            </a>
          </div>
          <div className="card-vertical">
            <div className="org-2">
              <div className="border">
                <IoIosWifi style={{ color: '02006F' }} />
              </div>
              <h4>Plano personalizado</h4>
            </div>
            <hr />
            <div className="etiqueta user"><HiUsers />+5 ATENDENTES</div>

            <div className="container-6">
              <div className="green-container">
                <p className="p-green">Entre em contato para personalizar seu plano, aumentar o número de atendentes, entre outros benefícios.</p>
              </div>
              <img src="wifi.svg" alt="wif-logo" />
            </div>

            <div className="org-3">
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Campanhas</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Agendamentos</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />API Externa</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Chat Interno</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Kanban</p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Open.Ai <span className="span-2"> “Chat GPT”</span></p>
              <p className="p-bold"><IoMdCheckmark style={{ color: '#3FBF1F' }} />Integrações <span className="span-2"> “DialogFlow, N8N...”</span></p>
            </div>
            <a href="https://wa.me/5511977690905?text=Gostaria%20de%20um%20*plano%20personalizado*%20para%20atender%20às%20minhas%20necessidades.%20Por%20favor,%20me%20envie%20mais%20informações.">
              <button class="btn-2">Contratar agora</button>
            </a>
          </div>
        </div>
      </section>
      <section id="section2" className="center">
        <div className="org-2">
          <h2 className="center">Integrações</h2>
          <p className="p-gray">Com estes sistemas abaixo você poderá integrar eles com o Innovabot!</p>
        </div>
        <div className="org-4">
          <img src="/SiDialogflow.svg" alt="ic_round-menu" />
          <img src="/simple-icons_n8n.svg" alt="ic_round-menu" />
          <img src="/logos_webhooks.svg" alt="ic_round-menu" />
          <img src="/Group 3589.svg" alt="ic_round-menu" />
        </div>
      </section>

      <section className="section-1">
        <div className="container-5">
          <div className="card-container">
            <div className="card-small">
              <div className="org-2">
                <LuKanbanSquare />
                <h2 className="primary">Kanban</h2>
              </div>
              <p className="p-medium">Gerencie projetos e tarefas de forma clara com um quadro Kanban visual.</p>
            </div>
            <div className="fav">
            <div className="etiqueta-2">FAVORITO<img src="/fluent_star-16-filled.svg" alt="yellow-Star" /></div>
            <div className="card-small">
                <div className="org-2">
                  <SiOpenai />
                  <h2 className="primary">Open.AI</h2>
                </div>
                <p className="p-medium">Habilite o ChatGPT para atender automaticamente seus clientes diretamente na plataforma!</p>
              </div>
            </div>  
            <div className="card-small">
              <div className="org-2">
                <PiPlugsFill />
                <h2 className="primary">Integrações</h2>
              </div>
              <p className="p-medium">Crie integrações com DialogFlow, N8N, WebHooks e Typebot.</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-small">
              <div className="org-2">
                <PiChatTeardropText />
                <h2 className="primary">Chat interno</h2>
              </div>
              <p className="p-medium">Facilite a comunicação da equipe com um canal de bate-papo integrado ao sistema.</p>
            </div>
            <div className="card-small">
              <div className="org-2">
                <BsMegaphone />
                <h2 className="primary">Campanha</h2>
              </div>
              <p className="p-medium">Crie e gerencie campanhas de marketing personalizadas  e impulsione o seu negócio.</p>
            </div>
            <div className="card-small">
              <div className="org-2">
                <FaGears />
                <h2 className="primary">API Externa</h2>
              </div>
              <p className="p-medium">Integre o Innovabot aos seus outros apps e serviços favoritos. Mais funções e mais automação</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <img src="/logo-2.svg" alt="ic_round-menu" />
          <div>

          </div>
        </div>
        <div className="org-5">
          <nav>
            <a href="#"> planos </a>
            <a href="#"> sobre </a>
            <a href="#"> contato </a>
          </nav>
          <p className="p-copyrigth">Copyright © 2024 innovabot.</p>
        </div>
      </footer>
    </>
  );
}
