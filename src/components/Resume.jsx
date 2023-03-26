import "swiper/css/bundle";
import CodingSkills from "./CodingSkills";
import Education from "./Education";

const Resume = () => {
    return (
        <div className="resume" id="resume">
            {/* <Experience /> */}
            <Education />
            <CodingSkills />
        </div>
    );
};

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <h1 className="title">Experience</h1>
            <h4 className="sub-title">Worked at</h4>
        </section>
    );
};

export default Resume;
