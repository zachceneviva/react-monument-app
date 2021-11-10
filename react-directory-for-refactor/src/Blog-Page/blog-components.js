import './blog.css';
import Header from './header';
import Nav from '../Landing-Page/navbar';
import BlogPost from './Blog.js';
import SideBar from './sidebar';
import Comment from './comment';
import Footer from '../Landing-Page/footer';

function Blog() {
  return (
    <div className="Blog">
      	<Header />
		<Nav />
	    <div className="wrap grid-wrapper">
			<BlogPost />
			<SideBar />
	    </div>
	    <Comment />
	    <Footer />
	</div>
  );
}

export default Blog;
