import React from "react";
import Card from './Card';
import Content from "./Content";
import {htmlIcon, cssIcon, jsIcon, phpIcon, sqlIcon, tcIcon, reactIcon, nodeIcon} from './image'
import { useSelector } from "react-redux";


export default function Section3() {

    const theme = useSelector(state => state.theme.theme)

    return (
        <>
            <section className="my-24">
                <div className={theme === "light" ? "title-lightMode" : "title-darkMode"}>My skills</div>
                <div className="w-[80vw] flex flex-wrap flex-row m-auto justify-between">
                    <Card cardTitle="Frontend" cardTitleLink="https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html" content={[
                        <Content link="https://www.w3schools.com/html/html_intro.asp"
                            name="HTML5"
                            img={htmlIcon} />,

                        <Content link="https://www.w3schools.com/css/css_intro.asp"
                            name="CSS3"
                            img={cssIcon} />,

                        <Content link="https://www.w3schools.com/whatis/whatis_js.asp"
                            name="JAVASCRIPT"
                            img={jsIcon} />
                    ]} />

                    <Card cardTitle="BackEnd" cardTitleLink="https://codeinstitute.net/global/blog/what-is-back-end-development/" content={[
                        <Content link="https://www.w3schools.com/php/php_intro.asp"
                            name="PHP"
                            img={phpIcon} />,

                        <Content link="https://www.w3schools.com/php/php_mysql_intro.asp"
                            name="MYSQL"
                            img={sqlIcon} />
                    ]} />
                    
                    <Card cardTitle="Frameworks" cardTitleLink="https://en.wikipedia.org/wiki/Web_framework" content={[
                        <Content link="https://tailwindcss.com/"
                            name="TAILWIND CSS"
                            img={tcIcon} />,

                        <Content link="https://reactjs.org/"
                            name="REACT"
                            img={reactIcon} />,

                        <Content link="https://nodejs.org/en/about/"
                            name="NODE JS"
                            img={nodeIcon} />
                        ]} />


                </div>
            </section>
        </>
    )
}