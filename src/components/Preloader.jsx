import HashLoader from "react-spinners/HashLoader";

const Preloader = ({ loading }) => {
    return (
        <div className="preloader flex">
            <div className="text">Makechi Eric</div>
            <div className="title">Your Developer</div>
            <div className="loader">
                <HashLoader size={35} color={"#05fa94"} loading={loading} />
            </div>
        </div>
    );
};

export default Preloader;
