import Header from "../components/Header"
import LayoutConteudo from "../components/LayoutConteudo"
import MenuLateral from "../components/MenuLateral"

export default function SobreMim(){
    const cards = `flex flex-col flex-wrap items-center gap-3
                   dark:bg-gray-900 py-3 px-4 rounded-2xl
                   bg-gray-300`
    const tituloCard = `text-xl font-semibold text-purple-700 mb-5 cursor-pointer`
    return (
        <div>
            <MenuLateral localAtivo="sobre-mim">
                <Header titulo="Sobre Mim" subtitulo="Um pouco sobre quem eu sou e as tecnologias que uso."/>
                <LayoutConteudo titulo="Minha Jornada & Meus Estudos" >
                    <div className="flex flex-row flex-wrap gap-2">
                        <div className={cards}>
                            <span className={tituloCard}>
                                Minha Jornada
                            </span>
                            <span className={`max-w-100 max-h-80 px-2 overflow-y-scroll dark:text-gray-100 font-medium scrollbar-personalizada`}>
                            Tenho 25 anos, nasci em Joinville SC, moro em Jaraguá do Sul SC. 
                            Meu passa tempo estudar e ver vídeos sobre tecnologia. 
                            Aguardando uma oportunidade e estar agregando ao time minha experiência e conhecimento em tecnologia e programação.
                            Estudo desde 2012 sobre computação, trabalhei em 2018 em manutenção de computadores, Iniciei em 2023 Curso Técnico em Desenvolvimento SENAI-SC. 
                            Parei em meados de 2024, pois queria focar em algo mais direto como cursos, que me entregam o conteúdo muito mais direcionado do que os cursos técnicos e faculdades do momento. 
                            Atuei como Suporte Técnico, Aonde meus desafios do dia a dia era Utilizar o banco de dados com alguns códigos SQL, configurações de rede, instalação de impressora fiscal e não fiscal, implementação do sistema, treinamento, teste do sistema, abertura de chamado para programação(helpdesk), auxilio em documentos fiscais. 
                            Esperando uma oportunidade de por em pratica minhas habilidades e conhecimento em programação e tecnologia para ajudar a equipe.
                            </span>
                        </div>
                        <div className={cards}>
                            <span className={tituloCard}>
                                Meus Estudos
                            </span>
                            <span className="max-w-100 max-h-80 px-2 dark:text-gray-100 font-medium overflow-y-scroll scrollbar-personalizada">
                            Tenho conhecimento solido com projetos em JS, TS, HTML, CSS, SASS, Bootstrap, NodeJs, Gulp, Webpack, JQuary, ElectronJs, Git e Github, SQL, Vite, React, Next. 
                            E estudando atualmente. Mesmo atingindo a formação dos cursos que desejo não quero parar de estudar, pretendo o quanto antes iniciar graduação e pós e assim por diante. 
                            Pois como sempre tem coisas novas, quero sempre me atualizar aprender mais.
                            </span>
                            
                        </div>
                    </div>
                </LayoutConteudo>
            </MenuLateral>
        </div>
    )
}