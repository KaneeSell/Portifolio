import Header from "../components/Header"
import MenuLateral from "../components/MenuLateral"

export default function Projetos(){
    return (
        <div>
            <MenuLateral localAtivo="projetos">
                <Header titulo="Projetos" subtitulo="Transformando ideias em soluções."/>
            </MenuLateral>
        </div>
    )
}