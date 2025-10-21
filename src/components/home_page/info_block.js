import { useState } from "react";
import Skills from "./skills/skills";
import SlideInBlock from "../utils/SlideInBlock";

export default function Info_block() {
    const [activeTab, setActiveTab] = useState("info");
    const [prevTab, setPrevTab] = useState(null);
    const [direction, setDirection] = useState("left"); // 'left' or 'right'

    const handleTabSwitch = (tab) => {
        if (tab === activeTab) return;
        setDirection(tab === "education" ? "left" : "right");
        setPrevTab(activeTab);
        setActiveTab(tab);
    };
    // const [isExpanded, setIsExpanded] = useState(false);

    // const toggleExpand = () => {
    //     setIsExpanded(!isExpanded);
    // };
    

    return (
        <div className="info_block" id="about">
            <div className="row">
                <h2
                    className={`tab-button ${activeTab === "info" ? "active" : ""}`}
                    onClick={() => handleTabSwitch("info")}
                >
                    Personal Information
                </h2>
                <h2
                    className={`tab-button ${activeTab === "education" ? "active" : ""}`}
                    onClick={() => handleTabSwitch("education")}
                >
                    Education
                </h2>
            </div>

            <div className="tab-container">
                {/* Info Tab */}
                <div className={`tab-content info-tab
                    ${activeTab === "info" ? "active" : ""}
                    ${prevTab === "info" && direction === "left" ? "slide-left" : ""}
                    ${prevTab === "info" && direction === "right" ? "slide-right" : ""}
                `}>
                    {/* ...info content... */}
                    <div className="info">
                        <div className="column">
                            <SlideInBlock>
                            <h2>My name is Yaroslav Marochok</h2>
                            <p>
                                Third-year Computer Science student at the Slovak University of Technology (FIIT) with a strong interest in Python back-end development, ReactJS front-end development and game design. Interested in building efficient software and configuring Linux-based systems (Arch Linux, Fedora Linux). Quick to learn new technologies and comfortable working both independently and in team.
                            </p>
                            {/* <ul>
                                <li>Slovak B2</li>
                                <li>English B2</li>
                                <li>Ukrainian (native)</li>
                            </ul> */}
                            </SlideInBlock>
                        </div>
                        <div className="column">
                            {/* <button>SKILLS</button> */}
                            <Skills/>
                        </div>
                    </div>
                </div>
                {/* Education Tab */}
                <div className={`tab-content education-tab
                    ${activeTab === "education" ? "active" : ""}
                    ${prevTab === "education" && direction === "left" ? "slide-left" : ""}
                    ${prevTab === "education" && direction === "right" ? "slide-right" : ""}
                `}>
                    {/* ...education content... */}
                    <div className="education_block">
                        <div className="column">
                            <div className="edu_block">
                                <div className="edu_block_title"><h2>IT Step Academy (2021 - 2022)</h2><div className="story_line"></div></div>
                                <p>In Ukraine, I have studied in this school from October 2021 to June 2022 on course of Web-Development, where received knowledge on usage basics of web-development and more detailed ReactJS.</p>
                                {/* <button className="readmore" onClick={toggleExpand}>
                                            {isExpanded ? 'read less' : 'read more'}
                                        </button>                             */}
                            </div>
                            <div className="edu_block">
                                <div className="edu_block_title"><h2>Faculty of Informatics and Information Technologies (2023 - now)</h2><div className="story_line"></div></div>
                                <p>
                                    Studied at the Faculty of Informatics and Information Technologies (FIIT), STU in Bratislava. FIIT is a top-ranked Central European faculty for Informatics, renowned for its IET-accredited programs and graduates who are the most in-demand in 
                                    the local IT market. Focused my studies on Software Engineering, AI, and Information Security.
                                </p>
                                {/* <button className="readmore">read more</button> */}
                            
                            </div>
                        </div>
                        <div className="column_line"></div>
                        <div className="column">
                            <div className="edu_block">
                                <div className="edu_block_title"><h2>Albert Einstean Grammar School (2022-2023)</h2><div className="story_line"></div></div>
                                <p>
                                    After moving to Slovakia, this school offered an opportunity for many people without prior knowledge of the Slovak language to enroll, study, 
                                    and graduate. I successfully graduated in the subjects of Slovak, Mathematics, Physics, and English.
                                </p>
                                {/* <button className="readmore">read more</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}