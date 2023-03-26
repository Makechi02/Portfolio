const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="title">About Me</h1>
            <h4 className="sub-title">My Story</h4>
            <div className="about-me">
                <div className="grid-1">
                    <p>
                        Hello there! My name is Makechi Eric. I am a front-end
                        developer and a creative freelancer, and I'm very
                        passionate and dedicated to my work.
                    </p>
                    <br />
                    <p>
                        With all the experience and knowledge acquired, and
                        skills gathered are essential to make your project a
                        success.
                    </p>
                    <p>
                        Challenge me! I want to work with you to create the
                        really cool stuff!!!
                    </p>
                </div>

                <div className="grid-2">
                    <ul className="flex">
                        <li>
                            <span>age: </span>
                            {new Date().getFullYear() - 2001}
                        </li>
                        <li>
                            <span>freelance: </span>
                            Available
                        </li>
                        <li>
                            <span>phone: </span>
                            +254-716-862-131
                        </li>
                        <li>
                            <span>residence: </span>
                            Nairobi
                        </li>
                        <li>
                            <span>address: </span>
                            Embakasi
                        </li>
                        <li>
                            <span>e-mail: </span>
                            makechieric9@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
