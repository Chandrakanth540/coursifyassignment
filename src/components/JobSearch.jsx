import { Popover } from 'antd';
import { DropDownSet } from '../data/jobsearch';
import '../css/jobsearch.css';
const JobSearch = () => {
  return (
    <div className="jobsearch-wrapper">
      {DropDownSet.map((item) => {
        return (
          <div>
            <DropDown item={item} key={item.title} />
          </div>
        );
      })}
    </div>
  );
};

import { RiArrowDropDownLine } from 'react-icons/ri';
const DropDown = ({ item }) => (
  <Popover
    // className=""
    arrow={false}
    placement="bottom"
    // title={item.title}
    content={
      <div className="popover">
        {item.ListValues.map((ones) => {
          return <p>{ones}</p>;
        })}
      </div>
    }
  >
    <div className="popover-title">
      {item.title}{' '}
      <span>
        <RiArrowDropDownLine size={30} />
      </span>
    </div>
  </Popover>
);
export default JobSearch;
