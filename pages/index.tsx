import Menu from "../src/components/Menu/Menu";
import Head from "next/head";
import Navigate from "../src/components/Navigate/Navigate";
import github from "../src/assets/github.png";
import linkedin from "../src/assets/linkedin.png";
import twitter from "../src/assets/twitter.png";
import instagram from "../src/assets/instagram.png";
import Footer from "../src/components/Footer/Footer";

function Home(){
    return(
        <div className="text-3xl text-black align-middle h-screen">
            <Head>
                <title> About Me </title>
                <link rel="icon" href="/icon.ico"/>
            </Head>
            <Menu></Menu>
            <Navigate link="https://github.com/RenanLeznew" image={github} >This is my Github.</Navigate>
            <Navigate link="https://www.instagram.com/renannszs2/" image={instagram}>This is my Instagram.</Navigate>
            <Navigate link="https://twitter.com/Renanszszs2" image={twitter}>This is my Twitter.</Navigate>
            <Navigate link="https://www.linkedin.com/in/renan-wenzel-aab9a8173/" image={linkedin}>This is my LinkedIn.</Navigate>
            <Footer />
        </div>
    )
}

export default Home;