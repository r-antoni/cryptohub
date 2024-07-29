import Buy from "@/components/homepage/buy";
import Hero from "@/components/homepage/hero";
import Preview from "@/components/homepage/preview";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10">
        <Hero />
        <Separator />
        <Preview />
        <Separator />
        <Buy />
    </main>
  );
}
