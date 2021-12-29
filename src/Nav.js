import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Main from './Main';
import Contacts from './Contacts';
import About from './About';
import Error404 from './Error404';

function Nav() {

  let links = {
    Main: '/',
    About: '/about',
    Contacts: '/contacts'
  }

  return (
    <Router>
      <div>
        <h4>Навигация по сайту</h4>

        <nav>
          {Object.keys(links).map(item => {
            return <p><Link to={links[item]}>{item}</Link></p>
          })
          }

        </nav>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        </div>
      </Router>
  );
}

export default Nav;
