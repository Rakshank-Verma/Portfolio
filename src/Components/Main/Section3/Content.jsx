import React from "react";
import { useSelector } from "react-redux";

export default function Content(props) {

    const theme = useSelector(state => state.theme.theme)

    return (
        <>
            <div className="w-auto h-auto m-2 xsm:m-4 drop-shadow-xl">
                <a href={props.link}>
                    <h3 className={theme==="light" ? "text-base font-normal text-[#292828] text-center" : "text-base font-normal text-white text-center"}>{props.name}</h3>
                    <img src={props.img} alt="loading" className="w-[60px] h-[60px]"/>
                </a>
            </div>
        </>
    )
}