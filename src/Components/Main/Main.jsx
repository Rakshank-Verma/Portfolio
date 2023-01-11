import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import { useSelector } from "react-redux";

export default function Main(){

    return(
        <>
            <main className="mx-6 my-10 flex flex-col md:mx-14">
                <Section1/>
                <Section2/>
                <Section3/>
            </main>
        </>
    )
}