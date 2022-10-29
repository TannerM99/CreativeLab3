import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact</Link>
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