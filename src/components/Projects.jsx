import React from "react";
import ems from "../assets/employee-ms.png";
import chat_app from "../assets/chat_app.png";
import dab from "../assets/dab.png";

const projects = [
  {
    id: 1,
    name: "Employee Management App",
    technologies: "React JS,Node JS,Local Storage",
    image: ems,
    github: "https://github.com/ganeshm04/EMS",
    live:"https://ganeshm04.github.io/EMS/"
  },
  {
    id: 2,
    name: "Doctor Appointment Booking App",
    technologies: "React JS,Node JS,Express JS",
    image: dab,
    github: "https://github.com/ganeshm04/DAB_app",
    live: "https://ganeshm04.github.io/DAB_app/",
  },
  {
    id: 3,
    name: "Real Time Chat App",
    technologies: "MongoDB,Express JS,React JS,Node JS,Zustand,Socket.io",
    image: chat_app,
    github: "https://github.com/ganeshm04/Full_Stack_Chat_App",
    live: "https://full-stack-chat-app-bcvt.onrender.com/signup",
  },
];

const Projects = () => {
  return (
    <div className="c text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
              <a href={project.live} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full ml-12" target="_blank" 
              rel="noopener noreferrer">Live Preview</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
