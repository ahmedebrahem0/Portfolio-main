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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const skillCategories = {
    "Frontend Frameworks": [
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "🔥" },
      // { name: "Vue.js", level: 75, icon: "💚" },
    ],
        "State Management": [
      { name: "Redux Toolkit", level: 90, icon: "🗃️" },
      { name: "Context API", level: 95, icon: "⚡" },
      { name: "Zustand", level: 85, icon: "🐻" },
      
    ],
        Languages: [
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "TypeScript", level: 88, icon: "🔷" },
      { name: "HTML", level: 98, icon: "🧱" },
      { name: "CSS", level: 95, icon: "🎨" },
    ],
    "Styling & UI": [
      { name: "Tailwind CSS", level: 95, icon: "💨" },
      { name: "Styled Components", level: 80, icon: "💄" },
      { name: "Material-UI", level: 85, icon: "📦" },
      { name: "Responsive Design", level: 95, icon: "📱" },
    ],
    "Development Tools": [
      { name: "REST APIs", level: 95, icon: "🔌" },
  { name: "API Integration", level: 95, icon: "🔌" },
      { name: "Git & GitHub", level: 90, icon: "🔧" },
      { name: "Vite", level: 88, icon: "⚡" },
      { name: "Webpack", level: 80, icon: "📦" },
      { name: "npm/yarn", level: 85, icon: "📦" },
    ],
        "AI Tools": [
  { name: "ChatGPT", level: 90, icon: "🤖" },
  { name: "GitHub Copilot", level: 85, icon: "🧠" },
  { name: "Gemini AI", level: 80, icon: "🔮" },
  { name: "Claude", level: 78, icon: "☁️" },
  { name: "ClickUp AI", level: 82, icon: "📋" },
  { name: "Perplexity AI", level: 80, icon: "🔍" },
  { name: "DeepSeek", level: 75, icon: "🧬" }
],
    // Soft Skills Section
