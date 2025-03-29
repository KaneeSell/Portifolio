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
                    <div className="flex flex-row flex-wrap justify-center gap-2">
                        <div className={cards}>
                            <span className={tituloCard}>
                                Minha Jornada
                            </span>
                            <span className={`max-w-100 max-h-80 px-2 overflow-y-auto dark:text-gray-100 font-medium scrollbar-personalizada`}>
                            Tenho 25 anos, nasci em Joinville (SC) e atualmente moro em Jaraguá do Sul (SC).
                            Meu passatempo é estudar e assistir a vídeos sobre tecnologia. Estou em busca de 
                            uma oportunidade para agregar minha experiência e conhecimento em tecnologia e 
                            programação a um time. Estudo computação desde 2012 e, em 2018, trabalhei com 
                            manutenção de computadores. Em 2023, iniciei o Curso Técnico em Desenvolvimento 
                            no SENAI-SC, mas optei por interrompê-lo em 2024 para focar em cursos mais diretos, 
                            que oferecem um aprendizado mais específico e prático do que os cursos técnicos e 
                            faculdades atuais. Atuei como Suporte Técnico, onde meus desafios diários incluíam 
                            o uso de banco de dados com SQL, configurações de rede, instalação de impressoras 
                            fiscais e não fiscais, implementação e testes de sistemas, treinamentos, abertura 
                            de chamados para programação (helpdesk) e auxílio em documentos fiscais. Estou 
                            pronto para aplicar minhas habilidades e conhecimentos em programação e tecnologia 
                            para contribuir com uma equipe.
                            </span>
                        </div>
                        <div className={cards}>
                            <span className={tituloCard}>
                                Meus Estudos
                            </span>
                            <span className="max-w-100 max-h-80 px-2 dark:text-gray-100 font-medium overflow-y-auto scrollbar-personalizada">
                            Tenho sólido conhecimento em projetos com JS, TS, HTML, CSS, SASS, Bootstrap, TailwindCSS, 
                            Node.js, Gulp, Webpack, jQuery, Electron.js, Git, GitHub, SQL, Vite, React.js e Next.js.
                            Atualmente, sigo estudando e, mesmo após concluir os cursos que desejo, não pretendo parar. 
                            Meu objetivo é iniciar uma graduação o quanto antes, seguida de uma pós-graduação e continuar 
                            sempre aprendendo. Como a tecnologia está em constante evolução, quero me manter atualizado e 
                            expandir meus conhecimentos continuamente.
                            </span>
                            
                        </div>
                    </div>
                </LayoutConteudo>
            </MenuLateral>
        </div>
    )
}