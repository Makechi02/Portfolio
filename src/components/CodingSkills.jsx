const CodingSkills = () => {
    const skills = [
        {
            id: 1,
            name: "HTML, CSS",
            value: 95,
        },
        {
            id: 2,
            name: "JavaScript",
            value: 80,
        },
        {
            id: 3,
            name: "SQL",
            value: 70,
        },
        {
            id: 4,
            name: "MongoDB",
            value: 50,
        },
        {
            id: 5,
            name: "JAVA",
            value: 90,
        },
        {
            id: 6,
            name: "React",
            value: 80,
        },
    ];

    return (
        <section className="section" id="coding-skills">
            <h1 className="title">Coding Skills</h1>
            <h4 className="sub-title">developing on</h4>
            <div className="cards">
                {skills.map((skill) => (
                    <Card key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
    );
};

const Card = ({ skill }) => {
    return (
        <div className="card">
            <div className="percent" style={{ "--num": skill.value }}>
                <div className="dot"></div>
                <svg>
                    <circle r={70} cx={70} cy={70}></circle>
                    <circle r={70} cx={70} cy={70}></circle>
                </svg>
                <div className="number">
                    <h2>
                        {skill.value}
                        <span>%</span>
                    </h2>
                    <p>{skill.name}</p>
                </div>
            </div>
        </div>
    );
};

export default CodingSkills;
