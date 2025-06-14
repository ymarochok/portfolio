import { useState } from "react";

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

    return (
        <div className="info_block">
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
                            <h2>My name is Yaroslav Marochok</h2>
                            <p>
                                Second-year Computer Science student at the Slovak University of Technology (FIIT) with a strong interest in Python back-end development, ReactJS front-end development and game design. Interested in building efficient software and configuring Linux-based systems (Arch Linux, Fedora Linux). Quick to learn new technologies and comfortable working both independently and in team.
                            </p>
                            <ul>
                                <li>Slovak B2</li>
                                <li>English B2</li>
                                <li>Ukrainian (native)</li>
                            </ul>
                        </div>
                        <div className="column">
                            <button>SKILLS</button>
                            <div className="skills_table"></div>
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
                            </div>
                            <div className="edu_block">
                                <div className="edu_block_title"><h2>IT Step Academy (2021 - 2022)</h2><div className="story_line"></div></div>
                                <p>In Ukraine, I have studied in this school from October 2021 to June 2022 on course of Web-Development, where received knowledge on usage basics of web-development and more detailed ReactJS.</p>
                            </div>
                        </div>
                        <div className="column_line"></div>
                        <div className="column">
                            <div className="edu_block">
                                <div className="edu_block_title"><h2>IT Step Academy (2021 - 2022)</h2><div className="story_line"></div></div>
                                <p>In Ukraine, I have studied in this school from October 2021 to June 2022 on course of Web-Development, where received knowledge on usage basics of web-development and more detailed ReactJS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}