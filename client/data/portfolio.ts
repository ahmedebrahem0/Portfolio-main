export const skillCategories = {
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

export const projects = [
    {
      title: "YUMA Furniture E-Commerce Platform",
      image: "/images/yuma.png",
      description:
        "Owned a live Next.js 16 storefront serving real customers. Built OTP authentication, synchronized guest and user carts and wishlists with RTK Query, and created reusable metadata components for SEO. Improved error handling across live releases.",
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Redux Toolkit",
        "RTK Query",
        "Tailwind CSS 4",
        "React Hook Form",
        "Zod",
        "Framer Motion",
      ],
      liveDemo: "https://yuma-homz.com",
      // github: "",
      // repositoryNote: "Private (NDA)",
      period: "May 2026 - Present",
      showcaseStatus: "production",
      featured: true,
    },
    {
      title: "El-Hattab Furniture Store",
      image: "/images/elhatab.png",
      description:
        "Built and maintained an Arabic RTL storefront from product discovery to checkout. Used feature-based architecture to keep store and account flows organized, then delivered OTP login, API integration, SEO metadata, and responsive layouts.",
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "Axios",
        "Zod",
        "React Hook Form",
        "Framer Motion",
        "Arabic RTL",
      ],
      liveDemo: "https://el-hattab.com",
      // github: "https://github.com/ahmedebrahem0/Hatab",
      period: "May 2026 - Present",
      showcaseStatus: "production",
      featured: true,
    },
    {
      title: "Logistics & Shipping Management System",
      image: "/images/ShippingSystem_1.png",
      description:
        "Engineered a logistics platform with role-based experiences for Admin, Employee, Merchant, and Delivery. Modeled the order lifecycle and authorization rules with TypeScript, custom RBAC, dynamic forms, and analytics dashboards. Improved performance with Next.js Server Components and a 100/100 Lighthouse score.",
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
      showcaseStatus: "demo",
      featured: true
    },
    {
      title: "EduSystem — School Management",
      image: "/images/school-system.png",
      description:
        "Built and maintained a full-featured school management system covering Admin, Teacher, and Student roles end-to-end — students, teachers, classes, subjects, grades, attendance, timetables, and analytics. Owned role-based access control (RBAC), dashboard architecture, data visualization, and UX polish (dark mode, command palette, collapsible navigation, live notifications) on top of a real ASP.NET backend.",
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Redux Toolkit (RTK Query)",
        "Tailwind CSS v4",
        "Zod",
        "React Hook Form",
        "Radix UI",
        "Recharts",
        "Role-Based Access Control",
      ],
      liveDemo: "https://school-system-liard-one.vercel.app/login",
      github: "https://github.com/ahmedebrahem0/School_System.git",
      period: "Apr 2026 - Present",
      showcaseStatus: "demo",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      image: "/images/FreshCart.png",
      description:
        "Developed and deployed a fully functional e-commerce application using React, Context API, Redux and Tailwind CSS. Handled API integration for product management, user authentication, and payment processing. Optimized user experience with responsive design and interactive features.",
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
      showcaseStatus: "demo",
      featured: true
    },
    {
      title: "Product Management System",
      image: "/images/ProductManagement.png",
      description:
        "Developed a React product management system with CRUD operations. Utilized Recharts for data visualization, implemented Redux Toolkit for state management, and used local storage for persistence. Added like and cart functionality with region-based product filtering.",
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
      showcaseStatus: "demo",
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
      showcaseStatus: "demo",
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
    },
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

export const experiences = [
    {
      title: "Front-End Developer",
      company: "BIG GROUP",
      period: "May 2026 – Present",
      location: "Cairo, Egypt",
      description:
        "Currently owning frontend development across customer-facing brands and internal systems at BIG GROUP. Leading frontend architecture, authentication flows, SEO strategy, state management, and production stability across live platforms.",
      achievements: [
        "Own frontend architecture and feature delivery across customer-facing brands and internal systems",
        "Shipped and maintained 2 live e-commerce platforms currently serving active customers",
        "Built OTP-based authentication, session handling, redirect logic, and protected account flows",
        "Led SEO architecture, API integration quality, and production debugging across real live environments",
      ],
    },
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

export const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Banha University",
      period: "2020 - 2024",
      location: "Banha, Egypt",
      description:
        "Focused on software engineering, data structures, and web development technologies.",
    },
  ];

export const internships = [
    {
      title: "Front-End Developer (Intern)",
      organization: "Information Technology Institute ( ITI )",
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
      organization: "National Telecommunication Institute ( NTI )",
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

export const memberships = [
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
