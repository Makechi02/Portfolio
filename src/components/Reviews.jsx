import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
    const reviewers = [
        {
            id: 1,
            img: "",
            name: "Vionah A",
            title: "Student",
            text: "Your work is impressive and demonstrates your proficiency in various in various programming languages and technologies.It is evident that you have experience in developing a range of applications, and have worked on projects of varying complexity.",
        },
        {
            id: 2,
            img: "https://avatars.githubusercontent.com/u/86493008?v=4",
            name: "James Mumo",
            title: "Student",
            text: "Thank you for bringing my vision to life! Your programming skills are truly impressive and have made my life so much easier. Your attention to detail and dedication to delivering a high quality product are greatly appreciated. I am thrilled with the software you created and look forward to working with you again in the future.",
        },
        {
            id: 3,
            img: "https://avatars.githubusercontent.com/u/119612292?v=4",
            name: "Papa Wemba",
            title: "Student",
            text: "The amount of honey in a beehive can just be determined by the weight of the hive even before it is open. Your commitment and passion in coding really defines your worth in tech field. You are one of the best in what you do. 'A real tech Gem'.",
        },

        {
            id: 4,
            img: "",
            name: "Humphrey Nyamwalo",
            title: "Electric Enginneer",
            text: "Beautiful minimalist designer and great and fast response with support. Highly recommend. I Would recommend him to others looking for a skilled and experienced developer. Thanks Makechi",
        },
        {
            id: 5,
            img: "",
            name: "Makbe M",
            title: "None of the Above",
            text: "I had a little problem and the support was just awesome to quickly solve the situation. Keep going on!",
        },
    ];

    return (
        <section className="section" id="reviews">
            <h1 className="title">Reviews</h1>
            <h4 className="sub-title">What customers say</h4>

            <div className="reviews">
                <Buttons />
                <Swiper
                    modules={[Navigation, A11y]}
                    navigation={{ prevEl: ".rev-prev", nextEl: ".rev-next" }}
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
                    {reviewers.map((review) => (
                        <SwiperSlide key={review.id}>
                            <ReviewBox review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <MobileButtons />
            </div>
        </section>
    );
};

const ReviewBox = ({ review }) => {
    return (
        <div className="review-box">
            <div className="review-header flex">
                <div className="review-image">
                    <img src={review.img} alt="reviewer" />
                </div>
                <div className="reviewer-name">
                    <p className="review-name">{review.name}</p>
                    <p className="review-title">{review.title}</p>
                </div>
            </div>

            <div className="review-details flex">
                <div className="review-icon">"</div>
                <div className="review-text">{review.text}</div>
            </div>
        </div>
    );
};

const Buttons = () => {
    return (
        <div className="buttons">
            <button className="left flex rev-prev">
                <FaChevronLeft />
            </button>
            <div className="line"></div>
            <button className="right flex rev-next">
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
            <button className="left flex rev-prev">
                <FaChevronLeft />
            </button>
            <div className="line"></div>
            <button className="right flex rev-next">
                <FaChevronRight />
            </button>
            <div className="line"></div>
        </div>
    );
};

export default Reviews;
