import Buy from "@/components/homepage/buy";
import Hero from "@/components/homepage/hero";
import Newsletter from "@/components/homepage/newsletter";
import Preview from "@/components/homepage/preview";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 px-10 py-10">
        <Hero />
        <Preview />
        <Buy />
        <Newsletter />
    </main>
  );
}
