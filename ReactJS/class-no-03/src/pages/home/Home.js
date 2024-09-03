
import Navbar from "../../components/navbar/Navbar";
import Hero from '../../components/hero/Hero';
import Blog from '../../pages/blog/Blog';
import Footer from "../../components/footer/Footer";


function Home() {
  return (
    <div>
      <Navbar />
     <Hero />
    <Blog />
     <Footer />
    </div>
  );
}

export default Home;
