import React, { useState } from "react";
import "./sqi.css";

import SoftwareEngineering from "./components/SoftwareEngineering";
import DataScience from "./components/DataScience";
import UIUX from "./components/UIUX";
import DigitalWorkplace from "./components/DigitalWorkplace";
import CourseForm from "./components/CourseForm";

export default function Sqi() {
	const [openCourse, setOpenCourse] = useState(null);

	function handleLearn(title) {
		setOpenCourse(title);
	}

	return (
		<section className="sqi-section" aria-labelledby="sqi-heading">
			<h2 id="sqi-heading" className="visually-hidden">
				Courses
			</h2>

			<div className="sqi-grid">
				<SoftwareEngineering onLearn={handleLearn} />
				<DataScience onLearn={handleLearn} />
				<UIUX onLearn={handleLearn} />
				<DigitalWorkplace onLearn={handleLearn} />
			</div>

			{openCourse && (
				<CourseForm courseTitle={openCourse} onClose={() => setOpenCourse(null)} />
			)}
		</section>
	);
}
