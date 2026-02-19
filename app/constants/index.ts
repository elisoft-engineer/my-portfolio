import css from '../../assets/icons/css.svg';
import dart from '../../assets/icons/dart.svg';
import django from '../../assets/icons/django.svg';
import docker from '../../assets/icons/docker.svg';
import fastapi from '../../assets/icons/fastapi.svg';
import flutter from '../../assets/icons/flutter.svg';
import html from '../../assets/icons/html.svg';
import javascript from '../../assets/icons/javascript.svg';
import nextjs from '../../assets/icons/nextjs.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import python from '../../assets/icons/python.svg';
import react from '../../assets/icons/react.svg';
import sqlalchemy from '../../assets/icons/sqlalchemy.svg';
import swagger from '../../assets/icons/swagger.svg';
import vite from '../../assets/icons/vite.svg';

import falcosendImg from '../../assets/images/falcosend.webp';
import yummypointImg from '../../assets/images/yummypoint.webp';
import mystudynetImg from '../../assets/images/mystudynet.webp';

import jhuIcon from "../../assets/icons/john-hopkins-university.svg";
import metaIcon from "../../assets/icons/meta.svg";
import uolIcon from "../../assets/icons/university-of-london.svg";
import umIcon from "../../assets/icons/university-of-michigan.webp";

// google badges
import applyingAIPrinciples from "@/assets/images/Applying AI Principles.webp";
import genAIFundamentals from "@/assets/images/Generative AI Fundamentals.webp";
import introGenAI from "@/assets/images/Introduction to GenAI.webp";
import introLLMs from "@/assets/images/Introduction to LLMs.webp";
import introResponsibleAI from "@/assets/images/Introduction To Responsible AI.webp";

// cisco icons
import introDataScience from "@/assets/images/IntroDataScience.webp";
import netAddressing from "@/assets/images/Network Addressing and Troubleshooting.webp";
import netSupport from "@/assets/images/Network Support and Security.webp";
import netBasics from "@/assets/images/Networking Basics.webp";
import netDevices from "@/assets/images/Networking Devices Initial Configuration.png";
import operatingSystems from "@/assets/images/Operating Systems.webp";
import pythonEssentials1 from "@/assets/images/Python Essentials 1.webp";
import pythonEssentials2 from "@/assets/images/Python Essentials 2.webp";

import { Bot, Cloud, CodeXml, LucideIcon, MonitorSmartphone, Server, Settings } from "lucide-react";
import { StaticImageData } from "next/image";

interface Technology {
  name: string;
  icon: StaticImageData | string;
}

interface Skill {
  name: string;
  percentage: number;
}

interface Expertise {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  image: StaticImageData | string;
  technologies: string[];
  link?: string;
  active: boolean;
  launchingSoon?: boolean;
}

interface Certification {
  title: string;
  institution: {
    name: string;
    logo: StaticImageData | string;
  };
  skills: string[];
  obtainedOn: string;
  url: string;
}

