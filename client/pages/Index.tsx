import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Database,
  Globe,
  Smartphone,
  Users,
  Star,
  Menu,
  X,
  // Technical Skills Icons
  Zap,
  Package,
  Link,
  Search,
  Palette,
  Target,
  Circle,
  Layers,
  Smartphone as Phone,
  GitBranch,
  Webhook,
  FileText,
  Globe as World,
  FileJson,
  Monitor,
  Sparkles,
  Cpu,
  Split,
  HardDrive,
  Minus,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState<
    "all" | "framework" | "vanilla"
  >("all");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Technical Skills Icons Component
  const TechIcon = ({ name }: { name: string }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      // Frontend Frameworks
      "React.js": <div className="w-6 h-6 text-blue-500">⚛️</div>,
      "Next.js": <Zap className="w-6 h-6 text-black dark:text-white" />,
      "jQuery": <Circle className="w-6 h-6 text-blue-600" />,
      
      // State Management
      "Redux Toolkit": <Package className="w-6 h-6 text-purple-600" />,
      "Context API": <Link className="w-6 h-6 text-blue-500" />,
      "React Query": <Search className="w-6 h-6 text-orange-500" />,
      
      // Languages
      "JavaScript": <div className="w-6 h-6 text-yellow-400">🟨</div>,
      "TypeScript": <div className="w-6 h-6 text-blue-600">🔷</div>,
      "HTML": <World className="w-6 h-6 text-orange-500" />,
      "CSS": <Palette className="w-6 h-6 text-blue-500" />,
      
      // Styling & UI
      "Tailwind CSS": <Zap className="w-6 h-6 text-cyan-500" />,
      "Bootstrap": <Target className="w-6 h-6 text-purple-600" />,
      "SASS": <div className="w-6 h-6 text-pink-500">🔴</div>,
      "Material-UI": <Layers className="w-6 h-6 text-blue-500" />,
      "Styled Components": <Palette className="w-6 h-6 text-pink-500" />,
      "Responsive Design": <Phone className="w-6 h-6 text-green-500" />,
      
      // Development Tools
      "Git & GitHub": <GitBranch className="w-6 h-6 text-gray-800 dark:text-white" />,
      "Vite": <Zap className="w-6 h-6 text-purple-500" />,
      "Webpack": <Package className="w-6 h-6 text-blue-500" />,
      "npm/yarn": <FileText className="w-6 h-6 text-red-500" />,
      "CI/CD": <Webhook className="w-6 h-6 text-green-500" />,
      "Postman": <FileText className="w-6 h-6 text-orange-500" />,
      
      // API & Integration
      "REST APIs": <Webhook className="w-6 h-6 text-blue-500" />,
      "Axios": <World className="w-6 h-6 text-green-500" />,
      "JSON": <FileJson className="w-6 h-6 text-yellow-500" />,
      
      // Design & Tools
      "Figma": <Palette className="w-6 h-6 text-purple-500" />,
      "VS Code": <Monitor className="w-6 h-6 text-blue-500" />,
      "UI/UX Design": <Sparkles className="w-6 h-6 text-purple-500" />,
      "Cursor ai": <Eye className="w-6 h-6 text-blue-500" />,
      
      // Performance & Optimization
      "Lazy Loading": <Zap className="w-6 h-6 text-green-500" />,
      "Code Splitting": <Split className="w-6 h-6 text-blue-500" />,
      "Caching": <HardDrive className="w-6 h-6 text-green-500" />,
      "Minification": <Minus className="w-6 h-6 text-red-500" />,
    };
    
    return iconMap[name] || <Code className="w-6 h-6 text-gray-500" />;
  };

  // Soft Skills Icons Component
  const SoftSkillIcon = ({ name }: { name: string }) => {
    const iconMap: { [key: string]: string } = {
      "Team Collaboration": "🤝",
      "Problem Solving": "🧠",
      "Adaptability": "🔄",
      "Continuous Learning": "📚",
      "Growth Mindset": "🌱",
      "Time Management": "⏱️",
      "Multitasking": "🎯",
      "Deadline-Oriented": "📅",
    };
    
    return iconMap[name] || "✨";
  };

  // AI Tools & Extensions Component
  const AIToolIcon = ({ name }: { name: string }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      // AI Chat & Research Tools
      "ChatGPT Plus": <Sparkles className="w-6 h-6 text-green-500" />,
      "Claude": <Sparkles className="w-6 h-6 text-orange-500" />,
      "Gemini AI": <Sparkles className="w-6 h-6 text-purple-500" />,
      "Perplexity AI": <Search className="w-6 h-6 text-blue-600" />,
      "DeepSeek": <Sparkles className="w-6 h-6 text-indigo-500" />,
      
      // AI Code Assistants
      "GitHub Copilot": <GitBranch className="w-6 h-6 text-blue-500" />,
      "Cursor AI": <Eye className="w-6 h-6 text-blue-500" />,
      "Gemini Code Assist": <Code className="w-6 h-6 text-purple-500" />,
      "Amp (Research Preview)": <Sparkles className="w-6 h-6 text-yellow-500" />,
      "Windsurf": <Globe className="w-6 h-6 text-cyan-500" />,
      "AI Assistant": <Sparkles className="w-6 h-6 text-pink-500" />,
      "Tabnine": <Code className="w-6 h-6 text-green-600" />,
      "IntelliCode": <Code className="w-6 h-6 text-blue-600" />,
      "Codeium": <Code className="w-6 h-6 text-indigo-600" />,
      "Kite": <Code className="w-6 h-6 text-red-500" />,
    };
    
    return iconMap[name] || <Sparkles className="w-6 h-6 text-gray-500" />;
  };

  const skillCategories = {
    "Frontend Frameworks": [
      { name: "React.js" },
      { name: "Next.js" },
    ],
    "State Management": [
      { name: "Redux Toolkit" },
      { name: "Context API" },
      { name: "React Query" },
    ],
    "Languages": [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    "Styling & UI": [
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "SASS" },
      { name: "Material-UI" },
      { name: "Styled Components" },
      { name: "Responsive Design" },
    ],
    "Development Tools": [
      { name: "Git & GitHub" },
      { name: "Vite" },
      { name: "Webpack" },
      { name: "npm/yarn" },
      { name: "CI/CD" },
      { name: "Postman" },
    ],
    "API & Integration": [
      { name: "REST APIs" },
      { name: "Axios" },
      { name: "JSON" },
    ],
    "Design & Tools": [
      { name: "Figma" },
      { name: "VS Code" },
      { name: "UI/UX Design" },
      { name: "Cursor ai" },
    ],
    "Performance & Optimization": [
      { name: "Lazy Loading" },
      { name: "Code Splitting" },
      { name: "Caching" },
      { name: "Minification" },
    ],
  };

