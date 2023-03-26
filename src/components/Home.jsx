import Typical from "react-typical";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
    return (
        <section className="home flex" id="home">
            <h1>
                Makechi
                <br /> Eric
            </h1>
            <p className="typical-text">
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        "web designer",
                        2000,
                        "freelancer",
                        2000,
                        "programmer",
                        2000,
                        "consultant",
                        2000,
                        "mentor",
                        2000,
                        "student",
                        2000,
                    ]}
                />
            </p>
            <div className="details">
                <p>
                    Hello! I'm a front-end web developer from Nairobi, Kenya. I
                    have rich experience in website design and building, Also, I
                    am good at Java programming. I'd love to talk to you about
                    my uniqueness.
                </p>
            </div>
            <a href="#contact">
                <button className="flex">
                    Contact Me
                    <FaChevronRight />
                </button>
            </a>
        </section>
    );
};

export default Home;
