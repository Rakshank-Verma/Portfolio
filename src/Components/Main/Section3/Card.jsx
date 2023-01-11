import React from "react";
import { useSelector } from "react-redux";

export default function Card(props) {

    const theme = useSelector(state => state.theme.theme)

    return (
        <>
            <div className="flex-grow w-[280px] m-5 border-2 border-[#898785] p-4 rounded-md">
                <a href={props.cardTitleLink} rel="noreferrer"
                    className={theme==="light" ? "block mx-auto w-fit font-semibold text-2xl text-center my-5 hover:border-b-2 hover:border-solid hover:border-b-black" : "text-white block mx-auto w-fit font-semibold text-2xl text-center my-5 hover:border-b-2 hover:border-solid hover:border-b-white"}>{props.cardTitle}</a>
                <div className="flex flex-wrap h-auto overflow-hidden justify-center">
                    {props.content}
                </div>
            </div>
        </>
    )
}