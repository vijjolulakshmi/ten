import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import bannerImg from "./images/banner.jpg";

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-12 banner'>
            <img src={bannerImg} width="100%"/>
          </div>
          <h1>Welcome to my Webpage</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
