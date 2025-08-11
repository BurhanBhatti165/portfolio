/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Burhan Bhatti",
  title: "Hi all, I'm Burhan",
  subTitle: emoji(
    "A passionate Computer Science undergraduate at FAST-NUCES, Lahore, specializing in web development and AI/ML. Proficient in C++, React, Django, Python and LangChain, with strong knowledge of modern software engineering practices. Demonstrated ability to build scalable projects, collaborate in cross-functional teams, and continuously explore emerging technologies. Eager to contribute to impactful software solutions while expanding a versatile technical skillset."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BurhanBhatti165",
  linkedin: "https://www.linkedin.com/in/burhanbhatti165/",
  gmail: "burhanbhatti166@gmail.com",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "AI/ML & Full-Stack Expertise",
  subTitle: "PASSIONATE COMPUTER SCIENCE STUDENT SPECIALIZING IN ARTIFICIAL INTELLIGENCE, MACHINE LEARNING, AND MODERN WEB DEVELOPMENT",
  skills: [
    emoji(
      "🤖 Develop cutting-edge AI/ML solutions using LangChain, RAG, and advanced neural network architectures"
    ),
    emoji("⚡ Build highly interactive, responsive web applications with React.js and modern web technologies"),
    emoji(
      "🚀 Create scalable full-stack applications with Django, FastAPI, and Python backend technologies"
    ),
    emoji(
      "🔮 Implement real-time AI features using WebRTC, STT/TTS with Whisper and ElevenLabs"
    ),
    emoji(
      "🧠 Design and deploy custom neural networks for computer vision and natural language processing"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AI/ML",
      logo: "https://img.icons8.com/color/96/artificial-intelligence.png",
      officialUrl: "https://openai.com/"
    },
    {
      skillName: "Python",
      logo: "https://img.icons8.com/color/96/python.png",
      officialUrl: "https://python.org/"
    },
    {
      skillName: "HTML",
      logo: "https://img.icons8.com/color/96/html-5.png",
      officialUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      skillName: "CSS",
      logo: "https://img.icons8.com/color/96/css3.png",
      officialUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
      skillName: "React",
      logo: "https://img.icons8.com/color/96/react-native.png",
      officialUrl: "https://reactjs.org/"
    },
    {
      skillName: "JavaScript",
      logo: "https://img.icons8.com/color/96/javascript.png",
      officialUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      skillName: "Neural Networks",
      logo: "https://img.icons8.com/color/96/neural-network.png",
      officialUrl: "https://pytorch.org/"
    },
    {
      skillName: "LangChain",
      logo: "https://img.icons8.com/color/96/link.png",
      officialUrl: "https://langchain.com/"
    },
    {
      skillName: "Django",
      logo: "https://img.icons8.com/color/96/django.png",
      officialUrl: "https://djangoproject.com/"
    },
    {
      skillName: "FastAPI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      officialUrl: "https://fastapi.tiangolo.com/"
    },
    {
      skillName: "Git",
      logo: "https://img.icons8.com/color/96/git.png",
      officialUrl: "https://git-scm.com/"
    },
    {
      skillName: "Database",
      logo: "https://img.icons8.com/color/96/database.png",
      officialUrl: "https://www.postgresql.org/"
    },
    {
      skillName: "Linux",
      logo: "https://img.icons8.com/color/96/linux.png",
      officialUrl: "https://www.linux.org/"
    },
    {
      skillName: "MCP",
      logo: require("./assets/images/skill.svg"),
      officialUrl: "https://github.com/modelcontextprotocol"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FAST-NUCES, Lahore",
      logo: require("./assets/images/fast.png"), 
      subHeader: "Bachelor of Science in Computer Science (6th Semester)",
      duration: "September 2022 - Present",
      desc: "Currently pursuing Computer Science degree with focus on software engineering, web development, and AI/ML technologies.",
      descBullets: [
        "Specializing in web development and AI/ML technologies",
        "Strong foundation in software engineering practices",
        "Active participation in technical projects and competitions"
      ]
    },
    {
      schoolName: "Punjab College, Sheikhupura",
      logo: require("./assets/images/pgc.png"),
      subHeader: "Intermediate (Pre-Engineering)",
      duration: "2019 - 2021",
      desc: "Completed pre-engineering with strong foundation in mathematics and sciences.",
      descBullets: ["Pre-Engineering focus with mathematics and sciences"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML & Neural Networks", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/React Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Python & Backend Systems",
      progressPercentage: "75%"
    },
    {
      Stack: "LangChain & RAG Systems",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Mavericks United",
      companylogo: require("./assets/images/mavericks.jpg"), 
      desc: "Working on automating internal processes using customized ML pipelines and fine-tuned LLMs. Building scalable AI solutions tailored to company requirements for operational efficiency.",
      descBullets: [
        "Developing customized ML pipelines for process automation",
        "Building scalable AI solutions for operational efficiency",
        "Working with fine-tuned LLMs for business applications"
      ]
    },
    {
      role: "AI Intern",
      company: "Neuronexus",
      companylogo: require("./assets/images/neuron.jpg"), 
      desc: "Developed AI-powered projects using LangChain, RAG, and LlamaGraph. Currently working on configuring and maintaining scalable MCP (Model Context Protocol) servers.",
      descBullets: [
        "Developed AI-powered projects using LangChain, RAG, and LlamaGraph",
        "Configuring and maintaining scalable MCP servers",
        "Working with advanced AI/ML technologies and frameworks"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME NOTABLE PROJECTS THAT I'VE DEVELOPED",
  projects: [
    
    {
      image: require("./assets/images/nextuLogo.webp"), // PrepFAST placeholder
      projectName: "PrepFAST | Python, Django, AI/ML",
      projectDesc: "Developed a web platform enabling students to access past exam papers and generate AI-based practice questions. Implemented paper evaluation features to enhance exam preparation through interactive feedback.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/BurhanBhatti165/PrepFast"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // DRS App placeholder
      projectName: "DRS App | Python, ML, Computer Vision",
      projectDesc: "Decision Review System for cricket academies using ML models for ball trajectory analysis and decision making. Built with Python, TensorFlow, and advanced AI/ML technologies.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/BurhanBhatti165/DRS_App"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Skill Share placeholder
      projectName: "Skill Share Platform | React, ASP.NET, Django",
      projectDesc: "Platform for students to register for courses, review instructors, and track learning progress. Built with React, ASP.NET, and Django for comprehensive learning management.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/BurhanBhatti165/skill-share-"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // ASL Recognition placeholder
      projectName: "ASL Recognition System | HTML, Computer Vision",
      projectDesc: "American Sign Language recognition system using computer vision and machine learning. Enables real-time sign language interpretation for improved accessibility.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/BurhanBhatti165/asl-recognition"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // COAL Project placeholder
      projectName: "Jumping Rabbit Game | Assembly Language",
      projectDesc: "Designed a jumping rabbit game using Assembly language, delving into low-level programming concepts. This endeavor enriched understanding of computer architecture and assembly programming.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/BurhanBhatti165/COAL-PROJECT"
        }
      ]
    },
    
    {
      image: require("./assets/images/nextuLogo.webp"), // OOP Tetris placeholder
      projectName: " Tetris Game | C++",
      projectDesc: "Classic Tetris game implementation using Object-Oriented Programming principles in C++. Demonstrates strong software engineering practices and game development skills.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/BurhanBhatti165/OOP-PROJECT"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // High Performance Compiler placeholder
      projectName: "High Performance Compiler | C++",
      projectDesc: "Advanced compiler implementation focusing on optimization and performance. Built with C++ for efficient code compilation and execution.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/BurhanBhatti165/cc_project"
        }
      ]
    },
    
    
  ],
  display: true // Set false to hide this section, defaults to true
};



