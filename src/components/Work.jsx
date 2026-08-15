import "./styles/Work.css";
import WorkImage from "./WorkImage.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";

const logoModules = import.meta.glob("../assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const getAsset = (name) => {
  const match = Object.entries(logoModules).find(([path]) =>
    path.toLowerCase().includes(name.toLowerCase())
  );
  return match ? match[1] : null;
};

const projects = [
  {
    title: "MindPad AI",
    logo: "mindpad_logo",
    big: "mindpad_big",
    category: "AI Research & Study Assistant Platform",
    tools:
      "React, FastAPI, LangChain (RAG), Groq Cloud LLaMA 3.3 70B, LLaMA 4 Scout, FAISS",
    image: "/images/work/mindpad-ai.svg",
    link: "https://github.com/Priyanshu-Madhup/Mindpad-AI",
  },
  {
    title: "Stock Market Predictor",
    logo: "stock_logo",
    big: "stock_big",
    category: "Machine Learning / FinTech",
    tools: "Python, Random Forest, YFinance API, Google Gemini AI, Tkinter",
    image: "/images/work/stock-predictor.svg",
    link: "https://github.com/Priyanshu-Madhup/stock-market-predictor",
  },
  {
    title: "Leo",
    logo: "leo_logo",
    big: "leo_big",
    category: "AI Voice & Chat Assistant",
    tools:
      "Python, pywebview, Groq + OpenRouter (12+ models), FAISS RAG Memory, Google Calendar, Web Search",
    image: "https://raw.githubusercontent.com/Priyanshu-Madhup/Leo/main/images/ss1.png",
    link: "https://github.com/Priyanshu-Madhup/Leo",
  },
  {
    title: "FitAi",
    logo: "fitai_logo",
    big: "fitai_big",
    category: "AI-Powered Fitness Platform",
    tools:
      "React, AI Workout & Nutrition Plans, Gym/Park Locator, Fitness Chat Assistant",
    image: "https://raw.githubusercontent.com/Priyanshu-Madhup/fitaifinal/main/FitAi.png",
    link: "https://github.com/Priyanshu-Madhup/fitaifinal",
  },
  {
    title: "Multi-LLM Playground",
    logo: "multillm_logo",
    big: "multillm_big",
    category: "Multi-Provider LLM Chat",
    tools: "Streamlit, Groq, OpenRouter, Gemini, Serper Web Search",
    image: "/images/work/multi-llm.svg",
    link: "https://github.com/Priyanshu-Madhup/llm-service",
  },
  {
    title: "Yota",
    logo: "yota_logo",
    big: "yota_big",
    category: "AI Chatbot Platform",
    tools: "FastAPI, React, Groq LLaMA, JWT Auth, Docker",
    image: "/images/work/yota.svg",
    link: "https://github.com/Priyanshu-Madhup/yota1",
  },
  {
    title: "CarbonEx",
    logo: "carbonex_logo",
    big: "carbonex_big",
    category: "Eco-Themed Platform with Auth",
    tools: "React, FastAPI, SQLite, Glassmorphism UI, SHA-256 Auth",
    image: "/images/work/carbonex.svg",
    link: "https://github.com/Priyanshu-Madhup/carbonex",
  },
];

const Work = () => {
  useEffect(() => {
    // Pinned horizontal scroll-jacking is a desktop pattern - on mobile it
    // burns a huge vertical scroll distance to drag fixed-width cards
    // across, and fights the browser's native touch scrolling. Below the
    // desktop breakpoint the cards get a plain horizontal swipe carousel
    // instead (see Work.css), so skip the pin/scrub setup entirely.
    if (window.innerWidth <= 1024) return;

    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement.getBoundingClientRect().width;
      let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => {
            const logo = getAsset(project.logo);
            const coverImage = getAsset(project.big) || project.image;
            return (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4 className="work-title-name">
                      {logo && (
                        <img
                          className="work-logo"
                          src={logo}
                          alt={`${project.title} logo`}
                        />
                      )}
                      {project.title}
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <a
                  className="work-repo-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  <FaGithub /> View Repo
                </a>
              </div>
              <WorkImage image={coverImage} alt={project.title} link={project.link} />
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
