import streamlit as st
import streamlit.components.v1 as components
import os
import base64

# ==============================================================================
# Page Configuration
# ==============================================================================
st.set_page_config(
    page_title="Srishti Sangayya Malimath | AI & ML Engineer",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Styling for Sleek Cyber-Aesthetic
st.markdown("""
<style>
    /* Global styles */
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Plus Jakarta Sans', sans-serif;
    }
    
    code, pre {
        font-family: 'JetBrains Mono', monospace !important;
    }

    /* Metric Cards */
    div[data-testid="stMetric"] {
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(99, 102, 241, 0.25);
        padding: 14px 18px;
        border-radius: 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    div[data-testid="stMetricValue"] {
        font-weight: 800;
        color: #38bdf8;
    }

    /* Gradient header text */
    .hero-title {
        font-size: 2.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1.2;
    }

    .status-badge {
        display: inline-block;
        padding: 4px 12px;
        background: rgba(16, 185, 129, 0.15);
        border: 1px solid rgba(16, 185, 129, 0.4);
        color: #34d399;
        border-radius: 9999px;
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 12px;
    }

    .project-card {
        background: rgba(15, 23, 42, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 18px;
        padding: 20px;
        margin-bottom: 18px;
        transition: all 0.2s ease-in-out;
    }
    .project-card:hover {
        border-color: rgba(99, 102, 241, 0.5);
        background: rgba(30, 41, 59, 0.6);
    }

    .badge-pill {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 8px;
        background: rgba(99, 102, 241, 0.15);
        border: 1px solid rgba(99, 102, 241, 0.3);
        color: #c7d2fe;
        font-size: 0.75rem;
        font-family: 'JetBrains Mono', monospace;
        margin-right: 6px;
        margin-bottom: 6px;
    }

    .patent-box {
        background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(234, 88, 12, 0.1) 100%);
        border: 1px solid rgba(245, 158, 11, 0.35);
        border-radius: 18px;
        padding: 18px;
    }
</style>
""", unsafe_allow_html=True)

# Helper function to read resume PDF bytes
@st.cache_data
def get_resume_bytes():
    resume_path = os.path.join("assets", "Srishti_Sangayya_Malimath_Resume.pdf")
    if os.path.exists(resume_path):
        with open(resume_path, "rb") as f:
            return f.read()
    return None

resume_data = get_resume_bytes()

# ==============================================================================
# Sidebar Profile & Navigation
# ==============================================================================
with st.sidebar:
    # Profile Photo
    profile_img_path = os.path.join("assets", "srishti.jpg")
    if os.path.exists(profile_img_path):
        st.image(profile_img_path, width=200, caption="Srishti Sangayya Malimath")
    
    st.markdown("### **Srishti S. Malimath**")
    st.caption("AI & ML Engineering Undergraduate | CMRIT Bengaluru")
    st.markdown("🎯 **Goal:** Software Engineer Intern (AI Products)")
    
    st.divider()

    # Navigation Menu
    nav_option = st.radio(
        "Explore Sections:",
        [
            "🏠 Overview & Bio",
            "🤖 AI Agent Simulator",
            "🚀 Featured Projects",
            "🛠️ Technical Stack",
            "🏆 Patents & Milestones",
            "📄 Official Resume PDF",
            "🌐 Full Interactive Web View"
        ],
        index=0
    )

    st.divider()

    # Quick Connect Links
    st.markdown("#### 🔗 Connect")
    st.markdown("""
    - 📧 [malimathsrushti@gmail.com](mailto:malimathsrushti@gmail.com)
    - 💼 [LinkedIn Profile](https://www.linkedin.com/in/srishti-sangaya/)
    - 🐙 [GitHub: Srishti-2005](https://github.com/Srishti-2005)
    - ⚡ [LeetCode: 2005srushti](https://leetcode.com/2005srushti/)
    - 📍 Bengaluru, Karnataka, India
    """)

    if resume_data:
        st.download_button(
            label="📥 Download Official Resume (PDF)",
            data=resume_data,
            file_name="Srishti_Sangayya_Malimath_Resume.pdf",
            mime="application/pdf",
            use_container_width=True
        )

# ==============================================================================
# SECTION 1: Overview & Bio
# ==============================================================================
if nav_option == "🏠 Overview & Bio":
    st.markdown('<div class="status-badge">🟢 Available for Software Engineer Intern (AI Products)</div>', unsafe_allow_html=True)
    st.markdown('<div class="hero-title">Srishti Sangayya Malimath</div>', unsafe_allow_html=True)
    st.markdown("#### **Artificial Intelligence & Machine Learning Engineer**")
    st.write(
        "Undergraduate at **CMR Institute of Technology, Bengaluru** (**8.76 CGPA**). "
        "Experienced in architecting autonomous AI agents, LLM tool-calling pipelines, Model Context Protocol (MCP) integrations, "
        "and computer-vision healthcare solutions."
    )

    # Key Stat Metrics
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        st.metric(label="Degree CGPA", value="8.76", delta="Pursuing (2027)")
    with col2:
        st.metric(label="Patent Filed", value="1 (Autocare)", delta="2025")
    with col3:
        st.metric(label="Screening Latency", value=">80% Cut", delta="AI Resume Agent")
    with col4:
        st.metric(label="OpenAI Community", value="Gen AI", delta="Buildathon '25")

    st.divider()

    # Narrative Summary
    col_bio, col_edu = st.columns([3, 2])
    with col_bio:
        st.subheader("💡 About Me & Vision")
        st.write(
            """
            I build end-to-end intelligent systems that bridge cutting-edge generative AI research with reliable production engineering:
            
            - **Autonomous Agent Systems:** Designing multi-step prompt chains, function-calling workflows, and schema-enforced JSON pipelines using tools like n8n, Make.com, and the Model Context Protocol (MCP).
            - **Signal Processing & Health Tech:** Developed clinical-grade computer vision applications isolating micro-tremor frequencies (4–7 Hz) via MediaPipe and Fast Fourier Transform (FFT).
            - **Resilient Backend Services:** Building scalable RESTful microservices in Python (Flask/FastAPI) and Express.js, with webhook-driven architectures and relational/NoSQL datastores.
            """
        )

        # Patent Highlight Card
        st.markdown("""
        <div class="patent-box">
            <span style="font-size: 0.8rem; font-weight: 700; color: #fbbf24; text-transform: uppercase;">📜 Official Patent Filed (2025)</span>
            <h4 style="margin: 6px 0; color: white;">Autocare: Integrated Automobile Service Provider Application</h4>
            <p style="font-size: 0.85rem; color: #fde68a; margin: 0;">
                Invented a centralized multi-service digital architecture synchronizing vehicle diagnostics, authorized service stations, and automated emergency roadside support.
            </p>
        </div>
        """, unsafe_allow_html=True)

    with col_edu:
        st.subheader("🎓 Education")
        with st.container(border=True):
            st.markdown("**B.E. — Artificial Intelligence & Machine Learning**")
            st.caption("CMR Institute of Technology, AECS Layout, Bengaluru")
            st.markdown("🎯 **8.76 CGPA** • Batch 2023 – 2027")

        with st.container(border=True):
            st.markdown("**Pre-University Course (Science)**")
            st.caption("Morarji Desai Residential PU College, Mennabettu")
            st.markdown("🎯 **95.66%** • 2023")

        with st.container(border=True):
            st.markdown("**Secondary School (SSLC)**")
            st.caption("Morarji Desai Residential School, Kuttinhopadavu")
            st.markdown("🎯 **92.8%** • 2021")

# ==============================================================================
# SECTION 2: Interactive AI Agent Simulator
# ==============================================================================
elif nav_option == "🤖 AI Agent Simulator":
    st.subheader("🤖 Srishti AI Agent Simulator (v1.0)")
    st.caption("Interact with an AI agent powered by Srishti's engineering profile, projects, and research knowledge base.")

    # Preset Quick Prompt Buttons
    st.write("💡 **Quick Queries:**")
    preset_cols = st.columns(4)
    
    preset_clicked = None
    with preset_cols[0]:
        if st.button("⚡ Why hire Srishti?", use_container_width=True):
            preset_clicked = "why_hire"
    with preset_cols[1]:
        if st.button("🤖 Agentic & MCP Workflows", use_container_width=True):
            preset_clicked = "agentic_mcp"
    with preset_cols[2]:
        if st.button("🩺 Elderly Care Tremor AI", use_container_width=True):
            preset_clicked = "elderly_care"
    with preset_cols[3]:
        if st.button("🏆 Autocare Patent & Sprints", use_container_width=True):
            preset_clicked = "patent"

    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state.messages = [
            {
                "role": "assistant",
                "content": (
                    "👋 Hello! I am Srishti's interactive AI Agent. "
                    "Ask me anything about her **Model Context Protocol (MCP)** work, "
                    "**8.76 CGPA at CMRIT**, **Autocare patent**, or **health tech computer vision projects**!"
                )
            }
        ]

    # Pre-canned responses
    KNOWLEDGE_BASE = {
        "why_hire": (
            "### ⚡ Why Srishti is an Exceptional Hire:\n\n"
            "- **Direct Agentic Expertise:** Hands-on experience engineering production agent pipelines with MCP, tool-use, and structured JSON outputs.\n"
            "- **Proven Impact:** Slashed manual resume candidate screening time by **>80%** using autonomous webhook workflows.\n"
            "- **Innovative Mindset:** Filed a patent for *'Autocare: Integrated Automobile Service Provider Application'* (2025).\n"
            "- **Strong Fundamentals:** Consistent academic excellence (8.76 CGPA in AI & ML at CMRIT, 95.66% in PU Science).\n"
            "- **Active Builder:** Participant in OpenAI Academy Gen AI Buildathon (Aug 2025) and volunteer AI educator."
        ),
        "agentic_mcp": (
            "### 🤖 Agentic & Model Context Protocol (MCP) Capabilities:\n\n"
            "1. **Model Context Protocol (MCP):** Certified via NxtWave CCBP 4.0 Academy. Connects LLMs to real-time external data tools and sandboxes.\n"
            "2. **Tool / Function Calling:** Building deterministic JSON parameter extraction, validation fallbacks, and schema enforcement.\n"
            "3. **Workflow Orchestration:** Advanced automated pipelines using **n8n** and **Make.com** with webhook queues and OAuth 2.0 lifecycle management."
        ),
        "elderly_care": (
            "### 🩺 Intelligent Elderly Care & Tremor Detection AI:\n\n"
            "- **Computer Vision:** Real-time MediaPipe hand and 33-point body landmark extraction.\n"
            "- **Signal Processing:** Applied Fast Fourier Transform (FFT) to isolate resting tremor frequencies (4–7 Hz).\n"
            "- **Clinical Biomechanics:** Gait symmetry, finger tapping speed, and postural stability scoring.\n"
            "- **Architecture:** Express.js REST API with local SQLite storage for private health records."
        ),
        "patent": (
            "### 🏆 Patent & Hackathon Milestones:\n\n"
            "- **Official Patent Filed (2025):** *'Autocare: Integrated Automobile Service Provider Application'*.\n"
            "- **OpenAI Academy Buildathon (Aug 2025):** Developed generative AI agent prototypes.\n"
            "- **ISRO & NASA Exposure (2025–2026):** Completed ISRO-START remote sensing workshop and NASA technical sessions.\n"
            "- **NSS Volunteerism:** Taught AI fundamentals to rural government school students near Sarjapur."
        )
    }

    if preset_clicked:
        st.session_state.messages.append({"role": "user", "content": f"Query: {preset_clicked.replace('_', ' ').title()}"})
        st.session_state.messages.append({"role": "assistant", "content": KNOWLEDGE_BASE[preset_clicked]})

    # Display chat messages
    for msg in st.session_state.messages:
        with st.chat_message(msg["role"]):
            st.markdown(msg["content"])

    # Chat input
    if prompt := st.chat_input("Ask a question about Srishti's skills, projects, or background..."):
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)

        clean = prompt.lower()
        if any(w in clean for w in ["mcp", "agent", "tool", "n8n", "make"]):
            reply = KNOWLEDGE_BASE["agentic_mcp"]
        elif any(w in clean for w in ["elderly", "tremor", "health", "mediapipe", "fft", "cv"]):
            reply = KNOWLEDGE_BASE["elderly_care"]
        elif any(w in clean for w in ["patent", "hackathon", "isro", "nasa", "buildathon"]):
            reply = KNOWLEDGE_BASE["patent"]
        elif any(w in clean for w in ["hire", "why", "summary", "cgpa", "about"]):
            reply = KNOWLEDGE_BASE["why_hire"]
        elif any(w in clean for w in ["contact", "email", "phone", "linkedin", "github"]):
            reply = (
                "📬 **Contact Information:**\n\n"
                "- **Email:** [malimathsrushti@gmail.com](mailto:malimathsrushti@gmail.com)\n"
                "- **Phone:** [+91 8431270997](tel:+918431270997)\n"
                "- **LinkedIn:** [linkedin.com/in/srishti-sangaya/](https://www.linkedin.com/in/srishti-sangaya/)\n"
                "- **GitHub:** [github.com/Srishti-2005](https://github.com/Srishti-2005)\n"
                "- **LeetCode:** [leetcode.com/2005srushti/](https://leetcode.com/2005srushti/)"
            )
        else:
            reply = (
                f"I processed your query: *'{prompt}'*.\n\n"
                "Srishti is an **AI & ML engineer** specializing in **Agentic AI (MCP, Tool Calling), Computer Vision (MediaPipe, FFT), and Full-Stack Backends**.\n"
                "Try clicking one of the quick preset buttons above or ask about her *'projects'*, *'patent'*, *'MCP experience'*, or *'contact info'*!"
            )

        st.session_state.messages.append({"role": "assistant", "content": reply})
        with st.chat_message("assistant"):
            st.markdown(reply)

