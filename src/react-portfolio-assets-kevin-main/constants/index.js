import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Full-stack MERN developer. Shipped Wave, a real-time chat application, live in production on Render. Architected YourCabs as technical lead of a five-person team. Certified through an Agile internship at IgniteU. Specialized in Socket.IO, REST APIs, JWT auth, geospatial queries, and role-based access control.`;

export const ABOUT_TEXT = `I am a Full Stack and MERN Stack Developer with hands-on experience building production-grade web systems. I engineered Wave as a solo project and shipped it live on Render, using Socket.IO for real-time events, Redux Toolkit for state management, and Cloudinary for media storage. I also led a five-person Agile engineering squad as technical architect for YourCabs, developing a pool-ride matching algorithm with MongoDB geospatial queries and three role-based dashboards. Industry-certified through an Agile full-stack internship at IgniteU. Currently pursuing a Bachelor of Computer Applications at Adamas University, Kolkata.`;

export const EXPERIENCES = [
  {
    year: "Jun 2025 – Jul 2025",
    role: "Software Development Intern",
    company: "IgniteU Private Learning Venture",
    badge: "Industry Certified · Agile Environment",
    description: `Shipped production-ready MERN features across two Agile sprint cycles by owning full feature branches from ticket to merge, attending daily standups, and clearing peer code review with zero rework requests. Diagnosed and resolved cross-layer bugs between the React.js frontend and Node.js/Express.js backend, preventing regressions from reaching live branches. Earned an industry-certified full-stack credential.`,
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "Git", "Agile/Scrum"],
  },
  {
    year: "2025",
    role: "Technical Architect and Team Lead",
    company: "YourCabs Engineering Squad",
    badge: "5-Person Agile Team · Supervised by Dr. Soumitra Roy",
    description: `Led a five-person Agile squad as technical architect, defining the Git branching strategy, running sprint planning, and coordinating task handoffs to deliver the full system on deadline. Architected MongoDB geospatial queries ($geoNear, $nearSphere) and three role-based dashboards (admin, driver, passenger) served from a unified MVC REST API.`,
    technologies: ["MERN Stack", "Geospatial Matching", "JWT Auth", "RBAC", "MVC Architecture"],
  },
];

export const PROJECTS = [
  {
    featured: true,
    badge: "Production",
    liveStatus: "Live on Render",
    title: "Wave: Real-Time Chat Application",
    subtitle: "React 19 · Socket.IO · Redux Toolkit · MongoDB Atlas · Render",
    image: project2,
    description:
      "Full-stack real-time messaging platform supporting 1-on-1 and group conversations, live presence tracking, and media attachments. Shipped solo to production on Render.",
    highlights: [
      "Zero-latency bi-directional messaging via Socket.IO events",
      "Online presence tracking and live typing indicators",
      "Cloudinary CDN integration with Redux Toolkit state management"
    ],
    technologies: ["React 19", "Socket.IO", "Node.js", "Express 5", "MongoDB Atlas", "Redux Toolkit", "Render"],
    github: "https://github.com/apurbahalderwork/Wave-chat-app-",
    live: "https://wave-chat-app-client.onrender.com"
  },
  {
    featured: false,
    badge: "Repository",
    liveStatus: null,
    title: "YourCabs: Car Rental and Ride-Pooling System",
    subtitle: "MERN Stack · Geospatial Matching · Pool-Ride Algorithm",
    image: project1,
    description:
      "Car rental and ride-pooling platform pairing nearby riders via MongoDB geospatial proximity queries ($geoNear), reducing per-user transit fares by up to 60%.",
    highlights: [
      "MongoDB geospatial 2dsphere indexing and radius proximity pairing",
      "Three role-based portals: Admin fleet, Driver routes, Passenger bookings",
      "Led five-person Agile engineering squad through full project lifecycle"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Geospatial Queries", "JWT Auth"],
    github: "https://github.com/apurbahalderwork/your-cabs",
    live: null
  },
  {
    featured: false,
    badge: "Repository",
    liveStatus: null,
    title: "Mentor-Mentee Application",
    subtitle: "Node.js · Express · MongoDB · Handlebars · Multer",
    image: project3,
    description:
      "Academic platform for Adamas University managing student registrations, mentor assignments, multi-section documentation, and real-time administrative oversight.",
    highlights: [
      "Institutional email domain validation on student registration",
      "Multi-section profiles with avatar and document streaming via Multer",
      "Administrative dashboard with real-time student record search"
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Handlebars", "Multer"],
    github: "https://github.com/apurbahalderwork/mentor-mentee-app",
    live: null
  },
  {
    featured: false,
    badge: "Repository",
    liveStatus: null,
    title: "GitHub Profile Analyzer",
    subtitle: "Node.js · Express · Vanilla JS · Chart.js · REST API",
    image: project4,
    description:
      "Developer analytics platform consuming the GitHub REST API to surface repository metrics, language breakdowns, and side-by-side profile comparisons.",
    highlights: [
      "Interactive Chart.js visualizers for language and repository distribution",
      "Side-by-side comparative metric scoring for any two GitHub profiles",
      "Express caching proxy preserving tokens and protecting rate limits"
    ],
    technologies: ["JavaScript (ES6+)", "Chart.js", "Node.js", "Express.js", "REST API"],
    github: "https://github.com/apurbahalderwork/GitHub-Profile-Analyzer",
    live: null
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Adamas University, Kolkata",
    duration: "Aug 2023 – 2027 (Expected)",
    details: "Class Representative (2023–Present): Elected by 60 peers to coordinate academic scheduling, escalate issues to faculty, and represent the cohort in university-level administrative decisions.",
    coursework: [
      "Java",
      "C",
      "Python",
      "Computer Organisation & Architecture",
      "Cloud Computing",
      "Open Source Software"
    ]
  },
  {
    degree: "Higher Secondary (12th Standard)",
    institution: "Ichapur High School, Kolkata",
    duration: "2023",
    details: "Completed Higher Secondary with 76.8% aggregate in Science and Computer Science.",
    coursework: []
  }
];

export const CONTACT = {
  address: "Kolkata, West Bengal, India",
  phoneNo: "+91 8001302386",
  email: "apurbahaldernewwork@gmail.com",
  linkedin: "https://www.linkedin.com/in/apurba-halder-7a44332b2/",
  github: "https://github.com/apurbahalderwork",
  instagram: "https://www.instagram.com/apurbahalder__/",
  facebook: "https://www.facebook.com/apurba.halder.395017"
};
