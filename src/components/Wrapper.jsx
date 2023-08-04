import BlogPosts from './BlogPosts';
import Comments from './Comments';
import Footer from './Footer';
import Header from './Header';
import JobSearch from './JobSearch';
import Objectivelogo from './Objectivelogo';
import SignCompanies from './SignCompanies';
import TalentFind from './Talent';
import Feature from './feature';

const PagesWrapper = () => {
  return (
    <div>
      <Header />
      <Objectivelogo />
      <SignCompanies />
      <TalentFind />
      <Comments />
      <Feature />
      <BlogPosts />
      <JobSearch />
      <Footer />
    </div>
  );
};
export default PagesWrapper;
