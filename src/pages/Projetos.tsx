import Header from "../components/Header"
import LayoutConteudo from "../components/LayoutConteudo"
import MenuLateral from "../components/MenuLateral"

export default function Projetos(){
    const layoutProjetos = `flex flex-row flex-wrap gap-2`
    const cards = `max-w-sm rounded overflow-hidden shadow-lg`
    const cardTitle = `font-bold text-xl mb-2 text-purple-700 cursor-default`
    const cardDescricao = `text-base max-h-50 text-gray-100 font-medium overflow-y-scroll scrollbar-personalizada`
    const cardFooter = `w-full mb-5 flex justify-center`
    const cardBtn = `bg-blue-600 text-white font-bold py-2 px-4 rounded duration-300 hover:bg-green-700 hover:animate-pulse`
    return (
        <div>
            <MenuLateral localAtivo="projetos">
                <Header titulo="Projetos" subtitulo="Transformando ideias em soluções."/>
                <LayoutConteudo titulo="Projetos">
                    <div className={layoutProjetos}>
                        <div className={cards}>
                            <img src="./agenda2.0.png" alt="Agenda 2.0" className="w-full"/>
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
                                <a className={cardBtn}
                                href="" target="_blank">Ir Para Projeto</a>
                            </div>
                        </div>
                    </div>
                </LayoutConteudo>
            </MenuLateral>
        </div>
    )
}