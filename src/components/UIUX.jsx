// import React from "react";
import CourseCard from "./CourseCard";

export default function UIUX({ onLearn }) {
  return (
    <CourseCard
      className="card-3"
      title="UI/UX — Product Design"
      tag="AI"
      desc="Design thoughtful interfaces and product experiences that solve real user problems."
      img="https://picsum.photos/seed/ux/700/420"
      href="#"
      onLearn={onLearn}
    />
  );
}
