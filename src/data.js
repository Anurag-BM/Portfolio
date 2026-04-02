// ============================================================
// ✏️  PORTFOLIO DATA — Edit this file to update your portfolio
//     Change any text, add new items, update links etc.
//     After saving, Vercel will auto-deploy the changes.
// ============================================================

export const PROFILE = {
  name: "Anurag B M",
  title: "Senior SDET",
  photo: "https://i.postimg.cc/0y34X3V7/A83FDC90-C0C5-4B54-B9F4-EA84628640D3.jpg",
  email: "anuragmahanthesh69@gmail.com",
  phone: "+91 9035790994",
  linkedin: "https://www.linkedin.com/in/anuragbm/",
  // github: "https://github.com/yourusername",  // Uncomment and add when ready
};

export const HERO = {
  headlineTop: "Because Perfection,",
  headlineBottom: "Deserves Testing.",
  tagline: "I don't just find bugs — I prevent them. From AI agent simulations to hybrid cross-platform frameworks, I build testing strategies that turn unpredictable releases into confident deployments.",
};

export const STATS = [
  { icon: "🛡️", val: "4.5+", label: "Years in QA", color: "rgba(212,137,106,0.15)", border: "rgba(212,137,106,0.3)" },
  { icon: "✅", val: "1000+", label: "Test Cases Automated", color: "rgba(74,222,128,0.12)", border: "rgba(74,222,128,0.25)" },
  { icon: "📱", val: "10+", label: "Products Shipped", color: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.25)" },
];

export const ABOUT = {
  heading: "Passionate about quality & innovation",
  paragraphs: [
    "Hello! I'm Anurag B M, a Senior SDET passionate about building reliable web, mobile, and AI-powered experiences.",
    "My journey in technology began with Electronics & Communication Engineering, and I quickly found my calling in Quality Assurance — where engineering precision meets product impact.",
    "Today, I specialize in automation framework architecture, AI agent testing, and cross-platform test engineering. At Swiggy (Crew), I build simulations to validate JedI — Swiggy's AI agent/model — and architect hybrid frameworks from scratch. Previously at PowerSchool for 4 years, I automated 700+ test cases across UI, API, and mobile, and pioneered AI-driven testing with AI integration.",
    "I actively use AI-powered tools such as Claude, Claude Code, Playwright MCP, and ChatGPT to push the boundaries of what QA automation can achieve.",
  ],
  badgeTags: ["Senior SDET", "AI Testing Specialist", "4.5+ Years Exp"],
  toolCategories: {
    "Core QA Tools": ["TypeScript", "Java", "Python", "Playwright", "Selenium", "Appium", "WebDriverIO", "Rest Assured", "Postman", "Git", "Jira", "SQL"],
    "AI-Powered Tools": ["Claude", "Claude Code", "ChatGPT", "Playwright MCP Agent", "Cursor"],
  },
};

export const EXPERIENCE = [
  {
    title: "Senior SDET",
    company: "Swiggy (Crew)",
    url: "https://www.swiggy.com",
    period: "Dec 2025 - Present",
    location: "Bengaluru, India",
    description: "Ensuring quality for Swiggy's premium lifestyle and travel concierge app — Crew — which blends generative AI with human concierges to deliver personalized assistance for travel, errands, and lifestyle needs.",
    bullets: [
      "Built and executed simulations for JedI AI agent/model testing, validating AI-driven workflows and agent behavior across various scenarios",
      "Conducted Evals of LLM to measure and improve AI response quality, accuracy, and reliability",
      "Created a small LLM model for automation to reply to agent's message in realtime without hardcoding replies",
      "Architected a hybrid automation framework from scratch — combining Playwright + Appium — that runs web and mobile automation in parallel within the same test flow",
      "Covered automation for all the flows which were manual before, bringing down regression time from hours to minutes",
      "Created ephemeral (EPH) test environments and maintained them end-to-end for isolated, reproducible testing",
      "Built Claude Skills that automatically update all test cases as soon as any latest code changes are pushed",
      "Set up repository structure and CI/CD pipeline for the QA automation project",
      "Performed mobile testing using LambdaTest, Android Simulator, and Appium across Android and iOS devices",
    ],
    tags: ["Playwright", "Appium", "TypeScript", "Python", "AI Agent Testing", "Evals", "LLM", "EPH Environments", "CI/CD", "Claude", "iOS", "Android", "LambdaTest"],
  },
  {
    title: "QA Engineer",
    company: "PowerSchool",
    url: "https://www.powerschool.com",
    period: "Aug 2021 - Nov 2025",
    location: "Bengaluru, India",
    description: "Delivered quality across multiple education technology products powering K-12 education in North America. Promoted twice — from Associate QA Engineer 1 to Associate QA Engineer 2, and then to QA Engineer — in recognition of technical leadership and impact. Projects: Data Science – AI Chatbots, LearningNav – ContentNav, Efinanceplus.",
    bullets: [
      "Automated 25+ test cases using AI (Playwright/MCP Agent), reducing manual coding effort",
      "Automated 70+ test cases using Selenium Java and 30+ using WebDriverIO",
      "Built an AI-Driven API Validation Framework with multilingual support — validating responses in 16 international languages using ChatGPT",
      "Built RAG LLM based validation to measure and improve AI response quality and accuracy",
      "Conducted performance and load testing using WebDriverIO for high-traffic scenarios",
      "Performed manual and database testing on 250+ assessments with zero regression in production",
      "Automated 60+ APIs using Rest Assured (Java) and WebDriverIO",
      "Set up repository structure and CI/CD pipelines for automation projects",
      "Worked with the Data Science team on testing AI model applications and chatbots",
      "Worked on AWS Step Functions and Lambda Functions",
      "Refactored automation code reducing overall suite runtime by 10%",
    ],
    tags: ["Selenium", "Java", "WebDriverIO", "TypeScript", "Rest Assured", "Playwright", "AWS", "SQL", "Postman", "Jira", "CI/CD", "RAG LLM"],
  },
];

