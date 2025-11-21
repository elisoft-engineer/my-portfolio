import { faLaptopCode, faServer, faCloud, faCode, faCogs, faRobot } from "@fortawesome/free-solid-svg-icons";

import css from '../assets/icons/css.svg';
import dart from '../assets/icons/dart.svg';
import django from '../assets/icons/django.svg';
import docker from '../assets/icons/docker.svg';
import fastapi from '../assets/icons/fastapi.svg';
import flutter from '../assets/icons/flutter.svg';
import html from '../assets/icons/html.svg';
import javascript from '../assets/icons/javascript.svg';
import nextjs from '../assets/icons/nextjs.svg';
import nodejs from '../assets/icons/nodejs.svg';
import python from '../assets/icons/python.svg';
import react from '../assets/icons/react.svg';
import sqlalchemy from '../assets/icons/sqlalchemy.svg';
import swagger from '../assets/icons/swagger.svg';
import vite from '../assets/icons/vite.svg';

import falcosendImg from '../assets/images/falcosend.webp';
import ellypadImg from '../assets/images/ellypad.webp';
import emsImg from '../assets/images/ems.webp';
import yummypointImg from '../assets/images/yummypoint.webp';
import mystudynetImg from '../assets/images/mystudynet.webp';

import ciscoIcon from "../assets/icons/cisco.svg";
import googleIcon from "../assets/icons/google.svg";
import jhuIcon from "../assets/icons/john-hopkins-university.svg";
import metaIcon from "../assets/icons/meta.svg";
import uolIcon from "../assets/icons/university-of-london.svg";
import umIcon from "../assets/icons/university-of-michigan.webp";


const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Node Js",
    icon: nodejs,
  },
  {
    name: "SQLAlchemy",
    icon: sqlalchemy,
  },
  {
    name: "Swagger",
    icon: swagger,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Vite",
    icon: vite,
  },
]

