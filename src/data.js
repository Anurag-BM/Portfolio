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

export const ARTICLES = [
  {
    id: "ai-agent-testing",
    title: "How I Built an AI Agent That Tests Another AI Agent",
    subtitle: "A QA Engineer's Approach to Testing AI",
    date: "2026",
    readTime: "12 min read",
    tags: ["AI Testing", "LLM Evals", "Automation", "LangSmith", "Claude"],
    summaryIntro: [
      "Everyone's building AI agents. Almost nobody is testing them properly.",
      "I work on a concierge AI that books flights, cabs and hotels, schedules laundry, orders food — real tasks with real customers. Unit tests don't cut it when your agent makes decisions. So how do you test a system that gives different responses every time, makes autonomous decisions, and orchestrates 28+ tools across multi-turn conversations?",
    ],
    summaryHeading: "So I built a framework where AI agents test the AI agent:",
    summaryBullets: [
      "Simulate realistic multi-turn customer conversations",
      "Mock external tools while keeping LLM reasoning real",
      "Pull LangSmith execution traces to verify the agent followed the right process — not just gave the right answer",
      "Auto-sync test cases when the agent's instructions change",
      "Reflects on failures holistically and suggests targeted fixes",
    ],
    summaryClosing: "The QA job isn't going away. It's becoming more interesting.",
    sections: [
      {
        num: "01", title: "The Problem No One Talks About",
        content: [
          { type: "p", text: "Everyone's building AI agents. Very few are testing them properly." },
          { type: "p", text: "I work as a Senior QA engineer on a concierge AI platform that handles real customer requests — booking flights, scheduling laundry pickups, ordering food, finding salons, and more. Our AI agent (\"Jedi\") doesn't just answer questions; it orchestrates multi-step workflows involving tool calls, vendor research, payment collection, task delegation to human operators, and proactive follow-ups." },
          { type: "p", text: "Traditional testing doesn't work here. You can't write a unit test for \"did the agent ask the right follow-up question after the customer changed their mind about business class on turn 7 of a 14-turn conversation?\"" },
          { type: "p", text: "So I built a system where Claude Code agents simulate customers, mock external tools, evaluate the AI's behavior, and even suggest fixes — all orchestrated through a structured loop that runs dozens of test cases in parallel." },
          { type: "p", text: "Here's how it works, and what I learned." },
        ]
      },
      {
        num: "02", title: "The Core Idea: Simulate, Evaluate, Reflect, Improve",
        content: [
          { type: "p", text: "The framework has four phases that run in a loop:" },
          { type: "numbered", num: "1", title: "Simulate", text: "An AI agent plays the role of a customer, sending realistic messages to our production agent turn by turn. Instead of mocking the LLM (which defeats the purpose), I mock the tools — the database lookups, vendor searches, payment APIs. The agent's reasoning stays real; only the external world is simulated." },
          { type: "numbered", num: "2", title: "Evaluate", text: "After simulation, another pass scores the conversation. But here's the key: I don't just check \"did the conversation look okay.\" I pull execution traces from LangSmith to verify which skill files the agent actually loaded, which tools it called and in what order, and whether it followed the correct process. This three-source evaluation (conversation transcript + test criteria + execution trace) catches issues that surface-level review completely misses." },
          { type: "numbered", num: "3", title: "Reflect", text: "Instead of analyzing failures one by one, the system looks at ALL test results holistically. If 5 out of 20 tests failed because the agent didn't load a particular skill file, that's a pattern — not 5 separate bugs. The reflection phase forms hypotheses about root causes and ranks them by impact." },
          { type: "numbered", num: "4", title: "Improve", text: "Based on approved hypotheses, targeted changes are made to the agent's prompts, skills, or tool configurations. Then the affected tests re-run to measure improvement." },
        ]
      },
      {
        num: "03", title: "Every Simulation Leaves a Trace — And That Changes Everything",
        content: [
          { type: "p", text: "This is the part I'm most proud of, because it's what separates this from \"just running the agent and eyeballing the output.\"" },
          { type: "p", text: "Every time Jedi runs — whether in production or during a simulation — LangSmith automatically captures a full execution trace. The trace is tagged with the simulation's session ID, so I can always find it later." },
          { type: "h3", text: "What's inside a trace?" },
          { type: "p", text: "A trace isn't just a log. It's a hierarchical tree of every single operation the agent performed:" },
          { type: "bullet-bold", bold: "Every LLM call", text: " — the full prompt sent to Claude, the full response back, token counts, latency" },
          { type: "bullet-bold", bold: "Every tool call", text: " — think, search_flights, create_payment_request, read_file — with exact inputs, outputs, and timing" },
          { type: "bullet-bold", bold: "Every skill file loaded", text: " — when the agent calls read_file on /skills/vertical/laundry/SKILL.md, that shows up as a child run in the trace" },
          { type: "bullet-bold", bold: "The agent's internal reasoning", text: " — the think tool outputs show why the agent decided to call a specific tool or ask a specific question" },
          { type: "bullet-bold", bold: "Cost and token usage", text: " — per-run token breakdowns so I can track how expensive each simulation turn is" },
          { type: "h3", text: "Why this matters for QA:" },
          { type: "p", text: "Here's a real scenario. I ran a laundry booking simulation. The conversation looked perfect — the agent asked about garments, found vendors, collected the address, scheduled pickup. A human reviewer would mark it as PASS." },
          { type: "p", text: "But the trace told a different story. The agent never loaded persona/SKILL.md — the file that tells it how to maintain conversational tone and personality. It also skipped requirement-gathering/SKILL.md on one turn. The agent happened to produce a good response from its base training, but it wasn't following the process. That's a ticking time bomb — it works until you hit an edge case the training data didn't cover." },
          { type: "insight", text: "Without the trace, I would have called this a pass. With the trace, I caught a skill-loading bug that affected 12 other test cases." },
          { type: "quote", text: "The trace fetch is a hard gate in evaluation. No trace = no score. If the trace isn't found within 4 hours of simulation (LangSmith ingestion can lag), the test is marked BLOCKED, not passed. I never score based on vibes." },
          { type: "h3", text: "Three different failure modes, all visible in traces:" },
          { type: "table", headers: ["Conversation Shows", "Trace Reveals", "Root Cause"], rows: [["Good response", "read_file(laundry/SKILL.md) missing", "Skill Not Loaded — agent improvised"], ["Good response", "Skill loaded, but instructions ignored", "Skill Not Followed — prompt conflict"], ["Wrong response", "Tool returned data, agent didn't use it", "Context Ignored — attention issue"]] },
          { type: "p", text: "These are three completely different bugs requiring three different fixes. Without traces, they all look like \"the agent said the wrong thing.\"" },
          { type: "p", text: "I can also trace production tickets the same way. Every production invocation is tagged with the ticket ID (jedi_invoke_{ticket_id}). When a customer complaint comes in, I pull the trace and see exactly what happened — which skills loaded, which tools were called, where the agent's reasoning went wrong. Same trace infrastructure, same analysis patterns, across simulation and production." },
        ]
      },
      {
        num: "04", title: "What Makes the Simulation Protocol Work",
        content: [
          { type: "h3", text: "Test cases are detailed conversation scripts, not vibes." },
          { type: "p", text: "Each test case defines 8-16 turns of conversation with:" },
          { type: "bullet", text: "Exactly which tools the agent should call on each turn" },
          { type: "bullet", text: "What the mock tool responses should look like" },
          { type: "bullet", text: "Pass criteria (ALL must be met) and fail criteria (ANY one triggers failure)" },
          { type: "bullet", text: "Persona behavior (urgent customer vs. casual vs. detail-oriented)" },
          { type: "p", text: "For example, a flight booking test validates that the agent:" },
          { type: "bullet", text: "Resolves \"this Friday\" to the correct absolute date" },
          { type: "bullet", text: "Calls search_flights with the right parameters" },
          { type: "bullet", text: "Routes booking to the travel desk via complete_handoff (not human_tool)" },
          { type: "bullet", text: "Follows a two-step closure pattern (farewell + scheduled follow-up)" },
          { type: "bullet", text: "Never uses markdown formatting in responses" },
          { type: "h3", text: "The tool mocking protocol is precise." },
          { type: "p", text: "The agent runs in a real CLI with a special \"tool simulation\" mode. When the agent tries to call an external tool, the CLI pauses (exit code 100), the simulation framework generates an appropriate mock response, and the CLI resumes. Some tools are auto-mocked by the CLI itself (session context, user addresses), some run natively (the agent's \"think\" tool), and some require carefully crafted mock responses that match exact return types — recall_memories returns a plain string, not JSON; general_research returns a dict with a vendors array." },
          { type: "p", text: "Getting this wrong means the agent behaves differently than production. Getting it right means 95%+ of agent reasoning is identical to production." },
          { type: "h3", text: "Execution traces don't lie." },
          { type: "p", text: "The biggest insight: an agent can produce a perfectly good response while following a completely wrong process. Maybe it gave correct flight options, but it never loaded the flight booking skill file — it was winging it from training data. That works until it doesn't." },
          { type: "p", text: "By pulling LangSmith traces and checking which read_file calls the agent made, I can verify it actually loaded the right instructions. This is the difference between \"the answer looked fine\" and \"the agent followed the correct process.\"" },
        ]
      },
      {
        num: "05", title: "The Self-Healing Test Suite",
        content: [
          { type: "p", text: "One practical problem with testing AI agents: the agent's behavior is defined by skill files (markdown instructions), and those change frequently. Every time someone updates a skill, the test cases could become stale." },
          { type: "p", text: "I built a sync mechanism that:" },
          { type: "bullet", text: "Detects which skill files changed (via git diff)" },
          { type: "bullet", text: "Maps skill changes to affected test cases (horizontal skill change = update ALL tests; vertical = only that category)" },
          { type: "bullet", text: "Reads the diff to understand what changed" },
          { type: "bullet", text: "Surgically updates only the affected sections of test cases — tool lists, expected actions, validation criteria" },
          { type: "bullet", text: "Preserves everything else (personas, conversation flow, metadata)" },
          { type: "p", text: "This means the test suite stays aligned with the agent's actual instructions without manual maintenance." },
        ]
      },
      {
        num: "06", title: "The Numbers",
        content: [
          { type: "stats", items: [["17+", "Verticals covered (flights, hotels, laundry, food, salons, cabs, courier, real estate, and more)"], ["3", "Test tiers per vertical: happy flow, escalation/failure handling, privacy/special cases"], ["Wave", "Based parallel execution: Multiple test cases run simultaneously, with automatic retry on failure"], ["7", "Category failure taxonomy: From \"process failure\" (hard crash) to \"turn efficiency\" (took too many turns), each with priority ranking"], ["5", "Customer personas: Standard, urgent, detail-oriented, frustrated, casual — each with different abandon thresholds"], ["Full", "Trace coverage: Every simulation produces a LangSmith trace with skill loads, tool sequences, reasoning, and token costs — all queryable and auditable"]] },
        ]
      },
      {
        num: "07", title: "What I Learned as a QA Engineer",
        content: [
          { type: "numbered", num: "1", title: "Test the process, not just the output.", text: "An AI agent can stumble into the right answer. Trace analysis catches this." },
          { type: "numbered", num: "2", title: "Mock tools, not the LLM.", text: "If you mock the language model's responses, you're testing your mocks, not your agent. Let the LLM reason naturally; control only the external world it interacts with." },
          { type: "numbered", num: "3", title: "Traces are your source of truth.", text: "The conversation transcript shows you what the customer saw. The trace shows you what the agent actually did. These are often different stories. Build your evaluation on traces, not transcripts." },
          { type: "numbered", num: "4", title: "Holistic reflection beats case-by-case debugging.", text: "Five tests failing for the same root cause is one bug, not five. Aggregate before you fix." },
          { type: "numbered", num: "5", title: "Test cases are living documents.", text: "If your test suite can't evolve with your agent's instructions, it becomes a maintenance burden that people stop trusting." },
          { type: "numbered", num: "6", title: "AI can test AI — with the right structure.", text: "The key word is \"structure.\" Unstructured \"ask the AI if it did well\" is worthless. A defined protocol with explicit criteria, execution traces, and failure taxonomies turns AI-assisted testing into something rigorous." },
        ]
      },
      {
        num: "08", title: "The Bigger Picture",
        content: [
          { type: "p", text: "QA for AI agents is still an unsolved problem in the industry. Most teams either rely on manual spot-checking, or they test the LLM in isolation (benchmarks, evals) without testing the full agent loop (tools, state management, multi-turn reasoning, process compliance)." },
          { type: "p", text: "This framework sits in between: it tests the complete agent in realistic scenarios with verifiable criteria and trace-level observability. And it uses AI agents to do the heavy lifting of simulation and evaluation — because testing a 14-turn conversation manually across 17 verticals and 3 tiers isn't something any human team can sustain." },
          { type: "p", text: "If you're building AI agents and struggling with quality assurance, the lesson is: treat your agent like a system, not a model. Test the system end-to-end. And invest in observability — because the traces tell you what the conversation transcript won't." },
          { type: "closing", text: "Building AI that tests AI. The QA engineer's job isn't going away — it's evolving." },
        ]
      },
    ],
  },
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
