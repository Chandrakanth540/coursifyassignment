import google from '../assets/google-sym.png';
import { useEffect, useState } from 'react';
import '../css/signcompanies.css';
import { CompaniesList } from '../data/companies';
const SignCompanies = () => {
  return (
    <div className="signcompanies-wrapper">
      <SignUp />
      <LineUp />
      <CountWrap />
      <CompaniesMoving />
    </div>
  );
};
const SignUp = () => (
  <div className="signup-wrap">
    <div className="input-div">
      <input
        type="text"
        name=""
        id=""
        className="input-tag"
        placeholder="Your Email"
      />
    </div>
    <div className="signup-div">
      <div>signup</div>
    </div>
    <div className="or-div">
      <div>or</div>
    </div>
    <div className="google-div">
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/linkedinclone-cd66b.appspot.com/o/extra%2Fgoogle-sym.png?alt=media&token=b9a12ad2-7cac-4734-a0c7-84234a7ed7cd"
          alt=""
          height={20}
          width={20}
        />
        Sign Up With Google
      </div>
    </div>
  </div>
);
const LineUp = () => (
  <div className="lineup-wrapper">
    <div className="lineup-part1">
      <div>
        Looking to fund raise or invest in the next generation of great
        startups? AngelList Venture can now be found at AngelList.com.
      </div>
    </div>
    <div className="lineup-part2">Already have an account? Log in</div>
  </div>
);

const CountWrap = () => (
  <div className="count-wrapper">
    <div className="count-part1">
      130K + <span className="count-span">Tech Jobs</span>
    </div>
    <div className="count-part2">
      <OnlyMatches />
    </div>
    <div className="count-part3">
      8M + <span className="count-span">Startup-ready candidates</span>
    </div>
  </div>
);

const OnlyMatches = () => {
  const [matches, setMatches] = useState(0);
  useEffect(() => {
    const targetValue = 6000000;
    const updateMatches = () => {
      if (matches >= targetValue) {
        clearInterval(interval);
      } else {
        const remainingMatches = targetValue - matches;
        const step = Math.max(1, Math.floor(remainingMatches / 10));
        setMatches((prevMatches) => prevMatches + step);
      }
    };

    const interval = setInterval(updateMatches, 100);
    return () => clearInterval(interval);
  }, [matches]);
  return (
    <>
      {matches.toLocaleString()}{' '}
      <span className="count-span">Matches Made</span>
    </>
  );
};

const CompaniesMoving = () => (
  <div className="marquee-container">
    <div className="marquee">
      {CompaniesList.map((item, index) => (
        <SingleCompany item={item} key={index} />
      ))}
    </div>
  </div>
);

const SingleCompany = ({ item }) => (
  <div className="company">
    <img src={item.imgUrl} alt="" />
  </div>
);

export default SignCompanies;
