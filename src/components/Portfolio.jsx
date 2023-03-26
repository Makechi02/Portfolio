const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h1 className="title">Portfolio</h1>
            <h4 className="sub-title">Latest works</h4>
            <div className="content flex">
                <Project />
            </div>
        </section>
    );
};

const Project = () => {
    return <div className="project"></div>;
};

export default Portfolio;
