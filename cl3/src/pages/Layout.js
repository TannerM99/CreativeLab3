import { Outlet, Link } from "react-router-dom";
import logo from './images/photologo.png';
import dog from './images/dog.png';
import cat from './images/cat.png';
import other from './images/other.png';

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={logo} width="30" height="30" alt=""/>
        </a>
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blogs">Dogs</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Cats</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
      
      <footer>
        <p>Mike Mella<br></br>
          Tanner Manwaring<br></br>
          <a href="https://github.com/TannerM99/CreativeLab3.git">GitHub Repository</a>
        </p>
      </footer>
    </>
  )
};

export default Layout;