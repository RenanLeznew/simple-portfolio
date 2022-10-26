import Image, { StaticImageData } from "next/image";


function Navigate(props: {children: React.ReactNode, link: string, image: StaticImageData}){
    let {children, link, image} = props
    return(
        <div className="transition ease-in delay-150 hover:scale-110 backdrop-blur-xl bg-white/20 p-6 max-w-sm mx-auto mt-4 rounded-xl shadow-lg flex items-center space-x-4">
                <Image className="h-9 right-40" src={image} />
                <a href={link}
                    className="
                    font-bold
                    "> 
                {children}  
            </a>
        </div>
    )
}

export default Navigate;