import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
    
    
} from "../assets/icons";
import data from "../assets/icons/data.png"
import sql from "../assets/icons/sql.png";
import python from "../assets/icons/python.png";
import leetcode from "../assets/icons/leetcode.png";
import Real_Estate_App from "../assets/icons/Real_Estate_App.png";
import Doordish from "../assets/icons/Doordish.png";
import netflix_clone from "../assets/icons/netflix_clone.png";
import axcapital from "../assets/icons/axcapital.png"
import clothStore from "../assets/icons/Clothing-Store.png"

export const skills = [
    
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "data base",
    },
    {
        imageUrl: data,
        name: "Data",
        type: "data engineering",
    },
    {
        imageUrl: python,
        name: "python",
        type: "data engineering",
    },
    
    
    
];

export const experiences = [
    {
        title: "Full-stack Developer",
        company_name: "AX CAPITAL Real Estate - UAE",
        icon: starbucks,
        iconBg: "#000000",
        date: "July 2023 - Present",
        points: [
            "Front-End Development:Built an interactive, responsive UI using HTML, CSS, JavaScript, and ReactJS, resulting in a 25% boost in user engagement, 30% lower bounce rate, and 20% faster load times. Key contributions included reusable React components, optimized JavaScript, Webpack/Babel builds, and enhanced accessibility.",
             "Back-End Development:Developed a full-stack app with ReactJS, Node.js, and MongoDB, featuring authentication and real-time data management. This led to a 30% rise in user engagement, 40% faster load times, and 25% reduced development time. Followed best practices in code reviews, testing, and continuous integration."
        ],
        
           
        
    },
    {
        title: "Data Engineer",
        company_name: "WorksHub - Netherlands (Remote)",
        icon: tesla,
        iconBg: "#ffffff",
        date: "Feb 2024 - Present",
        points: [
            "ETL & Orchestration:Built efficient ETL pipelines using SQL, Python, and Generative AI, with seamless workflow automation via Dagster and Airflow.",
            "AI & Data Retrieval:Integrated RAG with LLMs for enriched responses and optimized semantic search using embeddings and vector databases.",
            "Data Management & Optimization:Managed reliable data flows with stream, batch, and CDC processes, ensuring high data quality and peak pipeline performance.",
            
        ],
    },
    {
        title: "Full Stack Engineer",
        company_name: "HCLTech - Sri Lanka",
        icon: shopify,
        iconBg: "#499afe",
        date: "Jan 2022 - Jun 2023",
        points: [
            "Creating new features, functionality and capabilities on the eCommerce sites Development languages Javascript, React.Js, Tailwind css, and Node.js.",
            "Recommending solutions for a streamlined, user-friend ly interface with thedesign team.",
            "Building stable and maintainable codebases using ReactJS.• Creating new features, functionality and capabilities on the eCommerce sites Development languages Javascript, React.Js, Tailwind css, and Node.js. • Recommending solutions for a streamlined, user-friend ly interface with the design team. • Building stable and maintainable codebases using ReactJS.",
          
        ],
    },
    {
        title: "Associate Software Enginee",
        company_name: "HCLTech - Sri Lanka",
        icon: meta,
        iconBg: "#499afe",
        date: "Feb 2021 to Jan 2022",
        points: [
            "Developed and deployed a full-stack app with React.JS front end, nodejs back end, and mongodb, featuring authentication and real-time data management.",
            "The project improved user engagement by 30%, reduced load times by 40%, and cut down on development time by 25% compared to previous projects.",
            "Achieved this with ReactS for a responsive Ul, nodejs for server logic, mongodb for scalable storage, and best practices in code reviews, testing, and Cl."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/imadmohamed',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abmohamedimad/',
    },
    {
        name: 'leetcode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/u/abmohammedimad/',
    },
];

export const projects = [
    {
        iconUrl: Doordish,
        theme: 'btn-back-red',
        name: 'Door dish',
        description: 'Developed a full-stack food delivery application featuring a responsive frontend with React.js, a robust backend using Node.js and Express.js, and MongoDB for efficient data management. The app includes secure user authentication, an intuitive admin panel for streamlined management, and seamless payment processing powered by Stripe, delivering an enhanced user and admin experience with scalable performance.',
        link: 'https://doordish.onrender.com/',
        link2: 'https://github.com/imadmohamed/Doordish'
    },
    {
        iconUrl: axcapital,
        theme: 'btn-back-black',
        name: 'Ax Capital Real Estate ',
        description: "AX Capital Real Estate is building a dynamic website using the MERN stack MongoDB, Express, React, and Node.js with real time features powered by Socket.IO. The platform will showcase property listings, enable instant communication between agents and clients, and provide a seamless, modern user experience for real estate browsing and interactions.",
        link: 'https://www.axcapital.ae/',
        link2: 'https://github.com/imadmohamed/Real-Estate-App',
        
    },
    {
        iconUrl: Real_Estate_App ,
        theme: 'btn-back-green',
        name: 'Real Estate App ',
        description: 'Build a MERN stack real estate app with React and Node.js, featuring user authentication, property listings, advanced search, and real time chat with Socket.io. The app includes responsive design, interactive maps, and secure booking, providing a complete platform for seamless property browsing and instant communication.',

        link:'https://oia-aproperties.vercel.app/',
        link2: 'https://github.com/imadmohamed/OIAproperties',
    },
    
    {
        iconUrl: netflix_clone,
        theme: 'btn-back-pink',
        name: 'Netflix Nelone',
        description: "A Netflix Clone built using React, Redux, Stripe, and Firebase is a full-stack web application that replicates core functionalities of Netflix, including user authentication, video streaming, and subscription payments. Here's a summary of its key aspects",

        link: 'https://netflix-clone2.vercel.app/',
        link2: 'https://github.com/imadmohamed/netflix-clone',

       
    },
    {
        iconUrl: clothStore,
        theme: 'btn-back-blue',
        name: 'Clothing Store',
        description: "A sleek and modern clothing storefront built with Next.js, TypeScript, and Redux. It features dynamic product listings, responsive design, and efficient state management. Users can browse, filter, and add items to their cart seamlessly. The tech stack ensures fast performance, scalability, and a smooth shopping experience across devices.",
        link: 'https://funky-souq-test-4pn9agja0-imads-projects-5fe8aa24.vercel.app/',
        link2: 'https://github.com/imadmohamed/Clothing-Store',
    }
];