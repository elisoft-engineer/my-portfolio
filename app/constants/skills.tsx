import React from "react";
import { StaticImageData } from "next/image";
import { FiLayout, FiServer, FiCpu, FiCloud } from "react-icons/fi";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNginx,
  SiLinux,
  SiRabbitmq,
  SiRedis,
  SiGit,
  SiPytorch,
  SiPandas,
  SiTensorflow,
  SiKeras,
  SiJupyter,
} from "react-icons/si";

import styles from "../components/skills/skills.module.css";

import css from "@/assets/icons/css.png";
import dart from "@/assets/icons/dart.png";
import django from "@/assets/icons/django.png";
import docker from "@/assets/icons/docker.png";
import fastapi from "@/assets/icons/fastapi.png";
import flutter from "@/assets/icons/flutter.png";
import html from "@/assets/icons/html.png";
import javascript from "@/assets/icons/javascript.png";
import mui from "@/assets/icons/mui.png";
import nextjs from "@/assets/icons/nextjs.png";
import nodejs from "@/assets/icons/nodejs.png";
import openapi from "@/assets/icons/openapi.png";
import postgresql from "@/assets/icons/postgresql.png";
import python from "@/assets/icons/python.png";
import react from "@/assets/icons/react.png";
import sqlalchemy from "@/assets/icons/sqlalchemy.png";
import tailwind from "@/assets/icons/tailwind.png";
import vite from "@/assets/icons/vite.png";

export type SkillItem = {
  name: string;
  type: "image" | "icon";
  src?: StaticImageData;
  icon?: React.ReactNode;
};

export type CategoryCard = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  cardThemeClass: string;
  titleFontClass: string;
  skills: SkillItem[];
};

export const SKILL_CATEGORIES: CategoryCard[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <FiLayout />,
    subtitle:
      "Focusing on performance, responsive design, and fluid user interactions.",
    cardThemeClass: styles.frontendTheme,
    titleFontClass: styles.fontFrontend,
    skills: [
      { name: "React", type: "image", src: react },
      { name: "Next.js", type: "image", src: nextjs },
      {
        name: "TypeScript",
        type: "icon",
        icon: <SiTypescript style={{ color: "#3178C6" }} />,
      },
      { name: "JavaScript", type: "image", src: javascript },
      { name: "Tailwind", type: "image", src: tailwind },
      { name: "Vite", type: "image", src: vite },
      { name: "Flutter", type: "image", src: flutter },
      { name: "Dart", type: "image", src: dart },
      { name: "MUI", type: "image", src: mui },
      { name: "HTML5", type: "image", src: html },
      { name: "CSS3", type: "image", src: css },
    ],
  },
  {
    id: "backend",
    title: "Backend Systems",
    icon: <FiServer />,
    subtitle:
      "Architecting resilient APIs, microservices, and high-throughput data pipelines.",
    cardThemeClass: styles.backendTheme,
    titleFontClass: styles.fontBackend,
    skills: [
      { name: "Node.js", type: "image", src: nodejs },
      {
        name: "Express",
        type: "icon",
        icon: <SiExpress style={{ color: "var(--text-primary)" }} />,
      },
      { name: "Python", type: "image", src: python },
      { name: "FastAPI", type: "image", src: fastapi },
      { name: "Django", type: "image", src: django },
      { name: "PostgreSQL", type: "image", src: postgresql },
      {
        name: "MongoDB",
        type: "icon",
        icon: <SiMongodb style={{ color: "#47A248" }} />,
      },
      {
        name: "Mongoose",
        type: "icon",
        icon: <SiMongoose style={{ color: "#880000" }} />,
      },
      {
        name: "Redis",
        type: "icon",
        icon: <SiRedis style={{ color: "#DC382D" }} />,
      },
      {
        name: "RabbitMQ",
        type: "icon",
        icon: <SiRabbitmq style={{ color: "#FF6600" }} />,
      },
      { name: "SQLAlchemy", type: "image", src: sqlalchemy },
      { name: "OpenAPI", type: "image", src: openapi },
    ],
  },
  {
    id: "ml",
    title: "AI & Machine Learning",
    icon: <FiCpu />,
    subtitle:
      "Training models, processing data, and serving inference endpoints at scale.",
    cardThemeClass: styles.mlTheme,
    titleFontClass: styles.fontML,
    skills: [
      { name: "Python", type: "image", src: python },
      {
        name: "PyTorch",
        type: "icon",
        icon: <SiPytorch style={{ color: "#EE4C2C" }} />,
      },
      {
        name: "TensorFlow",
        type: "icon",
        icon: <SiTensorflow style={{ color: "#FF6F00" }} />,
      },
      {
        name: "Keras",
        type: "icon",
        icon: <SiKeras style={{ color: "#D00000" }} />,
      },
      {
        name: "Jupyter",
        type: "icon",
        icon: <SiJupyter style={{ color: "#F37626" }} />,
      },
      {
        name: "Pandas",
        type: "icon",
        icon: <SiPandas style={{ color: "#150458" }} />,
      },
      { name: "FastAPI", type: "image", src: fastapi },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: <FiCloud />,
    subtitle:
      "Streamlining CI/CD pipelines, container orchestration, and server reliability.",
    cardThemeClass: styles.devopsTheme,
    titleFontClass: styles.fontDevops,
    skills: [
      { name: "Docker", type: "image", src: docker },
      {
        name: "Nginx",
        type: "icon",
        icon: <SiNginx style={{ color: "#009639" }} />,
      },
      {
        name: "Linux",
        type: "icon",
        icon: <SiLinux style={{ color: "#FCC624" }} />,
      },
      {
        name: "Git Workflow",
        type: "icon",
        icon: <SiGit style={{ color: "#F05032" }} />,
      },
    ],
  },
];
