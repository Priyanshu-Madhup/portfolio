import "./styles/Landing.css";

const Landing = ({ children }) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRIYANSHU
              <br />
              <span>MADHUP</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Passionate</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">ML Developer</div>
              <div className="landing-h2-2">GenAI Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">GenAI Engineer</div>
              <div className="landing-h2-info-1">ML Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
