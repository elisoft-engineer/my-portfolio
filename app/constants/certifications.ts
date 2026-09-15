// Coursera Icons
import cppCrypto from "@/assets/images/CPP.webp";
import djangoWebFramework from "@/assets/images/Django Web Framework.webp";
import pythonBasics from "@/assets/images/Python Basics.webp";
import webSkills from "@/assets/images/Web Dev.webp";

// Google Badges
import applyingAIPrinciples from "@/assets/images/Applying AI Principles.webp";
import genAIFundamentals from "@/assets/images/Generative AI Fundamentals.webp";
import introGenAI from "@/assets/images/Introduction to GenAI.webp";
import introLLMs from "@/assets/images/Introduction to LLMs.webp";
import introResponsibleAI from "@/assets/images/Introduction To Responsible AI.webp";

// Cisco Icons
import introDataScience from "@/assets/images/IntroDataScience.webp";
import netAddressing from "@/assets/images/Network Addressing and Troubleshooting.webp";
import netSupport from "@/assets/images/Network Support and Security.webp";
import netBasics from "@/assets/images/Networking Basics.webp";
import netDevices from "@/assets/images/Networking Devices Initial Configuration.png";
import operatingSystems from "@/assets/images/Operating Systems.webp";
import pythonEssentials1 from "@/assets/images/Python Essentials 1.webp";
import pythonEssentials2 from "@/assets/images/Python Essentials 2.webp";

// IBM Icons
import machineLearningPython from "@/assets/images/machine learning with python - level 1.png";
import deepLearning from "@/assets/images/deep learning.png";
import deepLearningEssentials from "@/assets/images/deep learning essentials.png";
import deepLearningTensorflow from "@/assets/images/deep learning with tensorflow.png";
import { StaticImageData } from "next/image";

export type CategoryId = "all" | "software" | "aiml" | "genai" | "networking";

interface Credential {
  id: string;
  title: string;
  category: CategoryId;
  type: "badge" | "certificate";
  institution: {
    name: string;
    logo: StaticImageData;
  };
  skills: string[];
  obtainedOn: string;
  url: string;
}

