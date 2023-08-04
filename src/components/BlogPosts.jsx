import '../css/blog.css';
import { BlogData } from '../data/blogdata';
const BlogPosts = () => {
  return (
    <div>
      <BlogHeads />
      <div className="blogpost-wrapper">
        {BlogData.map((item) => {
          return <EachBlog key={item.header} item={item} />;
        })}
      </div>
    </div>
  );
};
const BlogHeads = () => (
  <div className="bloghead-wrap">
    <div className="bloghead1">From the blog</div>
    <div className="bloghead2">
      <div>More Posts</div>
    </div>
  </div>
);
const EachBlog = ({ item }) => (
  <div className="eachblog-wrap">
    <div className="blog1">
      <img src={item.blogUrl} alt="" />
    </div>
    <div className="blog2">
      <div>{item.heading}</div>
    </div>
    <div className="blog3">
      <div>{item.title}</div>
    </div>
    <div className="blog4">
      <div>{item.content}</div>
    </div>
    <div className="blog5">
      <div>Read more</div>
    </div>
  </div>
);
export default BlogPosts;
