import "./styles/Work.css";
import WorkImage from "./WorkImage.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const projects = [
  {
    title: "MindPad AI",
    category: "AI Research & Study Assistant Platform",
    tools:
      "React, FastAPI, LangChain (RAG), Groq Cloud LLaMA 3.3 70B, LLaMA 4 Scout, FAISS",
    image: "/images/work/mindpad-ai.svg",
    link: "https://github.com/Priyanshu-Madhup/Mindpad-AI",
  },
  {
    title: "Stock Market Predictor",
    category: "Machine Learning / FinTech",
    tools: "Python, Random Forest, YFinance API, Google Gemini AI, Tkinter",
    image: "/images/work/stock-predictor.svg",
    link: "https://github.com/Priyanshu-Madhup/stock-market-predictor",
  },
  {
    title: "Claire",
    category: "AI-Powered Voice Assistant",
    tools:
      "Python, Tkinter WebView, LLaMA 3.3 70B (Groq), Gemini API, Serper API",
    image: "/images/work/claire.svg",
    link: "https://github.com/Priyanshu-Madhup/claire",
  },
];

const Work = () => {
  useEffect(() => {
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
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
