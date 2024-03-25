// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import java from "./assets/images/Skills/java.png";
import c from "./assets/images/Skills/c.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import golang from "./assets/images/Skills/golang.png";
import git from "./assets/images/Skills/git.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "HI, I'M AMAL SHALINDA",
    firstName: "",
    LastName: "WELCOME..!",
    image: Hero_person,
    hero_content: [
      {
        count: "<<",
        text: "Full Stack Developer ",
      },
      {
        count: ">>",
        text: "Innovative Problem Solver",
      },
    ],
  },
  skills: {
    title: "SKILLS",
    subtitle: "My Top Skills",
    skills_content: [
      {
        name: "Figma",
        para: "Collaborative design and prototyping",
        logo: figma,
      },
      {
        name: "Springboot",
        para: "Java web application framework",
        logo: nodejs,
      },
      {
        name: "Blender",
        para: "Powerful 3D modeling software",
        logo: ps,
      },
      {
        name: "React js",
        para: "JavaScript library for UI",
        logo: reactjs,
      },
      {
        name: "Flutter",
        para: " Cross-platform mobile app development",
        logo: sketch,
      },
      {
        name: "JavaScript",
        para: "Dynamic scripting language for web",
        logo: python,
      },
      {
        name: "Java",
        para: "Widely-used versatile programming language",
        logo: java,
      },
      {
        name: "C",
        para: "Efficient and versatile programming",
        logo: c,
      },
      {
        name: "HTML",
        para: "Markup language for web development",
        logo: html,
      },
      {
        name: "CSS",
        para: "Styling for web pages",
        logo: css,
      },
      {
        name: "Go",
        para: "Go lang- Programming Language",
        logo: golang,
      },
      {
        name: "Git",
        para: "Version Controlling-github/bitbucket",
        logo: git,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "INTERESTS",
    subtitle: "What I Like To Do",
    service_content: [
      {
        title: "Web & Mobile App Development",
        para: "Crafting innovative and interactive web and mobile applications",
        logo: services_logo1,
      },
      {
        title: "UI / UX Designing",
        para: "Creating intuitive and visually appealing user interfaces for seamless user experiences",
        logo: services_logo2,
      },
      {
        title: "3D Modeling & Animation",
        para: "Transforming ideas into captivating 3D models and animations",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "PROJECTS",
    subtitle: "Projects I've Completed",
    image: person_project,
    project_content: [
      {
        title: "FOOD BANK",
        image: project1,
      },
      {
        title: "Automatic Pipe Cutting Machine",
        image: project2,
      },
      {
        title: "Inventory Management System",
        image: project3,
      },
    ],
  },
  Resume: {
    title: "RESUME",
    subtitle: "Career Overview",
    
   Resume: [
     
     
    ],
  },
  Hireme: {
    title: "ABOUT ME",
    subtitle: "Getting to Know Me",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hi, I'm Amal Shalinda and I am a responsible, self-motivated IT undergraduate with leadership qualities and a passion for logical and creative thinking. I strive to expand my knowledge and skills in technology, with a strong foundation in software engineering, problem-solving, programming, and project management.",
   
  },
  Contact: {
    title: "CONTACT ME",
    subtitle: "Connect with Me",
    social_media: [
      {
        text: "amalshalinda1999@gmail.com",
        icon: GrMail,
        link: "mailto:amalshalinda1999@gmail.com",
      },
      {
        text: "+94 70 360 3922",
        icon: MdCall,
        // link: "https://wa.me/+94 70 360 3922",
      },
      {
        text: "Amal Shalinda",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/amal-shalinda-188885231/",
      },
      {
        text: "Shalinda99",
        icon: BsGithub,
        link: "https://github.com/Shalinda99",
      },
    ],
  },
  Footer: {
    text: "© 2023 Amal Shalinda | All Rights Reserved",
  },
};