# ==============================================================================
# SECTION 3: Featured Projects
# ==============================================================================
elif nav_option == "🚀 Featured Projects":
    st.subheader("🚀 Featured Engineering Projects")
    st.write("Production-ready agentic pipelines, predictive systems, and computer vision healthcare applications.")

    projects = [
        {
            "title": "Resume Checker Agent",
            "tag": "Autonomous Agent Pipeline",
            "stack": ["Python", "Make.com", "REST APIs", "Webhooks", "Prompt Chaining", "Structured JSON"],
            "impact": ">80% Screening Turnaround Cut",
            "summary": "Built an automated AI agent pipeline using Python, Make.com, and REST APIs to parse resumes, enforce structured JSON schemas, and evaluate role-to-candidate compatibility.",
            "details": "Implemented webhook triggers, multi-step prompt chaining, and API retry/failure handling to automate end-to-end resume scoring without manual intervention."
        },
        {
            "title": "AI-Powered Social Media Automation",
            "tag": "Agentic Content Orchestration",
            "stack": ["n8n", "Generative AI APIs", "OAuth 2.0", "REST APIs", "Scheduled Triggers"],
            "impact": "Multi-Platform Automation",
            "summary": "Engineered multi-step agentic workflows using n8n and Generative AI APIs for automated content ideation, drafting, and synchronized publishing across LinkedIn and X.",
            "details": "Implemented OAuth token refreshes, webhook queue ingestion, and resilient error-handling fallbacks across scheduled execution pipelines."
        },
        {
            "title": "Intelligent Elderly Care & Tremor Detection AI",
            "tag": "Health Tech & Computer Vision",
            "stack": ["Python", "MediaPipe", "FFT Analysis", "Pose Estimation", "Express.js", "SQLite"],
            "impact": "Real-Time 4-7 Hz Detection",
            "summary": "Clinical screening AI platform combining real-time MediaPipe hand/body tracking with Fast Fourier Transform (FFT) signal analysis to detect and monitor neurodegenerative tremors.",
            "details": "Developed modular assessment pipelines for finger tapping speed, postural stability, joint angle deviations, and gait symmetry analysis with local SQLite data security."
        },
        {
            "title": "Employee Attrition Prediction & Decision Support System",
            "tag": "Predictive Machine Learning",
            "stack": ["Python", "Scikit-learn", "Balanced Logistic Regression", "Flask", "Feature Engineering"],
            "impact": "Class Imbalance Resolved",
            "summary": "Engineered an end-to-end predictive machine learning model using Balanced Logistic Regression to overcome severe class imbalance in HR attrition records.",
            "details": "Built an interactive Flask dashboard supporting single-employee on-demand risk scoring, bulk CSV batch inference, and automated actionable retention recommendations."
        }
    ]

    for p in projects:
        with st.container(border=True):
            cols = st.columns([4, 1])
            with cols[0]:
                st.markdown(f"### {p['title']}")
                st.caption(f"**Category:** {p['tag']} • **Impact:** {p['impact']}")
            with cols[1]:
                st.link_button("GitHub Repo", "https://github.com/Srishti-2005", use_container_width=True)

            st.write(p["summary"])
            st.info(f"**Key Innovation:** {p['details']}")

            badges_html = "".join([f'<span class="badge-pill">{s}</span>' for s in p["stack"]])
            st.markdown(badges_html, unsafe_allow_html=True)

