// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the English locale by default
  return (
    <div>
      <h1>Homepage Root Level</h1>
    </div>
  );
}
