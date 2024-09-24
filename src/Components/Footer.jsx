import { AiFillInstagram } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode,SiBuymeacoffee } from "react-icons/si";

export const Footer = () => {
    return(
        <>
        <div className="xl:h-[200px] lg:h-[400px] bg-[#8282a825] border-t-2 flex lg:flex-col justify-evenly xl:items-center">

            <div className="text-center">
                <span className="text-[1.4rem] font-semibold text-[#fec400]">Get in Touch</span>
                <div className="flex justify-center pt-[10px]">
                    <a className="text-3xl p-[5px] font-bold" href="https://instagram.com/prasanna_harry/"  target="_blank" rel="noreferrer"><AiFillInstagram/></a>
                    <a className="text-3xl p-[5px] font-bold" href="https://github.com/Harry-1081"  target="_blank" rel="noreferrer"><VscGithub/></a>
                    <a className="text-3xl p-[5px] font-bold" href="https://www.linkedin.com/in/prasanna-v-224753224/"  target="_blank" rel="noreferrer"><FaLinkedin/></a>
                    <a className="text-2xl p-[5px] font-bold" href="https://leetcode.com/prasanna1403/"  target="_blank" rel="noreferrer"><SiLeetcode/></a>
                    <a className="text-2xl p-[5px] font-bold" href="https://buymeacoffee.com/prasannaharry"  target="_blank" rel="noreferrer"><SiBuymeacoffee/></a>
                </div>
            </div>

            <div className="text-center">
                <span className="text-[1.4rem] font-semibold text-[#afd9ab]">Want to Collaborate ?<br/></span>
                <a href="mailto:cseskct153prasanna.v@gmail.com" className=" underline text-[1.2rem] pt-[10px]">cseskct153prasanna.v@gmail.com</a>
            </div>

            <div className="text-center">
                <span className="text-[1.4rem] font-semibold text-[#fec400]">Call me<br/></span>
                <a href="tel:+918148031162" className="underline text-[1.3rem] pt-[10px]">+91 81480 31162</a>
            </div>

        </div>
        </>
    );
}