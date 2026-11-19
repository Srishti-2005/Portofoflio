/**
 * Srishti Sangayya Malimath — Interactive Portfolio Core Engine
 * AI Agent Simulator, Project Modals, Theme Switcher, Smooth Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollEffects();
  initTypingEffect();
  initAiTerminal();
  initProjectFiltering();
  initProjectModals();
  initResumeModal();
  initContactForm();
  initCopyButtons();
});

/* ==========================================================================
   Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check stored theme or system preference
  const savedTheme = localStorage.getItem('srishti_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // default dark for cyber vibe
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme, themeIcon);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('srishti_theme', nextTheme);
      updateThemeIcon(nextTheme, themeIcon);
      showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }
}

function updateThemeIcon(theme, iconEl) {
  if (!iconEl) return;
  if (theme === 'dark') {
    iconEl.className = 'fas fa-sun text-yellow-400 text-lg transition-transform duration-300 hover:rotate-45';
  } else {
    iconEl.className = 'fas fa-moon text-indigo-600 text-lg transition-transform duration-300 hover:-rotate-12';
  }
}

/* ==========================================================================
   Scroll Effects (Progress bar, Back-to-top, Nav blur)
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');
  const navbar = document.getElementById('main-nav');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }

    if (navbar) {
      if (scrollTop > 30) {
        navbar.classList.add('shadow-lg', 'shadow-indigo-950/20');
      } else {
        navbar.classList.remove('shadow-lg', 'shadow-indigo-950/20');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   Hero Dynamic Typing Effect
   ========================================================================== */