const technologies: Technology[] = [
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

const expertise: Expertise[] = [
  {
    name: "Programming Languages",
    icon: CodeXml,
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
    icon: MonitorSmartphone,
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
    icon: Server,
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
    icon: Bot,
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
    icon: Cloud,
    skills: [
      {name: "Git", percentage: 90},
      {name: "Docker", percentage: 85},
      {name: "GHCR", percentage: 85},
      {name: "CI/CD", percentage: 85},
      {name: "NGINX", percentage: 85},
    ]
  },
]

const services: Service[] = [
  {
    icon: MonitorSmartphone,
    title: "Business Websites",
    description: "Creating a 24/7 digital storefront for your brand, ensuring your business is accessible to a global market through fast, responsive web design."
  },
  {
    icon: Settings,
    title: "Enterprise Software",
    description: "Custom-built systems for inventory, billing, and workflow. I help organizations reduce human error and save time through automated dashboards."
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Designing the 'brain' of your application—secure, high-performance servers that ensure your data stays safe and your software runs smoothly."
  },
  {
    icon: Cloud,
    title: "Deployment & DevOps",
    description: "Handling the technical heavy lifting of taking software live, ensuring your systems are monitored, maintained, and always available."
  }
]

const projects: Project[] = [
  {
    title: "Falcosend",
    description: "A developer-focused platform that bridges static websites with powerful backend features such as form handling, data storage, analytics, and real-time alerts.  It enables developers to handle form submissions in static websites and applications without writing server code.",
    image: falcosendImg,
    technologies: ["Python", "Django", "Django REST Framework", "JavaScript", "React", "CSS"],
    active: true,
    launchingSoon: true,
  },
  {
    title: "YummyPoint",
    description: "A demo food ordering platform. It facilitates major actions taken in a food ordering platform such as creation and modification of menus and categories. It also features user authentication and admin dashboard.",
    image: yummypointImg,
    technologies: ["Python", "Django", "JavaScript", "Jinja", "CSS"],
    active: true,
  },
  {
    title: "My Study Net",
    description: "An E-Learning platform that facilitates creation of courses from PDFs. The platform enables users to register to various courses and also enables them to create their own courses by uploading PDF documents from which the platform generates a course.",
    image: mystudynetImg,
    technologies: ["Python", "FastAPI", "SQLAlchemy", "JavaScript", "React", "CSS"],
    active: true,
    launchingSoon: true,
  }
]

const certifications: Certification[] = [
  
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
      logo: pythonEssentials1,
    },
    skills: ["Computer Programming", "Python", "Algorithmic Thinking", "Procedural Programming"],
    obtainedOn: "September 2023",
    url: "https://www.credly.com/badges/150e4072-5a5f-4be4-82a9-20fc7e607a9c/public_url",
  },
  {
    title: "Python Essentials 2",
    institution: {
      name: "Cisco",
      logo: pythonEssentials2,
    },
    skills: ["Python", "Object-Oriented Programming", "Generators", "Modules", "Package Management"],
    obtainedOn: "October 2023",
    url: "https://www.credly.com/badges/e00863c6-3d77-47cc-8fb2-d185499b1fb1/public_url",
  },
  {
    title: "Python Basics",
    institution: {
      name: "University of Michigan",
      logo: umIcon,
    },
    skills: ["Python (Programming Language)", "Data Structures", "Programming Principles"],
    obtainedOn: "April 2023",
    url: "https://coursera.org/verify/S8WPGT8HB3MK",
  },
  {
    title: "Applying AI Principles with Google Cloud",
    institution: {
      name: "Google",
      logo: applyingAIPrinciples,
    },
    skills: ["AI", "Generative AI", "Responsible AI Principles"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4961991",
  },
  {
    title: "Introduction to Data Science",
    institution: {
      name: "Cisco",
      logo: introDataScience,
    },
    skills: ["Data Analysis", "Data Collection", "Data Validation"],
    obtainedOn: "October 2024",
    url: "https://www.credly.com/badges/56feae9f-b2d9-4346-b4e6-ae85b22ba268/public_url",
  },
  
  {
    title: "Operating Systems Basics",
    institution: {
      name: "Cisco",
      logo: operatingSystems,
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
      logo: introGenAI,
    },
    skills: ["AI", "Generative AI"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4954381",
  },
  {
    title: "Introduction to Large Language Models",
    institution: {
      name: "Google",
      logo: introLLMs,
    },
    skills: ["AI", "Generative AI", "Large Language Models"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4955141",
  },
  {
    title: "Introduction to Responsible AI",
    institution: {
      name: "Google",
      logo: introResponsibleAI,
    },
    skills: ["AI", "Generative AI", "Large Language Models"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4955540",
  },
  {
    title: "Generative AI Fundamentals",
    institution: {
      name: "Google",
      logo: genAIFundamentals,
    },
    skills: ["AI", "Generative AI"],
    obtainedOn: "September 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4956000",
  },
  
  
  {
    title: "Networking Devices and Initial Configuration",
    institution: {
      name: "Cisco",
      logo: netDevices,
    },
    skills: ["Cisco IOS", "ARP", "Cisco Devices", "DNS", "DHCP"],
    obtainedOn: "January 2025",
    url: "https://www.credly.com/badges/140ba71b-1286-47ce-b2ff-2ce132e10bd2/public_url",
  },
  {
    title: "Networking Basics",
    institution: {
      name: "Cisco",
      logo: netBasics,
    },
    skills: ["Application Layer Services", "IPV4 Addresses", "Protocol Standards"],
    obtainedOn: "March 2025",
    url: "https://www.credly.com/badges/4db1f5b9-41a9-4f5c-8d0e-b97a0440dc63/public_url",
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    institution: {
      name: "Cisco",
      logo: netAddressing,
    },
    skills: ["Network Troubleshooting", "Cisco Routers", "Cisco Switches"],
    obtainedOn: "March 2025",
    url: "https://www.credly.com/badges/2e9d1c15-a68e-40b5-bff5-d6ed4c395b06/public_url",
  },
  {
    title: "Network Support Security",
    institution: {
      name: "Cisco",
      logo: netSupport,
    },
    skills: ["Network Troubleshooting", "Documentation", "User Support"],
    obtainedOn: "April 2025",
    url: "https://www.credly.com/badges/c65f2ea0-9a93-4048-8f78-d8dbab5e40f8/public_url",
  },
]

export { technologies, expertise, services, projects, certifications }
