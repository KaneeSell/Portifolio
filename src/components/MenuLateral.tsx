import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { TiFolder } from "react-icons/ti";
import { ThemeBtnReduzido } from "./ThemeButton";
import styles from '../styles/menuLateral.module.css'
import { useNavigate } from "react-router";

interface MenuLateralProps{
    localAtivo: 'inicio' | 'sobre-mim' | 'projetos' | 'contato'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}
export default function MenuLateral(props: MenuLateralProps){
    const navegar = useNavigate()
    return (
        <>
            <div className="flex flex-row fixed">
                {/* Menu Lateral Icons(Menu Lateral que mostra os icones) */}
                <div className={`
                dark:bg-gray-900 h-screen py-4
                flex flex-col justify-between items-center
                bg-gray-300 text-purple-700 left-0 top-0 ${styles.MenuLateralIcon}
                `}>
                    <div className="flex flex-col gap-4 w-full items-center">
                        <img src="./kanee.ico" 
                        alt="KaneeIcon" className="hover:scale-110 cursor-pointer duration-200"
                        width={'40px'}/>
                        <hr className="w-full"/>
                        <IoHomeOutline onClick={()=>navegar('/')}
                        className={`w-full ${props.localAtivo === 'inicio' ? `
                        bg-gray-400 dark:bg-blue-950 cursor-default
                        `:`
                        hover:text-gray-900 dark:hover:text-white cursor-pointer`}
                        `}
                        size={'40px'}/>
                        <MdOutlinePersonOutline onClick={()=>navegar('/sobre-mim')}
                        className={`w-full ${props.localAtivo === 'sobre-mim' ? `
                        bg-gray-400 dark:bg-blue-950 cursor-default
                        `:`
                        hover:text-gray-900 dark:hover:text-white cursor-pointer`}
                        `}
                        size={'40px'}/>
                        <TiFolder onClick={()=>navegar('/projetos')}
                        className={`w-full ${props.localAtivo === 'projetos' ? `
                        bg-gray-400 dark:bg-blue-950 cursor-default
                        `:`
                        hover:text-gray-900 dark:hover:text-white cursor-pointer`}
                        `}
                        size={'40px'}/>
                        <RiContactsBookLine onClick={()=>navegar('/contato')}
                        className={`w-full ${props.localAtivo === 'contato' ? `
                        bg-gray-400 dark:bg-blue-950 cursor-default
                        `:`
                        hover:text-gray-900 dark:hover:text-white cursor-pointer`}
                        `}
                        size={'40px'}/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <ThemeBtnReduzido 
                        className="hover:text-gray-900 dark:hover:text-white cursor-pointer"
                        />
                    </div>
                </div>
                {/* Menu Lateral Texto(menu lateral que expande mostrando os textos) */}
                <div className={`
                dark:bg-gray-800 h-screen py-4 font-semibold
                flex flex-col flex-nowrap text-nowrap justify-start items-center overflow-hidden
                bg-gray-200 text-purple-700 fixed duration-300 ${styles.menuLateralTexto}
                `}>
                    <div className="flex flex-col gap-4 w-full">
                        <span className="ms-4 font-bold text-2xl my-1 cursor-default">Portifólio</span>
                        <hr/>
                        <span onClick={()=>navegar('/')}
                        className={`ps-4 py-2 ${props.localAtivo === 'inicio' ? 'bg-gray-400 dark:bg-blue-950 cursor-default':`hover:text-gray-900 dark:hover:text-white cursor-pointer`}
                                        `}>
                            Inicio</span>
                        <span onClick={()=>navegar('/sobre-mim')}
                        className={`ps-4 py-2 ${props.localAtivo === 'sobre-mim' ? 'bg-gray-400 dark:bg-blue-950 cursor-default':`hover:text-gray-900 dark:hover:text-white cursor-pointer`}
                                        `}>
                            Sobre mim</span>
                        <span onClick={()=>navegar('/projetos')}
                        className={`ps-4 py-2 ${props.localAtivo === 'projetos' ? 'bg-gray-400 dark:bg-blue-950 cursor-default':`hover:text-gray-900 dark:hover:text-white cursor-pointer`}
                                        `}>
                            Projetos</span>
                        <span onClick={()=>navegar('/contato')}
                        className={`ps-4 py-2 ${props.localAtivo === 'contato' ? 'bg-gray-400 dark:bg-blue-950 cursor-default':`hover:text-gray-900 dark:hover:text-white cursor-pointer`}
                                        `}>
                            Contato</span>
                    </div>
                </div>
            </div>
            {/* Div pai que controla o conteudo da pagina principal */}
            <div className="flex flex-col flex-wrap m-0 p-0 ms-12 min-h-screen bg-gray-100 dark:bg-gray-700">
                {props.children}
            </div>
        </>
    )
}