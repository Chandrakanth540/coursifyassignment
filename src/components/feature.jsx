import '../css/comment.css';
const Feature = () => {
  return (
    <div className="feature-wrapper">
      <TwoFeature />

      <AchieveBreak />
    </div>
  );
};
export default Feature;
const TwoFeature = () => (
  <div className="feature-part1">
    <div className="feature-wrap1">
      <div className="part-img">
        <img
          src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%20-%20Featured.png"
          alt=""
        />
      </div>
      <div className="part-showcase">
        <div className="showcase1">GET FEATURED</div>
        <div className="showcase2">Let us show you off</div>
        <div className="showcase3">
          Apply to be featured and we'll highlight your profile to top
          recruiters and companies searching for your specific skills.
        </div>
        <div className="showcase4">Oh, it's also 100% free.</div>
        <div className="showcase5">
          <div>Learn more</div>
        </div>
      </div>
    </div>
    <div className="feature-wrap2">
      <div className="part-img" style={{ backgroundColor: '#eaebff' }}>
        <img
          src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287f5ab7e63e6_AGT%20-%20Calculator%201.png"
          alt=""
        />
      </div>
      <div className="part-showcase">
        <div className="showcase1">SALARY CALCULATOR</div>
        <div className="showcase2">Know your worth</div>
        <div className="showcase3">
          We have the data. Research by job title, industry, and company size to
          find your salary range and be prepared to nail your negotiations.
        </div>

        <div className="showcase5">
          <div>Calculate your salary</div>
        </div>
      </div>
    </div>
  </div>
);
const AchieveBreak = () => (
  <div className="achieve-wrapper">
    <div className="achieve1">
      <div>Wellfound's</div>
    </div>
    <div className="achieve2">
      <div>
        <span className="achieve2-span">10</span> of{' '}
        <span className="achieve2-span">10</span> in{' '}
        <span className="achieve2-span">2022</span>
      </div>
    </div>
    <div className="achieve3">
      <div>10 groundbreaking teams across 10 trending industries</div>
    </div>
    <div className="achieve4">
      <div>Discover our 10 of 10</div>
    </div>
  </div>
);
