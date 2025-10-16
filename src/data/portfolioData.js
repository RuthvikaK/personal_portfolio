export const portfolioData = {
  personalInfo: {
    name: "Ruthvika Kosuri",
    title: "MS Computer Science Student",
    email: "ruthvika.kosuri@gmail.com",
    phone: "+1 (904) 432-5577",
    location: "Chapel Hill, North Carolina",
    github: "https://github.com/RuthvikaK",
    linkedin: "https://linkedin.com/in/ruthvika-kosuri",
    bio: "Graduate student passionate about machine learning, AI, and software engineering. Currently pursuing my Master's at UNC Chapel Hill, where I'm exploring the intersection of computational biology, drug discovery, and cutting-edge AI technologies.",
    tagline: "Building the future with AI, one algorithm at a time",
    about: `I'm a graduate student at UNC Chapel Hill with a passion for leveraging AI and machine learning to solve real-world problems. My journey spans from developing AI-powered trading platforms to computational drug discovery research. 
    
    With a strong foundation in both software engineering and machine learning, I enjoy building systems that are not just technically sound but also make a meaningful impact. Whether it's optimizing molecular dynamics simulations or creating adaptive LLM frameworks, I'm driven by the challenge of turning complex problems into elegant solutions.
    
    When I'm not diving deep into neural networks or debugging code, you'll find me exploring the latest developments in AI, contributing to open-source projects, or mentoring fellow students in their tech journey.`
  },

  education: [
    {
      degree: "M.S. in Computer Science",
      school: "University of North Carolina at Chapel Hill",
      period: "August 2024 - May 2026",
      gpa: "In Progress",
      coursework: [
        "Software Engineering Lab",
        "Intro to Robotics",
        "Machine Learning",
        "Image Processing and Analysis",
        "Structural Bioinformatics",
        "Genetic Engineering",
        "Computational Biology",
        "LLMs for Software",
        "Mobile Health Systems",
        "Optimization for Machine Learning and Data Science",
        "Reinforcement Learning and Markov Decision Processes",
        "Deep Learning"
      ]
    },
    {
      degree: "B.S. in Computer Science",
      school: "University of North Carolina at Charlotte",
      period: "August 2021 - May 2024",
      gpa: "3.93/4.00",
      honors: "Summa Cum Laude",
      minors: ["Bio-informatics", "Mathematics"],
      coursework: [
        "Data Structures and Algorithms",
        "Computer Vision",
        "Artificial Intelligence",
        "Natural Language Processing",
        "Operating Systems",
        "Computer Networks",
        "Database Management",
        "Software Engineering",
        "Intro to Bioinformatics Computing",
        "Matrices and Linear Algebra",
        "Statistics"
      ]
    }
  ],

  experience: [
    {
      title: "Research Assistant - ATLAS Project",
      company: "BIND Lab - UNC Chapel Hill",
      location: "Chapel Hill, NC",
      period: "May 2025 – Present",
      supervisor: "Dr. Konstantin Popov",
      description: [
        "Developed a containerized platform for deploying generative ML models (SafeGPT, MolMIM, F-RAG) used for novel-molecule generation on GPU clusters (Longleaf, Sycamore)",
        "Packaged applications with Docker and Kubernetes, enabling scalable access and improving reproducibility",
        "Led a team of 4 undergraduate students in planning and executing 50+ docking experiments to identify optimal molecule binder positions, improving binding affinity predictions by ~25%"
      ]
    },
    {
      title: "Teaching Assistant - Risk Management and Insurance",
      company: "School of Data Science and Society - UNC Chapel Hill",
      location: "Chapel Hill, NC",
      period: "January 2025 – Present",
      supervisor: "Dr. Rachel Baum",
      description: [
        "Applied Python and AI models to help students analyze and price risk in financial risk management and insurance, driving a 25% increase in quantitative assessment scores and deeper understanding of risk analytics",
        "Independently managed a 67-student financial risk management and insurance course, leveraging Python automation and data workflows on Canvas to optimize access to risk models and datasets, saving over 10 hours per week in operational tasks",
        "Applied AI-driven analysis to student data to identify gaps in risk assessment and insurance pricing, enhancing concept mastery and participation across the cohort by 20%"
      ]
    },
    {
      title: "Research Intern - Computational Drug Discovery",
      company: "School of Medicine - UNC Chapel Hill",
      location: "Chapel Hill, NC",
      period: "June 2025 – September 2025",
      supervisor: "Dr. Venkat Reddy Chirasani",
      description: [
        "Designed computational workflows to study peptide inhibitors for CDK2 using Molecular Dynamics and AlphaFold3, improving stability predictions and drug candidate evaluation",
        "Automated analysis pipelines in Python and NetworkX, reducing manual effort and accelerating experiment turnaround time by 40%",
        "Collaborated with interdisciplinary researchers, adapting technical outputs for non-CS teammates and enhancing cross-team communication"
      ]
    }
  ],

  projects: [
    {
      name: "Trade Compass",
      tagline: "New to trading? I can understand, understand and make smart investment decisions with AI-powered analytics",
      description: "AI-Powered Trading Analytics Platform leveraging Google Gemini 2.5 Flash for personalized portfolio recommendations",
      year: "2025",
      github: "https://github.com/RuthvikaK/trade-compass",
      highlights: [
        "Engineered an AI-driven investment analytics framework leveraging Google Gemini 2.5 Flash to generate personalized portfolio allocations grounded in technical, fundamental, and sentiment data",
        "Developed and validated probabilistic signal models with weighted factor scoring and volatility-adjusted confidence calibration, achieving a ~30% increase in back-tested Sharpe Ratio",
        "Integrated OCR and speech-to-text models into the onboarding flow to automate document parsing and voice-driven account creation, cutting user setup time by ~70%"
      ],
      technologies: ["Python", "Google Gemini", "OCR", "Speech Recognition", "TensorFlow"]
    },
    {
      name: "Agentic Planner",
      tagline: "GPT, Claude, and Perplexity giving you different answers? Check out Agentic Planner, which is sure to give you the correct answer everytime!",
      description: "Adaptive LLM Selection Framework for Query Optimization using fine-tuned LoRA models",
      year: "2025",
      github: "https://github.com/RuthvikaK/agentic-planner",
      highlights: [
        "Developed an agentic planner LLM (DeepSeek Distill Llama) to dynamically route queries to the most suitable LLM",
        "Leveraged a fine-tuned LoRA model trained on 15K+ examples from diverse benchmark datasets (MMLU, SQuAD, PIQA, GSM8K)",
        "Integrated reinforcement learning with user feedback, improving response accuracy by ~25% and reducing average query latency by ~20%"
      ],
      technologies: ["Python", "PyTorch", "LoRA", "DeepSeek", "Reinforcement Learning"]
    },
    {
      name: "Children's AI Storybook",
      tagline: "Don't want to spend your life savings on your kids' storybooks? Try Children's AI Storybook!",
      description: "AI Chatbot for children to generate new and interestingstories",
      year: "2025",
      github: "https://github.com/RuthvikaK/Children-s-AI-Storybook",
      highlights: [
        "Developed a dual-agent storytelling architecture leveraging GPT-3.5 (Storyteller) and GPT-4 (Judge) to generate and evaluate children’s narratives, maintaining >95% structural validity in JSON-formatted outputs",
        "Implemented an affective, multi-phase generation loop inspired by dynamic beam search, improving narrative coherence and engagement by ~30% over baseline models",
        "Engineered reproducible prompt design and output validation methods enabling robust, age-appropriate story generation for AI alignment and creative NLP research"
      ],
      technologies: ["Python", "GPT-3.5", "Prompt Engineering", "Natural Language Generation", "Reinforcement Learning for Text"]
    },
    {
      name: "ARC Challenge",
      tagline: "Worried AI will take over the world? Let us see how well it does with reasoning and problem solving (spolier alert: it doesn't do well so we are good for now)",
      description: "Abstraction Reasoning Challenge solver using Llama and GPT-4",
      year: "2024",
      github: "https://github.com/RuthvikaK/arc-challenge",
      highlights: [
        "Designed a reasoning system using Llama, GPT-4o-mini, and program synthesis methods to solve ARC puzzle tasks",
        "Expanded training data from 3.4K to 26K+ examples via augmentation (token shuffling, grid rotations), boosting generalization by ~30%",
        "Worked in a team-driven environment, sharing insights and presenting results to strengthen communication"
      ],
      technologies: ["Python", "Llama", "GPT-4", "PyTorch", "Data Augmentation"]
    },
    {
      name: "Mosaic Music",
      tagline: "Tired of listening to ads on Spotify? Try Mosaic Music, it has no ads and its free!",
      description: "Full Stack Music Streaming Platform with personalized recommendations",
      year: "2024",
      github: "https://github.com/RuthvikaK/mosaic-music",
      highlights: [
        "Engineered a scalable back-end using Flask and PostgreSQL, supporting 200+ concurrent users with <300ms average API response time",
        "Implemented comprehensive testing suite with 65% code coverage, including unit and integration tests",
        "Integrated external APIs and utilized JSON for efficient data exchange improving recommendation accuracy by ~25%"
      ],
      technologies: ["Flask", "PostgreSQL", "JavaScript", "Python", "REST APIs"]
    },
    {
      name: "Filia",
      tagline: "Instagram can get boring sometimes, try Filia! Here you can connect, share, and engage with your community!",
      description: "Full Stack Social Media Application with real-time features",
      year: "2024",
      github: "https://github.com/RuthvikaK/filia",
      highlights: [
        "Designed and implemented key features (posts, comments, likes, user management) using JavaScript and PostgreSQL handling 500+ daily active operations",
        "Optimized database queries reducing response time by ~30%, and deployed with emphasis on maintainability and scalability",
        "Applied systematic debugging and peer code reviews, identifying and resolving 15+ critical bugs pre-deployment"
      ],
      technologies: ["JavaScript", "Node.js", "PostgreSQL", "Express", "React"]
    }
  ],

  skills: {
    languages: ["Python", "Java", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML", "CSS", "Assembly", "BASH"],
    frameworks: {
      "AI/ML": ["TensorFlow", "PyTorch", "Keras", "LangChain", "RAG", "MCP", "HuggingFace", "scikit-learn"],
      "Web Development": ["React", "Node.js", "Express", "Django", "Flask", "Jinja"],
      "Data Science": ["NumPy", "pandas", "matplotlib", "NetworkX"]
    },
    cloud: ["AWS Lambda", "AWS EC2", "Docker", "Kubernetes", "Terraform"],
    tools: ["Git", "GitHub Actions", "Jenkins", "Postman"],
    methodologies: ["Agile", "SCRUM", "Kanban", "RESTful APIs", "Microservices", "Serverless Architecture"]
  }
};
