import React from "react";
import lightBtn from '../../image/icons8-sun-32.png';
import darkBtn from '../../image/icons8-moon-symbol-32.png'

import { useDispatch, useSelector } from "react-redux";


export default function HeaderNav() {
    const theme = useSelector(state => state.theme.theme)
    const theme_switch = (theme==="light") ? lightBtn : darkBtn;

    const dispatch = useDispatch();

    const themeSwitcher = ()=>{
        if(theme === "light")
            dispatch({type: "changeToDark"})
        else if(theme === "dark")
            dispatch({type: "changeToLight"})
    }
    
    let classname = (theme === "light" )? "a-lightMode" : "a-darkMode";
    return (
        <>
            <div className="hidden lg:py-12 lg:block">
                <ul className="flex items-center">
                    <li className="mx-2">
                        <a className={classname}
                            href="mailto:rakshankverma130250@gmail.com">Email</a>
                    </li>
                    <li className="mx-2">
                        <a className={classname} rel="noreferrer"
                            href="https://github.com/Rakshank-Verma" target="_blank">Github</a>
                    </li>
                    <li className="mx-2">
                        <a className={classname} rel="noreferrer"
                            href="https://www.linkedin.com/in/rakshank-verma-87b4b1204/" target="_blank">LinkedIn</a>
                    </li>
                    <li className="mx-2" onClick={themeSwitcher}>
                        <label className="cursor-pointer">
                            <img
                                className={theme==="light" ? "p-3 border-2 border-[#363535] rounded-full hover:bg-[#1D1D1B]" : "p-3 border-2 border-white rounded-full hover:bg-white"}
                                src={theme_switch} alt="loading" />
                        </label>
                    </li>
                </ul>
            </div>
        </>
    )
}