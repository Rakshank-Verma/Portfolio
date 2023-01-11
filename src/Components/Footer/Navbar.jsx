import React from "react";
import lightBtn from '../../image/theme-switch-nav.jpg'
import darkBtn from '../../image/half-moon.png'
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {
    const theme = useSelector(state => state.theme.theme);
    const themeBtn = (theme==="light") ? lightBtn : darkBtn;
    const liClass = (theme==="light") ? "liClass-lightMode" : "liClass-darkMode";
    const dispatch = useDispatch();
    const themeSwitcher = ()=>{
        if(theme === "light")
            dispatch({type: "changeToDark"})
        else if(theme === "dark")
            dispatch({type: "changeToLight"})
    }

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 118 || document.documentElement.scrollTop > 118) {
            document.getElementById("navbar").style.bottom = "32px";
        } else {
            document.getElementById("navbar").style.bottom = "-70px";
        }
    }
    return (
        <>
            <nav id="navbar" style={{ transition: 'bottom 0.3s' }}
                className={theme==="light" ? "class-lightMode" : "class-darkMode"}>
                <ul className="flex items-center">

                    <li className={liClass}>
                        <a className="text-xl" href="mailto:rakshankverma130250@gmail.com">Email</a>
                    </li>

                    <li className={liClass}>
                        <a className="text-xl" href="https://github.com/Rakshank-Verma" rel="noreferrer" target="_blank">Github</a>
                    </li>

                    <li className={liClass}>
                        <a className="text-xl" href="https://www.linkedin.com/in/rakshank-verma-87b4b1204/" rel="noreferrer"
                            target="_blank">LinkedIn</a>
                    </li>

                    <li className="mx-3 xsm:mx-4 md:mx-5" onClick={themeSwitcher}>
                        <label className="cursor-pointer">
                            <img className="w-8 h-8 md:w-10 md:h-10" src={themeBtn} alt="loading" />
                        </label>
                    </li>
                    
                </ul>
            </nav>
            
        </>
    )
}