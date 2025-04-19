import "../Css/Layout/nav.scss"
// import "../Responsive/nav.css"
import { Link   } from "react-router-dom"
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import logo from "../Assets/Main/logo.webp"

export default function Nav() {


    const navigate = useNavigate();

    const handleScroll = useCallback((sectionId) => {
        navigate("/#");
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }, [navigate]);


    const [activeLink, setActiveLink] = useState("/");
    
    const handleClick = (link) => {
        setActiveLink(link);

    };
    
    
    return(
        <nav>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <div className="links">
                <Link to="/"  className={activeLink === "/" ? "active" : ""}  onClick={() => { handleClick("/"); handleScroll("homeHero");}} >home</Link>
                <Link to="/about"  className={activeLink === "/about" ? "active" : ""} onClick={() => {handleClick("/about") ; handleScroll("aboutHero");}}>about</Link>
                <Link to="/contact"  className={activeLink === "/contact" ? "active" : ""} onClick={() => {handleClick("/contact") ; handleScroll("shopHero");}}>contact</Link>
                <Link to="/blog"  className={activeLink === "/blog" ? "active" : ""} onClick={() => {handleClick("/blog") ; handleScroll("aboutHero");}}>blog</Link>
                  </div>

        </nav>
    )
}