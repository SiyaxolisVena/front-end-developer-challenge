import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'; 
import  { useState } from 'react';
import ImportedApp from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <div className="App">
      <header className='header'>
        <nav className ="main-nav">
          <div className = "nav-wrap">
            <div id = "header-navigation">
              <ul>
              <li className="nav-item">
                <a className={`nav-link custom-nav-link ${activeLink === 'Services' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavLinkClick('Services')}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link custom-nav-link ${activeLink === 'Industries' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavLinkClick('Industries')}
                >
                  Industries
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link custom-nav-link ${activeLink === 'Cases' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavLinkClick('Cases')}
                >
                  Cases
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link custom-nav-link ${activeLink === 'Contact' ? 'active' : ''}`}
                  href="#"
                  onClick={() => handleNavLinkClick('Contact')}
                >
                  Contact
                </a>
              </li>
              <li>
              <button className="btn btn-primary btn-lets-talk">
            Let's Talk
          </button>
          </li>
              </ul>
              
        </div>
        </div>
        </nav>
      </header>
      <section className='Home'>
      <div id = "container">
        <div id = "content-archive">
        <div id = "content-archive-subheader">

        <div className = 'header-info'>
        <div className = 'header-title'>
          <h1>Live with Confidence</h1>
          </div>
          <div className = 'description'>
            <p>Jose Morito brings confidence to pan-afraica sanlam campaing</p>
          </div>
          <div className="header-cta">
                  <a href="#"
                    className="btn btn-primary btn-lg btn-responsive"
                  >
                    View project
                  </a>
          
          </div>
          </div>
        </div>
      </div>
      </div>
      </section>
     <section className='About'>
       <h2> what we do</h2>
       <p>We offer a complete range of bespoke design and development services to help you turn your ideas int digital masterpiece</p>
       </section>
       <footer></footer>
    </div>
  );
}

export default App;
