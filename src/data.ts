import { Profile } from "./types";

export const portfolioData: Profile = {
  name: "Arindam Majee",
  title: "SDE-I @ Amazon India",
  tagline: "SDE-I at Amazon India | AI/ML Researcher | Specializing in CV, RL, Robotics, LLMs & Graphs",
  aboutMe: "Highly proficient Software Development Engineer with 2+ years of experience building and scaling mission-critical, high-throughput automation systems for the world's largest logistics networks. My expertise is centered on distributed systems, optimizing MLOps pipelines, and cloud infrastructure management.",
  detailedBio: "I am a Software Development Engineer - I (SDE-I) at Amazon India, Bangalore. Earlier, I worked as a Research Assistant in the Institute of Advancing Intelligence at TCG CREST with Prof. Swagatam Das. I graduated with First Class Distinction with Honours in Electronics and Telecommunication Engineering from Jadavpur University, Kolkata. My undergraduate thesis was on object tracking using reinforcement learning from 2D videos under the guidance of Prof. Amit Konar and Dr. Pratyusha Rakshit. During my undergraduate studies, I also conducted robotics research at Toronto Metropolitan University (sponsored by MITACS) and worked as a research intern on diverse intelligent automation projects.",
  email: "majeearindam06072002@gmail.com",
  location: "Bengaluru, Karnataka, India",
  skills: [
    { name: "Python", category: "Backend", level: "Expert" },
    { name: "C++", category: "Backend", level: "Expert" },
    { name: "Java", category: "Backend", level: "Expert" },
    { name: "Node.js (Express)", category: "Backend", level: "Advanced" },
    { name: "SQL", category: "Backend", level: "Advanced" },
    
    { name: "AWS (AppConfig, CloudWatch)", category: "Tools & Others", level: "Expert" },
    { name: "Containerization (Docker)", category: "Tools & Others", level: "Expert" },
    { name: "TensorFlow & PyTorch", category: "Tools & Others", level: "Expert" },
    { name: "Git & GitHub CI/CD", category: "Tools & Others", level: "Advanced" },
    { name: "MATLAB", category: "Tools & Others", level: "Advanced" },
    { name: "Linux", category: "Tools & Others", level: "Advanced" },

    { name: "Distributed Systems", category: "Design", level: "Expert" },
    { name: "MLOps Pipelines", category: "Design", level: "Expert" },
    { name: "Computer Vision (CV)", category: "Design", level: "Expert" },
    { name: "Reinforcement Learning (RL)", category: "Design", level: "Expert" },
    { name: "Knowledge Graphs", category: "Design", level: "Advanced" },
    { name: "Robotics & Automation", category: "Design", level: "Advanced" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Alzheimer's Disease Detection from MRI",
      description: "An AI-based diagnostic assistant using deep learning to identify Alzheimer's disease patterns from brain MRI scans.",
      longDescription: "Developed an advanced deep learning framework designed to analyze MRI scans for the early and precise detection of Alzheimer's Disease. Leveraging customized 3D Convolutional Neural Network (CNN) architectures, the system extracts subtle structural degeneration markers from brain scans to assist medical professionals in early clinical diagnosis.",
      technologies: ["Python", "PyTorch", "Deep Learning", "CNN", "Medical Image Processing", "MRI Analysis"],
      featured: true
    },
    {
      id: "proj-2",
      title: "Line Follower Bot with PID Control",
      description: "An autonomous robotics platform using proportional-integral-derivative feedback loops for highly stable track following.",
      longDescription: "Designed and built an autonomous line follower robot utilizing high-frequency Proportional-Integral-Derivative (PID) feedback control. Calibrated infrared sensor arrays and motor controller drivers for smooth navigation around tight curves and varying track conditions. Developed in connection with Jadavpur University.",
      technologies: ["C++", "PID Tuning", "Arduino", "Robotics", "PID Feedback Control", "Hardware Integration"],
      featured: true
    },
    {
      id: "proj-3",
      title: "Reinforcement Learning Object Tracking",
      description: "An autonomous computer vision tracker trained using state-of-the-art Deep Q-Networks (DQN) in a custom virtual environment.",
      longDescription: "Undergraduate thesis project centered on teaching artificial agents to dynamically track target objects in complex 2D videos. Implemented reinforcement learning algorithms (deep reinforcement learning) where the camera/tracker agent optimizes its bounding box position via reward signals, outperforming conventional rule-based visual tracking frameworks.",
      technologies: ["Python", "PyTorch", "Reinforcement Learning", "Computer Vision", "OpenAI Gym", "Q-Learning"],
      featured: true
    },
    {
      id: "proj-4",
      title: "COVID-19 Detection from CT Scans",
      description: "A binary and multi-class medical diagnostic classifier built on custom convolutional neural networks for CT scan evaluation.",
      longDescription: "Engineered and validated custom convolutional neural network (CNN) architectures to classify chest and brain CT scan images for rapid COVID-19 screening. Evaluated dataset class imbalances, applied strategic data augmentations, and analyzed model decisions using visual activation mapping.",
      technologies: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN", "Medical Imaging"],
      featured: false
    }
  ],
  experiences: [
    {
      id: "exp-1",
      company: "Amazon",
      role: "Software Development Engineer - I",
      period: "Jan 2024 - Present",
      location: "Bangalore, India · On-site",
      description: [
        "Drove $32M+ Annualized Cost Efficiency by designing and implementing a highly configurable, multi-zone package sorting functionality across over 150 delivery stations.",
        "Engineered mission-critical, high-throughput backend services handling massive scale logistics and package routing pipelines.",
        "Monitored, optimized, and maintained cloud infrastructure deployments utilizing AWS services, including AppConfig, CloudWatch, and auto-scaling microservices."
      ],
      skillsUsed: ["Java", "Distributed Systems", "AWS", "Containerization", "Microservices"]
    },
    {
      id: "exp-2",
      company: "TCG CREST (Institute of Advancing Intelligence)",
      role: "Research Assistant (Full-time)",
      period: "Jun 2023 - Jan 2024",
      location: "Kolkata, West Bengal, India · On-site",
      description: [
        "Worked as a full-time Research Assistant in the Institute of Advancing Intelligence (IAI) under the supervision of leading AI scientist Prof. Swagatam Das.",
        "Formulated and implemented advanced mathematical optimization models and deep neural network designs.",
        "Conducted research on machine learning algorithms, reinforcement learning, and graph-structured representation learning."
      ],
      skillsUsed: ["Python", "Machine Learning", "Deep Learning", "Graph Neural Networks", "Optimization Algorithms"]
    },
    {
      id: "exp-3",
      company: "Indian Statistical Institute (ISI), Kolkata",
      role: "Research Assistant (Part-time)",
      period: "May 2023 - Jan 2024",
      location: "Kolkata, West Bengal, India · On-site",
      description: [
        "Conducted artificial intelligence research on complex Knowledge Graphs, semantic modeling, and reasoning algorithms.",
        "Coauthored reports and structured research publications explaining node embeddings and path search strategies."
      ],
      skillsUsed: ["Python", "Knowledge Graphs", "Machine Learning"]
    },
    {
      id: "exp-4",
      company: "Jadavpur University",
      role: "Undergraduate Student Researcher",
      period: "Jul 2020 - Jul 2023",
      location: "Kolkata, West Bengal, India · On-site",
      description: [
        "Conducted academic research and developed innovative biomedical machine learning projects.",
        "Published high-impact papers in reputed medical informatics venues covering cardiovascular and cancer diagnosis.",
        "Designed and tuned metaheuristic optimization algorithms (like Moth-Flame Optimization and Dragonfly Algorithm) to perform optimal feature selection on medical datasets."
      ],
      skillsUsed: ["Python", "TensorFlow", "MATLAB", "SQL", "Feature Selection", "Metaheuristics"]
    },
    {
      id: "exp-5",
      company: "Toronto Metropolitan University",
      role: "Research Intern (MITACS)",
      period: "May 2022 - Aug 2022",
      location: "Toronto, Ontario, Canada · Virtual",
      description: [
        "Conducted international research sponsored by the prestigious MITACS program at the Robotics, Mechatronics, and Automation Laboratory (RMAL).",
        "Developed reinforcement learning agent models for robotic path tracking and 2D visual object tracking from video frames."
      ],
      skillsUsed: ["Python", "PyTorch", "Reinforcement Learning", "Robotics", "Computer Vision"]
    },
    {
      id: "exp-6",
      company: "Edufeat",
      role: "Subject Matter Expert",
      period: "Apr 2021 - Jun 2023",
      location: "Remote · Part-time",
      description: [
        "Delivered technical support and expert solutions in computer science, software engineering, and algorithmic problems.",
        "Formulated clean, well-documented code examples and explanation guides for students in Python, C++, and Java."
      ],
      skillsUsed: ["Problem Solving", "C++", "Python", "Java", "Data Structures"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Jadavpur University",
      degree: "Bachelor of Engineering - BE (Hons), Electronics and Telecommunication Engineering",
      period: "Jul 2019 - May 2023",
      grade: "CGPA: 9/10 (86.12%)",
      description: "Graduated with First Class Distinction with Honours. Completed undergraduate thesis on object tracking using reinforcement learning from 2D videos under the guidance of Prof. Amit Konar and Dr. Pratyusha Rakshit."
    },
    {
      id: "edu-2",
      institution: "Talajuri Srimati High School",
      degree: "Higher Secondary (10+2) in Science (WBCHSE)",
      period: "2017 - 2019",
      grade: "92.6%",
      description: "Studied physics, chemistry, mathematics, computer science, Bengali, and English. Graduated with exceptional marks."
    }
  ],
  publications: [
    {
      id: "pub-1",
      title: "Moth-Flame Optimization-Based Deep Feature Selection for Cardiovascular Disease Detection Using ECG Signal",
      publisher: "CRC Press",
      date: "Jun 20, 2022",
      authors: "Arindam Majee, etc.",
      abstract: "Designed a hybrid metaheuristic deep learning architecture that applies Moth-Flame Optimization to perform feature selection on ECG signal indicators, achieving highly accurate cardiovascular disease detection."
    },
    {
      id: "pub-2",
      title: "Breast Cancer Detection from Thermal Images using Grunwald-Letnikov aided Dragonfly Algorithm based Deep Feature Selection Method",
      publisher: "Computer in Biology and Medicine",
      date: "Nov 14, 2021",
      authors: "Arindam Majee, etc.",
      abstract: "Formulated a deep feature selection mechanism utilizing a Grunwald-Letnikov fractional derivative-aided Dragonfly metaheuristic algorithm to identify malignancy markers in breast thermal scan datasets."
    }
  ],
  awards: [
    {
      id: "aw-1",
      title: "JBNSTS Senior Research Scholarship",
      issuer: "Jagadish Bose National Science Talent Search",
      date: "Dec 2019",
      description: "Highly competitive research scholarship awarded annually to the top ~60 meritorious science and engineering undergraduate students in the state of West Bengal. Associated with Jadavpur University."
    },
    {
      id: "aw-2",
      title: "JBNSTS Junior Scholar",
      issuer: "Jagadish Bose National Science Talent Search",
      date: "Dec 2017",
      description: "Scholarship awarded for academic excellence during high school studies, following a state-wide talent selection assessment."
    }
  ],
  socialLinks: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/arindammajee", label: "LinkedIn Connect" },
    { platform: "GitHub", url: "https://github.com/arindammajee", label: "GitHub Profile" },
    { platform: "Twitter", url: "https://twitter.com/arindammajee", label: "Twitter Feed" },
    { platform: "Google Scholar", url: "https://scholar.google.com/citations?view_op=search_authors&mauthors=Arindam+Majee", label: "Google Scholar" },
    { platform: "ResearchGate", url: "https://www.researchgate.net/profile/Arindam-Majee", label: "ResearchGate Profile" },
    { platform: "Email", url: "mailto:majeearindam06072002@gmail.com", label: "Send Email" }
  ],
  hobbies: [
    "Machine Learning Research",
    "Competitive Programming",
    "Robotics & Hardware Hacking",
    "Writing Scientific Technical Articles",
    "Exploring Advanced Distributed Architectures"
  ]
};
