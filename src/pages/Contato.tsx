import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa"
import Header from "../components/Header"
import LayoutConteudo from "../components/LayoutConteudo"
import MenuLateral from "../components/MenuLateral"
import { SiGmail } from "react-icons/si"

export default function Contato(){
    const ItemCardTexto = `text-sm font-semibold text-purple-700`
    return (
        <div>
            <MenuLateral localAtivo="contato">
                <Header titulo="Contato" subtitulo="Vamos conversar? Entre em contato!"/>
                <LayoutConteudo titulo="Contatos:">
                    <div className="flex flex-row items-center gap-5">
                        <a href="https://github.com/KaneeSell"
                        target="_blank"
                        className={`
                        flex flex-col items-center group
                        `}>
                            <FaGithub size={'40px'}
                            className='group-hover:animate-bounce text-gray-950'/>
                            <span className={ItemCardTexto}
                            >GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-henrique-sell"
                        target="_blank"
                        className={`
                        flex flex-col items-center group
                        `}>
                            <FaLinkedin size={'40px'}
                            className='group-hover:animate-spin text-blue-500'/>
                            <span className={ItemCardTexto}
                            >LinkedIn</span>
                        </a>
                        <a href="https://wa.me/+5547991166401"
                        target="_blank"
                        className={`
                        flex flex-col items-center group
                        `}>
                            <FaWhatsappSquare size={'40px'}
                            className='group-hover:animate-ping text-green-500'/>
                            <span className={ItemCardTexto}
                            >Whatsapp</span>
                        </a>
                        <a href="mailto:Kanee.Sell@gmail.com"
                        target="_blank"
                        className={`
                        flex flex-col items-center group
                        `}>
                            <SiGmail size={'40px'}
                            className='group-hover:animate-pulse text-red-500'/>
                            <span className={ItemCardTexto}
                            >GMail</span>
                        </a>
                    </div>
                </LayoutConteudo>
            </MenuLateral>
        </div>
    )
}