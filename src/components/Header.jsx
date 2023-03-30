import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import anime from "animejs";
import PrimaryNavigation from "./PrimaryNav";
import MobileNav from "./MobileNav";

const Header = () => {
    const [visibility, setVisible] = useState(false);

    const handleToggle = () => {
        if (visibility) setVisible(false);
        else setVisible(true);
        toggleAnimation();
    };

    useEffect(() => {
        anime({
            targets: ".mobile-navigation",
            translateX: "100%",
        });
    }, []);

    const toggleAnimation = () => {
        if (visibility) {
            anime({
                targets: ".mobile-navigation",
                translateX: "100%",
            });

            anime({
                targets: ".mobile-navigation .nav-link",
                opacity: 0,
                delay: anime.stagger(100, { easing: "easeOutQuad" }),
            });
        } else {
            anime({
                targets: ".mobile-navigation",
                translateX: 0,
            });

            anime({
                targets: ".mobile-navigation .nav-link",
                opacity: 1,
                delay: anime.stagger(150, { easing: "easeOutQuad" }),
            });
        }
    };

    return (
        <header className="flex-align-center">
            <Logo />
            <button
                aria-controls="mobile-navigation"
                aria-expanded="false"
                className="mobile-nav-toggle flex-center"
                onClick={handleToggle}
            >
                {!visibility ? <FaBars /> : <FaTimes />}
            </button>
            <PrimaryNavigation handleToggle={handleToggle} />
            <MobileNav handleToggle={handleToggle} />
        </header>
    );
};

const Logo = () => {
    return (
        <div className="logo flex-align-center">
            <div className="logo-image flex-center">m</div>
        </div>
    );
};

export default Header;