# ==============================================================================
# SECTION 4: Technical Stack
# ==============================================================================
elif nav_option == "🛠️ Technical Stack":
    st.subheader("🛠️ Technical Proficiencies & Tooling")

    c1, c2 = st.columns(2)
    with c1:
        with st.container(border=True):
            st.markdown("#### 🧠 AI Agents & LLMs")
            st.write("Model Context Protocol (MCP), Function Calling / Tool Calling, Structured JSON Enforcements, Prompt Chaining, n8n Orchestrator, Make.com Automations, Failure Recovery.")

        with st.container(border=True):
            st.markdown("#### 💻 Programming Languages & Backend")
            st.write("Python, JavaScript (Node.js/Express.js), Go (Basics), Java, C, Flask, RESTful Web Services, Webhook Architectures, Bash Scripting.")

    with c2:
        with st.container(border=True):
            st.markdown("#### 🗄️ Databases & Semantic Search")
            st.write("Embeddings & Semantic Vector Search, MySQL, SQLite, MongoDB, Redis / Message Queues (Basics), JSON Schemas.")

        with st.container(border=True):
            st.markdown("#### 👁️ Computer Vision & ML")
            st.write("MediaPipe Vision, Pose & Hand Tracking, Fast Fourier Transform (FFT) Signal Analysis, Scikit-learn, Balanced Logistic Regression, Data Structures & Algorithms.")

