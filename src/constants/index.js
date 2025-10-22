import { faLaptopCode, faServer, faCloud, faCogs } from "@fortawesome/free-solid-svg-icons";

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
    title: "Hardware Store Manager",
    desc: "Django-based POS & inventory system with MPESA integration and reporting.",
    img: "/images/project-hardware.png",
    link: "/projects/hardware-store"
  },
  {
    title: "Developer Tools Platform",
    desc: "Static-site friendly integrations for forms, webhooks and notifications.",
    img: "/images/project-devtools.png",
    link: "/projects/dev-tools"
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time dashboards and exports for business insights.",
    img: "/images/project-analytics.png",
    link: "/projects/analytics"
  }
]

export { technologies, services, projects }
