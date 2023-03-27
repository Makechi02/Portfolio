import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Education = () => {
    const levels = [
        {
            id: 1,
            year: "2019 - 2020",
            name: "FreeCodeCamp Academy",
            location: "Online",
            details: "Front-end Web Development and Design",
        },
        {
            id: 2,
            year: "2016 - 2019",
            name: "Grasshopper App",
            location: "Online",
            details: "Coding Fundamentals I",
        },
        {
            id: 3,
            year: "2016 - 2019",
            name: "Grasshopper App",
            location: "Online",
            details: "Coding Fundamentals II",
        },
        {
            id: 4,
            year: "2016 - 2019",
            name: "Sololearn",
            location: "Online",
            details: "Java Development",
        },
        {
            id: 5,
            year: "2020 - 2024",
            name: "The Presbyterian University of East Africa",
            location: "Kikuyu",
            details: "Bachelor of Science in Computer Science",
        },
    ];

    return (
        <section className="section" id="education">
            <h1 className="title">Education</h1>
            <h4 className="sub-title">Studied at</h4>

            <div className="education">
                <Buttons />
                <Swiper
                    modules={[Navigation, A11y]}
                    navigation={{ prevEl: ".edu-prev", nextEl: ".edu-next" }}
                    slidesPerView={2}
                    loop
                    breakpoints={{
                        540: {
                            slidesPerView: 2,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {levels.map((level) => (
                        <SwiperSlide key={level.id}>
                            <EducationBox level={level} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <MobileButtons />
            </div>
        </section>
    );
};

const EducationBox = ({ level }) => {
    return (
        <div className="education-box">
            <div className="details flex">
                <p className="year">{level.year}</p>
                <p>
                    <span className="name">{level.name}</span>
                    <br />
                    <span className="location">{level.location}</span>
                </p>
            </div>
            <p>{level.details}</p>
        </div>
    );
};

const Buttons = () => {
    return (
        <div className="buttons">
            <button className="left flex edu-prev">
                <FaChevronLeft />
            </button>
            <div className="line"></div>
            <button className="right flex edu-prev">
                <FaChevronRight />
            </button>
            <div className="line"></div>
        </div>
    );
};

const MobileButtons = () => {
    return (
        <div className="mobile-buttons buttons">
            <div className="line"></div>
            <button className="left flex edu-prev">
                <FaChevronLeft />
            </button>
            <div className="line"></div>
            <button className="right flex edu-next">
                <FaChevronRight />
            </button>
            <div className="line"></div>
        </div>
    );
};

export default Education;