export const CREDENTIALS: Credential[] = [
  {
    id: "web-dev-jhu",
    title: "HTML, CSS, and Javascript for Web Developers",
    category: "software",
    type: "certificate",
    institution: { name: "Johns Hopkins University", logo: webSkills },
    skills: [
      "Web Development",
      "HTML & CSS",
      "JavaScript",
      "Ajax",
      "Bootstrap",
    ],
    obtainedOn: "Oct 2023",
    url: "https://coursera.org/verify/8NS8YVRGR5PD",
  },
  {
    id: "django-meta",
    title: "Django Web Framework",
    category: "software",
    type: "certificate",
    institution: { name: "Meta", logo: djangoWebFramework },
    skills: ["Django", "Web Servers", "MVC", "Back-End", "ORM"],
    obtainedOn: "Jan 2024",
    url: "https://coursera.org/verify/4QC76KYF8VXH",
  },
  {
    id: "python-essentials-1",
    title: "Python Essentials 1",
    category: "software",
    type: "badge",
    institution: { name: "Cisco Networking Academy", logo: pythonEssentials1 },
    skills: ["Programming", "Python", "Algorithms"],
    obtainedOn: "Sept 2023",
    url: "https://www.credly.com/badges/150e4072-5a5f-4be4-82a9-20fc7e607a9c/public_url",
  },
  {
    id: "python-essentials-2",
    title: "Python Essentials 2",
    category: "software",
    type: "badge",
    institution: { name: "Cisco Networking Academy", logo: pythonEssentials2 },
    skills: ["Python", "OOP", "Generators", "Modules"],
    obtainedOn: "Oct 2023",
    url: "https://www.credly.com/badges/e00863c6-3d77-47cc-8fb2-d185499b1fb1/public_url",
  },
  {
    id: "python-basics-umich",
    title: "Python Basics",
    category: "software",
    type: "certificate",
    institution: { name: "University of Michigan", logo: pythonBasics },
    skills: ["Python", "Data Structures", "Programming"],
    obtainedOn: "Apr 2023",
    url: "https://coursera.org/verify/S8WPGT8HB3MK",
  },
  {
    id: "gcp-applying-ai",
    title: "Applying AI Principles with Google Cloud",
    category: "genai",
    type: "badge",
    institution: { name: "Google Cloud", logo: applyingAIPrinciples },
    skills: ["AI", "Generative AI", "Responsible AI"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4961991",
  },
  {
    id: "cisco-intro-ds",
    title: "Introduction to Data Science",
    category: "aiml",
    type: "badge",
    institution: { name: "Cisco Networking Academy", logo: introDataScience },
    skills: ["Data Analysis", "Data Collection"],
    obtainedOn: "Oct 2024",
    url: "https://www.credly.com/badges/56feae9f-b2d9-4346-b4e6-ae85b22ba268/public_url",
  },
  {
    id: "cisco-os-basics",
    title: "Operating Systems Basics",
    category: "networking",
    type: "badge",
    institution: { name: "Cisco Networking Academy", logo: operatingSystems },
    skills: ["Linux", "Windows", "OS Security"],
    obtainedOn: "Feb 2023",
    url: "https://www.credly.com/badges/809c322e-fd64-4663-a0ec-48dcf7b4a105/public_url",
  },
  {
    id: "cpp-oop-ulondon",
    title: "Object Oriented Programming in C++",
    category: "software",
    type: "certificate",
    institution: { name: "University of London", logo: cppCrypto },
    skills: ["C++", "OOP", "Data Structures"],
    obtainedOn: "June 2023",
    url: "https://coursera.org/verify/GXPRQWDG56EC",
  },
  {
    id: "gcp-intro-genai",
    title: "Introduction to Generative AI",
    category: "genai",
    type: "badge",
    institution: { name: "Google Cloud", logo: introGenAI },
    skills: ["AI", "Generative AI"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4954381",
  },
  {
    id: "gcp-intro-llm",
    title: "Introduction to Large Language Models",
    category: "genai",
    type: "badge",
    institution: { name: "Google Cloud", logo: introLLMs },
    skills: ["AI", "LLMs"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4955141",
  },
  {
    id: "gcp-intro-resp-ai",
    title: "Introduction to Responsible AI",
    category: "genai",
    type: "badge",
    institution: { name: "Google Cloud", logo: introResponsibleAI },
    skills: ["AI", "Responsible AI"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4955540",
  },
  {
    id: "gcp-genai-fund",
    title: "Generative AI Fundamentals",
    category: "genai",
    type: "badge",
    institution: { name: "Google Cloud", logo: genAIFundamentals },
    skills: ["AI", "Generative AI"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4956000",
  },
  {
    id: "cisco-net-devices",
    title: "Networking Devices & Initial Config",
    category: "networking",
    type: "badge",
    institution: { name: "Cisco Networking Academy", logo: netDevices },
    skills: ["Cisco IOS", "ARP", "DNS", "DHCP"],
    obtainedOn: "Jan 2025",
    url: "https://www.credly.com/badges/140ba71b-1286-47ce-b2ff-2ce132e10bd2/public_url",
  },
  {
    id: "cisco-net-basics",
    title: "Networking Basics",
    category: "networking",
    type: "badge",
    institution: { name: "Cisco Networking Academy", logo: netBasics },
    skills: ["Application Layer", "IPv4", "Protocols"],
    obtainedOn: "Mar 2025",
    url: "https://www.credly.com/badges/4db1f5b9-41a9-4f5c-8d0e-b97a0440dc63/public_url",
  },
  {
    id: "cisco-net-addressing",
    title: "Network Addressing & Troubleshooting",
    category: "networking",
    type: "badge",
    institution: { name: "Cisco Networking Academy", logo: netAddressing },
    skills: ["Troubleshooting", "Routers", "Switches"],
    obtainedOn: "Mar 2025",
    url: "https://www.credly.com/badges/2e9d1c15-a68e-40b5-bff5-d6ed4c395b06/public_url",
  },
  {
    id: "cisco-net-support",
    title: "Network Support Security",
    category: "networking",
    type: "badge",
    institution: { name: "Cisco Networking Academy", logo: netSupport },
    skills: ["Security", "Documentation", "Support"],
    obtainedOn: "Apr 2025",
    url: "https://www.credly.com/badges/c65f2ea0-9a93-4048-8f78-d8dbab5e40f8/public_url",
  },
  {
    id: "ibm-deep-learning",
    title: "Deep Learning",
    category: "aiml",
    type: "badge",
    institution: { name: "IBM", logo: deepLearning },
    skills: ["Deep Learning", "Neural Networks", "TensorFlow"],
    obtainedOn: "July 2026",
    url: "https://www.credly.com/badges/406732ca-d16f-4458-9b2d-3142a13003e4/public_url",
  },
  {
    id: "ibm-dl-essentials",
    title: "Deep Learning Essentials",
    category: "aiml",
    type: "badge",
    institution: { name: "IBM", logo: deepLearningEssentials },
    skills: ["Deep Learning", "Data Science", "CNN"],
    obtainedOn: "March 2026",
    url: "https://www.credly.com/badges/b5031750-e435-479f-81fe-645e42f6ff8c/public_url",
  },
  {
    id: "ibm-dl-tensorflow",
    title: "Deep Learning with Tensorflow",
    category: "aiml",
    type: "badge",
    institution: { name: "IBM", logo: deepLearningTensorflow },
    skills: ["TensorFlow", "Autoencoders", "CNN", "RNN"],
    obtainedOn: "July 2026",
    url: "https://www.credly.com/badges/b5031750-e435-479f-81fe-645e42f6ff8c/public_url",
  },
  {
    id: "ibm-ml-python",
    title: "Machine Learning with Python - Level 1",
    category: "aiml",
    type: "badge",
    institution: { name: "IBM", logo: machineLearningPython },
    skills: ["Supervised", "Unsupervised", "Clustering"],
    obtainedOn: "March 2026",
    url: "https://www.credly.com/badges/d85a1219-6725-49c7-87e8-5ce6d4a303c4/public_url",
  },
];
