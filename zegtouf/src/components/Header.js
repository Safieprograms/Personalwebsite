import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {

  return ( 
    <header>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-56} duration={500}>About me</Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true} offset={90} duration={500}>Projects</Link>
      <Link activeClass="active" to="resume" spy={true} smooth={true} offset={90} duration={500}>Resume</Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-20} duration={500}>Contact me</Link>
    </header>
  );
}
 
export default Header;