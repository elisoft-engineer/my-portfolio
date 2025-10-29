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

import falcosendImg from '../assets/images/falcosend.svg';
import ellypadImg from '../assets/images/ellypad.svg';
import emsImg from '../assets/images/ems.webp';
import yummypointImg from '../assets/images/yummypoint.webp';
import mystudynetImg from '../assets/images/mystudynet.svg';


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

export { technologies, services, projects }
