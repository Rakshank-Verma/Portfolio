import React from "react";
import HeaderNav from "./HeaderNav";
import self_img from '../../image/RV_img.jpg';
import webDev_img from '../../image/Webdev-img.webp';
import { useSelector } from "react-redux";

function Header() {
    const theme = useSelector(state => state.theme.theme)

    return (
        <>
            <header className="mx-6 text-[#1A1917] md:mx-14">

                <div className="flex justify-between">
                    <div className={theme === "light" ? "title-lightMode" : "title-darkMode"}>
                        <div>Rakshank Verma</div>
                        <div>Student & Web Developer</div>
                    </div>
                    <HeaderNav />
                </div>

                <div className={theme === "light" ? "py-28 leading-tight text-[2.5rem] text-black md:text-[50px] lg:text-[60px] 2xl:text-[70px]" : "py-28 leading-tight text-[2.5rem] text-white md:text-[50px] lg:text-[60px] 2xl:text-[70px]"}>

                    <h1 className="font-medium relative">Hi there, my name is
                        <span className="cursor-pointer border-b-[3px] border-solid border-b-[#898785]"> Rakshank </span>.

                        <img src={self_img} alt="loading" style={{ transition: '0.3s' }} id="hov-zoom"
                            className={theme==="light" ? "img-lightMode" : "img-darkMode"} />
                        I'm a
                        <span className="border-b-[3px] border-solid border-b-[#898785]"> Student </span> and
                        <span className="border-b-[3px] border-solid border-b-[#898785]"> Web Developer </span>
                        <img src={webDev_img} alt="loading" style={{ transition: '0.3s' }}
                            className={theme==="light" ? "img-lightMode" : "img-darkMode"}
                        />
                        based in
                        <span className="border-b-[3px] border-solid border-b-[#898785]"> Ajmer (Rajasthan)</span>.
                    </h1>

                </div>

            </header>
        </>
    )
}

export default Header;