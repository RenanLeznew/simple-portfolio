import Image from "next/image";
import me from "../../assets/me2.jpeg";

function Menu(){
    return(
        <div className="relative transition-opacity delay-1000 ease-in-out">
            <div className="backdrop-blur-xl bg-white/20 p-6 max-w-sm mx-auto mt-9 rounded-xl shadow-lg flex items-center space-x-4">
                <h1 className="opacity-90 font-bold"> 
                    Hello, I'm Renan! I like to code and I'm graduating in Mathematics 
                </h1>
                <Image className="rounded-xl h-44 ring ring-black ring-opacity-40 ring-offset-0" src={me}/>
            </div>
        </div>
    )   
}

export default Menu;