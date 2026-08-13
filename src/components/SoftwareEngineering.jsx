// import React from "react";
import CourseCard from "./CourseCard";

export default function SoftwareEngineering({ onLearn }) {
  return (
    <CourseCard
      className="card-1"
      title="Software Engineering"
      tag="AI"
      desc="Learn programming fundamentals and modern engineering practices to build real-world apps."
      img="https://picsum.photos/seed/softeng/700/420"
      href="#"
      onLearn={onLearn}
    />
  );
}
