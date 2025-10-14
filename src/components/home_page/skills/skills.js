import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from "react";

import './skills.scss';

import {
  faJs,
  faReact,
  faNodeJs,
  faPython,
  faLinux,
  faRust,
  faJava,
  faGitAlt,
  faHtml5,
  faUnity,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
const allSkills = [
  { 
    icon: faPython, 
    title: "Python",  
    content: "My loyal serpent. I’ve used it for AI experiments, socket-based file sharing, and random automation spells that probably shouldn’t work—but somehow do." 
  },
  { 
    icon: faReact, 
    title: "ReactJS",   
    content: "Three years of taming the virtual DOM beast. I build interfaces that feel alive and sometimes stare back." 
  },
  { 
    icon: faJs, 
    title: "JS/TS",   
    content: "JavaScript taught me chaos; TypeScript gave me order. Together they form a balanced weapon for front-end sorcery." 
  },
  { 
    icon: faHtml5, 
    title: "HTML5",   
    content: "The bones of every project. I write semantic markup so clean it could be eaten raw." 
  },
  { 
    icon: faCss3Alt, 
    title: "CSS3",    
    content: "The art of turning boxes into beauty. Flexbox and grid are my brush and chisel." 
  },
  { 
    icon: faJava, 
    title: "Java",    
    content: "Used it for group projects that nearly became startups. Verbose, strict, but reliable—like a teacher you secretly respect." 
  },
  { 
    icon: faDatabase, 
    title: "SQL",     
    content: "Once built a full RPG system inside PostgreSQL. Yes, quests, stats, and all. No regrets." 
  },
  { 
    icon: faRust, 
    title: "Rust",    
    content: "Sharp, elegant, and unforgiving. Worked on an academic audio streaming service—safe, fast, and built with pure discipline." 
  },
  { 
    icon: 'FastAPI.svg',  
    title: "FastAPI", 
    content: "Python’s turbocharged backend rocket. I build APIs that respond before you finish blinking." 
  },
  { 
    icon: 'c.svg',        
    title: "C/C++",   
    content: "Forged my fundamentals here. Data structures, algorithms, and a healthy fear of segmentation faults." 
  },
  { 
    icon: faGitAlt,       
    title: "Git",     
    content: "Version control is second nature. I don’t commit mistakes—just features that need refactoring." 
  },
  { 
    icon: faUnity,        
    title: "Unity",   
    content: "My gateway into game dev. From pixel dust to low-poly worlds—where code meets imagination." 
  },
  { 
    icon: faLinux,        
    title: "Linux",   
    content: <span>(I use Arch, btw.)</span> 
  },
];


// Helper function: split flat array into pyramid rows of sizes: rows, rows-1, ..., 1
// function splitSkillsIntoRows(skills, rowsCount) {
//   const rows = [];
//   let startIndex = 0;

//   for (let i = 0; i < rowsCount; i++) {
//     const rowSize = rowsCount - i + 1; // decreasing row size
//     const rowSkills = skills.slice(startIndex, startIndex + rowSize);
//     rows.push(rowSkills);
//     startIndex += rowSize;
//   }
//   return rows;
// }

let angleStep = 360 / allSkills.length;
let radius = 180;
const radius_na = radius;
const radius_act = 200;
let rotation_axis = 360;
let back_rot = false;

function changeRadius(new_rad) {
  radius = new_rad
}

function startAngleStepRotation(callback, isPausedRef) {
  const interval = setInterval(() => {
    if (!isPausedRef.current) {
      rotation_axis += back_rot ? 360 : -360;
      angleStep = rotation_axis / allSkills.length;
      // radius += back_rot ? 20 : -20

      if (angleStep % 360 == 0){
        back_rot = !back_rot
        rotation_axis += back_rot ? 720 : -720;
        angleStep = rotation_axis / allSkills.length;
      } 
      
      console.log("Angle step is " + angleStep + " rotation axis is " + rotation_axis + " back_rot is " + back_rot)

      if (callback) callback(angleStep);
    } 
  }, 2000);

  return () => clearInterval(interval);
}

function normalizeAngle(angle) {
  let trans_direction = 1;
  if (angle >= 180) {
    angle -= 360
  }

  if (angle > 90){
    angle = -(180 - angle);
    trans_direction = -1;
  } 

  if (angle < -90){
    angle = 180 + angle;
    trans_direction = -1;
  }

  return [angle, trans_direction]
}

export default function Skills({ rowsCount = 4 }) {
  const [disabledIndex, setDisabledIndex] = useState(null);
  const [angle_temp, setAngle] = useState(angleStep);
  const [rotation_paused, setPauseRotation] = useState(false);
  const isPausedRef = useRef(rotation_paused);

  useEffect(() => {
    isPausedRef.current = rotation_paused;
  }, [rotation_paused]);

  useEffect(() => {
    const stop = startAngleStepRotation(setAngle, isPausedRef);
    return stop; // cleanup on unmount
  }, []);

  

  return (
    <div className="skills" id="skills" 
        onMouseEnter={() => {changeRadius(radius_act); setPauseRotation(true)}} 
        onMouseLeave={() => {changeRadius(radius_na); setPauseRotation(false)}}>

      <div className="rotation_container">
        <div className="circle-container">
          {
          allSkills.map((skill, idx) => {

                  const [angle, trans_direction] = normalizeAngle(idx * angle_temp);

                  const isDisabled = disabledIndex === idx;

                  const transform = isDisabled
                      ? `scale(1.2) translateY(-45px) `
                      : `rotate(${angle}deg) translate(${radius * trans_direction}px) rotate(${-angle}deg)`;

                  

                  return (<div key={idx} className="skill circle-skill" style={{ transform }} 
                  onClick={() => {
                    setDisabledIndex(prev => prev === idx ? null : idx);

                    // const clickMeText = document.querySelector('#clickmetext');
                    
                    

                    // (is_something_active) ? 
                    //   clickMeText.style.transform = 'scale(0)' 
                    // : clickMeText.style.transform = 'scale(1)'

                    // setClickHidden(!clickHidden);

                  }}
                  >
                    {skill.title === "FastAPI" ? (
                        <>
                            <img 
                            src="https://ymarochok.github.io/portfolio/assets/FastAPI.svg" 
                            alt="FastAPI" 
                            style={{ width: "30px", height: "30px"}} 
                            />
                            <div className="skill-title">{skill.title}</div>
                        </>
                        ) : skill.title == "C/C++" ? (
                        <>
                            <img 
                                src="https://ymarochok.github.io/portfolio/assets/c.svg" 
                                alt="C Language" 
                                style={{ width: "30px", height: "30px"}} 
                                />
                                <div className="skill-title">{skill.title}</div>
                        </>
                        ) : (
                        <>
                            <FontAwesomeIcon icon={skill.icon} size="2x" />
                            <div className="skill-title" >{skill.title}</div>
                        </>
                        )}

                  </div>)

                

          })}


          <div>
            {allSkills.map((skill, idx) => {
              const isDisabled = disabledIndex === idx;

              return(<p className="description"  style={{ transform: isDisabled ? "scale(1) translateY(00px)" : "scale(0)" }}>
                {skill.content}
              </p>)
            })}

              <p id="clickmetext" className="description" style={{
                transform: disabledIndex === null ? "scale(1)" : "scale(0)",
                transition: "transform 0.3s ease"
              }}>Choose a skill!</p>
          </div>

          </div>
      </div>
      
      {/* 
      {rows.map((row, i) => {
        const padding = i * 20; 

        return (
          <div
            key={i}
            className="skills-row"
            style={{ paddingLeft: `${padding}px`, paddingRight: `${padding}px` }}
          >
            {row.map((skill, idx) => (
              <div key={idx} className="skill">
                {skill.title === "FastAPI" ? (
                    <>
                        <img 
                        src="/FastAPI.svg" 
                        alt="FastAPI" 
                        style={{ width: "48px", height: "48px"}} 
                        />
                        <div className="skill-title">{skill.title}</div>
                    </>
                    ) : skill.title == "C/C++" ? (
                    <>
                        <img 
                            src="/c.svg" 
                            alt="C Language" 
                            style={{ width: "48px", height: "48px"}} 
                            />
                            <div className="skill-title">{skill.title}</div>
                    </>
                    ) : (
                    <>
                        <FontAwesomeIcon icon={skill.icon} size="3x" />
                        <div className="skill-title">{skill.title}</div>
                    </>
                    )}

              </div>
            ))}

          </div>


        );
      })} 
      */}
    
    </div>
  );
}
