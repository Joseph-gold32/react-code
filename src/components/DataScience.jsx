import React from "react";
import CourseCard from "./CourseCard";

export default function DataScience({ onLearn }) {
  return (
    <CourseCard
      className="card-2"
      title="Data Science & Analysis"
      tag="AI"
      desc="Hands-on data workflows, visualization and model interpretation for business insights."
      img="https://picsum.photos/seed/ds/700/420"
      href="#"
      onLearn={onLearn}
    />
  );
}