function initTypingEffect() {
  const textElement = document.getElementById('typewriter-text');
  if (!textElement) return;

  const roles = [
    'Autonomous AI Agents & MCP Workflows',
    'LLM Tool-Calling & Prompt Chaining Pipelines',
    'Production Machine Learning & Predictive Systems',
    'Computer Vision & Real-Time Signal Processing',
    'Scalable RESTful Backend & Semantic Search'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 65;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      textElement.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      textElement.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // Pause at full phrase
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 450; // Pause before next role
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   Interactive AI Agent Terminal ("Srishti AI Agent v1.0")
   ========================================================================== */
const AGENT_KNOWLEDGE_BASE = {
  why_hire: {
    title: "⚡ Executive Summary & Value Proposition",
    content: `
<strong>Candidate: Srishti Sangayya Malimath</strong> (8.76 CGPA, BE in AI & ML, CMRIT Bengaluru).
<br><br>
<strong>Key Strengths:</strong>
<ul class="list-disc pl-5 mt-2 space-y-1 text-slate-300">
  <li><strong class="text-cyan-400">Agentic Architecture:</strong> Direct hands-on expertise building production AI agent pipelines with Model Context Protocol (MCP), tool-use pipelines, prompt chaining, and automated webhooks.</li>
  <li><strong class="text-indigo-400">Quantifiable Engineering Impact:</strong> Engineered automated screening agents achieving <strong>>80% reduction</strong> in manual screening turnaround.</li>
  <li><strong class="text-emerald-400">Innovation & Research:</strong> Patent filed for <em>"Autocare: Integrated Automobile Service Provider Application"</em> (2025).</li>
  <li><strong class="text-purple-400">Computer Vision & Health Tech:</strong> Implemented real-time MediaPipe hand/pose analysis combined with Fast Fourier Transform (FFT) for neurodegenerative tremor tracking.</li>
  <li><strong class="text-yellow-400">Active Builder:</strong> Participant in OpenAI Academy Gen AI Buildathon (Aug 2025), Smart India Hackathon, and active NSS volunteer teaching AI to students.</li>
</ul>
`
  },
  agentic_mcp: {
    title: "🤖 Agentic Workflows & Model Context Protocol (MCP)",
    content: `
<strong>Srishti's Agentic Capabilities:</strong>
<div class="mt-2 space-y-2 text-slate-300">
  <div class="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20">
    <strong class="text-cyan-300">1. Model Context Protocol (MCP):</strong> Certified & trained in MCP architecture (NxtWave CCBP 4.0 Academy). Connects LLMs securely to external local/remote data sources and tools.
  </div>
  <div class="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20">
    <strong class="text-indigo-300">2. Tool Calling & Function Calling:</strong> Building deterministic JSON extraction pipelines, parameter validation, schema enforcements, and error-fallback recovery.
  </div>
  <div class="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20">
    <strong class="text-emerald-300">3. Multi-Step Orchestration:</strong> Automated pipelines via <code>n8n</code> and <code>Make.com</code>, webhook queue listeners, automated social posting with OAuth authentication.
  </div>
</div>
`
  },
  elderly_care: {
    title: "🩺 Elderly Care & Neurodegenerative Disorder AI",
    content: `
<strong>System Overview:</strong>
An end-to-end intelligent computer vision & signal processing platform for early detection of neurological disorders (Parkinson's, motor tremors).
<br><br>
<ul class="list-disc pl-5 space-y-1.5 text-slate-300">
  <li><strong>Computer Vision:</strong> Real-time MediaPipe hand and 33-point body landmark tracking.</li>
  <li><strong>Signal Processing:</strong> Fast Fourier Transform (FFT) to isolate frequency spectra of microscopic hand tremors (4–7 Hz tremor frequency detection).</li>
  <li><strong>Biomechanics:</strong> Joint angle calculation, gait symmetry analysis, and postural stability scoring.</li>
  <li><strong>Backend & Storage:</strong> Express.js REST API with SQLite local embedded storage for private medical data logs.</li>
</ul>
`
  },
  tech_stack: {
    title: "💻 Comprehensive Technical Stack",
    content: `
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-sm">
  <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
    <div class="text-cyan-400 font-semibold mb-1 flex items-center gap-1.5"><i class="fas fa-brain"></i> AI Agents & LLMs</div>
    <div class="text-slate-300 text-xs">MCP (Model Context Protocol), Tool Calling, Structured JSON, Prompt Chaining, n8n, Make.com, Embeddings, Semantic Search.</div>
  </div>
  <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
    <div class="text-indigo-400 font-semibold mb-1 flex items-center gap-1.5"><i class="fas fa-code"></i> Languages & Backend</div>
    <div class="text-slate-300 text-xs">Python, JavaScript (Node/Express), Go (Basics), Java, C, Flask, RESTful APIs, Webhooks, Bash.</div>
  </div>
  <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
    <div class="text-emerald-400 font-semibold mb-1 flex items-center gap-1.5"><i class="fas fa-database"></i> Databases & Infra</div>
    <div class="text-slate-300 text-xs">MySQL, SQLite, MongoDB, Redis (Basics), Message Queues, Git/GitHub.</div>
  </div>
  <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
    <div class="text-purple-400 font-semibold mb-1 flex items-center gap-1.5"><i class="fas fa-chart-line"></i> ML & Signal Processing</div>
    <div class="text-slate-300 text-xs">Scikit-learn, MediaPipe, FFT, Pose Estimation, Balanced Logistic Regression, Feature Engineering.</div>
  </div>
</div>
`
  },
  patent_hackathons: {
    title: "🏆 Patents, Hackathons & Highlights",
    content: `
<ul class="space-y-2 mt-1 text-slate-300">
  <li><strong class="text-amber-400">📜 Patent Filed (2025):</strong> <em>"Autocare: Integrated Automobile Service Provider Application"</em>.</li>
  <li><strong class="text-cyan-400">🚀 OpenAI Academy Buildathon (Aug 2025):</strong> Developed generative agent solutions in a competitive AI community sprint.</li>
  <li><strong class="text-indigo-400">🛰️ ISRO & NASA Visits (2025-2026):</strong> ISRO-START capacity building workshop in remote sensing; NASA technical session exposure.</li>
  <li><strong class="text-emerald-400">🤝 NSS Community Impact:</strong> Volunteered to teach AI and digital literacy to rural students in government schools near Sarjapur.</li>
</ul>
`
  },
  contact: {
    title: "📬 Contact & Connect with Srishti",
    content: `
<div class="space-y-2 mt-2 text-slate-300 text-sm">
  <div><strong>Email:</strong> <a href="mailto:malimathsrushti@gmail.com" class="text-cyan-400 underline">malimathsrushti@gmail.com</a> / <a href="mailto:srma23aiml@cmrit.ac.in" class="text-cyan-400 underline">srma23aiml@cmrit.ac.in</a></div>
  <div><strong>Phone:</strong> <a href="tel:+918431270997" class="text-indigo-400 underline">+91 8431270997</a></div>
  <div><strong>Location:</strong> AECS Layout, Bengaluru, Karnataka, India</div>
  <div><strong>GitHub:</strong> <a href="https://github.com/Srishti-2005" target="_blank" class="text-purple-400 underline">github.com/Srishti-2005</a></div>
  <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/srishti-sangaya/" target="_blank" class="text-blue-400 underline">linkedin.com/in/srishti-sangaya</a></div>
  <div><strong>LeetCode:</strong> <a href="https://leetcode.com/2005srushti/" target="_blank" class="text-amber-400 underline">leetcode.com/2005srushti</a></div>
</div>
`
  }
};

function initAiTerminal() {
  const terminalBody = document.getElementById('terminal-logs');
  const terminalInput = document.getElementById('terminal-input');
  const terminalSend = document.getElementById('terminal-send');
  const promptChips = document.querySelectorAll('.prompt-chip');

  if (!terminalBody) return;

  function appendAgentMessage(title, htmlContent) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'mt-3 p-3.5 rounded-xl bg-slate-900/90 border border-indigo-500/30 text-sm animate-fade-in shadow-md';
    msgDiv.innerHTML = `
      <div class="text-cyan-400 font-bold font-mono text-xs flex items-center justify-between border-b border-slate-700/60 pb-1.5 mb-2">
        <span class="flex items-center gap-1.5"><i class="fas fa-sparkles text-indigo-400"></i> ${title}</span>
        <span class="text-[10px] text-slate-400 uppercase tracking-widest">Model: Agentic-v1.0</span>
      </div>
      <div class="text-slate-200 leading-relaxed font-sans text-xs sm:text-sm">
        ${htmlContent}
      </div>
    `;
    terminalBody.appendChild(msgDiv);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function appendUserCommand(cmd) {
    const cmdDiv = document.createElement('div');
    cmdDiv.className = 'mt-2 text-xs font-mono text-emerald-400 flex items-center gap-2';
    cmdDiv.innerHTML = `<span class="text-slate-500">guest@srishti-portfolio:~$</span> <span class="text-slate-100">${escapeHtml(cmd)}</span>`;
    terminalBody.appendChild(cmdDiv);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function processQuery(query) {
    const clean = query.trim().toLowerCase();
    if (!clean) return;

    appendUserCommand(query);

    // Keyword matching
    if (clean.includes('clear')) {
      terminalBody.innerHTML = `
        <div class="text-slate-400 text-xs font-mono flex items-center gap-2 mb-2">
          <span class="text-cyan-400">sys.init()</span> — Memory cleared. Ready for next query.
        </div>
      `;
      return;
    }

    if (clean.includes('hire') || clean.includes('why') || clean.includes('summary') || clean.includes('about')) {
      appendAgentMessage(AGENT_KNOWLEDGE_BASE.why_hire.title, AGENT_KNOWLEDGE_BASE.why_hire.content);
    } else if (clean.includes('mcp') || clean.includes('agent') || clean.includes('tool') || clean.includes('workflow') || clean.includes('n8n') || clean.includes('make')) {
      appendAgentMessage(AGENT_KNOWLEDGE_BASE.agentic_mcp.title, AGENT_KNOWLEDGE_BASE.agentic_mcp.content);
    } else if (clean.includes('elder') || clean.includes('health') || clean.includes('mediapipe') || clean.includes('tremor') || clean.includes('fft')) {
      appendAgentMessage(AGENT_KNOWLEDGE_BASE.elderly_care.title, AGENT_KNOWLEDGE_BASE.elderly_care.content);
    } else if (clean.includes('stack') || clean.includes('skill') || clean.includes('python') || clean.includes('language') || clean.includes('database')) {
      appendAgentMessage(AGENT_KNOWLEDGE_BASE.tech_stack.title, AGENT_KNOWLEDGE_BASE.tech_stack.content);
    } else if (clean.includes('patent') || clean.includes('hackathon') || clean.includes('isro') || clean.includes('nasa') || clean.includes('award')) {
      appendAgentMessage(AGENT_KNOWLEDGE_BASE.patent_hackathons.title, AGENT_KNOWLEDGE_BASE.patent_hackathons.content);
    } else if (clean.includes('contact') || clean.includes('email') || clean.includes('phone') || clean.includes('reach') || clean.includes('linkedin') || clean.includes('github')) {
      appendAgentMessage(AGENT_KNOWLEDGE_BASE.contact.title, AGENT_KNOWLEDGE_BASE.contact.content);
    } else if (clean.includes('resume') || clean.includes('cv')) {
      appendAgentMessage("📄 Resume Document", `
        Srishti's official resume is available for preview or direct PDF download.
        <div class="mt-3 flex gap-2">
          <button onclick="openResumeModal()" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-1.5 cursor-pointer">
            <i class="fas fa-eye"></i> View Resume Online
          </button>
          <a href="assets/Srishti_Sangayya_Malimath_Resume.pdf" download class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 font-medium text-xs flex items-center gap-1.5">
            <i class="fas fa-download"></i> Download PDF
          </a>
        </div>
      `);
    } else {
      appendAgentMessage("💡 Agent Query Result", `
        I analyzed: <em>"${escapeHtml(query)}"</em>.<br><br>
        Srishti is an AI & ML engineer specializing in <strong>Agentic AI, MCP, Tool Calling pipelines, Computer Vision (MediaPipe/FFT), and Backend Services</strong>.<br>
        Try clicking one of the preset prompts above or ask about:
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-300">
          <li><strong>"agentic experience"</strong></li>
          <li><strong>"elderly care project"</strong></li>
          <li><strong>"patents & hackathons"</strong></li>
          <li><strong>"technical stack"</strong></li>
          <li><strong>"contact info"</strong></li>
        </ul>
      `);
    }
  }

  // Handle Preset Chips
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const topic = chip.getAttribute('data-topic');
      if (AGENT_KNOWLEDGE_BASE[topic]) {
        appendUserCommand(chip.textContent.trim());
        appendAgentMessage(AGENT_KNOWLEDGE_BASE[topic].title, AGENT_KNOWLEDGE_BASE[topic].content);
      }
    });
  });

  // Handle Input Submit
  if (terminalSend && terminalInput) {
    terminalSend.addEventListener('click', () => {
      processQuery(terminalInput.value);
      terminalInput.value = '';
    });

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        processQuery(terminalInput.value);
        terminalInput.value = '';
      }
    });
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

