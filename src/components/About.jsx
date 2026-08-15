import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm <strong>Priyanshu Madhup</strong>, an AI Forward Deployed Engineering
          Intern at <strong>A.P. Moller - Maersk</strong>, based in Bengaluru,
          India, while pursuing my B.E. in Computer Science (AI &amp; ML) at CMR
          Institute of Technology. I build production-ready LLM &amp; RAG systems,
          MCP servers, and agentic AI workflows with LangChain and FastAPI —
          turning complex AI research into intelligent, user-centric products.
        </p>
        <div className="about-stats">
          <div className="about-stat-item">
            <h4>9.45</h4>
            <p>CGPA</p>
          </div>
          <div className="about-stat-item">
            <h4>7+</h4>
            <p>Projects Shipped</p>
          </div>
          <div className="about-stat-item">
            <h4>15+</h4>
            <p>Skills &amp; Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
