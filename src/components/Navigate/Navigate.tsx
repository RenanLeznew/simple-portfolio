import Image, { StaticImageData } from "next/image";


function Navigate(props: {children: React.ReactNode, link: string, image: StaticImageData}){
    let {children, link, image} = props
    return(
        <div className="transition ease-in delay-150 hover:scale-110 backdrop-blur-xl bg-white/20 p-12 max-w-sm mx-auto mt-4 rounded-2xl shadow-lg flex items-center space-x-4 text-3xl mb-9">
                <Image className="right-40" src={image} />
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