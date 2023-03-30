import { FaDownload } from "react-icons/fa";

const PrimaryNavigation = ({ handleToggle }) => {
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
                className="primary-navigation flex-align-center"
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
                    <button className="flex-align-center">
                        <span>Download CV</span>
                        <FaDownload />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default PrimaryNavigation;
