import { CommentData } from '../data/commentsdata';
import '../css/comment.css';
const Comments = () => {
  return (
    <div className="comment-wrapper">
      <div className="comment-part1">
        <div>DON'T JUST TAKE IT FROM US</div>
      </div>
      <div className="comment-part2">
        <div>From our users</div>
      </div>
      <div className="comment-part3">
        {CommentData.map((index, item) => {
          return <SingleComment key={index} item={index} />;
        })}
      </div>
    </div>
  );
};
const SingleComment = ({ item }) => {
  return (
    <div className="comment-part3-wrap">
      <img
        src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287dcb67e6478_Quotes.svg"
        alt=""
      />
      <div>{item.info}</div>
    </div>
  );
};
export default Comments;
