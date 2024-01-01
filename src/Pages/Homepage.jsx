import React from "react";
import {Footer} from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

const Home = () => {
    
        return (
        <>
        <div className="bg-[#1a1a29] text-white">
        <Navbar/>
             {/*1 Landing */}
            <div className="xl:flex xl:justify-evenly lg:flex-col lg:h-[750px] xl:h-[650px]">
                <div className="flex justify-center items-center">
                    <div className="mt-[40px]">
                        <p className="xl:text-4xl lg:text-2xl pb-[5px] font-bold">Hello, I'm</p>
                        <p className="xl:text-6xl lg:text-4xl pb-[10px] font-bold">Prasanna V</p>
                        <p className="xl:text-[1.2rem] lg:text-[1.1rem] pb-[5px] xl:w-[340px] lg:w-[295px] text-poppins">Programmer, Full Stack Developer & 
                        AI Enthusiast. I'm Skilled in OOP and Java based applications/websites.</p>

                        <a href="https://drive.google.com/file/d/1QrVNl16-G6-36qItrlS9HbWendK50aD5/" target="_blank" rel="noreferrer">
                            <button className="bg-[#fec400] h-[45px] w-[110px] lg:w-[90px] rounded-[5px] text-[#1a1a29] xl:text-[1.3rem] font-semibold 
                            mt-[20px] mr-[20px]">Resume</button></a>

                            <button className="h-[45px] w-[140px] lg:w-[120px] rounded-[5px] xl:text-[1.3rem] font-semibold 
                            mt-[20px] border-[1px] border-[#fec400]" onClick={scrollToFooter}>Contact Me</button> 
                    </div>
                </div>

                <div className="pt-[45px] lg:flex justify-center">
                    <img className="xl:h-[450px] xl:w-[450px]  lg:h-[350px] lg:w-[350px]" alt="me"
                    src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1703924589/Picsart_23-12-30_13-51-53-568_wumpzk.png"></img>
                </div>
            </div>

            {/*2 About */}
            <div id="aboutsec" className="xl:flex xl:justify-center lg:h-[1000px] xl:h-[450px]">
                <div className="bg-[#8282a825] xl:w-[85%] mb-[80px] xl:rounded-[10px] pl-[40px] pr-[40px]">

                    <div className="flex justify-center m-[40px] mb-[30px]">

                        <div className="border-b-4 border-[#00f1fe] lg:pt-[40px] pt-[5px] pl-[10px] pr-[10px] pb-[4px]">
                            <p className="text-4xl text-[#fec400] font-poppins font-semibold">About Me</p>
                        </div>

                    </div>

                    <div className="flex justify-center">
                       <div className="xl:ml-[30px] mb-[40px] xl:mr-[30px]">
                            <p className="text-[1.25rem] font-Exo2 xl:text-justify xl:indent-[70px] lg:text-justify">
                                Hello! I'm Prasanna, a Full stack developer and Pre-Final year student with a solid background in <b>B.E. Computer 
                            Science.</b> Over the years I have gained a lot of skills including <b>frontend development, backend development</b> and <b>object
                            Oriented programming.</b> I'm also familiar with <b>Selenium testing</b> and <b>Amazon Web Services (AWS).</b> I'm adept at creating
                            innovative solutions for various challenges, with a focus on clean code, control and user-friendly design. <span className="xl:hidden"> I'm heartfully </span>
                            deticated to continuous education, committed to staying updated with the latest advancements in technology and business models.
                            I'm passionate to explore new tools and techniques to streamline my development process and also deliver efficient solutions
                            to real world problems. Recently, I'm also pushing my boundaries to learn about<span className="xl:hidden"> interesting </span> technological advancements such as 
                            <b> Web3</b> and <b>Natural Language Processing.</b></p>
                        </div>
                    </div>
                    </div>
                </div>

        {/*3 Stats */}
        <div class="box3 flex items-center justify-evenly lg:flex-col xl:h-[331px] mt-[40px] lg:mb-[40px] text-[#1a1a29] bg-[#1a1a29]">

                    <div class='counter rounded-[100px] bg-[#fec400] w-[170px] xl:h-[170px] pt-[25px] lg:h-[144px] text-center'>
                        <span class="box3-value text-4xl  font-bold">02</span>
                        <span class="box3-f1-head text-[1.3rem] font-semibold">+<br/>Years of<br/>Experience<br/></span>
                    </div>

                    <div class='counter rounded-[100px] bg-[#fec400] w-[170px] xl:h-[170px] pt-[25px] lg:h-[144px] text-center'>
                        <span class="box3-value text-4xl  font-bold">06</span>
                        <span class="box3-f2-head text-[1.3rem] font-semibold">+<br/>Projects<br/>Completed<br/></span>
                    </div>

                    <div class='counter rounded-[100px] bg-[#fec400] w-[170px] xl:h-[170px] pt-[25px] lg:h-[144px] text-center'>
                        <span class="box3-value text-4xl  font-bold">08</span>
                        <span class="box3-f3-head text-[1.3rem] font-semibold">+<br/>Certifications<br/>Completed<br/></span>
                    </div>
                    
        </div>

        {/*4 Skills */}
        <div id="skillsec" class="flex relative lg:flex-col justify-evenly xl:h-[565.14px] lg:gap-5 items-center lg:p-5">
            <div class="flex flex-col gap-5 items-center xl:w-[320px] bg-[#8282a825] rounded-[10px] lg:w-[90%] xl:h-[260px] lg:py-8 lg:px-5 xl:p-4 xl:text-center">
            <span class="box4-f1-head text-2xl">
                <p className="text-3xl font-Exo2 border-b-4 border-[#00f1fe] p-[4px] text-[#fec400] font-semibold">
                Frontend Skills
                </p>
            </span>
            <ul class="box4-f1-subhead text-left list-disc">
               <li className=" text-[1.2rem] text-Exo2">HTML5</li>
               <li className=" text-[1.2rem] text-Exo2">CSS3</li>
               <li className=" text-[1.2rem] text-Exo2">Tailwind CSS</li>
               <li className=" text-[1.2rem] text-Exo2">ReactJs</li>
               <li className=" text-[1.2rem] text-Exo2">Javascrilit</li>
            </ul>
            </div>

            <div class="box4-f2 xl:w-[320px] flex flex-col gap-5 items-center bg-[#8282a825] rounded-[10px] lg:w-[90%]  xl:h-[260px] lg:py-8 lg:px-5  xl:p-4 xl:text-center">
            <span class="box4-f2-head text-2xl">
                <p className="text-3xl font-Exo2 border-b-4 border-[#00f1fe] p-[4px] text-[#fec400] font-semibold">
                Backend Skills
                </p>
            </span>
            <ul class="box4-f2-subhead text-left list-disc">
               <li className=" text-[1.2rem] text-Exo2  list-disc">Spring Boot</li>
               <li className=" text-[1.2rem] text-Exo2">MySQL</li>
               <li className=" text-[1.2rem] text-Exo2">NLP*</li>
               <li className=" text-[1.2rem] text-Exo2">Selenium</li>
               <li className=" text-[1.2rem] text-Exo2">Amazon AWS</li>
            </ul>
            </div>

            <div class="box4-f2 xl:w-[320px] flex flex-col gap-5 items-center bg-[#8282a825] rounded-[10px] lg:w-[90%]  xl:h-[260px] lg:py-8 lg:px-5  xl:p-4 xl:text-center">
            <span class="box4-f2-head text-2xl">
                <p className="text-3xl font-Exo2 border-b-4 border-[#00f1fe] p-[4px] text-[#fec400] font-semibold">
                Other Skills
                </p>
            </span>
            <ul class="box4-f2-subhead text-left list-disc">
               <li className=" text-[1.2rem] text-Exo2  list-disc">Communication</li>
               <li className=" text-[1.2rem] text-Exo2">Leadership</li>
               <li className=" text-[1.2rem] text-Exo2">Creative Writing</li>
               <li className=" text-[1.2rem] text-Exo2">Photography</li>
            </ul>
            </div>
            </div>

            {/* 5 Projects */}
            <div className="flex-col h-[900px] mb-[150px] lg:h-[1400px]" id="projectsec">

                <div className="pt-[40px] xl:ml-[220px] lg:flex lg:justify-center lg:text-center mb-[40px]">
                    <div className="w-[220px] border-b-4 border-[#00f1fe] pb-[4px]">
                    <p className="text-4xl text-[#fec400] font-poppins font-semibold">My Projects</p>
                    </div>
                </div>
            
                <div className="xl:flex xl:justify-evenly lg:flex-col">
                    <div className="mb-[70px] lg:ml-[20px]">
                        <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1704024897/004_bruylq.jpg" alt="proj1"
                        className="xl:h-[240px] xl:w-[440px] lg:w-[350px] border-[10px] border-[#8282a825]"></img>

                        <p className="text-[1.5rem] lg:text-[1.2rem] mt-[10px] font-Exo2 font-semibold">Donation and Fundraiser Platform</p>
                        
                        <a href="http://52.66.211.26" target="_blank" rel="noreferrer">
                            <button className="bg-[#fec400] h-[35px] lg:h-[30px] pl-[15px] pr-[15px] rounded-[5px] text-[#1a1a29] xl:text-[1.3rem] font-semibold 
                            mt-[10px] mr-[20px]">Visit Website</button></a>
                            
                        <a href="https://github.com/Harry-1081/App-Development" target="_blank" rel="noreferrer">
                            <button className="h-[35px] lg:h-[30px] pl-[15px] pr-[15px] rounded-[5px] xl:text-[1.3rem] font-semibold 
                            mt-[10px] border-[1px] border-[#fec400]">Repository</button></a>

                    </div>

                    <div className="mb-[70px] lg:ml-[20px]">
                        <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1704024898/001_onlqpt.png" alt="proj1"
                        className="xl:h-[240px] xl:w-[440px] lg:w-[350px] border-[10px] border-[#8282a825]"></img>
                        
                        <p className="text-[1.5rem] lg:text-[1.2rem] mt-[10px] font-Exo2 font-semibold">E-Commerce Website</p>
                        
                        <a href="https://maverickss.netlify.app" target="_blank" rel="noreferrer">
                            <button className="bg-[#fec400] h-[35px] lg:h-[30px] pl-[15px] pr-[15px] rounded-[5px] text-[#1a1a29] xl:text-[1.3rem] font-semibold 
                            mt-[10px] mr-[20px]">Visit Website</button></a>

                         <a href="https://github.com/paranthaman-l/E-commerce-Website" target="_blank" rel="noreferrer">
                            <button className="h-[35px] lg:h-[30px] pl-[15px] pr-[15px] rounded-[5px] xl:text-[1.3rem] font-semibold 
                            mt-[10px] border-[1px] border-[#fec400]">Repository</button></a>
    
                    </div>
                </div>

                <div className="xl:flex xl:mt-[40px] xl:justify-evenly lg:flex-col">
                    <div className="mb-[70px] lg:ml-[20px]">
                        <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1704024898/Landing_Page_dumx66.jpg" alt="proj1"
                        className="xl:h-[240px] xl:w-[440px] lg:w-[350px] border-[10px] border-[#8282a825]"></img>

                        <p className="text-[1.5rem] lg:text-[1.2rem] mt-[10px] font-Exo2 font-semibold">Tic-Tac-Toe Game</p>
                        
                        <button className="bg-[#eaa262] h-[35px] lg:h-[30px] pl-[15px] pr-[15px] rounded-[5px] text-[#1a1a29] xl:text-[1.3rem] font-semibold 
                            mt-[20px] mr-[20px]">Not hoisted</button>

                        <a href="https://github.com/Harry-1081/Tic-Tac-Toe" target="_blank" rel="noreferrer">
                            <button className="h-[35px] lg:h-[30px] pl-[15px] pr-[15px] rounded-[5px] xl:text-[1.3rem] font-semibold 
                            mt-[10px] border-[1px] border-[#fec400]">Repository</button></a>
                    </div>

                    <div className="mb-[70px] lg:ml-[20px]">
                        <img src="https://res.cloudinary.com/dnq6fx1oj/image/upload/v1704024931/Incomplete_lnryax.jpg" alt="proj1"
                        className="xl:h-[240px] xl:w-[440px] lg:w-[350px] border-[10px] border-[#8282a825]"></img>
                        
                        <p className="text-[1.5rem] lg:text-[1.2rem] mt-[10px] font-Exo2 font-semibold">Legal Assistant AI</p>
                        
                        <button className="bg-[#eaa262] h-[35px] lg:h-[30px] pl-[15px] pr-[15px] rounded-[5px] text-[#1a1a29] xl:text-[1.3rem] font-semibold 
                            mt-[20px] mr-[20px]">Not hoisted</button>

                        <button className="h-[35px] lg:h-[30px] pl-[15px] pr-[15px] rounded-[5px] xl:text-[1.3rem] font-semibold 
                            mt-[10px] border-[1px] border-[#fec400]">Repository</button>
         
                    </div>
                </div>
                
            </div>
            <div id="footersection">
            <Footer/>
            </div>
        </div>
        </>
    );
}
export default Home;

export const scrollToFooter = () => {
    const targetElement = document.getElementById('footersection');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', 
      }); }};

    export const scrollToSkills = () => {
    const targetElement = document.getElementById('skillsec');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth', 
          }); }};

    export const scrollToAbout = () => {
    const targetElement = document.getElementById('aboutsec');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth', 
          }); }};

    export const scrollToProjects = () => {
    const targetElement = document.getElementById('projectsec');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth', 
          }); }};