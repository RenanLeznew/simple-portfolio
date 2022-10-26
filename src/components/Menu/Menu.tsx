import Image from "next/image";
import me from "../../assets/me2.jpeg";

function Menu(){
    return(
        <div className="relative transition-opacity delay-1000 ease-in-out">
            <div className="backdrop-blur-xl bg-white/20 text-6xl p-3 max-w-lg mx-auto mt-9 mb-12 rounded-xl shadow-lg flex items-center space-x-4">
                <h1 className="opacity-90"> 
                    Hello, I'm Renan! I like to code and I'm graduating in Mathematics.
                </h1>
            </div>
            <div className="absolute max-w-sm right-[600px] top-0">
                <Image height={900} width={900} className="rounded-3xl" src={me}/>
            </div>
        </div>
    )   
}

export default Menu;