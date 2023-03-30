const Contact = () => {
    return (
        <section id="contact">
            <h1 className="title">Contact</h1>
            <h4 className="sub-title">Let's say hi</h4>

            <div className="contact">
                <form className="flex">
                    <div className="tst flex">
                        <label htmlFor="name">full name*</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="e.g Makechi Eric"
                            required
                        />
                    </div>

                    <div className="tst flex">
                        <label htmlFor="email">email*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="makbe@love.com"
                            required
                        />
                    </div>

                    <div className="tst flex">
                        <label htmlFor="message">message*</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="To Makbe"
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        value="send message"
                        className="flex-center"
                    />
                </form>

                <div className="contact-card flex">
                    <div>
                        <h2>Makechi Eric</h2>
                        <p>Front-end developer</p>
                    </div>

                    <div className="details">
                        <ul>
                            <li>
                                <span>age:</span>{" "}
                                {new Date().getFullYear() - 2001}
                            </li>
                            <li>
                                <span>residence:</span> Nairobi
                            </li>
                            <li>
                                <span>freelance:</span> Available
                            </li>
                            <li>
                                <span>address:</span> Embakasi
                            </li>
                            <li>
                                <span>phone:</span> 0716862131
                            </li>
                            <li>
                                <span>email:</span> makechieric02@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div className="logo">
                        Made with &hearts; by Makechi&#8482;
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
