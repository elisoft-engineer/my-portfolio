// coursera icons
import cppCrypto from "@/assets/images/CPP.webp";
import djangoWebFramework from "@/assets/images/Django Web Framework.webp";
import pythonBasics from "@/assets/images/Python Basics.webp";
import webSkills from "@/assets/images/Web Dev.webp";

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

// ibm icons
import machineLearningPython from "@/assets/images/machine learning with python - level 1.png";
import deepLearning from "@/assets/images/deep learning.png";
import deepLearningEssentials from "@/assets/images/deep learning essentials.png";
import deepLearningTensorflow from "@/assets/images/deep learning with tensorflow.png";

import { StaticImageData } from "next/image";

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

const certifications: Certification[] = [
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    institution: {
      name: "John Hopkins University via Coursera",
      logo: webSkills,
    },
    skills: [
      "Web Development",
      "Front-End Development",
      "HTML & CSS",
      "JavaScript",
      "Ajax",
      "Bootstrap",
    ],
    obtainedOn: "Oct 2023",
    url: "https://coursera.org/verify/8NS8YVRGR5PD",
  },
  {
    title: "Django Web Framework",
    institution: {
      name: "Meta via Coursera",
      logo: djangoWebFramework,
    },
    skills: [
      "Django",
      "Web Servers",
      "Model View Controller",
      "Back-End Development",
      "Object-Relational Mapping",
    ],
    obtainedOn: "Jan 2024",
    url: "https://coursera.org/verify/4QC76KYF8VXH",
  },
  {
    title: "Python Essentials 1",
    institution: {
      name: "Cisco Networking Academy",
      logo: pythonEssentials1,
    },
    skills: [
      "Computer Programming",
      "Python",
      "Algorithmic Thinking",
      "Procedural Programming",
    ],
    obtainedOn: "Sept 2023",
    url: "https://www.credly.com/badges/150e4072-5a5f-4be4-82a9-20fc7e607a9c/public_url",
  },
  {
    title: "Python Essentials 2",
    institution: {
      name: "Cisco Networking Academy",
      logo: pythonEssentials2,
    },
    skills: [
      "Python",
      "Object-Oriented Programming",
      "Generators",
      "Modules",
      "Package Management",
    ],
    obtainedOn: "Oct 2023",
    url: "https://www.credly.com/badges/e00863c6-3d77-47cc-8fb2-d185499b1fb1/public_url",
  },
  {
    title: "Python Basics",
    institution: {
      name: "University of Michigan  via Coursera",
      logo: pythonBasics,
    },
    skills: [
      "Python (Programming Language)",
      "Data Structures",
      "Programming Principles",
    ],
    obtainedOn: "Apr 2023",
    url: "https://coursera.org/verify/S8WPGT8HB3MK",
  },
  {
    title: "Applying AI Principles with Google Cloud",
    institution: {
      name: "Google Cloud Skills Boost",
      logo: applyingAIPrinciples,
    },
    skills: ["AI", "Generative AI", "Responsible AI Principles"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4961991",
  },
  {
    title: "Introduction to Data Science",
    institution: {
      name: "Cisco Networking Academy",
      logo: introDataScience,
    },
    skills: ["Data Analysis", "Data Collection", "Data Validation"],
    obtainedOn: "Oct 2024",
    url: "https://www.credly.com/badges/56feae9f-b2d9-4346-b4e6-ae85b22ba268/public_url",
  },

  {
    title: "Operating Systems Basics",
    institution: {
      name: "Cisco Networking Academy",
      logo: operatingSystems,
    },
    skills: ["Android", "Linux", "Windows", "Operating Systems Security"],
    obtainedOn: "Feb 2023",
    url: "https://www.credly.com/badges/809c322e-fd64-4663-a0ec-48dcf7b4a105/public_url",
  },

  {
    title: "Object Oriented Programming in C++",
    institution: {
      name: "University of London via Coursera",
      logo: cppCrypto,
    },
    skills: [
      "C++ (Programming Language)",
      "Object-Oriented Programming",
      "Programming Principles",
    ],
    obtainedOn: "June 2023",
    url: "https://coursera.org/verify/GXPRQWDG56EC",
  },

  {
    title: "Introduction to Generative AI",
    institution: {
      name: "Google Cloud Skills Boost",
      logo: introGenAI,
    },
    skills: ["AI", "Generative AI"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4954381",
  },
  {
    title: "Introduction to Large Language Models",
    institution: {
      name: "Google Cloud Skills Boost",
      logo: introLLMs,
    },
    skills: ["AI", "Generative AI", "Large Language Models"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4955141",
  },
  {
    title: "Introduction to Responsible AI",
    institution: {
      name: "Google Cloud Skills Boost",
      logo: introResponsibleAI,
    },
    skills: ["AI", "Generative AI", "Large Language Models"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4955540",
  },
  {
    title: "Generative AI Fundamentals",
    institution: {
      name: "Google Cloud Skills Boost",
      logo: genAIFundamentals,
    },
    skills: ["AI", "Generative AI"],
    obtainedOn: "Sept 2023",
    url: "https://www.skills.google/public_profiles/93e7128c-3e45-4599-b1ab-d1d28d546933/badges/4956000",
  },

  {
    title: "Networking Devices and Initial Configuration",
    institution: {
      name: "Cisco Networking Academy",
      logo: netDevices,
    },
    skills: ["Cisco IOS", "ARP", "Cisco Devices", "DNS", "DHCP"],
    obtainedOn: "Jan 2025",
    url: "https://www.credly.com/badges/140ba71b-1286-47ce-b2ff-2ce132e10bd2/public_url",
  },
  {
    title: "Networking Basics",
    institution: {
      name: "Cisco Networking Academy",
      logo: netBasics,
    },
    skills: [
      "Application Layer Services",
      "IPV4 Addresses",
      "Protocol Standards",
    ],
    obtainedOn: "Mar 2025",
    url: "https://www.credly.com/badges/4db1f5b9-41a9-4f5c-8d0e-b97a0440dc63/public_url",
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    institution: {
      name: "Cisco Networking Academy",
      logo: netAddressing,
    },
    skills: ["Network Troubleshooting", "Cisco Routers", "Cisco Switches"],
    obtainedOn: "Mar 2025",
    url: "https://www.credly.com/badges/2e9d1c15-a68e-40b5-bff5-d6ed4c395b06/public_url",
  },
  {
    title: "Network Support Security",
    institution: {
      name: "Cisco Networking Academy",
      logo: netSupport,
    },
    skills: ["Network Troubleshooting", "Documentation", "User Support"],
    obtainedOn: "Apr 2025",
    url: "https://www.credly.com/badges/c65f2ea0-9a93-4048-8f78-d8dbab5e40f8/public_url",
  },
  {
    title: "Deep Learning",
    institution: {
      name: "IBM",
      logo: deepLearning,
    },
    skills: ["Deep Learning", "Neural Networks", "Tensorflow"],
    obtainedOn: "July 2026",
    url: "https://www.credly.com/badges/406732ca-d16f-4458-9b2d-3142a13003e4/public_url",
  },
  {
    title: "Deep Learning Essentials",
    institution: {
      name: "IBM",
      logo: deepLearningEssentials,
    },
    skills: ["Deep Learning", "Data Science", "Statistical Programming", "CNN"],
    obtainedOn: "March 2026",
    url: "https://www.credly.com/badges/b5031750-e435-479f-81fe-645e42f6ff8c/public_url",
  },
  {
    title: "Deep Learning with Tensorflow",
    institution: {
      name: "IBM",
      logo: deepLearningTensorflow,
    },
    skills: ["Deep Learning", "Tensorflow", "Autoencoders", "CNN", "RNN"],
    obtainedOn: "July 2026",
    url: "https://www.credly.com/badges/b5031750-e435-479f-81fe-645e42f6ff8c/public_url",
  },
  {
    title: "Machine Learning with Python - Level 1",
    institution: {
      name: "IBM",
      logo: machineLearningPython,
    },
    skills: [
      "Recommender Systems",
      "Supervised Learning",
      "Unsupervised Learning",
      "Classification",
      "Clustering",
      "Regression",
    ],
    obtainedOn: "March 2026",
    url: "https://www.credly.com/badges/d85a1219-6725-49c7-87e8-5ce6d4a303c4/public_url",
  },
];
