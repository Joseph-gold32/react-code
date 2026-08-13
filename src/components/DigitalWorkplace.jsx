// import React from "react";
import CourseCard from "./CourseCard";

export default function DigitalWorkplace({ onLearn }) {
  return (
    <CourseCard
      className="card-4"
      title="Digital Workplace Proficiency"
      tag="AI"
      desc="Practical digital skills and workplace tools to boost productivity and career readiness."
      img="https://picsum.photos/seed/digital/700/420"
      href="#"
      onLearn={onLearn}
    />
  );
}
