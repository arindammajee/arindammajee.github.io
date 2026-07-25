import { Profile } from "./types";
import scholar from "./data/scholar.json";

// Aggregate Scholar metrics are refreshed at build time by
// scripts/update_citations.py (see .github/workflows/deploy.yml). The
// committed scholar.json is the fallback when a CI fetch is blocked.
// Per-paper citation counts below stay static (they need much heavier
// scraping and are more likely to trip Scholar's bot protection).
const citationsLabel = `${Math.floor(scholar.citations / 10) * 10}+`;

export const portfolioData: Profile = {
  name: "Arindam Majee",
  title: "ML Engineer · Software Development Engineer",
  tagline:
    "I take machine learning from research prototype to reliable production system.",

  // Hero
  headline: "I turn research prototypes into ML systems that run in production.",
  subtitle:
    `Software Development Engineer at Amazon building high-throughput backend systems, and a published ML researcher (h-index ${scholar.hindex}, ${citationsLabel} citations) working on efficient, deployable deep learning for medical imaging and beyond.`,

  // About — a concise personal story, not a résumé restatement.
  aboutMe:
    "I work at the seam between research and production. On the research side, I've published deep-learning methods for medical diagnosis — including a first-author 3D vision-transformer paper at IJCNN 2024. On the engineering side, I build backend systems at Amazon that have to stay correct and available under continuous, large-scale load. What I care about most is closing the gap between the two: making models that don't just win on a benchmark, but actually ship and hold up in the real world.",
  detailedBio:
    "I'm a Software Development Engineer at Amazon, where I build high-throughput backend services for large-scale logistics automation. Before industry I spent three years in research — as a Research Assistant at TCG CREST's Institute of Advancing Intelligence with Prof. Swagatam Das, at the Indian Statistical Institute, and on an MITACS-funded robotics project at Toronto Metropolitan University. My work has appeared in Computers in Biology and Medicine, IJCNN, and Applied Sciences, spanning medical image analysis, efficient feature selection, and explainable deep learning. I studied Electronics & Telecommunication Engineering at Jadavpur University (CGPA 9.0/10), where my thesis explored reinforcement learning for visual object tracking.",

  email: "majeearindam06072002@gmail.com",
  location: "Bengaluru, Karnataka, India",
  resumeUrl: "/Arindam_Majee_Resume.pdf",

  // Hero signal card — real, verifiable metrics (Google Scholar).
  heroStats: [
    { label: "Citations", value: citationsLabel, detail: "Google Scholar" },
    { label: "h-index", value: String(scholar.hindex), detail: `i10-index ${scholar.i10index}` },
    { label: "Publications", value: "6", detail: "4 as first author" },
    { label: "Since", value: "2024", detail: "SDE at Amazon" }
  ],

  // Category-based skills.
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
        "Vision Transformers",
        "Graph Neural Networks",
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
      category: "ML Systems",
      items: [
        "GPU clusters (SLURM)",
        "Training pipelines",
        "Data preprocessing",
        "Experiment tracking",
        "Model deployment"
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
      title: "Production Backend at Scale",
      summary:
        "High-throughput backend services for large-scale logistics automation — designed to stay correct and available under heavy, continuous load, and owned end to end from design through operations.",
      technologies: ["Java", "AWS", "Distributed Systems", "Microservices"],
      outcome:
        "Reliable, configurable services running across a large fleet of production facilities."
    },
    {
      id: "fw-medical",
      title: "Explainable Medical Imaging",
      summary:
        "Deep-learning pipelines for computer-aided diagnosis on MRI, CT, thermal, and ECG data — including a 3D hybrid CNN–transformer for Alzheimer's classification with explainability built in.",
      technologies: ["PyTorch", "3D CNN", "Vision Transformers", "Medical Imaging"],
      outcome: "Peer-reviewed publications at IJCNN 2024 and in top medical-imaging journals.",
      link: {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=sqGrHcoAAAAJ&hl=en"
      }
    },
    {
      id: "fw-efficient",
      title: "Efficient Deep Learning",
      summary:
        "Metaheuristic and fractional-calculus-aided optimization (Moth-Flame, Grünwald–Letnikov Dragonfly) that selects compact, informative feature subsets — cutting model cost without sacrificing accuracy.",
      technologies: ["Python", "Optimization", "Feature Selection", "Deep Learning"],
      outcome: "Published methods improving the efficiency of medical classifiers."
    },
    {
      id: "fw-mlsystems",
      title: "ML Systems & GPU Infrastructure",
      summary:
        "Practical tooling for training at scale — a hands-on guide to provisioning and running multi-GPU clusters with DeepOps and SLURM, distilled from real cluster setup.",
      technologies: ["SLURM", "DeepOps", "GPU Clusters", "MLOps"],
      outcome: "Public technical guide (arXiv) used as a reference for GPU cluster setup.",
      link: {
        label: "arXiv:2405.00030",
        url: "https://arxiv.org/abs/2405.00030"
      }
    }
  ],

  // Research Vision — coherent narrative, focused on the research-to-production thesis.
  researchStatement:
    "Most machine-learning research stops at the benchmark. I'm interested in what happens after: making models efficient enough to deploy, transparent enough to trust, and robust enough to survive contact with real data — especially in high-stakes domains like healthcare, where being wrong has a cost. Having worked on both sides of the research-to-production gap, I focus on the engineering and the methods that turn a promising prototype into a system people can actually rely on.",
  researchAreas: [
    {
      id: "ra-efficient",
      title: "Efficient & Deployable Deep Learning",
      description:
        "Compression, feature selection, and optimization that make models cheap and fast enough to run in the real world — not just on a leaderboard."
    },
    {
      id: "ra-trust",
      title: "Trustworthy & Explainable AI",
      description:
        "Models whose behavior is interpretable and robust enough to be relied on in high-stakes settings like clinical diagnosis."
    },
    {
      id: "ra-cv",
      title: "Computer Vision for Medicine",
      description:
        "Learning from medical images and video — 3D CNNs and vision transformers for detection, classification, and diagnosis."
    },
    {
      id: "ra-mlsys",
      title: "ML Systems & Production",
      description:
        "The training infrastructure, pipelines, and engineering that turn a research prototype into a service that runs reliably at scale."
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "3D HCCT — Alzheimer's Detection from MRI",
      description:
        "First-author IJCNN 2024 work: an explainable 3D hybrid CNN–transformer for Alzheimer's classification from brain MRI.",
      longDescription:
        "A 3D Hybrid Compact Convolutional Transformer that combines convolutional encoders with vision transformers to capture both local structure and long-range patterns in 3D MRI, reaching 96% accuracy on ADNI with heatmap-based explainability.",
      technologies: ["Python", "PyTorch", "3D CNN", "Vision Transformers", "Medical Imaging"],
      githubUrl: "https://github.com/arindammajee/Alzheimer-Detection-with-3D-HCCT",
      paperUrl: "https://arxiv.org/abs/2403.16175",
      featured: true
    },
    {
      id: "proj-2",
      title: "Multi-Agent RL for UAV Search & Rescue",
      description:
        "Multi-agent reinforcement learning for coordinating swarms of UAVs in search-and-rescue operations.",
      longDescription:
        "Reinforcement-learning agents that coordinate a swarm of UAVs to cover and search an area efficiently, learning cooperative policies for search-and-rescue scenarios.",
      technologies: ["Python", "Reinforcement Learning", "Multi-Agent Systems", "UAVs"],
      githubUrl:
        "https://github.com/arindammajee/Multi-Agent-Reinforcement-Learning-for-Search-and-Rescue-Operations-using-UAVs",
      featured: true
    },
    {
      id: "proj-3",
      title: "COVID-19 Detection from Chest CT",
      description:
        "Deep-learning classifiers for COVID-19 screening from chest CT scans, published in Applied Sciences.",
      longDescription:
        "Custom CNN architectures and an ensemble approach to classify chest CT scans for COVID-19 screening, addressing class imbalance with augmentation and interpreting decisions via activation mapping.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Medical Imaging"],
      githubUrl: "https://github.com/arindammajee/COVID19-Detection-from-Chest-CT-Scan",
      featured: false
    },
    {
      id: "proj-4",
      title: "DeepOps & SLURM — GPU Cluster Guide",
      description:
        "A hands-on guide to provisioning and running multi-GPU training clusters with DeepOps and SLURM.",
      longDescription:
        "A practical reference for setting up GPU clusters for deep-learning training — covering DeepOps provisioning, SLURM scheduling, and the operational details that trip people up in real multi-GPU setups.",
      technologies: ["SLURM", "DeepOps", "GPU Clusters", "MLOps"],
      paperUrl: "https://arxiv.org/abs/2405.00030",
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
        "Build high-throughput backend services for large-scale logistics automation, focused on correctness and availability under continuous production load.",
        "Design configurable systems that operate reliably across a large fleet of facilities.",
        "Own services end to end — design, implementation, deployment, monitoring, and operational health on AWS."
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
        "Developed the 3D hybrid CNN–transformer for Alzheimer's classification later published at IJCNN 2024.",
        "Studied reinforcement learning and graph-structured representation learning."
      ],
      skillsUsed: ["Python", "PyTorch", "Vision Transformers", "Deep Learning"]
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
        "Developed reinforcement-learning agents for robotic path tracking and 2D visual object tracking."
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
        "Biomedical machine-learning research on cardiovascular and cancer diagnosis.",
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

  // Publications — verified against Google Scholar (Jul 2025). Author name bold in UI.
  publications: [
    {
      id: "pub-hcct",
      title:
        "Enhancing MRI-Based Classification of Alzheimer's Disease with Explainable 3D Hybrid Compact Convolutional Transformers",
      publisher: "IEEE",
      venue: "International Joint Conference on Neural Networks (IJCNN)",
      date: "2024",
      year: "2024",
      type: "Conference",
      firstAuthor: true,
      citations: 40,
      authors: "Arindam Majee, A. Gupta, S. Raha, S. Das",
      abstract:
        "A 3D hybrid compact convolutional transformer that fuses convolutional and attention-based encoders to classify Alzheimer's disease from brain MRI, with built-in explainability and strong accuracy on the ADNI dataset.",
      links: {
        arxiv: "https://arxiv.org/abs/2403.16175",
        code: "https://github.com/arindammajee/Alzheimer-Detection-with-3D-HCCT"
      }
    },
    {
      id: "pub-breast",
      title:
        "Breast Cancer Detection from Thermal Images Using a Grünwald–Letnikov-Aided Dragonfly Algorithm-Based Deep Feature Selection Method",
      publisher: "Elsevier",
      venue: "Computers in Biology and Medicine",
      date: "2022",
      year: "2022",
      type: "Journal",
      firstAuthor: false,
      citations: 82,
      authors: "S. Chatterjee, S. Biswas, Arindam Majee, S. Sen, D. Oliva, R. Sarkar",
      abstract:
        "A deep feature-selection method using a Grünwald–Letnikov fractional-derivative-aided Dragonfly metaheuristic to identify malignancy markers in breast thermal images.",
      links: {
        doi: "https://doi.org/10.1016/j.compbiomed.2021.105027"
      }
    },
    {
      id: "pub-covid",
      title:
        "Prediction of COVID-19 from Chest CT Images Using an Ensemble of Deep Learning Models",
      publisher: "MDPI",
      venue: "Applied Sciences",
      date: "2021",
      year: "2021",
      type: "Journal",
      firstAuthor: false,
      citations: 54,
      authors: "S. Biswas, S. Chatterjee, Arindam Majee, S. Sen, F. Schwenker, R. Sarkar",
      abstract:
        "An ensemble of deep convolutional models for screening COVID-19 from chest CT images, improving robustness over single-model baselines.",
      links: {
        doi: "https://doi.org/10.3390/app11157004"
      }
    },
    {
      id: "pub-moth",
      title:
        "Moth-Flame Optimization-Based Deep Feature Selection for Cardiovascular Disease Detection Using ECG Signal",
      publisher: "CRC Press",
      venue: "Handbook of Moth-Flame Optimization Algorithm (Book Chapter)",
      date: "2022",
      year: "2022",
      type: "Book Chapter",
      firstAuthor: true,
      citations: 11,
      authors: "Arindam Majee, S. Biswas, S. Chatterjee, S. Sen, S. Mirjalili, R. Sarkar",
      abstract:
        "A hybrid metaheuristic deep-learning method that applies Moth-Flame Optimization to select informative features from ECG signals for cardiovascular disease detection."
    },
    {
      id: "pub-deepops",
      title: "DeepOps & SLURM: Your GPU Cluster Guide",
      publisher: "arXiv",
      venue: "arXiv preprint",
      date: "2024",
      year: "2024",
      type: "Preprint",
      firstAuthor: true,
      citations: 4,
      authors: "Arindam Majee",
      abstract:
        "A practical guide to provisioning and operating multi-GPU training clusters with DeepOps and SLURM.",
      links: {
        arxiv: "https://arxiv.org/abs/2405.00030"
      }
    },
    {
      id: "pub-swarm",
      title: "Swarm UAVs Communication",
      publisher: "arXiv",
      venue: "arXiv preprint",
      date: "2024",
      year: "2024",
      type: "Preprint",
      firstAuthor: true,
      citations: 3,
      authors: "Arindam Majee, R. Saha, S. Roy, S. Mandal, S. Chatterjee",
      abstract:
        "A study of communication strategies for coordinating swarms of unmanned aerial vehicles.",
      links: {
        arxiv: "https://arxiv.org/abs/2405.00024"
      }
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

  socialLinks: [
    { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=sqGrHcoAAAAJ&hl=en", label: "Google Scholar" },
    { platform: "GitHub", url: "https://github.com/arindammajee", label: "GitHub Profile" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/arindammajee", label: "LinkedIn" },
    { platform: "Email", url: "mailto:majeearindam06072002@gmail.com", label: "Email" }
  ]
};