"Soft Skills": [
  { name: "Team Collaboration", level: 90, icon: "🤝" },
  { name: "Problem Solving", level: 85, icon: "🧠" },
  { name: "Adaptability", level: 88, icon: "🔄" },
  { name: "Time Management", level: 87, icon: "⏱️" },
  { name: "Communication", level: 90, icon: "🗣️" },
  { name: "Leadership", level: 80, icon: "🧭" }
],

  };

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A complete e-commerce solution built with React, Redux, and Tailwind CSS. Includes product listing, shopping cart, user authentication, and payment integration. Designed with responsive layouts and interactive UI elements.",
    technologies: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Context API",
      "Framer Motion"
    ],
    liveDemo: "https://ahmedebrahem0.github.io/e-commerce/",
    github: "https://github.com/ahmedebrahem0/e-commerce",
    featured: true
  },
  {
  title: "Product Management System",
  description:
    "An admin dashboard for managing products with full CRUD functionality. Features region-based filtering, interactive charts using Recharts, and persistent data using localStorage. Built with a focus on responsive design and seamless user interaction.",
  technologies: [
    "React",
    "Redux Toolkit",
    "Tailwind CSS",
    "Recharts",
    "LocalStorage",
    "Axios",
    "React Router"
  ],
  liveDemo: "https://ahmedebrahem0.github.io/AdminDashbord/",
  github: "https://github.com/ahmedebrahem0/AdminDashbord",
  featured: true
},
  {
    title: "Weather Dashboard",
    description:
      "A real-time weather dashboard with city search, API caching, and data visualization. It uses the OpenWeather API and Chart.js, and provides a modern user interface with responsive design.",
    technologies: [
      "React",
      "OpenWeather API",
      "Chart.js",
      "Axios",
      "Tailwind CSS",
      "Lazy Loading"
    ],
    liveDemo: "https://ahmedebrahem0.github.io/WeatherApp/",
    github: "https://github.com/ahmedebrahem0/WeatherApp",
    featured: false
  },
  {
    title: "Breast Cancer Awareness Platform",
    description:
      "An interactive awareness platform focused on breast cancer education. It features user registration, personalized dashboards, real-time medical data via API, and a built-in chatbot that answers user queries within the platform.",
    technologies: [
      "React",
      "Tailwind CSS",
      "React Router",
      "API Integration",
      "React Toastify",
      "Authentication",
      "Form Validation",
      "Custom Chatbot (React)"
    ],
    liveDemo: "https://ahmedebrahem0.github.io/BreastCancerAwareness/",
    github: "https://github.com/ahmedebrahem0/BreastCancerAwareness",
    featured: true
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management app with real-time updates, drag-and-drop tasks, and team features. Built with TypeScript, Redux Toolkit, and Socket.io for seamless multi-user experience.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Socket.io",
      "Tailwind CSS",
      "React Router"
    ],
    liveDemo: "https://ahmedebrahem0.github.io/CRUD_System/", 
    github: "https://github.com/ahmedebrahem0/CRUD_System.git",
    featured: false
  },

];

  const experiences = [
    {
      title: "Front-End Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Cairo, Egypt",
      description:
        "Developed and maintained multiple React-based web applications, implemented responsive designs, and collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 5+ production web applications using React and Redux",
        "Improved application performance by 40% through code optimization",
        "Led migration from legacy JavaScript to modern React ecosystem",
      ],
    },
    {
      title: "Junior Front-End Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      location: "Cairo, Egypt",
      description:
        "Worked on client projects focusing on responsive web design and modern JavaScript frameworks.",
      achievements: [
        "Delivered 10+ client websites with 100% client satisfaction",
        "Implemented modern CSS techniques and responsive design patterns",
        "Collaborated with designers to create pixel-perfect implementations",
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
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
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
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-foreground hover:text-primary transition-colors"
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
          Front-End Developer
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Passionate front-end developer based in Cairo, Egypt...
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
            href="https://drive.google.com/uc?export=download&id=1dcapy8w6ovgEQFPowKKAVesrtiV0mBzc"
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
                  I'm a passionate Front-End Developer based in Cairo, Egypt,
                  with expertise in modern web technologies. I love creating
                  intuitive, responsive, and visually appealing web applications
                  that provide exceptional user experiences.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With a strong foundation in React.js, Redux, and TypeScript, I
                  focus on writing clean, maintainable code and staying
                  up-to-date with the latest industry trends and best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Next.js</Badge>
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

      {/* Experience & Education Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Experience & Education
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary rounded"></div>
                  Experience
                </h3>
                <div className="space-y-8">
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

              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                  <div className="w-2 h-8 bg-primary rounded"></div>
                  Education
                </h3>
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

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`hover-lift animate-scale-in hover-glow ${project.featured ? "ring-2 ring-primary/20" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge
                          variant="default"
                          className="animate-bounce-gentle"
                        >
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{project.description}</CardDescription>
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
                        <Button size="sm" className="gap-2 hover-lift">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 hover-lift">
                      <Github className="w-4 h-4" />
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
                      className="text-2xl font-semibold mb-6 flex items-center gap-3 animate-slide-in-left"
                      style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                    >
                      <div className="w-1 h-8 bg-primary rounded"></div>
                      {category}
                    </h3>

                    <div className="space-y-4">
                      {skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="group">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-lg">{skill.icon}</span>
                              <span className="font-medium group-hover:text-primary transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-hero-gradient h-3 rounded-full skill-bar relative"
                              style={
                                {
                                  "--target-width": `${skill.level}%`,
                                  "--delay": `${categoryIndex * 0.2 + skillIndex * 0.1 + 0.5}s`,
                                } as React.CSSProperties
                              }
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-in-right opacity-50"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Additional Skills */}
            <div className="mt-16 text-center">
              <h3
                className="text-xl font-semibold mb-6 animate-fade-in"
                style={{ animationDelay: "1s" }}
              >
                Other Technologies I Work With
              </h3>
              <div
                className="flex flex-wrap justify-center gap-3 animate-fade-in"
                style={{ animationDelay: "1.2s" }}
              >
                {[
                  // "Firebase",
                  "Vercel",
                  "Netlify",
                  "Figma",
                  "Adobe XD",
                  // "Jest",
                  "Testing Library",
                  "ESLint",
                  // "Prettier",
                  "VS Code",
                ].map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift animate-scale-in"
                    style={{ animationDelay: `${1.3 + index * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
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
