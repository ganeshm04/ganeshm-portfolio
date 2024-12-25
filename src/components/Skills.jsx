import React from 'react'
import image1 from '../assets/image1.svg';
import cpp from '../assets/cpp_png.png';
import java from '../assets/java.svg';
import react from '../assets/react-js.png'; 
import node from '../assets/node-js.png';
import js from '../assets/js.png';  
import css from '../assets/css-3.png';
import html from '../assets/html-5.png';
import typescript from '../assets/typescript.png';  
import git from '../assets/git-plain.svg';
import mongodb from '../assets/mongodb.png';
import docker from '../assets/docker.png';
import sql from '../assets/sql.webp';
import postman from '../assets/getpostman-icon.svg';
import tailwind from '../assets/tailwind.svg';

const Skills = () => {
    return (
        <div id="skills" className="c lg:min-h-screen p-10 py-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
            <div className="flex flex-col-reverse lg:flex-row w-full items-center">
                <div className="w-full lg:w-1/2 items-center px-10">
                    <img loading="lazy" src={image1} alt="" className="w-full aspect-square" />
                </div>
                <div className="w-full lg:px-20 lg:w-1/2 grid grid-cols-3 md:grid-cols-4 gap-4 lg:gap-10 text-white">
                    
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={cpp} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">C++</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={java} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Java</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={react} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">ReactJS</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={node} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">NodeJS</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={js} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">JavaScript</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={css} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">CSS</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={html} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">HTML</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={typescript} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">TypeScript</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={git} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Git</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={mongodb} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">MongoDB</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={docker} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Docker</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={sql} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">SQL</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={postman} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Postman</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src={tailwind} alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills