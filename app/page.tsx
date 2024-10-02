// app/page.tsx

import React from "react";

export default function Home() {
  const content = {
    en: {
      title: "Welcome",
      description: "This is the homepage in English",
    },
  };

  return (
    <div>
      <h1>{content.en.title}</h1>
      <p>{content.en.description}</p>
    </div>
  );
}
