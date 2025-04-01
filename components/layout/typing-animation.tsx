"use client";

import Typical from "react-typical";

export function TypingAnimation() {
  return (
    <Typical
      steps={[
        "academics",
        1000,
        "research",
        1000,
        "students",
        1000,
        "supervisors",
        1000,
      ]}
      wrapper="span"
      loop={Infinity}
    />
  );
}
