import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Full-Stack MERN developer who builds things that work end-to-end — from database schema to deployed frontend. I've shipped production apps, led a team, and done an industry internship. I like solving real problems with clean code, and I'm always looking for the next thing to learn.`;

export const ABOUT_TEXT = `I'm a Full-Stack developer based in Kolkata, currently in my third year of BCA at Adamas University. My main stack is MERN — MongoDB, Express, React, and Node.js — and I've used it across projects of different shapes and sizes. I've built a real-time chat app solo, led a five-person team on a ride-pooling platform, built an academic management system for my university, and done an industry internship where I worked inside an actual Agile team.

I'm comfortable working across the whole stack — designing REST APIs, modeling MongoDB schemas, building React frontends with Redux for state management, handling authentication with JWT, and deploying to cloud platforms. I've also worked with things like geospatial queries, file uploads with Multer, Cloudinary for media, and Chart.js for data visualization.

Outside of coding, I'm the Class Representative for 60+ peers at my university, which has taught me a lot about communication, coordination, and getting people on the same page — skills that genuinely help when working in a dev team.`;

export const EXPERIENCES = [
  {
    year: "Jun 2025 – Jul 2025",
    role: "Software Development Intern",
    company: "IgniteU Private Learning Venture",
    badge: "Industry Certified · Agile Sprints",
    description: `Worked as part of a real development team building MERN stack features across two Agile sprint cycles. I picked up tickets, built features from scratch, attended daily standups, and got my code reviewed by senior devs. Learned how professional teams handle task tracking, branching strategies, and shipping without breaking things for other people. Fixed several cross-layer bugs between the React frontend and Express backend that were blocking other team members.`,
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "Git", "Agile/Scrum"],
  },
  {
    year: "2025",
    role: "Technical Lead & Team Architect",
    company: "YourCabs Engineering Squad",
    badge: "5-Person Agile Team · Supervised by Dr. Soumitra Roy",
    description: `Led a five-person team building YourCabs from scratch — a car rental and ride-pooling application. I was responsible for the overall system architecture, setting up the project structure, defining Git branching conventions, and running sprint planning. Designed the MongoDB schema including geospatial indexing for route-matching. Made sure the team could work independently on their modules without stepping on each other's code. Delivered three separate role-based portals (Admin, Driver, Passenger) under a clean MVC architecture.`,
    technologies: ["MERN Stack", "Geospatial Queries", "JWT Auth", "RBAC", "MVC Architecture", "Git"],
  },
];

export const PROJECTS = [
  {
    featured: true,
    badge: "Live in Production",
    liveStatus: "Live on Render",
    title: "Wave: Real-Time Chat Application",
    subtitle: "React 19 · Socket.IO · Redux Toolkit · MongoDB Atlas · Render",
    image: project2,
    description:
      "A full-stack chat application I built entirely on my own — from database design to deployment. It supports one-on-one and group conversations, with real-time messaging, typing indicators, online presence tracking, and media sharing via Cloudinary. State is managed with Redux Toolkit on the frontend. I handled everything: the Express REST API, Socket.IO event architecture, MongoDB schema, React UI, and deployment on Render.",
    highlights: [
      "Real-time messaging and group chats via Socket.IO bi-directional events",
      "Online/offline presence tracking and live typing indicators",
      "Cloudinary media attachments with Redux Toolkit state management"
    ],
    technologies: ["React 19", "Socket.IO", "Node.js", "Express 5", "MongoDB Atlas", "Redux Toolkit", "Render"],
    github: "https://github.com/apurbahalderwork/Wave-chat-app-",
    live: "https://wave-chat-app-client.onrender.com"
  },
  {
    featured: false,
    badge: "Team Project · Architecture Lead",
    liveStatus: null,
    title: "YourCabs: Car Rental & Ride-Pooling Platform",
    subtitle: "MERN Stack · Geospatial Matching · Role-Based Access",
    image: project1,
    description:
      "A ride-pooling and car rental platform where passengers heading in similar directions get matched and share fares. I led the development as team architect — designed the backend REST API, MongoDB geospatial schema with 2dsphere indexing, and the JWT-based role system. Three completely separate portals handle Admin fleet management, Driver trip assignments, and Passenger bookings. The geospatial matching algorithm cuts individual fares by up to 60% by clustering nearby routes.",
    highlights: [
      "MongoDB 2dsphere spatial indexing with $geoNear for proximity-based passenger matching",
      "Three isolated role-based portals: Admin, Driver, and Passenger with separate JWT scopes",
      "Architected and led a 5-person team through design, sprints, and delivery"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Geospatial Queries", "JWT Auth", "RBAC"],
    github: "https://github.com/apurbahalderwork/your-cabs",
    live: null
  },
  {
    featured: false,
    badge: "University Platform",
    liveStatus: null,
    title: "Mentor-Mentee Academic Platform",
    subtitle: "Node.js · Express · MongoDB · Handlebars · Multer",
    image: project3,
    description:
      "An academic management system built for Adamas University to replace the usual mess of WhatsApp groups and scattered files. It automates mentor-mentee pairing, enforces institutional email domain validation on signup, and handles document uploads and streaming through Multer. Faculty coordinators get a dashboard for looking up student progress and mentorship status. Templating is done server-side with Handlebars.",
    highlights: [
      "Institutional email domain validation to restrict access to university members only",
      "Document upload and streaming with Multer — supports avatars and academic files",
      "Admin lookup dashboard for faculty to track mentorship assignments"
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Handlebars", "Multer"],
    github: "https://github.com/apurbahalderwork/mentor-mentee-app",
    live: null
  },
  {
    featured: false,
    badge: "Developer Tool",
    liveStatus: null,
    title: "GitHub Profile & Repo Analyzer",
    subtitle: "Node.js · Express · Vanilla JS · Chart.js · GitHub REST API",
    image: project4,
    description:
      "A dashboard that pulls data from the GitHub REST API and turns it into useful charts — language distribution, repo stars, commit velocity, and more. Built a server-side Express caching proxy to avoid hitting GitHub's rate limits when analyzing multiple profiles. Supports side-by-side comparison between two GitHub users. Everything on the frontend is plain Vanilla JS with Chart.js — no frameworks, just clean DOM work.",
    highlights: [
      "Chart.js visualizations for language breakdown, stars, and repo activity",
      "Side-by-side GitHub profile comparison with metric breakdowns",
      "Express caching proxy to handle GitHub API rate limits gracefully"
    ],
    technologies: ["JavaScript (ES6+)", "Chart.js", "Node.js", "Express.js", "GitHub REST API"],
    github: "https://github.com/apurbahalderwork/GitHub-Profile-Analyzer",
    live: null
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Adamas University, Kolkata",
    duration: "Aug 2023 – 2027 (Expected)",
    details: "Currently in my third year. Elected Class Representative by 60+ peers — I handle communication between students and department heads, coordinate exam schedules, and sort out the logistical issues that come up in a large batch. It's given me a real appreciation for clear communication and keeping people aligned, which directly carries over to working in dev teams.",
    coursework: [
      "Java",
      "C / C++",
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
    details: "Completed Higher Secondary with 76.8% aggregate in the Science stream with Computer Science. This is where I wrote my first programs and realized I actually enjoyed the debugging part more than the writing part.",
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
