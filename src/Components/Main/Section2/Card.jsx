import React from "react";
import { useSelector } from "react-redux";

export default function Card(props) {

    const theme = useSelector(state => state.theme.theme)


    return (
        <>
            <div
                className={props.hidden ? "hidden-works hidden w-[300px] h-auto border border-[#898785] m-5 p-5 rounded-lg" : "w-[300px] h-auto border border-[#898785] m-5 p-5 rounded-lg"} >
                <h5 className={theme === "light" ? "text-2xl font-bold text-[#1A1917]" : "text-2xl font-bold text-white"}>{props.title}</h5>
                <p className={theme === "light" ? "text-xl my-3" : "text-xl my-3 text-white"}>{props.desc}</p>
                <div className="flex justify-between">
                    <a href={props.githubLink} rel={'noreferrer'} target="_blank" className="text-white rounded-lg bg-[#2EA043] px-3 py-1">Github Repo</a>

                    <a href={props.visitLink} rel={'noreferrer'} target="_blank" className="text-white rounded-lg bg-[#2EA043] px-3 py-1">Visit</a>

                </div>
            </div>
        </>
    )
}