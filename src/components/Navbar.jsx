import { Menu } from "antd";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center px-6 md:px-12 py-4 shadow-lg fixed top-0 z-10 bg-opacity-100 bg-transparent w-full bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Link to="/" className="text-2xl font-bold">
          All Business Soluition
        </Link>
      </div>

      {/* Menu Section */}
      <Menu
        mode="horizontal"
        className="hidden md:flex flex-grow justify-center bg-transparent border-none text-gray-700 font-medium"
      >
        <Menu.Item key="home" className="hover:text-blue-600">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.SubMenu
          key="services"
          title="Services+"
          className="hover:text-blue-600 text-rose-800"
          popupClassName="custom-submenu"
        >
          <div className="grid grid-cols-2">
            <Menu.Item key="ecommerce">
              <Link to="/eCommerce-service"> E-Commerce Solutions</Link>
            </Menu.Item>
            <Menu.Item key="web"><Link to="/webdev-service"> Web Development</Link></Menu.Item>
            <Menu.Item key="mobile">App Development</Menu.Item>
            <Menu.Item key="uiux">UI/UX Design</Menu.Item>
          </div>
        </Menu.SubMenu>
        <Menu.Item key="portfolio" className="hover:text-blue-600">
          <Link to="/portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="aboutus" className="hover:text-blue-600">
          <Link to="/about-us">About Us</Link>
        </Menu.Item>
        <Menu.Item key="article" className="hover:text-blue-600">
          <Link to="/article">Article</Link>
        </Menu.Item>
      </Menu>

      {/* Contact Button */}
      <button className="hidden md:flex px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
        <Link to="/contact" className="flex items-center">
          <span>Contact Us</span>
          <span className="ml-2 text-xl">
            <SiMinutemailer />
          </span>
        </Link>
      </button>

      {/* Mobile Menu */}
      <div className="md:hidden ml-auto">
        <Menu
          mode="vertical"
          className="bg-transparent border-none text-gray-700 font-medium"
        >
          <Menu.SubMenu
            key="more"
            title={
              <div className="flex items-center">
                <span className="text-lg font-bold">☰</span>
              </div>
            }
          >
            <Menu.Item key="home-mobile">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.SubMenu key="services-mobile" title="Services+">
              <Menu.Item key="web-mobile">Web Development</Menu.Item>
              <Menu.Item key="mobile-mobile">Mobile Apps</Menu.Item>
              <Menu.Item key="uiux-mobile">UI/UX Design</Menu.Item>
              <Menu.Item key="seo-mobile">SEO Optimization</Menu.Item>
              <Menu.Item key="cloud-mobile">Cloud Solutions</Menu.Item>
              <Menu.Item key="data-mobile">Data Analysis</Menu.Item>
              <Menu.Item key="cybersecurity-mobile">Cybersecurity</Menu.Item>
              <Menu.Item key="ecommerce-mobile">E-Commerce Solutions</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="portfolio-mobile">
              <Link to="/portfolio">Portfolio</Link>
            </Menu.Item>
            <Menu.Item key="aboutus-mobile">
              <Link to="/about-us">About Us</Link>
            </Menu.Item>
            <Menu.Item key="article-mobile">
              <Link to="/article">Article</Link>
            </Menu.Item>
            <Menu.Item key="contact-mobile">
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
