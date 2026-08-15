import "./styles/Career.css";

const logoModules = import.meta.glob("../assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const getLogo = (name) => {
  const match = Object.entries(logoModules).find(([path]) =>
    path.toLowerCase().includes(name.toLowerCase())
  );
  return match ? match[1] : null;
};

const vagdeviLogo = getLogo("vagdevi");
const cmritLogo = getLogo("cmrit");
const maerskLogo = getLogo("maersk");

const OrgName = ({ logo, name }) => (
  <h5 className="career-org">
    {logo && <img src={logo} alt={`${name} logo`} />}
    {name}
  </h5>
);

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
                <h4>12th Grade, Science</h4>
                <OrgName logo={vagdeviLogo} name="Vagdevi Vilas Institutions" />
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed my 12th grade with 89.2% in Science, building the
              foundation in mathematics and problem-solving that led me into
              computer science engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science (AI &amp; ML)</h4>
                <OrgName
                  logo={cmritLogo}
                  name="CMR Institute of Technology, Bengaluru"
                />
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Four years of Computer Science with a specialization in AI &amp;
              ML, maintaining a 9.45 CGPA — from hackathons (BrinHack, Tech
              Triad, Repo Genesis) and bug bounty wins to becoming Technical
              Head of the HackerEarth club and building production RAG systems
              like MindPad AI along the way.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Forward Deployed Engineering Intern</h4>
                <OrgName logo={maerskLogo} name="A.P. Moller - Maersk, Bengaluru" />
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on LLM &amp; RAG systems and MCP servers at scale — taking
              generative AI from prototype to production inside a global
              logistics enterprise, with Python and FastAPI as the core stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
