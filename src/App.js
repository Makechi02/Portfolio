import React, { useEffect, useState } from "react";
import About from "./components/About";
import BottomBar from "./components/BottomBar";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Home from "./components/Home";
import ImageContainer from "./components/ImageContainer";
import Portfolio from "./components/Portfolio";
import Preloader from "./components/Preloader";
import Resume from "./components/Resume";
import Reviews from "./components/Reviews";
import Servives from "./components/Services";
import Sidebar from "./components/Sidebar";

function App() {

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<div>
			{loading ?
				<Preloader loading={loading} />
				:
				<div>
					<CustomCursor />
					<Header />
					<ImageContainer />
					<Sidebar />
					<div className="test">
						<div></div>
						<div className="main">
							<Home />
							<About />
							<Servives />
							<Resume />
							<Reviews />
							<Portfolio />
							<Contact />
							<BottomBar />
						</div>
					</div>

				</div>
			}
		</div>
	);
}

export default App;
