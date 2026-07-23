import { Profile } from "./types";

export const portfolioData: Profile = {
  name: "Arindam Majee",
  title: "Software Development Engineer · AI Researcher",
  tagline:
    "Software engineer and AI researcher working on computer vision, graph learning, efficient ML, and AI for healthcare.",

  // Hero
  headline: "Building Intelligent Systems for Real-World Impact",
  subtitle:
    "Software Development Engineer at Amazon and AI researcher interested in computer vision, graph learning, efficient machine learning, and AI for healthcare.",

  // About — a concise personal story, not a résumé restatement.
  aboutMe:
    "I build systems that connect research ideas to real-world impact — from deep learning models for medical diagnosis to production software that operates reliably at large scale. I care most about the point where rigorous methods meet the messy constraints of deployment.",
  detailedBio:
    "I'm currently a Software Development Engineer at Amazon, where I work on high-throughput backend systems for large-scale logistics automation. Before industry, I spent several years in research: as a Research Assistant at the Institute of Advancing Intelligence (TCG CREST) with Prof. Swagatam Das, at the Indian Statistical Institute, and on an MITACS-funded robotics project at Toronto Metropolitan University. I studied Electronics & Telecommunication Engineering at Jadavpur University, where my thesis explored reinforcement learning for visual object tracking. My long-term goal is to help build machine learning systems that are efficient, trustworthy, and genuinely useful — especially in domains like healthcare where reliability matters.",

  email: "majeearindam06072002@gmail.com",
  location: "Bengaluru, Karnataka, India",
  resumeUrl: "/Arindam_Majee_Resume.pdf",

  // Legacy flat skills list — retained for backward compatibility / any
  // future skill-meter view. The rendered Skills section uses skillGroups.
  skills: [
    { name: "Python", category: "Backend", level: "Expert" },
    { name: "C++", category: "Backend", level: "Expert" },
    { name: "Java", category: "Backend", level: "Expert" },
    { name: "SQL", category: "Backend", level: "Advanced" },
    { name: "PyTorch & TensorFlow", category: "Tools & Others", level: "Expert" },
    { name: "AWS", category: "Tools & Others", level: "Advanced" },
    { name: "Docker", category: "Tools & Others", level: "Advanced" },
    { name: "Computer Vision", category: "Design", level: "Expert" },
    { name: "Graph Learning", category: "Design", level: "Advanced" },
    { name: "Reinforcement Learning", category: "Design", level: "Advanced" }
  ],

  // Category-based skills for the redesigned section.
  skillGroups: [
    {
      category: "Programming",
      items: ["Python", "C++", "Java", "SQL", "MATLAB", "Bash"]
    },
    {
      category: "Machine Learning",
      items: [
        "PyTorch",
        "TensorFlow / Keras",
        "Computer Vision",
        "Graph Neural Networks",
        "Reinforcement Learning",
        "Model Optimization"
      ]
    },
    {
      category: "Distributed Systems",
      items: [
        "High-throughput services",
        "Microservices",
        "Event-driven design",
        "Concurrency",
        "System design"
      ]
    },
    {
      category: "Cloud & Infra",
      items: ["AWS", "Docker", "CI/CD", "Observability", "Linux"]
    },
    {
      category: "Research",
      items: [
        "Deep learning",
        "Optimization",
        "Feature selection",
        "Medical imaging",
        "Scientific writing"
      ]
    },
    {
      category: "Developer Tools",
      items: ["Git & GitHub", "VS Code", "pytest", "NumPy / Pandas", "Weights & Biases"]
    }
  ],

  // Featured Work — problem-focused, not employer-focused.
  featuredWork: [
    {
      id: "fw-production",
      title: "Production Software at Scale",
      summary:
        "Design and operation of high-throughput backend services for large-scale logistics automation, built to stay correct and available under heavy, continuous load.",
      technologies: ["Java", "AWS", "Distributed Systems", "Microservices"],
      outcome:
        "Reliable, configurable services running across a large fleet of facilities in production."
    },
    {
      id: "fw-medical",
      title: "Medical Image Analysis",
      summary:
        "Deep learning pipelines for computer-aided diagnosis, including CNN architectures and metaheuristic feature-selection methods applied to MRI, CT, thermal, and ECG data.",
      technologies: ["PyTorch", "TensorFlow", "CNNs", "Medical Imaging"],
      outcome: "Two peer-reviewed publications on cardiovascular and cancer detection.",
      link: {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?view_op=search_authors&mauthors=Arindam+Majee"
      }
    },
    {
      id: "fw-graph",
      title: "Graph Representation Learning",
      summary:
        "Research on graph neural networks and knowledge graphs — node embeddings, semantic modeling, and reasoning over structured relational data.",
      technologies: ["Python", "GNNs", "Knowledge Graphs", "Representation Learning"],
      outcome: "Research conducted at TCG CREST and the Indian Statistical Institute."
    },
    {
      id: "fw-autonomous",
      title: "Autonomous Systems & RL",
      summary:
        "Reinforcement learning agents for visual object tracking and robotic path following, learning control policies directly from video and sensor feedback.",
      technologies: ["PyTorch", "Reinforcement Learning", "Computer Vision", "Robotics"],
      outcome:
        "Undergraduate thesis plus an MITACS-funded robotics collaboration in Canada."
    },
    {
      id: "fw-efficient",
      title: "Efficient Deep Learning",
      summary:
        "Metaheuristic and fractional-calculus-aided optimization (Moth-Flame, Dragonfly) to select compact, informative feature subsets — reducing model size without sacrificing accuracy.",
      technologies: ["Python", "Optimization", "Feature Selection", "Deep Learning"],
      outcome: "Published methods improving efficiency of medical classifiers."
    }
  ],

  // Research Vision — coherent narrative, set as a statement + a few areas.
  researchStatement:
    "I'm drawn to machine learning that has to work outside the lab. Much of modern AI is powerful but brittle, opaque, or too expensive to deploy where it matters most. My interests sit at the intersection of efficiency, trustworthiness, and impact: models that are small and fast enough to run in the real world, transparent enough to be trusted in high-stakes settings like healthcare, and grounded in the structure of the data — whether that structure is visual, relational, or multimodal. Having worked on both sides of the research-to-production gap, I want to keep building AI systems that are not just accurate on benchmarks, but dependable in the hands of the people who use them.",
  researchAreas: [
    {
      id: "ra-trust",
      title: "Trustworthy AI",
      description:
        "Models whose behavior is interpretable, robust, and safe to rely on in high-stakes domains."
    },
    {
      id: "ra-efficient",
      title: "Efficient Deep Learning",
      description:
        "Compression, feature selection, and optimization that make models cheap enough to deploy widely."
    },
    {
      id: "ra-cv",
      title: "Computer Vision",
      description:
        "Learning from images and video, from medical scans to tracking objects in dynamic scenes."
    },
    {
      id: "ra-graph",
      title: "Graph Representation Learning",
      description:
        "Reasoning over relational and structured data with graph neural networks and knowledge graphs."
    },
    {
      id: "ra-multimodal",
      title: "Multimodal Learning",
      description:
        "Combining signals across modalities — vision, structure, and text — into unified representations."
    },
    {
      id: "ra-healthcare",
      title: "Healthcare AI",
      description:
        "Reliable diagnostic tools that assist clinicians while respecting the cost of being wrong."
    },
    {
      id: "ra-prod-ml",
      title: "Production ML Systems",
      description:
        "The engineering that turns a research prototype into a service that runs reliably at scale."
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Alzheimer's Disease Detection from MRI",
      description:
        "An AI-based diagnostic assistant using deep learning to identify Alzheimer's disease patterns from brain MRI scans.",
      longDescription:
        "A deep learning framework that analyzes MRI scans for early detection of Alzheimer's Disease. Using 3D CNN architectures, the system extracts subtle structural degeneration markers to assist clinical diagnosis.",
      technologies: ["Python", "PyTorch", "3D CNN", "Medical Imaging", "MRI Analysis"],
      featured: true
    },
    {
      id: "proj-2",
      title: "RL for Visual Object Tracking",
      description:
        "An autonomous computer vision tracker trained with Deep Q-Networks in a custom environment.",
      longDescription:
        "Undergraduate thesis on teaching agents to track target objects in 2D video. A tracker agent optimizes its bounding-box position via reward signals, outperforming conventional rule-based tracking.",
      technologies: ["Python", "PyTorch", "Reinforcement Learning", "Computer Vision", "Q-Learning"],
      featured: true
    },
    {
      id: "proj-3",
      title: "Line Follower Bot with PID Control",
      description:
        "An autonomous robotics platform using PID feedback loops for stable track following.",
      longDescription:
        "An autonomous line-follower robot using high-frequency PID feedback control, with calibrated infrared sensor arrays and motor drivers for smooth navigation around tight curves.",
      technologies: ["C++", "PID Control", "Arduino", "Robotics", "Hardware"],
      featured: false
    },
    {
      id: "proj-4",
      title: "COVID-19 Detection from CT Scans",
      description:
        "A medical diagnostic classifier built on custom CNNs for rapid CT scan screening.",
      longDescription:
        "Custom CNN architectures to classify chest and brain CT scans for COVID-19 screening, addressing class imbalance with augmentation and interpreting decisions via activation mapping.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Medical Imaging"],
      featured: false
    }
  ],

  experiences: [
    {
      id: "exp-1",
      company: "Amazon",
      role: "Software Development Engineer",
      period: "Jan 2024 - Present",
      location: "Bengaluru, India",
      description: [
        "Design and build high-throughput backend services for large-scale logistics automation, focused on correctness and availability under continuous production load.",
        "Work on configurable systems that operate reliably across a large fleet of facilities.",
        "Own services end to end — from design and implementation to deployment, monitoring, and operational health on AWS."
      ],
      skillsUsed: ["Java", "Distributed Systems", "AWS", "Microservices", "System Design"]
    },
    {
      id: "exp-2",
      company: "TCG CREST — Institute of Advancing Intelligence",
      role: "Research Assistant",
      period: "Jun 2023 - Jan 2024",
      location: "Kolkata, India",
      description: [
        "Full-time research with Prof. Swagatam Das on deep learning and optimization.",
        "Formulated mathematical optimization models and neural network designs for machine learning problems.",
        "Studied reinforcement learning and graph-structured representation learning."
      ],
      skillsUsed: ["Python", "Deep Learning", "Graph Neural Networks", "Optimization"]
    },
    {
      id: "exp-3",
      company: "Indian Statistical Institute (ISI)",
      role: "Research Assistant (Part-time)",
      period: "May 2023 - Jan 2024",
      location: "Kolkata, India",
      description: [
        "Research on knowledge graphs, semantic modeling, and reasoning algorithms.",
        "Explored node embeddings and path-search strategies over structured data."
      ],
      skillsUsed: ["Python", "Knowledge Graphs", "Machine Learning"]
    },
    {
      id: "exp-4",
      company: "Toronto Metropolitan University",
      role: "Research Intern (MITACS)",
      period: "May 2022 - Aug 2022",
      location: "Toronto, Canada · Remote",
      description: [
        "MITACS-funded research at the Robotics, Mechatronics, and Automation Laboratory.",
        "Developed reinforcement learning agents for robotic path tracking and 2D visual object tracking."
      ],
      skillsUsed: ["Python", "PyTorch", "Reinforcement Learning", "Robotics"]
    },
    {
      id: "exp-5",
      company: "Jadavpur University",
      role: "Undergraduate Researcher",
      period: "Jul 2020 - Jul 2023",
      location: "Kolkata, India",
      description: [
        "Biomedical machine learning research on cardiovascular and cancer diagnosis.",
        "Designed metaheuristic optimization algorithms for feature selection on medical datasets, resulting in peer-reviewed publications."
      ],
      skillsUsed: ["Python", "TensorFlow", "MATLAB", "Feature Selection", "Metaheuristics"]
    }
  ],

  education: [
    {
      id: "edu-1",
      institution: "Jadavpur University",
      degree: "B.E. (Hons), Electronics & Telecommunication Engineering",
      period: "Jul 2019 - May 2023",
      grade: "CGPA 9.0/10 · First Class with Distinction",
      description:
        "Undergraduate thesis on reinforcement learning for visual object tracking, advised by Prof. Amit Konar and Dr. Pratyusha Rakshit."
    },
    {
      id: "edu-2",
      institution: "Talajuri Srimati High School (WBCHSE)",
      degree: "Higher Secondary (10+2), Science",
      period: "2017 - 2019",
      grade: "92.6%",
      description: "Physics, Chemistry, Mathematics, and Computer Science."
    }
  ],

  publications: [
    {
      id: "pub-1",
      title:
        "Moth-Flame Optimization-Based Deep Feature Selection for Cardiovascular Disease Detection Using ECG Signal",
      publisher: "CRC Press",
      venue: "CRC Press (Book Chapter)",
      date: "Jun 2022",
      year: "2022",
      type: "Book Chapter",
      firstAuthor: true,
      authors: "Arindam Majee, et al.",
      abstract:
        "A hybrid metaheuristic deep learning method that applies Moth-Flame Optimization to select informative features from ECG signals for accurate cardiovascular disease detection."
    },
    {
      id: "pub-2",
      title:
        "Breast Cancer Detection from Thermal Images Using a Grünwald–Letnikov-Aided Dragonfly Algorithm-Based Deep Feature Selection Method",
      publisher: "Computers in Biology and Medicine",
      venue: "Computers in Biology and Medicine (Journal)",
      date: "Nov 2021",
      year: "2021",
      type: "Journal",
      firstAuthor: true,
      authors: "Arindam Majee, et al.",
      abstract:
        "A deep feature selection mechanism using a Grünwald–Letnikov fractional-derivative-aided Dragonfly metaheuristic to identify malignancy markers in breast thermal images."
    }
  ],

  awards: [
    {
      id: "aw-1",
      title: "JBNSTS Senior Research Scholarship",
      issuer: "Jagadish Bose National Science Talent Search",
      date: "Dec 2019",
      description:
        "Competitive research scholarship awarded to a small cohort of top science and engineering undergraduates in West Bengal."
    },
    {
      id: "aw-2",
      title: "JBNSTS Junior Scholar",
      issuer: "Jagadish Bose National Science Talent Search",
      date: "Dec 2017",
      description: "Awarded for academic excellence following a state-wide talent selection assessment."
    }
  ],

  writing: [
    {
      id: "wr-1",
      title: "Writing, coming soon",
      summary:
        "I'm planning to write about efficient deep learning, lessons from taking ML into production, and notes from my research. Check back soon.",
      comingSoon: true
    }
  ],

  socialLinks: [
    { platform: "Google Scholar", url: "https://scholar.google.com/citations?view_op=search_authors&mauthors=Arindam+Majee", label: "Google Scholar" },
    { platform: "GitHub", url: "https://github.com/arindammajee", label: "GitHub Profile" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/arindammajee", label: "LinkedIn" },
    { platform: "Email", url: "mailto:majeearindam06072002@gmail.com", label: "Email" }
  ],

  hobbies: [
    "Reading ML research",
    "Competitive programming",
    "Robotics & hardware tinkering",
    "Technical writing"
  ]
};
