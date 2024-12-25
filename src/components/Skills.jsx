import React from 'react'

const Skills = () => {
    return (
        <div id="skills" className="c lg:min-h-screen p-10 py-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
            <div className="flex flex-col-reverse lg:flex-row w-full items-center">
                <div className="w-full lg:w-1/2 items-center px-10">
                    <img loading="lazy" src="src\assets\image1.svg" alt="" className="w-full aspect-square" />
                </div>
                <div className="w-full lg:px-20 lg:w-1/2 grid grid-cols-3 md:grid-cols-4 gap-4 lg:gap-10 text-white">
                    
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\cpp_png.png" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">C++</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\java.svg" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Java</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\react-js.png" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">ReactJS</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\node-js.png" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">NodeJS</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\js.png" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">JavaScript</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\css-3.png" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">CSS</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\html-5.png" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">HTML</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\typescript.png" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">TypeScript</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\git-plain.svg" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Git</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\mongodb.png" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">MongoDB</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\docker.png" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Docker</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\sql.webp" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">SQL</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\getpostman-icon.svg" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Postman</p>
                    </div>
                    <div className="skill w-full flex flex-col items-center gap-4 px-4">
                        <img src="src\assets\tailwind.svg" alt="" loading="lazy" className="w-full aspect-square" />
                        <p className="text-center">Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills