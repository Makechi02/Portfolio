import {
    FaCode,
    FaLaptopCode,
    FaLaptopMedical,
} from "react-icons/fa";

const Servives = () => {
    const services = [
        {
            id: 1,
            icon: <FaCode />,
            title: "Web Development",
            details:
                "Developing website involves creating your website, making it one of the most vital parts of your marketing.",
        },
        {
            id: 2,
            icon: <FaLaptopCode />,
            title: "Web Design",
            details:
                "I adapt to clients, and go out of my way to make something that enhances your brand & tells your story-not mine!",
        },
        {
            id: 3,
            icon: <FaLaptopMedical />,
            title: "PC Troubleshooting",
            details:
                "Developing website involves creating your website, making it one of the most vital parts of your marketing.",
        },
    ];

    return (
        <section className="services" id="services">
            <h1 className="title">Services</h1>
            <h4 className="sub-title">What I do</h4>
            <div className="service-list">
                {services.map((service) => (
                    <Service service={service} key={service.id} />
                ))}
            </div>
        </section>
    );
};

const Service = ({ service }) => {
    return (
        <div className="service flex">
            <div className="icon">{service.icon}</div>
            <div className="title">{service.title}</div>
            <p className="details">{service.details}</p>
        </div>
    );
};

export default Servives;
