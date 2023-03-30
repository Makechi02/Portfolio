import { useEffect, useState } from "react";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import anime from "animejs";

const Header = () => {
    const [visibility, setVisible] = useState(false);

    const handleToggle = () => {
        if (visibility) setVisible(false);
        else setVisible(true);
        toggleAnimation();
    };

    useEffect(() => {
        anime({
            targets: ".primary-navigation",
            translateX: "100%",
        });
    }, []);

    const toggleAnimation = () => {
        if (visibility) {
            anime({
                targets: ".primary-navigation",
                translateX: "100%",
            });

            anime({
                targets: ".primary-navigation .nav-link",
                opacity: 0,
                delay: anime.stagger(100, { easing: "easeOutQuad" }),
            });
        } else {
            anime({
                targets: ".primary-navigation",
                translateX: 0,
            });

            anime({
                targets: ".primary-navigation .nav-link",
                opacity: 1,
                delay: anime.stagger(100, { easing: "easeOutQuad" }),
            });
        }
    };

    return (
        <header className="flex">
            <Logo />
            <button
                aria-controls="primary-navigation"
                aria-expanded="false"
                className="mobile-nav-toggle"
                onClick={handleToggle}
            >
                {/* <span className="sr-only">Menu</span> */}
                {!visibility ? <FaBars /> : <FaTimes />}
            </button>
            <Navbar handleToggle={handleToggle} anime={anime} />
        </header>
    );
};

const Logo = () => {
    return (
        <div className="logo flex">
            <div className="logo-image flex">m</div>
        </div>
    );
};

const Navbar = ({ handleToggle }) => {
    const changeActive = (index) => {
        const links = document.querySelectorAll(".nav-link");
        for (let i = 0; i < links.length; i++) {
            if (links[i].classList.contains("active"))
                links[i].classList.remove("active");
        }
        links[index].classList.add("active");
    };

    return (
        <nav>
            <ul
                className={`primary-navigation flex`}
                id="primary-navigation"
                data-visible="true"
            >
                <li>
                    <a
                        href="#home"
                        className="nav-link active"
                        onClick={() => {
                            changeActive(0);
                            handleToggle();
                        }}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className="nav-link"
                        onClick={() => {
                            changeActive(1);
                            handleToggle();
                        }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#resume"
                        className="nav-link"
                        onClick={() => {
                            changeActive(2);
                            handleToggle();
                        }}
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <a
                        href="#portfolio"
                        className="nav-link"
                        onClick={() => {
                            changeActive(3);
                            handleToggle();
                        }}
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="nav-link"
                        onClick={() => {
                            changeActive(4);
                            handleToggle();
                        }}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-link">
                    <button className="flex">
                        <span>Download CV</span>
                        <FaDownload />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
