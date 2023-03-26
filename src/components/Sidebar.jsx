import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="sidebar flex">
            <div className="links flex">
                <FaFacebook className="link" />
                <FaInstagram className="link" />
                <FaTwitter className="link" />
            </div>
        </div>
    );
};

export default Sidebar;
