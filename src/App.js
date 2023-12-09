import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Achievements from "./pages/achievements";
import Contact from "./pages/contact";
import Publications from "./pages/publications";
import Exploration from "./pages/exploration";
import Notfound from "./pages/404";
import DetailsPage from "./pages/detailsPage";
import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/publications" element={<Publications />} />
				<Route path="/achievements" element={<Achievements />} />
				<Route path="/details/:id" element={<DetailsPage />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/exploration" element={<Exploration />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
