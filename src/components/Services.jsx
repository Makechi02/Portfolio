import { FaLaptopMedical } from "react-icons/fa";
import anime from "animejs/lib/anime.es";

import { useEffect } from "react";

const Servives = () => {
    useEffect(() => {
        anime({
            targets: ".iconTest path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 3000,
            delay: function (el, i) {
                return i * 100;
            },
            direction: "alternate",
            loop: true,
        });
    }, []);

    return (
        <section className="services" id="services">
            <h1 className="title">Services</h1>
            <h4 className="sub-title">What I do</h4>
            <div className="service-list">
                <WebDevelopmentService />
                <WebDesignService />
                {/* <TroubleShootingService /> */}
            </div>
        </section>
    );
};

const WebDevelopmentService = () => {
    return (
        <div className="service flex">
            <div className="icon">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 40 32"
                    className="iconTest"
                >
                    <title>code</title>
                    <path
                        d="M26 23l3 3 10-10-10-10-3 3 7 7z"
                        stroke="#ffffff"
                        strokeWidth="1"
                        fill="#ffffff00"
                    ></path>
                    <path
                        d="M14 9l-3-3-10 10 10 10 3-3-7-7z"
                        stroke="#ffffff"
                        strokeWidth="1"
                        fill="#ffffff00"
                    ></path>
                    <path
                        d="M21.916 4.704l2.171 0.592-6 22.001-2.171-0.592 6-22.001z"
                        stroke="#ffffff"
                        strokeWidth="1"
                        fill="#ffffff00"
                    ></path>
                </svg>
            </div>
            <div className="title">Web Development</div>
            <p className="details">
                Developing website involves creating your website, making it one
                of the most vital parts of your marketing.
            </p>
        </div>
    );
};

const WebDesignService = () => {
    return (
        <div className="service flex">
            <div className="icon">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="68"
                    viewBox="0 0 30 28"
                    className="iconTest"
                >
                    <title>laptop</title>
                    <path
                        stroke="#ffffff"
                        strokeWidth="1"
                        fill="#ffffff00"
                        d="M6.5 20c-1.375 0-2.5-1.125-2.5-2.5v-11c0-1.375 1.125-2.5 2.5-2.5h17c1.375 0 2.5 1.125 2.5 2.5v11c0 1.375-1.125 2.5-2.5 2.5h-17zM6 6.5v11c0 0.266 0.234 0.5 0.5 0.5h17c0.266 0 0.5-0.234 0.5-0.5v-11c0-0.266-0.234-0.5-0.5-0.5h-17c-0.266 0-0.5 0.234-0.5 0.5zM27.5 21h2.5v1.5c0 0.828-1.125 1.5-2.5 1.5h-25c-1.375 0-2.5-0.672-2.5-1.5v-1.5h27.5zM16.25 22.5c0.141 0 0.25-0.109 0.25-0.25s-0.109-0.25-0.25-0.25h-2.5c-0.141 0-0.25 0.109-0.25 0.25s0.109 0.25 0.25 0.25h2.5z"
                    ></path>
                </svg>
            </div>
            <div className="title">Web Design</div>
            <p className="details">
                I adapt to clients, and go out of my way to make something that
                enhances your brand & tells your story-not mine!
            </p>
        </div>
    );
};

const TroubleShootingService = () => {
    return (
        <div className="service flex">
            <div className="icon">
                <FaLaptopMedical />
            </div>
            <div className="title">PC Troubleshooting</div>
            <p className="details">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat molestiae.
            </p>
        </div>
    );
};

export default Servives;
