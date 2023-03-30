import Typical from "react-typical";
import { FaChevronRight } from "react-icons/fa";
import anime from "animejs/lib/anime.es";
import { useEffect } from "react";

const Home = () => {
    const extend = (a, b) => {
        for (let key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    };

    const getMousePos = (ev) => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
            posx = ev.pageX;
            posy = ev.pageY;
        } else if (ev.clientX || ev.clientY) {
            posx =
                ev.clientX +
                document.body.scrollLeft +
                document.documentElement.scrollLeft;
            posy =
                ev.clientY +
                document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        return { x: posx, y: posy };
    };

    class TiltObj {
        constructor(el, options) {
            this.el = el;
            this.options = extend({}, this.options);
            extend(this.options, options);
            this.DOM = {};
            this.DOM.img = this.el.querySelector(".content__img");
            this.DOM.title = this.el.querySelector(".content__title");
            this._initEvents();
        }

        _initEvents() {
            this.mouseenterFn = (ev) => {
                anime.remove(this.DOM.img);
                anime.remove(this.DOM.title);
            };

            this.mousemoveFn = (ev) => {
                requestAnimationFrame(() => this._layout(ev));
            };

            this.mouseleaveFn = (ev) => {
                requestAnimationFrame(() => {
                    anime({
                        targets: [this.DOM.img, this.DOM.title],
                        duration: 1500,
                        easing: "easeOutElastic",
                        elasticity: 400,
                        translateX: 0,
                        translateY: 0,
                    });
                });
            };

            this.el.addEventListener("mousemove", this.mousemoveFn);
            this.el.addEventListener("mouseleave", this.mouseleaveFn);
            this.el.addEventListener("mouseenter", this.mouseenterFn);
        }

        _layout(ev) {
            const mousepos = getMousePos(ev);
            const docScrolls = {
                left:
                    document.body.scrollLeft +
                    document.documentElement.scrollLeft,
                top:
                    document.body.scrollTop +
                    document.documentElement.scrollTop,
            };
            const bounds = this.el.getBoundingClientRect();
            // Mouse position relative to the main element (this.DOM.el).
            const relmousepos = {
                x: mousepos.x - bounds.left - docScrolls.left,
                y: mousepos.y - bounds.top - docScrolls.top,
            };

            // Movement settings for the animatable elements.
            const t = {
                img: this.options.movement.img.translation,
                title: this.options.movement.title.translation,
            };

            const transforms = {
                img: {
                    x:
                        ((-1 * t.img.x - t.img.x) / bounds.width) *
                            relmousepos.x +
                        t.img.x,
                    y:
                        ((-1 * t.img.y - t.img.y) / bounds.height) *
                            relmousepos.y +
                        t.img.y,
                },
                title: {
                    x:
                        ((-1 * t.title.x - t.title.x) / bounds.width) *
                            relmousepos.x +
                        t.title.x,
                    y:
                        ((-1 * t.title.y - t.title.y) / bounds.height) *
                            relmousepos.y +
                        t.title.y,
                },
            };
            this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform =
                "translateX(" +
                transforms.img.x +
                "px) translateY(" +
                transforms.img.y +
                "px)";
            this.DOM.title.style.WebkitTransform =
                this.DOM.title.style.transform =
                    "translateX(" +
                    transforms.title.x +
                    "px) translateY(" +
                    transforms.title.y +
                    "px)";
        }
    }

    TiltObj.prototype.options = {
        movement: {
            img: { translation: { x: -10, y: -10 } },
            title: { translation: { x: 25, y: 25 } },
        },
    };

    useEffect(() => {
        new TiltObj(document.querySelector(".content__layout"));
    });

    return (
        <section className="home flex content__layout" id="home">
            <div className="content__img"></div>
            <h1 className="content__title">
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