const projects = [
{
    title: "Logistics & Shipping Management System",
    image: "/client/images/ShippingSystem.png",
    description:
      "Engineered a production-grade logistics platform featuring a multi-role architecture (Admin,Employee, Merchant, Delivery). Developed complex order lifecycle management with a custom RBAC system, dynamic form handling, and real-time analytics dashboards. Focused on high performance with Next.js Server Components and a perfect 100/100 Lighthouse score.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "RBAC",
      "Lighthouse Optimized",
      "Zod/Yup Validation"
    ],
    liveDemo: "https://shipping-system-nine.vercel.app/",
    github: "https://github.com/ahmedebrahem0/shipping_system.git",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    image: "/images/FreshCart.png",
    description:
      "Developed and deployed a fully functional e-commerce application using React, Context API, Redux and Tailwind CSS. Integrated API for product management, user authentication, and payment processing. Optimized user experience with responsive design and interactive features.",
    technologies: [
      "React",
      "Context API",
      "Redux",
      "Tailwind CSS",
      "API Integration",
      "Payment Processing",
      "Responsive Design"
    ],
    liveDemo: "https://ahmedebrahem0.github.io/FreshCart/Home",
    github: "https://github.com/ahmedebrahem0/FreshCart.git",
    featured: true
  },
  {
    title: "Product Management System",
    image: "/images/ProductManagement.png",
    description:
      "Developed a React-based product management system with CRUD operations. Utilized Re-charts for data visualization, implemented Redux Toolkit for state management, and integrated local-Storage to persist data. Added like and cart functionalities with region-based product filtering.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Recharts",
      "LocalStorage",
      "CRUD Operations",
      "Data Visualization"
    ],
    liveDemo: "https://ahmedebrahem0.github.io/AdminDashbord/",
    github: "https://github.com/ahmedebrahem0/AdminDashbord",
    period: "May 2024 - June 2024",
    featured: true
  },
  {
    title: "Weather Forecast Application",
    image: "/images/Weather.png",
    description:
      "Developed a real-time weather application using React, Tailwind CSS, and Open-weather API. Implemented dynamic search functionality, location-based weather updates, and optimized performance with lazy loading and API response caching.",
    technologies: [
      "React",
      "OpenWeather API",
      "Tailwind CSS",
      "Lazy Loading",
      "API Caching",
      "Dynamic Search",
      "Performance Optimization"
    ],
    liveDemo: "https://ahmedebrahem0.github.io/weather-App/",
    github: "https://github.com/ahmedebrahem0/weather-App.git",
    featured: false
  },
  {
    title: "Breast Cancer Awareness Graduation Project",
    image: "/images/Breast.png",
    description:
      "Built a React-based platform to raise awareness about breast cancer, featuring live medical data via API integration. Implemented interactive animations, React-Toastify notifications, and secure authentication/authorization protocols with user dashboard for personalized data.",
    technologies: [
      "React",
      "Tailwind CSS",
      "API Integration",
      "React Toastify",
      "Authentication",
      "Medical Data API",
      "User Dashboard"
    ],
    liveDemo: "https://ahmedebrahem0.github.io/BreastCancerAwareness/",
    github: "https://github.com/ahmedebrahem0/BreastCancerAwareness",
    period: "Nov 2023 - Jan 2024",
    featured: true
  },
 
 {
  title: "Alkohlany Business Website",
  image: "/images/Alkohlany.png",
  description:
    "A modern and responsive business website showcasing services and company information with clean UI and structured layout. Built without frameworks to demonstrate strong frontend fundamentals.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Responsive Design",
    "Modern Layout"
  ],
  liveDemo: "https://ahmedebrahem0.github.io/ALKOHLANY/",
  github: "https://github.com/ahmedebrahem0/ALKOHLANY",
  period: "2024",
  featured: false
},
{
  title: "School Website (Responsive UI)",
  image: "/images/School.png",
  description:
    "A responsive school website presenting academic information, services, and navigation with clean layout and modern design. Built without frameworks to demonstrate solid HTML, CSS, and JavaScript skills.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Responsive Design",
    "Semantic Structure"
  ],
  liveDemo: "https://ahmedebrahem0.github.io/School-Web-Site/",
  github: "https://github.com/ahmedebrahem0/School-Web-Site",
  period: "2024",
  featured: false
},
 {
  title: "Prosthetic Care Medical Website",
  image: "/images/Prosthetic.png",
  description:
    "A responsive medical website focused on prosthetic care awareness, providing structured information and user-friendly navigation. Built without frameworks to demonstrate strong fundamentals in HTML, CSS, and JavaScript.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Responsive Design",
    "Semantic Structure"
  ],
  liveDemo: "https://ahmedebrahem0.github.io/prosthetic-care/",
  github: "https://github.com/ahmedebrahem0/prosthetic-care",
  period: "2024",
  featured: false
  },
{
  title: "Simple Landing Page",
  image: "/images/LandingPage.png",
  description:
    "A clean and responsive landing page designed with HTML, CSS, and Bootstrap to showcase content in a simple and structured layout. Built to demonstrate core frontend skills without frameworks.",
  technologies: [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Layout"
  ],
  liveDemo: "https://ahmedebrahem0.github.io/website-1/",
  github: "https://github.com/ahmedebrahem0/website-1",
  period: "2024",
  featured: false
  },
  {
  title: "Bootstrap Responsive Page",
  image: "/images/Bootstrap.png",
  description:
    "A clean and responsive Bootstrap-based webpage showcasing layout and component usage with organized structure. Built with core frontend fundamentals using HTML, CSS, and Bootstrap.",
  technologies: [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
    "Grid System"
  ],
  liveDemo: "https://ahmedebrahem0.github.io/bootstrap-1/",
  github: "https://github.com/ahmedebrahem0/bootstrap-1",
  period: "2024",
  featured: false
  },
  {
  title: "Responsive Personal Landing Page",
  image: "/images/PersonalLandingPage.png",
  description:
    "A clean and responsive landing page built with HTML and CSS to showcase content with a simple and modern layout. Demonstrates solid core frontend fundamentals without using frameworks.",
  technologies: [
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Semantic Layout"
  ],
  liveDemo: "https://ahmedebrahem0.github.io/website-2/",
  github: "https://github.com/ahmedebrahem0/website-2",
  period: "2024",
  featured: false
}  ,
{
  title: "IEEE Organization Website (Responsive UI)",
  image: "/images/IEEEOrganization.png",
  description:
    "A clean and responsive organization website built to showcase information about IEEE activities and sections. Built with HTML, CSS, and Bootstrap to demonstrate strong core frontend fundamentals.",
  technologies: [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
    "Semantic Layout"
  ],
  liveDemo: "https://ahmedebrahem0.github.io/ieee-website-1/",
  github: "https://github.com/ahmedebrahem0/ieee-website-1",
  period: "2024",
  featured: false
  },

 {
   title: "Task Management App",
   image: "/images/TaskManagement.png",
    description:
      "Collaborative task management app with real-time updates, drag-and-drop tasks, and team features. Built with TypeScript, Redux Toolkit, and Socket.io for seamless multi-user experience.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Socket.io",
      "Tailwind CSS",
      "Real-time Updates",
      "Drag & Drop"
    ],
    liveDemo: "https://ahmedebrahem0.github.io/CRUD_System/", 
    github: "https://github.com/ahmedebrahem0/CRUD_System.git",
    period: "2024",
    featured: false
  },
];

  const isFrameworkProject = (technologies: string[]) =>
    technologies.some((tech) =>
      ["React", "Next.js", "Redux", "Context API", "RTK Query"].some(
        (keyword) => tech.includes(keyword),
      ),
    );

  const getProjectCategory = (technologies: string[]) =>
    isFrameworkProject(technologies) ? "framework" : "vanilla";

  const projectFilters = [
    { id: "all", label: "All Projects" },
    { id: "framework", label: "React / Next" },
    { id: "vanilla", label: "Without Framework" },
  ] as const;

  const sortedProjects = [...projects].sort((a, b) => {
    const aFramework = isFrameworkProject(a.technologies) ? 1 : 0;
    const bFramework = isFrameworkProject(b.technologies) ? 1 : 0;
    const aFeatured = a.featured ? 1 : 0;
    const bFeatured = b.featured ? 1 : 0;

    if (bFramework !== aFramework) {
      return bFramework - aFramework;
    }

    if (bFeatured !== aFeatured) {
      return bFeatured - aFeatured;
    }

    return 0;
  });

  const visibleProjects = sortedProjects.filter((project) => {
    if (activeProjectFilter === "all") {
      return true;
    }

    return getProjectCategory(project.technologies) === activeProjectFilter;
  });

  const experiences = [
    {
      title: "Front-End Instructor",
      company: "Google Developer Student Club (GDSC)",
      period: "Aug 2024 – Dec 2024",
      location: "Cairo, Egypt",
      description:
        "Led and trained a team of front-end developers in a 4-month program focused on HTML, CSS, and JavaScript. Managed all team tasks and provided technical mentorship.",
      achievements: [
        "Led and trained a large number of students in web development",
        "Conducted hybrid training model (online & offline) for maximum engagement",
        "Organized and led a one-week Boot-camp on Web Design principles",
        "Taught students Git & GitHub, version control, and collaborative workflows",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Route Academy",
      period: "Jan 2023 – June 2023",
      location: "Cairo, Egypt",
      description:
        "Developed a full-stack e-commerce website using React, integrating APIs for product management, user authentication, and payment processing.",
      achievements: [
        "Developed full-stack e-commerce website using React and APIs",
        "Utilized Axios and Postman for API testing and debugging",
        "Implemented Context API and Redux for efficient state management",
        "Optimized user experience with animation libraries and validation",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Banha University",
      period: "2020 - 2024",
      location: "Cairo, Egypt",
      description:
        "Focused on software engineering, data structures, and web development technologies.",
    },
  ];

  const internships = [
    {
      title: "Front-End Developer (Intern)",
      organization: "Information Technology Institute (ITI)",
      period: "Sep 2022 – Oct 2022",
      location: "Cairo, Egypt",
      description:
        "Completed a one-month intensive training program, delivering multiple front-end projects with focus on responsive design and UI/UX.",
      achievements: [
        "Delivered multiple front-end projects with responsive design focus",
        "Contributed to team objectives by meeting tight deadlines",
        "Improved overall productivity and project delivery",
      ],
    },
    {
      title: "Front-End Developer (Intern)",
      organization: "National Telecommunication Institute (NTI)",
      period: "Oct 2022 – Nov 2022",
      location: "Cairo, Egypt",
      description:
        "Successfully delivered multiple projects during a one-month training program, focusing on front-end interface design and user experience.",
      achievements: [
        "Delivered multiple projects focusing on interface design",
        "Achieved high client satisfaction by exceeding expectations",
        "Specialized in user experience optimization",
      ],
    },
  ];

  const memberships = [
    {
      title: "Web Developer (Member)",
      organization: "IEEE BUB",
      period: "Jan 2023 – Nov 2023",
      description:
        "Developed a professional book store website as part of a team, winning recognition for the best project.",
      achievements: [
        "Won recognition for the best project in the team",
        "Actively participated in website design and development",
        "Ensured seamless user experience in the book store platform",
      ],
    },
    {
      title: "Web Developer (Member)",
      organization: "Google Developer Student Club (Banha & Cairo)",
      period: "Sep 2023 – Nov 2023",
      description:
        "Ranked among the top participants in the Google Developers Club hackathon and completed a six-month online training program.",
      achievements: [
        "Ranked among the top participants in GDSC hackathon",
        "Completed six-month online training program in front-end development",
        "Gained hands-on experience with modern web technologies",
        "Contributed to team's success in competitive environment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Ahmed Ebrahem
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("internships")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Internships
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Skills
              </button>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <ThemeToggle />
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("internships")}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Internships
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Skills
                </button>
                
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
<section id="home" className="pt-20 pb-16 px-4">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* الصورة */}
      <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
        <img
  src="/my-photo.jpeg"
  alt="Ahmed Ebrahem"
  className="w-80 h-80 object-contain rounded-full shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out bg-white"
/>

      </div>

      {/* المحتوى */}
      <div className="w-full md:w-1/2 text-center md:text-left animate-slide-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
          Ahmed Ebrahem
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
          Front-End Developer & Instructor
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          Experienced Front-End Developer with hands-on experience in building dynamic, user-friendly web applications using React, Redux, and modern UI frameworks. Front-End Instructor at GDSC, leading and training students in web development.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          📅 Born: September 20, 2002 | 📞 +20 127 735 1598 | 📍 Cairo, Egypt
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
          <Button
            size="lg"
            className="gap-2 hover-lift"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
          <a
            href="https://drive.google.com/file/d/1o4uZcJXuzNWWFIv0LPhUK4kTOiOOB_tG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2 hover-lift">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </a>
        </div>

        <div className="flex justify-center md:justify-start space-x-6">
          <a href="https://github.com/ahmedebrahem0" target="_blank" className="p-3 rounded-full bg-card hover:bg-accent transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/ahmed-ebrahem-421604235" target="_blank" className="p-3 rounded-full bg-card hover:bg-accent transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:ahmed.ebrahem.ebdelazem@gmail.com" className="p-3 rounded-full bg-card hover:bg-accent transition-all">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Hello, I'm Ahmed
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Experienced Front-End Developer with hands-on experience in building dynamic, user-friendly web applications using React, Redux, and modern UI frameworks. As a Front-End Instructor at GDSC, I lead and train a large number of students in web development, emphasizing best coding practices and real-world project execution.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  My expertise spans across state management, API integration, and performance optimization, ensuring seamless and engaging user experiences. With a strong background in e-commerce, UI/UX design, and team collaboration, I focus on delivering high-quality software solutions that exceed expectations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Redux Toolkit</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">jQuery</Badge>
                  <Badge variant="secondary">Bootstrap</Badge>
                  <Badge variant="secondary">SASS</Badge>
                  <Badge variant="secondary">Figma</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card
                  className="hover-lift animate-scale-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Code className="w-8 h-8 mx-auto mb-2 text-primary animate-bounce-gentle" />
                    <h4 className="font-semibold mb-1">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Writing maintainable, readable code
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="hover-lift animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Smartphone
                      className="w-8 h-8 mx-auto mb-2 text-primary animate-bounce-gentle"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <h4 className="font-semibold mb-1">Responsive</h4>
                    <p className="text-sm text-muted-foreground">
                      Mobile-first design approach
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="hover-lift animate-scale-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Globe
                      className="w-8 h-8 mx-auto mb-2 text-primary animate-bounce-gentle"
                      style={{ animationDelay: "1s" }}
                    />
                    <h4 className="font-semibold mb-1">Modern Tech</h4>
                    <p className="text-sm text-muted-foreground">
                      Latest web technologies
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="hover-lift animate-scale-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Users
                      className="w-8 h-8 mx-auto mb-2 text-primary animate-bounce-gentle"
                      style={{ animationDelay: "1.5s" }}
                    />
                    <h4 className="font-semibold mb-1">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Team player mindset
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Professional Experience
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="hover-lift animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {exp.company} • {exp.period}
                    </CardDescription>
                    <CardDescription>{exp.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm animate-fade-in"
                          style={{
                            animationDelay: `${index * 0.2 + i * 0.1 + 0.3}s`,
                          }}
                        >
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Education
            </h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="hover-lift animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {edu.institution} • {edu.period}
                    </CardDescription>
                    <CardDescription>{edu.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internships & Memberships Section */}
      <section id="internships" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Internships & Memberships
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Internships */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary rounded"></div>
                  Internships
                </h3>
                <div className="space-y-8">
                  {internships.map((internship, index) => (
                    <Card
                      key={index}
                      className="hover-lift animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">{internship.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {internship.organization} • {internship.period}
                        </CardDescription>
                        <CardDescription>{internship.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {internship.description}
                        </p>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm animate-fade-in"
                              style={{
                                animationDelay: `${index * 0.2 + i * 0.1 + 0.3}s`,
                              }}
                            >
                              <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Memberships */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary rounded"></div>
                  Memberships
                </h3>
                <div className="space-y-8">
                  {memberships.map((membership, index) => (
                    <Card
                      key={index}
                      className="hover-lift animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">{membership.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {membership.organization} • {membership.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {membership.description}
                        </p>
                        <ul className="space-y-2">
                          {membership.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm animate-fade-in"
                              style={{
                                animationDelay: `${index * 0.2 + i * 0.1 + 0.3}s`,
                              }}
                            >
                              <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured Projects
            </h2>

            <div className="mb-10 flex flex-col items-center gap-5">
              <p className="max-w-2xl text-center text-sm text-muted-foreground md:text-base">
                A selection of the most important projects I have built, with a
                focus on modern React and Next.js applications.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-border/60 bg-background/80 p-2 shadow-sm backdrop-blur">
                {projectFilters.map((filter) => {
                  const isActive = activeProjectFilter === filter.id;
                  const count =
                    filter.id === "all"
                      ? projects.length
                      : projects.filter(
                          (project) =>
                            getProjectCategory(project.technologies) ===
                            filter.id,
                        ).length;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setActiveProjectFilter(filter.id)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {filter.label}
                      <span
                        className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                          isActive
                            ? "bg-primary-foreground/15 text-primary-foreground"
                            : "bg-muted-foreground/10 text-muted-foreground"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {visibleProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className={`hover-project animate-scale-in hover-glow group relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 ${project.featured ? "border-primary/30 shadow-lg shadow-primary/10" : "border-border hover:border-primary/20"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-video overflow-hidden border-b border-border group/image">
            {project.image ? (
              <>
                <img
                  src={project.image} 
                  alt={`${project.title} Screenshot`}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105 group-hover:saturate-110"
                  loading="lazy"
                  onLoad={(e) => {
                    e.currentTarget.classList.add('animate-fade-in');
                  }}
                />
                {/* Loading skeleton overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-shimmer opacity-0 peer-loading:opacity-100" />
                
                {/* Overlay gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 rounded-lg" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                </div>
                
                {/* View Project overlay */}
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                  className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                >
                  <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="text-sm font-semibold text-primary flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 animate-bounce" />
                      View Project
                    </span>
                  </div>
                </a>
              </>
            ) : (
              // حالة احتياطية إذا لم توجد صورة (Placeholder)
              <div className="w-full h-full bg-gradient-to-br from-accent to-muted flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
                <div className="text-center z-10">
                  <Code className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2 group-hover:text-primary/70 transition-colors duration-300 animate-pulse-slow" />
                  <span className="text-xs text-muted-foreground/70">Project Preview</span>
                </div>
              </div>
            )}
            
            {/* شارة "مميز" فوق الصورة إذا كان المشروع Featured */}
            {project.featured && (
              <div className="absolute top-3 right-3 z-20 animate-pulse-slow">
                <Badge className="gap-1 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-lg border border-primary/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <Star className="w-3 h-3 fill-current animate-spin" style={{ animationDuration: '4s' }} />
                  Featured
                </Badge>
              </div>
            )}
          </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex flex-wrap items-center justify-end gap-2">
                        <Badge
                          variant="secondary"
                          className={`${
                            getProjectCategory(project.technologies) === "framework"
                              ? "border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300"
                              : "border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                          }`}
                        >
                          {getProjectCategory(project.technologies) ===
                          "framework"
                            ? "Framework"
                            : "Core Frontend"}
                        </Badge>
                        {project.featured && (
                          <Badge
                            variant="default"
                            className="animate-bounce-gentle"
                          >
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription className="mb-2">{project.description}</CardDescription>
                    {project.period && (
                      <Badge variant="outline" className="w-fit">
                        📅 {project.period}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="animate-fade-in"
                          style={{
                            animationDelay: `${index * 0.1 + i * 0.05}s`,
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="gap-2 hover-lift bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                          <ExternalLink className="w-4 h-4 animate-pulse" />
                          Live Demo
                        </Button>
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-2 hover-lift border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:text-sky-500">
                          <Github className="w-4 h-4 group-hover:animate-spin " style={{ animationDuration: '2s' }} />
                          Source Code
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Technical Skills
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              {Object.entries(skillCategories).map(
                ([category, skills], categoryIndex) => (
                  <div key={category} className="space-y-6">
                    <h3
                      className="text-2xl font-semibold mb-6 flex items-center gap-3 animate-slide-in-left text-gray-800 dark:text-foreground"
                      style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                    >
                      <div className="w-1 h-8 bg-primary rounded"></div>
                      {category}
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      {skills.map((skill, skillIndex) => (
                        <div 
                          key={skill.name} 
                          className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-card border border-gray-100 dark:border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover-lift animate-scale-in shadow-sm hover:shadow-lg"
                          style={{ animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                        >
                          <TechIcon name={skill.name} />
                          <span className="font-semibold transition-colors text-sm text-gray-800 dark:text-foreground">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* AI Tools & Extensions Section */}
            <div className="mt-16">
              <h3
                className="text-2xl font-semibold mb-8 text-center animate-fade-in text-gray-800 dark:text-foreground"
                style={{ animationDelay: "1s" }}
              >
                AI Tools & AI Assistants
              </h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "1.1s" }}>
                Modern AI-powered tools and extensions that enhance my development workflow and productivity
              </p>
              
              <div className="grid lg:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                {/* AI Chat & Research Tools */}
                <div>
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800 dark:text-foreground">
                    <div className="w-1 h-6 bg-primary rounded"></div>
                    AI Chat
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "ChatGPT Plus",
                      "Claude",
                      "Gemini AI",
                      "Perplexity AI",
                      "DeepSeek",
                     
                    ].map((tool, index) => (
                      <div
                        key={tool}
                        className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-card border border-gray-100 dark:border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover-lift animate-scale-in shadow-sm hover:shadow-lg"
                        style={{ animationDelay: `${1.3 + index * 0.05}s` }}
                      >
                        <AIToolIcon name={tool} />
                        <span className="font-semibold transition-colors text-sm text-gray-800 dark:text-foreground">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Code Assistants */}
                <div>
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800 dark:text-foreground">
                    <div className="w-1 h-6 bg-primary rounded"></div>
                    AI Code Assistants
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Cursor AI",
                      "Amp",
                      "Windsurf",
                      "GitHub Copilot",
                      "Gemini Code Assist",
                      "AI Assistant",
                    ].map((assistant, index) => (
                      <div
                        key={assistant}
                        className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-card border border-gray-100 dark:border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover-lift animate-scale-in shadow-sm hover:shadow-lg"
                        style={{ animationDelay: `${1.4 + index * 0.05}s` }}
                      >
                        <AIToolIcon name={assistant} />
                        <span className="font-semibold transition-colors text-sm text-gray-800 dark:text-foreground">
                          {assistant}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="mt-16">
              <h3
                className="text-2xl font-semibold mb-8 text-center animate-fade-in"
                style={{ animationDelay: "1.5s" }}
              >
                Soft Skills
              </h3>
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in"
                style={{ animationDelay: "1.6s" }}
              >
                {[
                  "Team Collaboration",
                  "Problem Solving",
                  "Adaptability",
                  "Continuous Learning",
                  "Growth Mindset",
                  "Time Management",
                  "Multitasking",
                  "Deadline-Oriented",
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-card border border-gray-100 dark:border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover-lift animate-scale-in shadow-sm hover:shadow-lg"
                    style={{ animationDelay: `${1.7 + index * 0.05}s` }}
                  >
                    <span className="text-2xl mb-2">{SoftSkillIcon({ name: skill })}</span>
                    <span className="text-sm font-semibold text-center text-gray-800 dark:text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with
              amazing people. Let's discuss how we can bring your ideas to life!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card
                className="hover-lift animate-scale-in"
                style={{ animationDelay: "0.1s" }}
              >
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-primary animate-bounce-gentle" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground text-xs font-medium">
                    ahmed.ebrahem.ebdelazem@gmail.com
                  </p>
                </CardContent>
              </Card>

              <Card
                className="hover-lift animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-6 text-center">
                  <a href="https://www.linkedin.com/in/ahmed-ebrahem-421604235">
                    <Linkedin
                    className="w-8 h-8 mx-auto mb-4 text-primary animate-bounce-gentle hover:text-accent transition-all duration-300 hover-lift hover-glow"
                    style={{ animationDelay: "0.5s" }}
                  />
                  </a>
                  
                  <h3 className="font-semibold mb-2 ">LinkedIn</h3>
                  <p className="text-muted-foreground hover-lift animate-scale-in">
                    ahmed-ebrahem-421604235
                  </p>
                </CardContent>
              </Card>

              <Card
                className="hover-lift animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                <CardContent className="p-6 text-center">

                  <a href="https://github.com/ahmedebrahem0">
                    <Github
                    className="w-8 h-8 mx-auto mb-4 text-primary animate-bounce-gentle hover:text-accent transition-all duration-300 hover-lift hover-glow"
                    style={{ animationDelay: "1s" }}
                  />
                  </a>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-muted-foreground">ahmedebrahem0</p>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="gap-2 hover-lift animate-scale-in"
              style={{ animationDelay: "0.4s" }}
              onClick={() =>
                window.open(
                  "mailto:ahmed.ebrahem.ebdelazem@gmail.com",
                  "_blank",
                )
              }
            >
              <Mail className="w-5 h-5" />
              Send me a message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Ahmed Ebrahem. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
