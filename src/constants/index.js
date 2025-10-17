import { faLaptopCode, faServer, faCloud, faCogs } from "@fortawesome/free-solid-svg-icons";
import pythonIcon from '../assets/icons/python.svg';
import djangoIcon from '../assets/icons/django.svg';
import fastapiIcon from '../assets/icons/fastapi.svg';
import flutterIcon from '../assets/icons/flutter.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';

const skills = [
  { name: "Django", level: 90 },
  { name: "Python", level: 92 },
  { name: "PostgreSQL", level: 86 },
  { name: "Docker / CI", level: 85 },
  { name: "REST APIs", level: 90 },
  { name: "React / Static Sites", level: 80 }
]

const technologies = [
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "Django",
    icon: djangoIcon,
  },
  {
    name: "FastAPI",
    icon: fastapiIcon,
  },
  {
    name: "Flutter",
    icon: flutterIcon,
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
  },
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Node Js",
    icon: nodejsIcon,
  },
]

const services = [
  {
    icon: faLaptopCode,
    title: "Web Applications",
    text: "Interactive websites and admin dashboards that are fast, accessible and mobile-friendly."
  },
  {
    icon: faServer,
    title: "APIs & Integrations",
    text: "Robust APIs and integrations for payments, mobile apps and internal tools."
  },
  {
    icon: faCogs,
    title: "Business Systems",
    text: "Inventory, billing and workflow systems that automate repetitive work and reduce errors."
  },
  {
    icon: faCloud,
    title: "Deployment & DevOps",
    text: "Containerized deployments, CI/CD and monitoring so your app runs reliably in production."
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

export { skills, technologies, services, projects }
