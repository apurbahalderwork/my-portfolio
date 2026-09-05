import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Full-Stack MERN engineer obsessed with real-time systems, clean architectures, and zero-latency pipelines. I turn caffeine and edge-case paranoia into reliable production apps like Wave (live on Render) and YourCabs. Certified Agile survivor—I write code that teammates actually enjoy reviewing.`;

export const ABOUT_TEXT = `I'm a Full-Stack developer based in Kolkata who genuinely believes code should be as clean as a freshly formatted hard drive. I specialize in the MERN stack, Socket.IO, and real-time architectures where latency is treated as a personal insult. When building Wave, I handled the full stack solo—from bi-directional WebSockets to Cloudinary media pipelines. On YourCabs, I led a 5-person engineering squad, designing MongoDB geospatial queries and role-based access without letting merge conflicts break our friendships. Currently pursuing a BCA at Adamas University while serving as Class Representative for 60+ peers (which basically translates to full-time conflict resolution and human load-balancing).`;

export const EXPERIENCES = [
  {
    year: "Jun 2025 – Jul 2025",
    role: "Software Development Intern",
    company: "IgniteU Private Learning Venture",
    badge: "Industry Certified · Agile Sprints",
    description: `Shipped production-ready MERN features across two Agile sprint cycles by owning full feature branches from Jira ticket to merge. Attended daily standups and cleared peer code reviews with zero rework requests. Diagnosed and resolved elusive cross-layer bugs between the React frontend and Express backend before they could cause chaos in staging.`,
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "Git", "Agile/Scrum"],
  },
  {
    year: "2025",
    role: "Technical Architect & Team Lead",
    company: "YourCabs Engineering Squad",
    badge: "5-Person Agile Team · Supervised by Dr. Soumitra Roy",
    description: `Led a five-person engineering squad from initial whiteboard architecture to delivery. Defined strict Git branching conventions so no one accidentally nuked the main branch, ran sprint planning, and architected MongoDB geospatial queries ($geoNear, $nearSphere) to pair riders and slash transit fares by 60%. Delivered three tailored role-based portals (Admin, Driver, Passenger) under a clean MVC REST architecture.`,
    technologies: ["MERN Stack", "Geospatial Matching", "JWT Auth", "RBAC", "MVC Architecture"],
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
      "A full-stack real-time messaging platform that actually delivers messages instantly instead of making you pray to the polling gods. Features 1-on-1 and group chats, live typing indicators, presence tracking, and Cloudinary media attachments. Built solo from schema to deployment.",
    highlights: [
      "Zero-latency bi-directional messaging via Socket.IO events",
      "Real-time presence tracking and typing status indicators",
      "Cloudinary CDN integration with predictable Redux Toolkit state"
    ],
    technologies: ["React 19", "Socket.IO", "Node.js", "Express 5", "MongoDB Atlas", "Redux Toolkit", "Render"],
    github: "https://github.com/apurbahalderwork/Wave-chat-app-",
    live: "https://wave-chat-app-client.onrender.com"
  },
  {
    featured: false,
    badge: "Repository & Architecture",
    liveStatus: null,
    title: "YourCabs: Smart Car Rental & Ride-Pooling",
    subtitle: "MERN Stack · Geospatial Matching · Pool-Ride Algorithm",
    image: project1,
    description:
      "Ride-pooling and rental engine pairing passengers traveling along similar routes using spherical geometry calculations ($geoNear). Cuts individual fares by up to 60% while giving drivers optimized trip clusters and admins a bird's-eye fleet view.",
    highlights: [
      "MongoDB 2dsphere spatial indexing with proximity radius pairing",
      "Three isolated role-based portals: Admin fleet, Driver routes, Passenger bookings",
      "Led a 5-developer squad through architecture, sprints, and code reviews"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Geospatial Queries", "JWT Auth"],
    github: "https://github.com/apurbahalderwork/your-cabs",
    live: null
  },
  {
    featured: false,
    badge: "Campus Platform",
    liveStatus: null,
    title: "Mentor-Mentee Academic Platform",
    subtitle: "Node.js · Express · MongoDB · Handlebars · Multer",
    image: project3,
    description:
      "Academic platform built for Adamas University that saves faculty and students from frantic WhatsApp groups and lost paperwork. Automates mentor-mentee pairing, validates institutional email domains, and handles secure document streaming via Multer.",
    highlights: [
      "Institutional email domain validation preventing rogue signups",
      "Multi-section profiles with avatar and document streaming via Multer",
      "Real-time administrative lookup dashboard for faculty coordinators"
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
    subtitle: "Node.js · Express · Vanilla JS · Chart.js · REST API",
    image: project4,
    description:
      "Developer intelligence dashboard that pulls from GitHub's REST API to visualize commit velocity, repo breakdown, and language distribution. Built with an Express caching proxy so GitHub's rate limiter doesn't ban my IP while analyzing profiles.",
    highlights: [
      "Interactive Chart.js visualizations for languages and star velocity",
      "Side-by-side metric comparison between any two GitHub profiles",
      "Smart caching proxy that shields against API rate-limit exhaustion"
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
    details: "Class Representative (2023–Present): Elected by 60 peers to bridge communications between students and department heads. Coordinating exam schedules, faculty meetings, and peer feedback—proving distributed consensus algorithms work on humans too.",
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
    details: "Completed Higher Secondary with 76.8% aggregate in Science and Computer Science. This is where I wrote my first nested for-loops and fell in love with debugging.",
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
