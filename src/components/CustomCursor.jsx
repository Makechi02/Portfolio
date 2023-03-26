import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
    return (
        <AnimatedCursor
            innerSize={20}
            outerSize={35}
            color="37, 243, 9"
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={2}
            clickables={[
                "a",
                'input[type = "text"]',
                'input[type = "email"]',
                'input[type = "number"]',
                'input[type = "submit"]',
                'input[type = "image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
                ".prev",
                ".next",
            ]}
        />
    );
};

export default CustomCursor;
