import '../css/Talent.css';
const TalentFind = () => {
  return (
    <div className="talentFind-Wrapper">
      <TalentGot />
      <TalentNeed />
    </div>
  );
};

const TalentGot = () => (
  <div className="talentGot-Wrap">
    <div className="talentgot-part1">
      <img
        src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128701db7e63c6_Frame%2520283-min-p-800.png"
        alt=""
      />
    </div>
    <div className="talentgot-part2">
      <div className="gottalent-text">GOT TALENT?</div>
      <div className="jobseek-text"> Why job seekers love us</div>
      <div className="container-statements">
        <div className="statement">
          <img
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287fab77e63b3_Star.svg"
            alt=""
          />
          <div>
            Unique jobs at <span className="statement-span-text">startups</span>{' '}
            and <span className="statement-span-text">tech companies</span> you
            can't find anywhere else
          </div>
        </div>
        <div className="statement">
          <img
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128775587e63ec_Click.svg"
            alt=""
          />
          <div>
            Say goodbye to cover letters - your profile is all you need.{' '}
            <span className="statement-span-text">One click to apply</span> and
            you're done.
          </div>
        </div>
        <div className="statement">
          <img
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287515d7e63b2_List.svg"
            alt=""
          />
          <div>
            Everything you need to know to job search - including seeing{' '}
            <span className="statement-span-text">salary</span>
            and <span className="statement-span-text">stock options</span>{' '}
            upfront when looking
          </div>
        </div>
        <div className="statement">
          <img
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287b6b07e63ed_Connect.svg"
            alt=""
          />
          <div>
            Connect directly with{' '}
            <span className="statement-span-text">founders</span> at top
            startups - no third party recruiters allowed
          </div>
        </div>
      </div>
      <div className="talent-part2-btns-wrap">
        <div className="learnmore-part2">Learn more</div>
        <div className="signup-part2">Sign up now</div>
      </div>
    </div>
  </div>
);

const TalentNeed = () => (
  <div className="talentNeed-Wrap">
    <div className="talentgot-part2">
      <div className="gottalent-text">NEED TALENT?</div>
      <div
        className="jobseek-text"
        style={{ fontWeight: 700, fontSize: '43px' }}
      >
        {' '}
        Why recruiters love us
      </div>
      <div className="container-statements">
        <div className="statement">
          <img
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287fab77e63b3_Star.svg"
            alt=""
          />
          <div>
            <span className="statement-span-text">8 million</span> responsive
            and startup-ready candidates, with all the information you need to
            vet them
          </div>
        </div>
        <div className="statement">
          <img
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128775587e63ec_Click.svg"
            alt=""
          />
          <div>
            Everything you need to kickstart your recruiting - get job posts,
            company branding, and HR tools set up within
            <span className="statement-span-text">10 minutes, for free</span>
          </div>
        </div>
        <div className="statement">
          <img
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287515d7e63b2_List.svg"
            alt=""
          />
          <div>
            A free{' '}
            <span className="statement-span-text">
              applicant tracking system,
            </span>{' '}
            or free integration with any ATS you may already use
          </div>
        </div>
        <div className="statement">
          <div>
            Plus, we can do the vetting for you! With Curated, we review the
            world's top tech talent and highlight candidates directly to you 2x
            a week.
          </div>
        </div>
      </div>
      <div className="talent-part2-btns-wrap">
        <div className="learnmore-part2">Learn more</div>
        <div className="signup-part2">Sign up now</div>
      </div>
    </div>
    <div className="talentgot-part1">
      <img
        src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d712879f567e63c5_Frame%2520284-min-p-800.png"
        alt=""
      />
    </div>
  </div>
);

export default TalentFind;
