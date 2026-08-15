import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science (AI &amp; ML)</h4>
                <h5>CMR Institute of Technology, Bengaluru</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started my Bachelor's in Computer Science with a specialization in
              Artificial Intelligence &amp; Machine Learning, maintaining a 9.45
              CGPA while building a foundation in Python, data structures, and
              core ML with Scikit-learn, Pandas, and TensorFlow.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Project Developer</h4>
                <h5>Hackathons, Certifications &amp; Freelance Work</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Competed in national-level hackathons — BrinHack, Tech Triad, and
              Full Stack Fiesta — while completing certifications in Generative
              AI &amp; ChatGPT and Python for Data Science. Discovered and
              responsibly disclosed security vulnerabilities in Paytm and
              FreeCharge through bug bounty programs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI &amp; Agentic Systems Engineer</h4>
                <h5>Technical Head, HackerEarth Club @ CMRIT</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building production-ready RAG systems and agentic AI workflows
              with LangChain and FastAPI — including MindPad AI, a full-stack
              research assistant. NVIDIA DLI-certified in building RAG agents
              with LLMs; leading technical initiatives as Technical Head of the
              HackerEarth club.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