# ==============================================================================
# SECTION 5: Patents & Milestones
# ==============================================================================
elif nav_option == "🏆 Patents & Milestones":
    st.subheader("🏆 Patents, Hackathons & Community Leadership")

    with st.container(border=True):
        st.markdown("### 📜 Patent Filed (2025)")
        st.markdown("**'Autocare: Integrated Automobile Service Provider Application'**")
        st.write("Filed an official patent for a unified vehicular emergency assistance and predictive service station dispatch ecosystem.")

    col_h, col_c = st.columns(2)
    with col_h:
        with st.container(border=True):
            st.markdown("#### 🚀 Hackathons & Buildathons")
            st.markdown("- **OpenAI Academy Learning Community (Aug 2025):** Gen AI Buildathon participant.")
            st.markdown("- **Smart India Hackathon (2025):** College Level Selection.")
            st.markdown("- **Torvalds Club Hackathon (2025):** Technical systems sprint at CMRIT.")

        with st.container(border=True):
            st.markdown("#### 🛰️ Space Science & Aerospace")
            st.markdown("- **ISRO-START Workshop (2026):** Remote Sensing & Space Science by IIRS, ISRO Dehradun.")
            st.markdown("- **NASA Technical Sessions (2026):** Technical exploration sessions in Bangalore.")

    with col_c:
        with st.container(border=True):
            st.markdown("#### 🤝 Community Impact & Leadership")
            st.markdown("- **National Service Scheme (NSS 2025–2026):** Active Volunteer. Taught Basics of AI and computer literacy to rural students in government school near Sarjapur.")
            st.markdown("- **Rare Club CMRIT:** Organized Tech Debate and Intellectual Quiz Show on emerging AI technologies (2025).")

        with st.container(border=True):
            st.markdown("#### 📜 Professional Certifications (NxtWave)")
            st.markdown("- Model Context Protocol (MCP) Workshop (2025)")
            st.markdown("- Build Your Own Responsive Website (2025)")
            st.markdown("- Introduction to Database & SQL (2025)")

