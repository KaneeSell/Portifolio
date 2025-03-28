interface LayoutConteudoProps{
    titulo: string
    subtitulo?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}
export default function LayoutConteudo(props: LayoutConteudoProps) {
    const card = `w-full  flex flex-col items-center my-20`
    return (
        <div className={card}>
            <div className={`
                flex flex-col items-center border-2 rounded-3xl py-10 px-10
                dark:bg-gray-800 border-purple-700 max-w-320
                bg-blue-50 mx-4
                `}>
                    <span className={`
                        text-3xl font-bold cursor-default
                        text-purple-700 mb-5
                        `}>
                    {props.titulo}</span>
                    <span className={`
                    text-2x1 font-bold
                    text-purple- mb-5
                    `}>
                    {props.subtitulo}</span>
                {props.children}
            </div>
        </div>
    )
}