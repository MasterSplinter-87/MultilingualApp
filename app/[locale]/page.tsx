// app/[locale]/page.tsx

interface PageProps {
  params: {
    locale: "en" | "ro";
  };
}

export default function HomePage({ params }: PageProps) {
  const { locale } = params;
  const content = {
    en: {
      title: "Welcome",
      description: "This is the homepage in English",
    },
    ro: {
      title: "Bine ati venit",
      description: "Aceasta este pagina principala in limba romana",
    },
  };

  return (
    <div>
      <h1>{content[locale]?.title}</h1>
      <p>{content[locale]?.description}</p>
    </div>
  );
}