# ==============================================================================
# SECTION 6: Official Resume PDF
# ==============================================================================
elif nav_option == "📄 Official Resume PDF":
    st.subheader("📄 Official Verified Resume")
    
    if resume_data:
        st.download_button(
            label="📥 Download Srishti's Resume (PDF)",
            data=resume_data,
            file_name="Srishti_Sangayya_Malimath_Resume.pdf",
            mime="application/pdf"
        )
        # Embed PDF Viewer via Base64
        base64_pdf = base64.b64encode(resume_data).decode('utf-8')
        pdf_display = f'<iframe src="data:application/pdf;base64,{base64_pdf}" width="100%" height="800" type="application/pdf"></iframe>'
        st.markdown(pdf_display, unsafe_allow_html=True)
    else:
        st.error("Resume file not found at assets/Srishti_Sangayya_Malimath_Resume.pdf")

# ==============================================================================
# SECTION 7: Full Interactive Web View
# ==============================================================================
elif nav_option == "🌐 Full Interactive Web View":
    st.subheader("🌐 Full Web Portfolio View (HTML5 / Cyber UI)")
    st.caption("Rendering the complete responsive glassmorphic portfolio inside Streamlit.")
    
    index_path = "index.html"
    if os.path.exists(index_path):
        with open(index_path, "r", encoding="utf-8") as f:
            html_code = f.read()
        components.html(html_code, height=900, scrolling=True)
    else:
        st.error("index.html file not found!")
