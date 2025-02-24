import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

// import { githubButtons } from '../../info/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  // const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom"  style={{backgroundColor:'black',color:'white'}} >
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://www.linkedin.com/in/vikash-kanade-39a556219/'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        
         <p className='mt-2'>@Vikash-Kanade from Indore</p>
        <p className='mt-2'>Contact +91-8889078253 / Email- kanadevicky20@gmail.com</p>
    
        
      </Container>
    </footer>
  );
};

export default Footer;