export const ACHIEVEMENTS = [
  { icon: "🚀", title: "MAD — Made A Difference", from: "Swiggy" },
  { icon: "🏆", title: "Best Employee of the Quarter", from: "Vice President of QA, PowerSchool" },
  { icon: "⭐", title: "Top Power Scorer in QA", from: "CTO, PowerSchool" },
  { icon: "🤖", title: "Implementing AI in Automation", from: "Director of QA, PowerSchool" },
];

export const EDUCATION = [
  { num: "01", icon: "🎓", title: "Bachelor of Engineering", sub: "Electronics & Communication Engineering", location: "M V J College of Engineering, Bengaluru", tags: ["2017 – 2021", "VTU"] },
  { num: "02", icon: "📖", title: "Pre-University (Secondary)", sub: "PCMC", location: "Vaishnavi Chetana PU College", tags: ["2015 – 2017"] },
];

export const SKILLS = [
  { icon: "🧪", title: "Testing Methodologies", items: ["Full Stack QA", "AI-Driven Automation & Testing", "EVALS", "Gen AI Integration", "Functional Testing", "Backend Testing", "Frontend Testing", "Regression Testing", "Smoke & Sanity", "Exploratory Testing", "Integration Testing", "Database Testing", "Accessibility Testing"] },
  { icon: "📱", title: "Mobile QA", items: ["Appium", "Android Testing", "iOS Testing", "Cross-Platform Testing", "Hybrid Framework"] },
  { icon: "🤖", title: "AI & Innovation", items: ["JedI AI Agent Testing", "Evals of LLM", "RAG LLM", "Playwright MCP Agent", "ChatGPT API Integration", "AI Chatbot Testing", "Simulation Testing", "Claude Skills"] },
  { icon: "🔗", title: "API & Performance", items: ["Postman", "REST API Testing", "Rest Assured", "Performance Testing", "Load Testing"] },
  { icon: "⚙️", title: "Automation Frameworks", items: ["Playwright", "Selenium", "WebDriverIO", "Appium", "Rest Assured", "GenC Framework"] },
  { icon: "🛠️", title: "Tools & Management", items: ["Jira", "Git", "SourceTree", "VS Code", "IntelliJ", "AWS", "Agile/Scrum", "Android Simulator", "LambdaTest", "Cursor"] },
];

export const TERMINAL_LINES = [
  { text: "$ npm run test:suite", color: "#ccc", delay: 0 },
  { text: "Running test suites...", color: "#555", delay: 600 },
  { text: "", color: "", delay: 900 },
  { text: "PASS  e2e/crew-agent.spec.ts", color: "#4ade80", delay: 1200 },
  { text: "PASS  api/jedi-validation.spec.ts", color: "#4ade80", delay: 1500 },
  { text: "PASS  mobile/appium-hybrid.spec.ts", color: "#4ade80", delay: 1800 },
  { text: "", color: "", delay: 2100 },
  { text: "Tests: 247 passed, 0 failed", color: "#4ade80", delay: 2400 },
  { text: "Coverage: 98.2%", color: "#aaa", delay: 2700 },
];