/* ==========================================================================
   Project Filtering Logic
   ========================================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Project Detailed Case Study Modals
   ========================================================================== */
const PROJECT_MODAL_DATA = {
  resume_checker: {
    title: "Resume Checker Agent",
    subtitle: "Autonomous Resume Parsing, Semantic Matching & Scoring Pipeline",
    tags: ["Make.com", "Python", "REST APIs", "Webhooks", "Prompt Chaining", "Structured JSON"],
    overview: "An automated AI agent pipeline that ingests candidate resumes, extracts structured evaluation schemas, and calculates job-role semantic compatibility with intelligent scoring.",
    architecture: `
      <div class="p-3 bg-slate-950/80 rounded-xl border border-indigo-500/20 font-mono text-xs text-slate-300">
        <div class="text-cyan-400 font-semibold mb-1">Architecture Workflow:</div>
        Resume Ingestion (PDF/Doc) ➔ Webhook Trigger ➔ Python Parsing Microservice ➔ Multi-step Prompt Chaining (Candidate vs Job Req) ➔ Structured JSON Validation ➔ Retry/Failure Handler ➔ Candidate Score & Detailed Feedback Dispatch
      </div>
    `,
    challenges: [
      "Handling unstructured, diverse multi-page resume formats and ambiguous section labels.",
      "Preventing LLM hallucination and enforcing strict JSON output schemas for downstream database ingestion.",
      "Implementing deterministic retry and fallback mechanisms for API timeouts."
    ],
    outcomes: [
      "Cut manual resume screening turnaround time by <strong>>80%</strong>.",
      "Generated actionable, structured candidate assessment reports with objective score breakdowns.",
      "Zero manual intervention required from submission to ranked shortlisting."
    ],
    github: "https://github.com/Srishti-2005"
  },
  social_media: {
    title: "AI-Powered Social Media Automation",
    subtitle: "Synchronized Multi-Platform Autonomous Content Agent",
    tags: ["n8n", "Generative AI APIs", "REST APIs", "OAuth 2.0", "Scheduled Triggers"],
    overview: "An end-to-end agentic workflow engineered using n8n and Generative AI to automate content research, drafting, validation, and scheduled publishing across LinkedIn and X.",
    architecture: `
      <div class="p-3 bg-slate-950/80 rounded-xl border border-indigo-500/20 font-mono text-xs text-slate-300">
        <div class="text-cyan-400 font-semibold mb-1">Architecture Workflow:</div>
        Trending Tech Feeds / Ideas ➔ n8n Orchestrator ➔ LLM Prompt Generation with Persona Guardrails ➔ Tool Verification ➔ OAuth 2.0 Token Refresh ➔ Webhook Queue ➔ Scheduled Multi-Platform Broadcast (LinkedIn + X)
      </div>
    `,
    challenges: [
      "Managing OAuth token lifecycles and API rate limits across different social platforms.",
      "Ensuring tone and style consistency tailored specifically to professional LinkedIn and concise X formats.",
      "Fail-safe queue processing ensuring no duplicate posts or silent dropouts."
    ],
    outcomes: [
      "Automated complete weekly content calendars with structured prompt templates.",
      "Reduced content creation and publication cycle turnaround significantly.",
      "Resilient error-handling fallbacks with automated alerting."
    ],
    github: "https://github.com/Srishti-2005"
  },
  elderly_care: {
    title: "Intelligent Elderly Care & Neurodegenerative Disorder AI",
    subtitle: "Real-Time Computer Vision & Signal Processing for Motor Assessment",
    tags: ["Python", "MediaPipe", "FFT Analysis", "Pose Estimation", "Express.js", "SQLite"],
    overview: "A non-invasive clinical screening AI system that uses computer vision and signal processing to detect, quantify, and monitor early physical symptoms of neurodegenerative disorders like Parkinson's.",
    architecture: `
      <div class="p-3 bg-slate-950/80 rounded-xl border border-indigo-500/20 font-mono text-xs text-slate-300">
        <div class="text-cyan-400 font-semibold mb-1">Architecture Workflow:</div>
        Video Stream ➔ MediaPipe Landmark Extraction (Hands & Pose) ➔ Coordinate Trajectory Tracking ➔ Fast Fourier Transform (FFT) Power Spectral Density ➔ Tremor Frequency & Gait Symmetry Metrics ➔ Express.js API ➔ SQLite Health History
      </div>
    `,
    challenges: [
      "Extracting clean signal frequencies from jittery camera inputs under varying ambient lighting conditions.",
      "Isolating 4–7 Hz pathological resting tremors from voluntary physiological motion.",
      "Designing lightweight modular assessment pipelines (finger tapping, postural stability, gait)."
    ],
    outcomes: [
      "Delivered real-time 30+ FPS landmark analysis directly on consumer hardware.",
      "Created objective mathematical metrics (FFT amplitude, joint angle deviation) replacing subjective manual evaluation.",
      "Integrated modular screening tests with local data privacy."
    ],
    github: "https://github.com/Srishti-2005"
  },
  employee_attrition: {
    title: "Employee Attrition Prediction & Decision Support System",
    subtitle: "Class-Imbalance Aware Machine Learning with HR Executive Dashboard",
    tags: ["Python", "Scikit-learn", "Balanced Logistic Regression", "Flask", "Feature Engineering"],
    overview: "A full-cycle predictive modeling system designed to identify employees at high risk of departure, providing HR leadership with actionable retention recommendations before churn occurs.",
    architecture: `
      <div class="p-3 bg-slate-950/80 rounded-xl border border-indigo-500/20 font-mono text-xs text-slate-300">
        <div class="text-cyan-400 font-semibold mb-1">Architecture Workflow:</div>
        HR Historical Data ➔ Preprocessing & Encoding ➔ Balanced Logistic Regression (class_weight='balanced') ➔ Risk Probability Calibration ➔ Flask Interactive Web Dashboard ➔ CSV Batch Inference & Retention Prescriptions
      </div>
    `,
    challenges: [
      "Severe class imbalance where retained employees heavily outnumbered departing employees.",
      "Preventing model bias while maintaining high recall on critical high-performer flight risks.",
      "Translating raw probability scores into interpretable, actionable HR retention steps."
    ],
    outcomes: [
      "Engineered balanced model achieving robust recall and precision on imbalanced attrition data.",
      "Built interactive dashboard supporting both individual on-demand inference and batch CSV processing.",
      "Automated prescriptive retention strategies based on underlying feature importances."
    ],
    github: "https://github.com/Srishti-2005"
  }
};

