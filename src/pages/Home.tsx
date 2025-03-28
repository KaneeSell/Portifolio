import MenuLateral from "../components/MenuLateral"
import Header from '../components/Header'
import LayoutConteudo from "../components/LayoutConteudo"
import { SiJavascript, SiNextdotjs, SiTypescript } from "react-icons/si"
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa"
import { VscVscode } from "react-icons/vsc"

export default function Home(){
    const cards = `flex flex-col flex-wrap items-center gap-3
    dark:bg-gray-900 py-3 px-4 rounded-2xl
    bg-gray-300`
    const tituloCard = `text-xl font-semibold text-purple-700 mb-5 cursor-pointer`
    const ItemCardIcon = `group-hover:animate-bounce`
    const ItemCardTexto = `text-sm font-semibold text-purple-700`
    return (
        <div>
            <MenuLateral localAtivo="inicio">
                <Header titulo="Início" subtitulo="Seja bem vindo ao meu Portifólio!"/>
                <LayoutConteudo titulo="Tenologias que uso:">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                        <div className={cards}>
                            <span className={tituloCard}
                            >Linguagens</span>
                            <div className="flex flex-row gap-3 items-center">
                                <a href="#" className="group flex flex-col items-center">
                                    <SiTypescript
                                    className={ItemCardIcon + ' text-blue-500'}
                                    size={'40px'}/>
                                    <span className={ItemCardTexto}>
                                        TypeScript
                                    </span>
                                </a>
                                <a href="#" className="group flex flex-col items-center">
                                    <SiJavascript  
                                    className={ItemCardIcon + ' text-yellow-500'}
                                    size={'40px'}/>
                                    <span className={ItemCardTexto}>
                                        JavaScript
                                    </span>
                                </a>
                                <a href="#" className="group flex flex-col items-center">
                                    <FaHtml5 
                                    className={ItemCardIcon + ' text-orange-600'}
                                    size={'40px'}/>
                                    <span className={ItemCardTexto}>
                                        HTML
                                    </span>
                                </a>
                                <a href="#" className="group flex flex-col items-center">
                                    <FaCss3Alt 
                                    className={ItemCardIcon + ' text-blue-500'}
                                    size={'40px'}/>
                                    <span className={ItemCardTexto}>
                                        CSS
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className={cards}>
                            <span className={tituloCard}
                                >Frameworks & Bibliotecas</span>
                            <div className="flex flex-row gap-3 items-center">
                                <a href="#" className="group flex flex-col items-center">
                                    <FaReact 
                                    className={ItemCardIcon + ' text-blue-600'}
                                    size={'40px'}/>
                                    <span className={ItemCardTexto}>
                                        React
                                    </span>
                                </a>
                                <a href="#" className="group flex flex-col items-center">
                                    <SiNextdotjs  
                                    className={ItemCardIcon + ' text-gray-950'}
                                    size={'40px'}/>
                                    <span className={ItemCardTexto}>
                                        Next
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className={cards}>
                            <span className={tituloCard}
                                >Ferramentas & Build Tools</span>
                                <div className="flex flex-row gap-3 items-center">
                                    <a href="#" className="group flex flex-col items-center">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" 
                                        className={ItemCardIcon}
                                        width={'40px'}/>
                                        <span className={ItemCardTexto}>
                                            Vite
                                        </span>
                                    </a>
                                    <a href="#" className="group flex flex-col items-center">
                                        <FaNodeJs 
                                        className={ItemCardIcon + ' text-green-600'}
                                        size={'40px'}/>
                                        <span className={ItemCardTexto}>
                                            Node
                                        </span>
                                    </a>
                                </div>
                        </div>
                        
                        <div className="flex flex-row flex-wrap items-center gap-2">
                            <div className={cards}>
                                <span className={tituloCard}>
                                    Controle de Versão & Repositórios</span>
                                <div className="flex flex-row gap-3 items-center">
                                    <a href="#" className="group flex flex-col items-center">
                                        <FaGitAlt   
                                        className={ItemCardIcon + ' text-red-500'}
                                        size={'40px'}/>
                                        <span className={ItemCardTexto}>
                                            Git
                                        </span>
                                    </a>
                                    <a href="#" className="group flex flex-col items-center">
                                        <FaGithub    
                                        className={ItemCardIcon + ' text-gray-950 dark:text-gray-100'}
                                        size={'40px'}/>
                                        <span className={ItemCardTexto}>
                                            GitHub
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className={cards}>
                                <span className={tituloCard}>
                                    IDE & Editor de Código</span>
                                <div className="flex flex-row gap-3 items-center">
                                    <a href="#" className="group flex flex-col items-center">
                                        <VscVscode  
                                        className={ItemCardIcon + ' text-blue-500'}
                                        size={'40px'}/>
                                        <span className={ItemCardTexto}>
                                            VSCode
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutConteudo>
            </MenuLateral>
        </div>
    )
}