export interface PortfolioSkill {
  name: string;
  category: string;
  detail: string;
  color: string;
  mark?: string;
}

/** The CV skill catalogue. Order puts the strongest engineering capabilities first. */
export const portfolioSkills: PortfolioSkill[] = [
  { name: "React.js", category: "Front-end", detail: "Builds reusable, component-driven interfaces with clear state and interaction boundaries.", color: "#61dafb" },
  { name: "Next.js", category: "Front-end", detail: "Adds routing, rendering strategies and SEO-friendly delivery to production React applications.", color: "#f4f1e8" },
  { name: "TypeScript", category: "Front-end", detail: "Makes data contracts and component APIs explicit, reducing integration errors as systems grow.", color: "#79b5ec" },
  { name: "RTK Query", category: "State & data", detail: "Keeps server data, caching and request states organized inside a Redux application.", color: "#b59bf5" },
  { name: "Redux Toolkit", category: "State & data", detail: "Structures shared application state with predictable slices and focused updates.", color: "#b59bf5" },
  { name: "Performance Optimization", category: "Performance", detail: "Balances loading, rendering and bundle costs to keep real interfaces responsive.", color: "#c9f66f", mark: "↗" },
  { name: "API Integration", category: "API & integration", detail: "Connects interfaces to backend services with deliberate loading, error and data states.", color: "#93d8c7", mark: "↔" },
  { name: "Component-based Architecture", category: "UI & architecture", detail: "Breaks complex experiences into reusable components with clear ownership.", color: "#c9f66f", mark: "◇" },
  { name: "JavaScript (ES6)", category: "Front-end", detail: "Powers browser interactions and application logic using modern language features.", color: "#f7df1e" },
  { name: "HTML", category: "Front-end", detail: "Provides semantic document structure that supports accessibility and discoverability.", color: "#e67e55", mark: "<>" },
  { name: "CSS", category: "Front-end", detail: "Controls layout, responsive behavior and visual detail across screen sizes.", color: "#5aaef2", mark: "#" },
  { name: "Responsive Design", category: "UI & architecture", detail: "Adapts layout, interaction and content hierarchy to desktop and mobile contexts.", color: "#92d4d0", mark: "▣" },
  { name: "Tailwind CSS", category: "Styling & UI", detail: "Builds consistent responsive interfaces with composable utility classes.", color: "#38bdf8" },
  { name: "Bootstrap", category: "Styling & UI", detail: "Uses a familiar component and layout system when rapid, consistent delivery matters.", color: "#a889ea", mark: "B" },
  { name: "Material UI", category: "Styling & UI", detail: "Applies accessible React components with a coherent design-system foundation.", color: "#75baff", mark: "M" },
  { name: "Styled Components", category: "Styling & UI", detail: "Scopes component styles and supports theme-aware visual variations.", color: "#ddadce", mark: "S" },
  { name: "Lazy Loading", category: "Performance", detail: "Defers nonessential resources until the interface actually needs them.", color: "#c9f66f", mark: "↘" },
  { name: "Code Splitting", category: "Performance", detail: "Divides application code into smaller chunks for faster initial delivery.", color: "#c9f66f", mark: "//" },
  { name: "Caching Strategies", category: "Performance", detail: "Reuses data and assets thoughtfully to reduce repeated network work.", color: "#c9f66f", mark: "◎" },
  { name: "Memoization", category: "Performance", detail: "Avoids unnecessary recalculation and rendering when profiling shows a benefit.", color: "#c9f66f", mark: "M" },
  { name: "Bundle Analysis", category: "Performance", detail: "Examines shipped code to find heavy dependencies and optimization opportunities.", color: "#c9f66f", mark: "▥" },
  { name: "React Query", category: "State & data", detail: "Handles asynchronous server state, caching, refetching and request lifecycle.", color: "#ef7d88", mark: "RQ" },
  { name: "Redux", category: "State & data", detail: "Provides a centralized, predictable model for shared client state.", color: "#b59bf5" },
  { name: "Context API", category: "State & data", detail: "Shares cross-cutting values through a component tree without prop drilling.", color: "#79d6e6", mark: "◉" },
  { name: "Axios", category: "API & integration", detail: "Wraps HTTP requests with reusable configuration and response handling.", color: "#9f9be8", mark: "A" },
  { name: "RESTful APIs", category: "API & integration", detail: "Organizes resource-based client and server communication over HTTP.", color: "#93d8c7", mark: "{ }" },
  { name: "JSON", category: "API & integration", detail: "Represents structured data exchanged between services and user interfaces.", color: "#d5c48d", mark: "{}" },
  { name: "Vite", category: "Build tools", detail: "Provides fast development feedback and optimized frontend builds.", color: "#c9a4ef", mark: "⚡" },
  { name: "Webpack", category: "Build tools", detail: "Bundles application modules and assets for browser delivery.", color: "#8bcae9", mark: "W" },
  { name: "Turbopack", category: "Build tools", detail: "Accelerates the feedback loop for modern Next.js development.", color: "#f4f1e8", mark: "T" },
  { name: "npm", category: "Build tools", detail: "Manages package dependencies and repeatable project scripts.", color: "#e8807c", mark: "npm" },
  { name: "yarn", category: "Build tools", detail: "Manages dependencies and lockfiles for reproducible installs.", color: "#77c4df", mark: "Y" },
  { name: "Git", category: "Workflow", detail: "Tracks changes and supports deliberate branching and collaboration.", color: "#f19a78", mark: "⑂" },
  { name: "GitHub", category: "Workflow", detail: "Hosts repositories and connects code review with collaborative delivery.", color: "#f4f1e8" },
  { name: "CI/CD", category: "Workflow", detail: "Automates checks and deployment steps so releases stay repeatable.", color: "#9bd6a6", mark: "∞" },
  { name: "Postman", category: "Workflow", detail: "Exercises API requests and inspects responses during integration.", color: "#f09d62", mark: "P" },
  { name: "Figma", category: "Workflow", detail: "Translates visual hierarchy and interaction design into implementable UI.", color: "#f2b8a6" },
  { name: "VS Code", category: "Workflow", detail: "Provides a focused environment for editing, debugging and navigating code.", color: "#69bdf0", mark: "VS" },
];

/** Logo-backed technologies only: all of these are shown together on the skills orbit. */
export const orbitSkillNames = [
  "React.js", "Next.js", "TypeScript", "JavaScript (ES6)", "HTML", "CSS",
  "Tailwind CSS", "Bootstrap", "Material UI", "Styled Components",
  "Redux Toolkit", "React Query", "Axios", "Vite", "Webpack", "npm", "yarn",
  "Git", "GitHub", "Postman", "Figma", "VS Code",
] as const;

export const orbitSkills = orbitSkillNames.map((name) => {
  const skill = portfolioSkills.find((entry) => entry.name === name);
  if (!skill) throw new Error(`Missing orbit skill: ${name}`);
  return skill;
});
