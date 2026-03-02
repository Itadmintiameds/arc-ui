import HeroSlider from "@/components/HeroSlider";
import SportsShowcase from "@/components/SportsShowcase";
import ArcHighlight from "@/components/ArcHighlight";
import Testimonials from "@/components/Testimonials";
import EventsPage from "./events/summer-camp/page";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSlider />
      <SportsShowcase />
      <ArcHighlight />
      <EventsPage/>
      <Testimonials />
    </main>
  );
}