const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Building AI Browser Agents",
      subtitle:
        "Completed DeepLearning.AI course on building AI agents that navigate and interact with websites. Learned agent frameworks, evaluation, monitoring, and fine-tuning for reliable web automation.",
      image: require("./assets/images/codeInLogo.webp"), // Using existing image as placeholder
      imageAlt: "AI Browser Agents Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.deeplearning.ai/accomplishments/3b5b8664-e16a-4e88-82da-330178ff3426?usp=sharing"
        }
      ]
    },
    {
      title: "MCP: Build Rich-Context AI Apps with Anthropic",
      subtitle:
        "Completed DeepLearning.AI course on Model Context Protocol (MCP). Learned to build AI apps that access tools, data, and prompts using MCP architecture for enhanced AI capabilities.",
      image: require("./assets/images/googleAssistantLogo.webp"), // Using existing image as placeholder
      imageAlt: "MCP AI Apps Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.deeplearning.ai/accomplishments/6926a2ec-aed7-4bc6-8ea1-a66b1b04dbdb?usp=sharing"
        }
      ]
    },
    
    {
      title: "Software Engineering Best Practices",
      subtitle: "Demonstrated ability to build scalable projects, collaborate in cross-functional teams, and continuously explore emerging technologies.",
      image: require("./assets/images/nextuLogo.webp"), // Using existing image as placeholder
      imageAlt: "Software Engineering Logo",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/BurhanBhatti165"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@burhanbhatti166/building-ai-powered-applications-with-langchain-e8920ccddc16",
      title: "Building AI-Powered Applications with LangChain",
      description:
        "Exploring the capabilities of LangChain in building intelligent applications and the integration of RAG systems for enhanced user experiences."
    },
    {
      url: "https://medium.com/@burhanbhatti166/modern-web-development-with-react-and-django-872cfaa3afaa",
      title: "Modern Web Development with React and Django",
      description:
        "Best practices for building scalable web applications using React.js frontend and Django backend with modern software engineering practices."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "AI in Modern Web Applications",
      subtitle: "Tech Talk at FAST-NUCES, Lahore",
      slides_url: "https://slides.com/burhanbhatti165/ai-web-apps",
      event_url: "https://www.linkedin.com/in/burhanbhatti165/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-313-6994851",
  email_address: "burhanbhatti166@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", 
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
