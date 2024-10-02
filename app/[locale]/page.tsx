// app/[locale]/page.tsx

import React from "react";

interface PageProps {
  params: {
    locale: string;
  };
}

export default function Home({ params }: PageProps) {
  const { locale } = params;

  console.log(locale);

  const content: { [key: string]: { title: string; description: string } } = {
    en: {
      title: "Welcome",
      description: "This is the homepage in English",
    },
    ro: {
      title: "Bine ati venit",
      description: "Aceasta este pagina principala in limba romana",
    },
  };

  // Check if locale exists in content
  if (!content[locale]) {
    return <h1>Locale not found</h1>;
  }

  return (
    <div>
      <h1>{content[locale]?.title}</h1>
      <p>{content[locale]?.description}</p>
    </div>
  );
}
