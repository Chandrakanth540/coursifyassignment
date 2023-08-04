import '../css/jobsearch.css';
const Footer = () => {
  return (
    <div className="Footer-wrapper">
      <FooterOne />
      <FooterTwo />
    </div>
  );
};
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FooterData } from '../data/Footerdata';

const FooterOne = () => (
  <div className="Footer-wrap1">
    <div className="wrap1-left">
      <div className="wrap1-left-img">
        <img
          src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/643439bd94363f4d30f385c1_Primary%20Logo%20-%20Black.svg"
          alt=""
        />
      </div>
      <div className="wrap1-left-socialmedia">
        <div>
          <AiOutlineTwitter size={28} />
        </div>
        <div>
          <AiOutlineInstagram size={30} />
        </div>
      </div>
    </div>
    <div className="wrap1-right">
      {FooterData.map((item, index) => {
        return <ListFormation item={item} key={item.title} />;
      })}
    </div>
  </div>
);
const ListFormation = ({ item }) => (
  <div className="listformed-wrap">
    <div className="listformed-title">{item.title}</div>
    <div className="listformed-values">
      {item.ListValues.map((Value) => {
        return <li className="li-value">{Value}</li>;
      })}
    </div>
  </div>
);
const FooterTwo = () => (
  <div className="Footer-wrap2">
    <div className="rights">
      Copyright © 2023 Wellfound (formerly AngelList Talent). All rights
      reserved.
    </div>
    <div className="all-techs">
      Browse by: <a href="#">Jobs</a>, <a href="#">Remote Jobs</a> ,{' '}
      <a href="#">Locations</a>, <a href="#">Startups</a>,{' '}
      <a href="#">Industries</a>, <a href="#">Tech Hubs</a>
    </div>
  </div>
);
export default Footer;
