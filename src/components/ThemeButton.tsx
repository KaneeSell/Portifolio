import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { useTheme } from '../hooks/useTheme'

interface ThemeBtnReduzidoProps{
    className: string
}
export function ThemeBtnReduzido(props: ThemeBtnReduzidoProps){
    const { theme, toggleTheme } = useTheme()
    return (
        <button className={`
        p-1 rounded-full hover:brightness-85 cursor-pointer ${props.className}`} 
        onClick={toggleTheme}>
            {theme === 'dark'? (
                <IoMoonOutline size={'40px'}/>
            ):(
                <IoSunnyOutline size={'40px'}/>
            )}
        </button>
    )
}