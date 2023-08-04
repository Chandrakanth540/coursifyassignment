import '../css/objectivelogo.css';
const Objectivelogo = () => {
  return (
    <div className="objectivelogo-wrapper">
      <Objective />
      <Logo />
    </div>
  );
};

const Objective = () => (
  <div className="objective-wrap">
    <div className="objective-text">AngelList Talent is now Wellfound</div>
    <div className="slogan-text">Where startups and jobseekers connect.</div>
    <div className="hire-job-divs">
      <div className="hire-btn">Find your next hire</div>
      <div className="job-btn">Find your next job</div>
    </div>
  </div>
);
const Logo = () => (
  <div className="Logo-wrap">
    <LogoPart1 />
    <LogoPart2 />
    <LogoPart3 />
  </div>
);
const LogoPart1 = () => (
  <div className="part1-wrap">
    <div className="part1-circle">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/linkedinclone-cd66b.appspot.com/o/extra%2Fcircle-part1.png?alt=media&token=155f72ae-4f05-4294-8724-7fb84351013e"
        alt=""
      />
    </div>
    <div className="part1-rectangle"></div>
  </div>
);
const LogoPart2 = () => (
  <div className="part2-wrap">
    <div className="part2-rect"></div>
    <div className="part2-w-alpha">
      <div>w</div>
    </div>
    <div className="part2-dots-wrap">
      <div className="part2-dot1">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/linkedinclone-cd66b.appspot.com/o/extra%2Fcircle-part2.png?alt=media&token=b2b07acc-2dd3-4d6d-9c32-901cf3352109"
          alt=""
        />
      </div>
      <div className="part2-dot2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/linkedinclone-cd66b.appspot.com/o/extra%2Fcircle-part2.png?alt=media&token=b2b07acc-2dd3-4d6d-9c32-901cf3352109"
          alt=""
        />
      </div>
    </div>
  </div>
);
const LogoPart3 = () => (
  <div className="part3-wrap">
    <div className="part3-rect"></div>
    <div className="part3-circle">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/linkedinclone-cd66b.appspot.com/o/extra%2Fcircle-part3.png?alt=media&token=c67e0747-6879-4deb-b548-7caf5ad2ffd4"
        alt=""
      />
    </div>
  </div>
);
export default Objectivelogo;