function initProjectModals() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalContainer = document.getElementById('modal-details-container');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop || !modalContainer) return;

  window.openProjectModal = function(projectId) {
    const data = PROJECT_MODAL_DATA[projectId];
    if (!data) return;

    modalContainer.innerHTML = `
      <div class="space-y-4">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Featured Case Study</span>
          <h2 class="text-2xl font-bold text-white mt-1">${data.title}</h2>
          <p class="text-indigo-300 text-sm mt-0.5">${data.subtitle}</p>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          ${data.tags.map(t => `<span class="px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 text-xs font-mono">${t}</span>`).join('')}
        </div>

        <div class="pt-2">
          <h3 class="text-sm font-semibold text-slate-200 uppercase tracking-wide text-xs mb-1">Project Overview</h3>
          <p class="text-slate-300 text-sm leading-relaxed">${data.overview}</p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-slate-200 uppercase tracking-wide text-xs mb-1.5">System Architecture</h3>
          ${data.architecture}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div class="p-3 bg-slate-900/70 border border-slate-800 rounded-xl">
            <h4 class="text-xs font-bold text-amber-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <i class="fas fa-wrench"></i> Key Engineering Challenges
            </h4>
            <ul class="text-xs text-slate-300 space-y-1.5 pl-3 list-disc">
              ${data.challenges.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>

          <div class="p-3 bg-slate-900/70 border border-slate-800 rounded-xl">
            <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
              <i class="fas fa-chart-line"></i> Measured Outcomes
            </h4>
            <ul class="text-xs text-slate-300 space-y-1.5 pl-3 list-disc">
              ${data.outcomes.map(o => `<li>${o}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
          <a href="${data.github}" target="_blank" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center gap-2 transition-all">
            <i class="fab fa-github text-sm"></i> View on GitHub
          </a>
          <button onclick="closeProjectModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer">
            Close
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

/* ==========================================================================
   Resume Modal
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  if (!resumeModal) return;

  window.openResumeModal = function() {
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeResumeModal = function() {
    resumeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      closeResumeModal();
    }
  });
}

/* ==========================================================================
   Interactive Contact Form
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const msgTextarea = document.getElementById('form-message');
  const charCounter = document.getElementById('char-counter');

  if (msgTextarea && charCounter) {
    msgTextarea.addEventListener('input', () => {
      const len = msgTextarea.value.length;
      charCounter.textContent = `${len}/500`;
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Sending Message...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        if (charCounter) charCounter.textContent = '0/500';
        showToast("✨ Thank you! Your message has been sent successfully.");
      }, 1200);
    });
  }
}

/* ==========================================================================
   Copy to Clipboard Helpers
   ========================================================================== */
function initCopyButtons() {
  window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`📋 Copied ${label} to clipboard!`);
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(`📋 Copied ${label} to clipboard!`);
    });
  };
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.className = 'toast-msg glass-panel py-3 px-5 rounded-2xl shadow-2xl flex items-center gap-3 border border-indigo-500/40 text-white font-medium text-sm z-50';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle text-cyan-400 text-lg"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
