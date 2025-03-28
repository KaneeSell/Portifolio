import styles from '../styles/header.module.css'

interface HeaderProps{
    titulo: string
    subtitulo?: string
}
export default function Header(props: HeaderProps){
    return (
        <div className={`
        bg-blue-50 dark:bg-gray-600 cursor-default text-center
        w-full flex flex-col pt-5 flex-wrap items-center gap-4
        `}>
            <span className={`${styles.carterOneRegularTitulo}
                text-4xl font-bold text-purple-700
                `}>
                {props.titulo}
            </span>
            <span className={`${styles.rubikSubtitulo}
                text-2xl font-semibold text-purple-700
                `}>
                {props.subtitulo}
            </span>
            <hr className="w-full text-gray-700 dark:text-gray-900"/>
        </div>
    )
}