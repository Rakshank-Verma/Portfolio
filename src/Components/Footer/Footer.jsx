import React from "react";
import { useSelector } from "react-redux";


export default function Footer() {
    const theme = useSelector(state => state.theme.theme)

    return (
        <>
            <footer className="mx-6 md:mx-14 py-14">
                <section>
                    <div id="title" className={theme === "light" ? "title-lightMode" : "title-darkMode"}>Connect with me</div>
                    <div className={theme==="light" ? "para-lightMode" : "para-darkMode"}>
                        If you want to team up or just chat, you can 
                        <a href="mailto:rakshankverma130250@gmail.com" className="border-b-2 border-solid border-b-[#898785]"> write
                            me an email </a>
                        or hit me up via LinkedIn. I occassionally share my thoughts and post pictures on my (private)
                        <a href="https://www.instagram.com/rakshank_verma85/" rel="noreferrer" target="_blank"
                            className="border-b-2 border-solid border-b-[#898785]"> Instagram </a>
                        page. You can also check out this portfolio webpage code on my
                        <a href="https://github.com/Rakshank-Verma/Portfolio/tree/master" rel="noreferrer" className="border-b-2 border-solid border-b-[#898785]" target="_blank"> Github </a>
                        account.
                    </div>
                </section>
                <section>
                    <div className={theme==="light" ? "text-[#686767] text-[1rem] md:text-[1.05rem] font-semibold pt-72 pb-28" : "text-[#dbdad4] text-[1rem] md:text-[1.05rem] font-medium pt-72 pb-28"}>Be kind and stay
                        excellent</div>
                </section>
            </footer>
        </>
    )
}