const expertise = [
  {
    name: "Programming Languages",
    icon: faCode,
    skills: [
      {name: "Python", percentage: 95},
      {name: "JavaScript", percentage: 90},
      {name: "TypeScript", percentage: 85},
      {name: "Dart", percentage: 90},
      {name: "Kotlin", percentage: 85},
      {name: "C++", percentage: 90},
      {name: "HTML5", percentage: 95},
      {name: "CSS3", percentage: 95},
    ]
  },
  {
    name: "Frontend Technologies",
    icon: faLaptopCode,
    skills: [
      {name: "React", percentage: 90},
      {name: "Next.js", percentage: 85},
      {name: "Tailwind CSS", percentage: 85},
      {name: "Flutter", percentage: 90},
      {name: "Material UI", percentage: 90},
    ]
  },
  {
    name: "Backend Technologies",
    icon: faServer,
    skills: [
      {name: "Django", percentage: 95},
      {name: "FastAPI", percentage: 95},
      {name: "SQLAlchemy", percentage: 90},
      {name: "Node.js", percentage: 90},
      {name: "Express.js", percentage: 90},
      {name: "PostgresSQL", percentage: 90},
      {name: "MongoDB", percentage: 85}
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: faRobot,
    skills: [
      {name: "TensorFlow", percentage: 85},
      {name: "Keras", percentage: 85},
      {name: "ScikitLearn", percentage: 85},
      {name: "Pandas", percentage: 90},
      {name: "Numpy", percentage: 90},
    ]
  },
  {
    name: "DevOps",
    icon: faCloud,
    skills: [
      {name: "Git", percentage: 90},
      {name: "Docker", percentage: 85},
      {name: "GHCR", percentage: 85},
      {name: "CI/CD", percentage: 85},
      {name: "NGINX", percentage: 85},
    ]
  },
]

const services = [
  {
    icon: faLaptopCode,
    title: "Business Websites",
    description: "Interactive websites for businesses and institutions. They ensure 24/7 online presence and expand the market beyoud physical location."
  },
  {
    icon: faCogs,
    title: "Enterprise Software",
    description: "Inventory, billing and workflow systems that automate repetitive work and reduce errors. They are integrated with fine-tuned dashboards."
  },
  {
    icon: faServer,
    title: "Backend & API Development",
    description: "Development of robust and secure application servers for enterprise software as well as web applications."
  },
  {
    icon: faCloud,
    title: "Deployment & DevOps",
    description: "Enterprise software deployments (on-premise and web) and maintainance and monitoring services."
  }
]

const projects = [
  {
    title: "Falcosend",
    description: "A developer-focused platform that bridges static websites with powerful backend features such as form handling, data storage, analytics, and real-time alerts.  It enables developers to handle form submissions in static websites and applications without writing server code.",
    image: falcosendImg,
    technologies: ["Python", "Django", "Django REST Framework", "JavaScript", "React", "CSS"]
  },
  {
    title: "Ellypad",
    description: "A project management software that tracks software projects in all stages of development. It facilitates project proposal submissions by clients. It also offers project team management tools as well as task assignment and management tools",
    image: ellypadImg,
    technologies: ["Python", "Django", "Django REST Framework", "JavaScript", "Next JS", "CSS"]
  },
  {
    title: "Ellypad EMS (Enterprise Management Software)",
    description: "The EMS is designed to facilitate activities carried out within any enterprise store. It comes with the following features: Inventory Management, Product management, Stock Level Alerts, User Authentication, and Customer Relationship Management.",
    image: emsImg,
    technologies: ["Dart", "Python", "Django REST Framework", "Flutter", "Docker", "NGINX"]
  },
  {
    title: "YummyPoint",
    description: "A demo food ordering platform. It facilitates major actions taken in a food ordering platform such as creation and modification of menus and categories. It also features user authentication and admin dashboard.",
    image: yummypointImg,
    technologies: ["Python", "Django", "JavaScript", "Jinja", "CSS"]
  },
  {
    title: "My Study Net",
    description: "An E-Learning platform that facilitates creation of courses from PDFs. The platform enables users to register to various courses and also enables them to create their own courses by uploading PDF documents from which the platform generates a course.",
    image: mystudynetImg,
    technologies: ["Python", "FastAPI", "SQLAlchemy", "JavaScript", "React", "CSS"]
  }
]

const certifications = [
  
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    institution: {
      name: "John Hopkins University",
      logo: jhuIcon,
    },
    skills: ["Web Development", "Front-End Development", "HTML & CSS", "JavaScript", "Ajax", "Bootstrap"],
    obtainedOn: "October 2023",
    url: "https://coursera.org/verify/8NS8YVRGR5PD",
  },
  {
    title: "Django Web Framework",
    institution: {
      name: "Meta",
      logo: metaIcon,
    },
    skills: ["Django", "Web Servers", "Model View Controller", "Back-End Development", "Object-Relational Mapping"],
    obtainedOn: "January 2024",
    url: "https://coursera.org/verify/4QC76KYF8VXH",
  },
  {
    title: "Python Essentials 1",
    institution: {
      name: "Cisco",
      logo: ciscoIcon,
    },
    skills: ["Computer Programming", "Python", "Algorithmic Thinking", "Procedural Programming"],
    obtainedOn: "September 2023",
    url: "https://www.credly.com/badges/150e4072-5a5f-4be4-82a9-20fc7e607a9c/public_url",
  },
  {
    title: "Python Essentials 2",
    institution: {
      name: "Cisco",
      logo: ciscoIcon,
    },
    skills: ["Python", "Object-Oriented Programming", "Generators", "Modules", "Package Management"],
    obtainedOn: "October 2023",
    url: "https://www.credly.com/badges/150e4072-5a5f-4be4-82a9-20fc7e607a9c/public_url",
  },
  {
    title: "Python Basics",
    institution: {
      name: "University of Michigan",
      logo: umIcon,
    },
    skills: ["Python (Programming Language)", "Data Structures", "Programming Principles"],
    obtainedOn: "April 2023",
    url: "https://coursera.org/verify/4QC76KYF8VXH",
  },
  {
    title: "Applying AI Principles with Google Cloud",
    institution: {
      name: "Google",
      logo: googleIcon,
    },
    skills: ["AI", "Generative AI", "Responsible AI Principles"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4961991",
  },
  {
    title: "Introduction to Data Science",
    institution: {
      name: "Cisco",
      logo: ciscoIcon,
    },
    skills: ["Data Analysis", "Data Collection", "Data Validation"],
    obtainedOn: "October 2024",
    url: "https://www.credly.com/badges/56feae9f-b2d9-4346-b4e6-ae85b22ba268/public_url",
  },
  
  {
    title: "Operating Systems Basics",
    institution: {
      name: "Cisco",
      logo: ciscoIcon,
    },
    skills: ["Android", "Linux", "Windows", "Operating Systems Security"],
    obtainedOn: "February 2023",
    url: "https://www.credly.com/badges/809c322e-fd64-4663-a0ec-48dcf7b4a105/public_url",
  },
  
  {
    title: "Object Oriented Programming in C++",
    institution: {
      name: "University of London",
      logo: uolIcon,
    },
    skills: ["C++ (Programming Language)", "Object-Oriented Programming", "Programming Principles"],
    obtainedOn: "June 2023",
    url: "https://coursera.org/verify/GXPRQWDG56EC",
  },
  
  {
    title: "Introduction to Generative AI",
    institution: {
      name: "Google",
      logo: googleIcon,
    },
    skills: ["AI", "Generative AI"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4954381",
  },
  {
    title: "Introduction to Large Language Models",
    institution: {
      name: "Google",
      logo: googleIcon,
    },
    skills: ["AI", "Generative AI", "Large Language Models"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4955141",
  },
  {
    title: "Introduction to Responsible AI",
    institution: {
      name: "Google",
      logo: googleIcon,
    },
    skills: ["AI", "Generative AI", "Large Language Models"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4955540",
  },
  {
    title: "Generative AI Fundamentals",
    institution: {
      name: "Google",
      logo: googleIcon,
    },
    skills: ["AI", "Generative AI"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4956000",
  },
  
  
  {
    title: "Networking Devices and Initial Configuration",
    institution: {
      name: "Cisco",
      logo: ciscoIcon,
    },
    skills: ["Cisco IOS", "ARP", "Cisco Devices", "DNS", "DHCP"],
    obtainedOn: "January 2025",
    url: "https://www.credly.com/badges/140ba71b-1286-47ce-b2ff-2ce132e10bd2/public_url",
  },
  {
    title: "Networking Basics",
    institution: {
      name: "Cisco",
      logo: ciscoIcon,
    },
    skills: ["Application Layer Services", "IPV4 Addresses", "Protocol Standards"],
    obtainedOn: "March 2025",
    url: "https://www.credly.com/badges/4db1f5b9-41a9-4f5c-8d0e-b97a0440dc63/public_url",
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    institution: {
      name: "Cisco",
      logo: ciscoIcon,
    },
    skills: ["Network Troubleshooting", "Cisco Routers", "Cisco Switches"],
    obtainedOn: "March 2025",
    url: "https://www.credly.com/badges/2e9d1c15-a68e-40b5-bff5-d6ed4c395b06/public_url",
  },
  {
    title: "Network Support Security",
    institution: {
      name: "Cisco",
      logo: ciscoIcon,
    },
    skills: ["Network Troubleshooting", "Documentation", "User Support"],
    obtainedOn: "April 2025",
    url: "https://www.credly.com/badges/c65f2ea0-9a93-4048-8f78-d8dbab5e40f8/public_url",
  },
]

export { technologies, expertise, services, projects, certifications }
