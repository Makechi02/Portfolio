import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const BottomBar = () => {
    return (
        <div className="bottom-bar flex-center">
            <div className="links flex-align-center">
                <a href="https://www.facebook.com/mercus.mar.3/">
                    <FaFacebook className="link" />
                </a>
                <a href="https://www.instagram.com/oemakbe/">
                    <FaInstagram className="link" />
                </a>
                <a href="https://www.twitter.com/OEMakbe">
                    <FaTwitter className="link" />
                </a>
                <a href="https://www.linkedin.com/in/makechi-eric-235a72210">
                    <FaLinkedin className="link" />
                </a>
            </div>
        </div>
    );
};

export default BottomBar;
