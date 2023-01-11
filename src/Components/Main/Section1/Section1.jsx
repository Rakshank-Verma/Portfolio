import React from "react";
import College_img from '../../../image/College_img.jpg';
import { useSelector } from "react-redux";


export default function Section1() {
    const theme = useSelector(state => state.theme.theme)

    return (
        <>
            <div className="my-10">
                <div className={theme === "light" ? "title-lightMode" : "title-darkMode"}>Words about myself</div>
                <div className={theme==="light" ? "para-lightMode" : "para-darkMode"}>
                    I'm a B.Tech student in Information Technology and will graduate in 2024. Studying at
                    <img src={College_img} alt="loading" style={{ transition: '0.3s' }}
                        className={theme === "light" ? "img-lightMode" : "img-darkMode"} />
                    <a  href="https://ecajmer.ac.in" rel={'noreferrer'} target={'_blank'}
                        className="border-b-[3px] border-solid border-b-[#898785] cursor-pointer">Govt. Engineering College
                        Ajmer.</a>
                    <br/><br/>
                    For over 3 months I have been learning Web Development. I have developed some skills and beginner to
                    intermediate projects which you will find scrolling a bit down. Currently I'm looking for an internship
                    related to Web Development whether it is Front End , Back End or Full Stack.
                </div>
            </div>
        </>
    )
}