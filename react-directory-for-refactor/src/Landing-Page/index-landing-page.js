import './index-page.css';
import Article1 from './Archive/article1';
import Article2 from './Archive/article2';
import Article3 from './Archive/article3';
import Header from './header';
import Nav from './navbar';
import About from './about';
import Gallery from './gallery';
import Contact from './contact';
import Footer from './footer';

function Index() {
  return (
    <div className="Index">
      <Header/>
      <Nav/>
      <section>
      <h2>From the Archive</h2>

      <div className="grid-wrapper articles">
        <Article1/>
        <Article2/>
        <Article3/>
      </div>
      </section>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
	  
  </div>
  );
}

export default Index;
