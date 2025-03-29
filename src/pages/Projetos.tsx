import Header from "../components/Header"
import LayoutConteudo from "../components/LayoutConteudo"
import MenuLateral from "../components/MenuLateral"
import agenda2 from '../assets/img/agenda2.0.png'
import agendaProMaster from '../assets/img/AgendaProMaster.png'
import empresasReact from '../assets/img/Empresas React.png'
import ProjetoCadastroDeUsuario from '../assets/img/Projeto Cadastro de Usuario.png'
import ExpandirImg from "../components/ExpandirImg"

export default function Projetos(){
    const layoutProjetos = `flex flex-row flex-wrap gap-2 justify-center`
    const cards = `max-w-sm rounded shadow-lg`
    const cardTitle = `font-bold text-xl mb-2 text-purple-700 cursor-default`
    const cardDescricao = `text-base h-40 text-gray-900 dark:text-gray-100 font-medium overflow-y-auto scrollbar-personalizada`
    const cardFooter = `w-full mb-5 flex flex-wrap gap-3 justify-center`
    const cardBtnProj = `bg-blue-600 text-white font-bold py-2 px-4 rounded duration-300 hover:bg-green-700 hover:animate-pulse`
    const cardBtnDoc = `bg-blue-600 text-white font-bold py-2 px-4 rounded duration-300 hover:bg-green-700 hover:animate-pulse`

    return (
        <div>
            <MenuLateral localAtivo="projetos">
                <Header titulo="Projetos" subtitulo="Transformando ideias em soluções."/>
                <LayoutConteudo titulo="Projetos">
                    
                    <div className={layoutProjetos}>

                        <div className={cards}>
                            <ExpandirImg img={agenda2} id={1}/>
                            <div className="px-6 py-4 w-full flex flex-col text-center">
                                <span className={cardTitle}>
                                    Agenda 2.0
                                </span>
                                <p className={cardDescricao}>
                                    A Agenda Pro Master 2.0 é a versão refatorada da antiga Agenda Pro Master, 
                                    agora desenvolvida com React, TypeScript e Tailwind CSS, substituindo JavaScript 
                                    e Bootstrap para maior performance e escalabilidade. Com ela, você pode cadastrar, 
                                    editar, excluir e finalizar eventos, além de aplicar filtros avançados, como busca por 
                                    ID ou nome, prioridade e situação. Mais moderna, rápida e eficiente, a Agenda Pro Master 2.0 
                                    torna a gestão de eventos ainda mais intuitiva! 
                                </p>
                            </div>
                            <div className={cardFooter}>
                                <a className={cardBtnProj}
                                href="https://kaneesell.github.io/Agenda-2.0" target="_blank">Ir Para Projeto</a>
                                <a className={cardBtnDoc}
                                href="https://github.com/KaneeSell/Agenda-2.0" target="_blank">Ir Para Doc</a>
                            </div>
                        </div>

                        <div className={cards}>
                            <ExpandirImg img={agendaProMaster} id={2}/>
                            <div className="px-6 py-4 w-full flex flex-col text-center">
                                <span className={cardTitle}>
                                    Agenda Pro Master
                                </span>
                                <p className={cardDescricao}>
                                A Agenda Pro Master é uma aplicação desenvolvida com JavaScript, HTML, 
                                CSS e Bootstrap, oferecendo uma forma simples e eficiente de gerenciar 
                                eventos. Com ela, você pode criar, editar e finalizar eventos, registrando 
                                nome, descrição e data de maneira intuitiva. Ideal para manter compromissos 
                                organizados com praticidade!
                                </p>
                            </div>
                            <div className={cardFooter}>
                                <a className={cardBtnProj}
                                href="https://kaneesell.github.io/Agenda-2.0" target="_blank">Ir Para Projeto</a>
                                <a className={cardBtnDoc}
                                href="https://github.com/KaneeSell/Agenda-2.0" target="_blank">Ir Para Doc</a>
                            </div>
                        </div>

                        <div className={cards}>
                            <ExpandirImg img={empresasReact} id={3}/>
                            <div className="px-6 py-4 w-full flex flex-col text-center">
                                <span className={cardTitle}>
                                    Empresas React
                                </span>
                                <p className={cardDescricao}>
                                Este é um projeto desenvolvido em React utilizando Bootstrap, Vite, ESLint e TypeScript. 
                                O projeto conta com um sistema simples de cadastro de empresas e uma tela de planilhas para download.
                                </p>
                            </div>
                            <div className={cardFooter}>
                                <a className={cardBtnProj}
                                href="https://kaneesell.github.io/empresas-react" target="_blank">Ir Para Projeto</a>
                                <a className={cardBtnDoc}
                                href="https://github.com/KaneeSell/empresas-react" target="_blank">Ir Para Doc</a>
                            </div>
                        </div>

                        <div className={cards}>
                            <ExpandirImg img={ProjetoCadastroDeUsuario} id={4}/>
                            <div className="px-6 py-4 w-full flex flex-col text-center">
                                <span className={cardTitle}>
                                Projeto Cadastro de Usuários
                                </span>
                                <p className={cardDescricao}>
                                Este projeto permite cadastrar, editar e excluir usuários de forma simples e eficiente, 
                                utilizando uma API JSON Server para gerenciamento dos dados. Totalmente responsivo, ele 
                                se adapta a qualquer tela, desde smartphones e PCs até TVs, garantindo uma experiência 
                                fluida em qualquer dispositivo. Feito no curso da C0D3R - Desenvolvimento Web Moderno.
                                </p>
                            </div>
                            <div className={cardFooter}>
                                <a className={cardBtnDoc}
                                href="https://github.com/KaneeSell/Projeto-Cadastro-de-Usuario" target="_blank">Ir Para Repositório</a>
                            </div>
                        </div>

                    </div>

                    
                </LayoutConteudo>
            </MenuLateral>
        </div>
    )
}