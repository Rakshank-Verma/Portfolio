import React, {useState} from "react";
import Card from "./Card";
import { useSelector } from "react-redux";


export default function Section2() {
    const [btnState, setbtnState] = useState("..show more");
    function handler() {
        let hidden = document.querySelectorAll(".hidden-works");

        if (btnState === "..show more") {
            hidden.forEach(element => {
                element.classList.remove("hidden");
            });
            setbtnState("..show less");
        }
        else {
            hidden.forEach(element => {
                element.classList.add("hidden");
            });
            setbtnState("..show more");
        }
    }

    const theme = useSelector(state => state.theme.theme)


    return (
        <>
            <section className="my-10">
                <div className={theme === "light" ? "title-lightMode" : "title-darkMode"}>My works</div>
                <div className="w-[80vw] flex flex-col m-auto">
                    <div className="flex flex-wrap justify-center h-auto overflow-hidden my-5">
                        <Card
                            hidden={false}
                            title={'VS Code Theme'}
                            desc={`A small pack of dark and light theme for visual studio code.`}
                            githubLink={`https://github.com/Rakshank-Verma/vscode-Theme`}
                            visitLink={`https://marketplace.visualstudio.com/items?itemName=RakshankVerma.adwait-theme`}
                        />
                        <Card
                            hidden={false}
                            title={'Youtube Downloader'}
                            desc={`A web app to download youtube videos. Develop using React, Tailwind, RapidApi & Material UI.`}
                            githubLink={`https://github.com/Rakshank-Verma/Youtube-Downloader-React/tree/master`}
                            visitLink={`https://rakshank-verma.github.io/Youtube-Downloader-React/`}
                        />
                        <Card
                            hidden={false}
                            title={'MyFiles'}
                            desc={`A web app to upload pdf files of size upto 10MB on a remote server. And can be downloaded when necessary.`}
                            githubLink={`https://github.com/Rakshank-Verma/myFiles`}
                            visitLink={`https://rakshank-verma.epizy.com`}
                        />
                        <Card
                            hidden={true}
                            title={'Instagram Login Clone'}
                            desc={`Instagram login clone using HTML and Tailwind CSS.`}
                            githubLink={`https://github.com/Rakshank-Verma/Instagram-Login-Page-Clone`}
                            visitLink={`https://rakshank-verma.github.io/Instagram-Login-Page-Clone/`}
                        />
                        <Card
                            hidden={true}
                            title={'Facebook Login Clone'}
                            desc={`Facebook login clone using HTML and Tailwind CSS.`}
                            githubLink={`https://github.com/Rakshank-Verma/Facebook-Login-Page-Clone`}
                            visitLink={`https://rakshank-verma.github.io/Facebook-Login-Page-Clone`}
                        />
                        <Card
                            hidden={true}
                            title={'Calculator'}
                            desc={`A simple calculator for doing basic arithmetic operations using HTML, CSS and Javascript.`}
                            githubLink={`https://github.com/Rakshank-Verma/Simple-Calculator`}
                            visitLink={` https://rakshank-verma.github.io/Simple-Calculator/`}
                        />
                        <Card
                            hidden={true}
                            title={'Password Generator'}
                            desc={`A random password generator creates a strong password of given length.`}
                            githubLink={`https://github.com/Rakshank-Verma/Password-Generator`}
                            visitLink={` https://rakshank-verma.github.io/Password-Generator/`}
                        />
                    </div>
                    <div className="ml-auto w-[100%] flex justify-end">
                        <button id="more-btn" className={theme === "light" ? "text-black font-medium text-lg" : "text-white font-medium text-lg"} onClick={handler}>{btnState}</button>
                    </div>
                </div>
            </section>
        </>
    )
}