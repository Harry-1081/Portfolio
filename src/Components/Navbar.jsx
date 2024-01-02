import {scrollToAbout,scrollToFooter,scrollToSkills,scrollToProjects} from "../Pages/Homepage";

export const Navbar = () => {  

    return(
        <>
        <div className="h-[75px] lg:h-[60px] bg-[#8282a825] flex">

            <div className="flex items-center justify-start ml-[10px] float-start">
                <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1704106175/1049443_k57vj8.png" 
                    alt="logo" className="h-[40px] lg:h-[30px] pr-[20px]"></img>
                <span className="text-3xl font-semibold font-Sevillana lg:hidden">P o r t f o l i o</span>
            </div>
        

            <div className="flex items-center ml-auto">
                <p className="text-[1.5rem] lg:text-[1rem] font-poppins xl:pl-[10px] pr-[10px] cursor-pointer" onClick={scrollToAbout}>About</p>
                <p className="text-[1.5rem] lg:text-[1rem] font-poppins xl:pl-[10px] pr-[10px] cursor-pointer" onClick={scrollToSkills}>Skills</p>
                <p className="text-[1.5rem] lg:text-[1rem] font-poppins xl:pl-[10px] pr-[10px] cursor-pointer" onClick={scrollToProjects}>Projects</p>
                <p className="text-[1.5rem] lg:text-[1rem] font-poppins xl:pl-[10px] pr-[20px] lg:pr-[10px] cursor-pointer" onClick={scrollToFooter}>Contact</p>
            </div>

        </div>
        </>
    );
}