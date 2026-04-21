// Skills Section Logo's

// change according to your need 
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';


import movierecLogo from './assets/work_logo/movie_rec.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';


import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';


import javaLogo from './assets/tech_logo/java.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';


import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Education Section Logo's
import upsLogo from './assets/education_logo/ups_logo.png';
import sdsuv from './assets/education_logo/sdsuv.png';

// ----------------------------------------ALL DONE-----------------------------------------------------





// ------------------------------SKILL INFO ALL DONE----------------------------------------------------------------
// if you add/delete any field than update here  
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];
// ------------------------------SKILL INFO ALL DONE----------------------------------------------------------------

// ------------------------------FIRST CHANGE EDUCATION INFO ----------------------------------------------------------------
export const education = [
  {
    id: 0,
    img: upsLogo,
    school: "Udaishwar Public School, Haridwar, Uttarakhand",
    date: "Apr 2020 - Mar 2021",

    grade: "74%",
    desc: `Completed Class 10 under the CBSE board. Achieved a strong academic record with a percentage of 74%, demonstrating a solid understanding of core subjects and a commitment to academic excellence.`,
    degree: "CBSE (Class X)",
   
  },
  {
    id: 1,
    img: upsLogo,
    school: "Udaishwar Public School, Haridwar, Uttarakhand",
    date: "Apr 2022 - Mar 2023",

    grade: "72%",
    desc: `Completed Class 12 under the CBSE board with Physics, Chemistry, Mathematics. Achieved a strong academic record with a percentage of 72%, demonstrating a solid understanding of core subjects and a commitment to academic excellence.`,
    degree: "CBSE (Class XII)",

  },
  {
    id: 2,
    img: sdsuv,
    school: "HEC group of institutions, affiliated to Shree dev suman university, Uttarakhand",
    date: "Apr 2023 - Mar 2026",
    grade: "78.4%",
    desc: `completed my graduation in Bachelor of Computer Applications (BCA) with a strong academic record, achieving a CGPA of 7.84. My coursework included programming languages, database management, web development, and software engineering, providing me with a solid foundation in computer applications and software development.`,
    degree: "BCA (Bachelor of Computer Applications)",
   
  },
];









// -------------------------CHANGE GITHUB AND WEBAPP LINK OF EACH PROJECTS IF DEPLOYED----------------------------------------------------------------

export const projects = [
  {
    id: 0,
    title: "MovieRecommender",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vashu-Kumar/MovieRecommender",
    webapp: "https://movie-recommender-six-kappa.vercel.app/",
  },
  
];







